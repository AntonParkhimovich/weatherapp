import { paintData } from './paintData';
import { getResponse } from './responseApi';

function getGeo() {
  navigator.geolocation.getCurrentPosition((posityion) => {
    const {
      coords: { latitude, longitude },
    } = posityion;
    getResponse(`${latitude},${longitude}`).then((response) => {
      paintData(response);
    });
  });
}

export function paintGeolocationData() {
  document
    .querySelector('.header-geolocation')
    .addEventListener('click', (e) => {
      if (e.target.closest('.header-geolocation')) {
        getGeo();
      }
    });
}
