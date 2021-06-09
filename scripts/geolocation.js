const {paintData} = require('./paintData');
const {getResponse} = require('./responseApi');

function paintGeolocationData(){
    document.querySelector('.header-geolocation').addEventListener('click', (e)=>{
        if(e.target.closest(".header-geolocation")){
            getGeo()
        }
    })
}
function getGeo(){
    navigator.geolocation.getCurrentPosition((posityion) => {
      const {coords:{latitude, longitude}} = posityion
      console.log(`${latitude},${longitude}`);
      getResponse(`${latitude},${longitude}`).then((response) => { 
        paintData(response)})
    })
  }
  module.exports = {paintGeolocationData};