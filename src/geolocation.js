const {paintData} = require('./paintData');
const {getResponse} = require('./responseApi');

function getGeo(){
    navigator.geolocation.getCurrentPosition((posityion) => {
      const {coords:{latitude, longitude}} = posityion
      getResponse(`${latitude},${longitude}`).then((response) => { 
        paintData(response)})
    })
  }

function paintGeolocationData(){
    document.querySelector('.header-geolocation').addEventListener('click', (e)=>{
        if(e.target.closest(".header-geolocation")){
            getGeo()
        }
    })
}

  module.exports = {paintGeolocationData};