import React from 'react';

const Register = () => {
    return (
        <div className="Register-form">
            <h1 className="header">Register</h1>
            <form action="#">
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
                    <input type="text" name="firstName" placeholder="First Name" required></input>
                </div>
                <div className="surname-box">
                    <input type="text" name="surname" placeholder="Surname" required></input>
                </div>
                <div className="email-box">
                <input type="email" name="email" placeholder="Email Address" required></input>
                </div>
                <div className="password-box">
                    <input type="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
                    <br />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
                </div>
                <div className="login-button">
                    <button type="submit">Register Account</button>
                </div>
            </form>
        </div>
    )
}
export default Register;