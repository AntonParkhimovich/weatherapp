const format = require('date-fns/format')
const {addNotificationApi} = require('./notification');
const {paintGeolocationData} = require('./geolocation');
const {hui} = require('./searchHistory');
const {getResponse} = require('./responseApi');
const {paintData} = require('./paintData');
const {setElementInHistory} = require('./searchHistory');

addNotificationApi()



const wrap = document.querySelector(".wrapper");
wrap.addEventListener("click", async (e) => {
  if (e.target.closest(".header-button")) {
    if(document.querySelector('.search-history').style.display === 'grid'){
      setElementInHistory(await getResponse(document.querySelector('.header-input').value))
      hui()
    }else{
      paintData(await getResponse(document.querySelector('.header-input').value))
    }
    
  } if (e.target.closest(".header-button--history")) {
    hui()
  }
  
});
wrap.addEventListener("keydown", async (e) => {
  if (e.code === "Enter") {
    paintData(await getResponse(document.querySelector('.header-input').value));
  }
});
paintGeolocationData()
console.log(format(new Date(), "MM/dd/E/yyyy"));





 

