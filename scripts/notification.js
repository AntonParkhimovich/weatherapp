 function addNotificationApi(){
    printNotification()
    checkNotification()
    responseNotificationData()
    document.querySelector('.notification').addEventListener('click',(e)=>{
        if(e.target.closest('.radiobar')){
            toggle(e.target.id)
          }if(e.target.closest('.arrow')){
            nextNotification(e.target)
          }if(e.target.closest('.disable-checkbox')){
            disableNotification(e)
          }
    })
}

function printNotification(){
    document.querySelector('.notification').innerHTML = `     <div class="notification-head">
    <button class="button-close"></button>
</div>
<div class="notification-body">
</div>
<div class="notification-footer">
    <input type="checkbox" name="disable" id="disable-notification" class="disable-checkbox">
    <div class="slideshow">
        <p><i class="arrow left"></i></p>
        <div class="sidebar">
        </div>
        <p><i class="arrow right"></i></p>
    </div>
</div>`
document.querySelector('.notification').style.display = 'block'
}
function responseNotificationData(){
    return fetch('././MOCK_DATA.json').then((response) => response.json()).then((response)=>{paintRadioInput(response)})
  }
function paintRadioInput(data){
    const sidebar = document.querySelector('.sidebar')
    const notificationBody = document.querySelector('.notification-body') 
    data.map((arr)=> {
      sidebar.insertAdjacentHTML('beforeend', `<input type="radio" id="${arr.id}" class="radiobar" name="checkbox">`)
      notificationBody.insertAdjacentHTML('beforeend',` <div class="new-notification" id="notification${arr.id}">
      <h2 class="notification-title">${arr.title}</h2>
      <p class="notification-text">${arr.phrase}</p>
  </div>`)
    })
    document.querySelector('.radiobar').checked = true
    toggle('1')
  }

  function toggle(id){
    const arrNotification =[...document.querySelectorAll('.new-notification')] 
    arrNotification.map((arr)=>{
      if(arr.classList[1] === 'visible'){
        arr.classList.value = "new-notification"
      }
    })
    document.querySelector(`#notification${id}`).classList.toggle('visible')
  }
  function nextNotification(button){
    const arrRadiobutton = [...document.querySelectorAll('.radiobar')]
    const checkedInput = document.querySelector('input[name="checkbox"]:checked')
    if(button.classList[1] === 'right'){
      if(checkedInput.id != arrRadiobutton.length){
        const nextRadiobutton =  Number(checkedInput.id)+1
        toggle(`${nextRadiobutton}`)
        checkedInput.nextElementSibling.checked = true
      }if(checkedInput.id == arrRadiobutton.length){
        arrRadiobutton[0].checked = true
        toggle(`${arrRadiobutton[0].id}`)
      }
    }if(button.classList[1] === 'left'){
      if(checkedInput.id != arrRadiobutton[0].id){
        const nextRadiobutton =  Number(checkedInput.id)-1
        toggle(`${nextRadiobutton}`)
        checkedInput.previousElementSibling.checked = true
      }
      if(checkedInput.id == arrRadiobutton[0].id){
        arrRadiobutton[arrRadiobutton.length-1].checked = true
        toggle(`${arrRadiobutton[arrRadiobutton.length-1].id}`)
      }
    }
  }
  function checkNotification(){
    if(localStorage.getItem('notification') !== null){
      if(localStorage.getItem('notification') === 'enable'){
        responseNotificationData()
      }if(localStorage.getItem('notification') === 'disabled'){
        document.querySelector('.notification').style.display='none'
        document.querySelector('.disable-checkbox').checked = true
      }
    }
  }
  function disableNotification(e){
    if(e.target.checked === true){
    localStorage.setItem('notification', 'disabled')
    document.querySelector('.notification').style.display = 'none'
    }else{
      localStorage.setItem('notification', 'enable')
    }
  }
  module.exports = {addNotificationApi};