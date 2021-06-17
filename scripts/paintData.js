import { setElementInHistory } from './searchHistory';

export function paintData(data) {
  if (data.error) {
    document.querySelector(
      '.weather'
    ).innerHTML = `<h2 class="weather-response">Вы ввели некорректные данные или сервер не отвечает, попробуйте снова</h2>`;
  } else {
    const {
      current,
      location: { name, country, localtime },
    } = data;
    setElementInHistory(data);
    document.querySelector('.weather').innerHTML = `<div class="weather-head">
                                                      <img class="icon" src=${
                                                        current.weather_icons[0]
                                                      } alt="weather-pic">
                                                  </div>
                                                  <div class="weather-body">
                                                      <div class="weather-info">
                                                      <h2 class="weather-degrees">${
                                                        current.temperature
                                                      }&#176С</h2>
                                                      <h2 class="weather-city">${country}, ${name}</h2>
                                                  </div>
                                                  <div class="weather-footer">
  
                                                      <div class="weather-box">
                                                          <li class="weather-box__info">Time:${localtime.slice(
                                                            10,
                                                            16
                                                          )}</li>
                                                          <li class="weather-box__info">Wind:${
                                                            current.wind_dir
                                                          }</li>
                                                      </div>
  
                                                      <div class="weather-box">
                                                          <li class="weather-box__info">Feels like: ${
                                                            current.feelslike
                                                          }&#176C</li>
                                                          <li class="weather-box__info">Speed: ${
                                                            current.wind_speed
                                                          }km/h</li>
                                                      </div>
  
                                                      <div class="weather-box">
                                                          <li class="weather-box__info">Today is: ${
                                                            current
                                                              .weather_descriptions[0]
                                                          }</li>
                                                          <li class="weather-box__info">xz</li>
                                                      </div>
                                                  </div>
                                                  </div>`;
  }
}
