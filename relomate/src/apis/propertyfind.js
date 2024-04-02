const apiCall = async () => {
  const url =
    "https://zoopla.p.rapidapi.com/properties/v2/list?locationValue=Oxford%2C%20Oxfordshire&locationIdentifier=oxford&furnishedState=Any&sortOrder=newest_listings&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eede8abb63mshd9e268e52b49e1cp14efecjsn60e4f4db31b2",
      "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    window.alert(result);
  } catch (error) {
    console.error(error);
  }
};

export default apiCall;
