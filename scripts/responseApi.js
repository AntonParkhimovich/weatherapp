function getResponse(responseCity) {
  return fetch(
    `http://api.weatherstack.com/current?access_key=d13b7df89be670ac4a637e0c380afe75&query=${responseCity}`
  )
    .then((response) => response.json())
    .then((response) => response);
}

module.exports = { getResponse };
