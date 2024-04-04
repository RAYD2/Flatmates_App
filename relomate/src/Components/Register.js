import React, {useState} from 'react';
import { Link, useHistory} from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import './Register.css'

const Register = () => {
    const supabase = createClient("https://folkgobawpbterfitlma.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbGtnb2Jhd3BidGVyZml0bG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MjA0NTAsImV4cCI6MjAyNzE5NjQ1MH0.8gHRBa5JVkL0fSIBCRh06dAvDfJRgrKq8o0iRoD8yaY")

    const [firstname, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [emailaddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useHistory();

    async function insertData() {
        try {
            const{data, error} = await supabase
                .from("accountinfo")
                .insert({
                    firstname: firstname,
                    surname: surname,
                    emailaddress: emailaddress,
                    password: password
                })
                .single()
            if(error) throw error
            history.push('/')
        } catch(error) {
            alert("Data unable to be inserted")
        }
    }

    const fNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const surnameChange = (e) => {
        setSurname(e.target.value)
    }

    const emailChange = (e) => {
        setEmailAddress(e.target.value)
    }
    
    const passwordChange = (e) => {
        setPassword(e.target.value)
    };

    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            alert("Passwords do not match!")
        }
        else {
            insertData()
        }
    };
    
    return (
        <div className="Register-form">
            <h1 className="header">Register Your Account</h1>
            <form onSubmit={handleSubmit} method='POST'>
                <div className='account-type'>
                    <select name='types' id='types'>
                        <option value='selectAccount'>Select Account Type</option>
                        <option value='consultant'>FDM Consultant</option>
                        <option value='admin'>System Admin</option>
                        <option value='landlord'>Landlord</option>
                        <option value='REA'>Real Estate Agent</option>
                    </select>
                </div>
                <div className="fName-box">
                    <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={fNameChange} required></input>
                </div>
                <div className="surname-box">
                    <input type="text" name="surname" placeholder="Surname" value={surname} onChange={surnameChange}required></input>
                </div>
                <div className="email-box">
                <input type="email" name="email" placeholder="Email Address" value={emailaddress} onChange={emailChange}required></input>
                </div>
                <div className="password-box">
                    <input type="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" value={password} onChange={passwordChange} required></input>
                </div>
                <div className='confirmPassword-box'>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" value={confirmPassword} onChange={confirmPasswordChange} required></input>
                </div>
                <div className="login-button">
                    <button type="submit">Register Account</button>
                </div>
                <div className="register-link">
                    Already got an account?<Link to='/'>Login</Link>
                </div>
            </form>
        </div>
    )
}
export default Register;