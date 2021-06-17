# WeatherApp
---
## Content
* [Progect description](#progect-description)
* [Technologies used](#technologies)
* [Eslint](#eslint)
* [Build](#build)

---
## Project description
---

This app sends your request to [REST API](https://weatherstack.com/). Then draws:

  1. The name of the selected city, 
  2. Temperature, 
  3. Local time,
  4. Pressure,
  5. Wind speed and direction
  
 Also the application has a function of requesting weather according to your geolocation. By pressing the button <*History*> you can see you can see the history of the last five requests.

On the page you will see notifications and when you click on the checkbox, you can disable the opening of notifications on the page, if you click <*Open*> button, you open them back. 

To clear your history click button <*Clear*>

---
## Technologies
---
### To create this app used: 
 * HTML5, CSS3, JS,
 * Eslint v7.28.0,
 * Eslint-config-airbnb-base v14.2.1,
 * Eslint-config-prettier v8.3.0,
 * Eslint-plugin-import v2.23.4,
 * Eslint-plugin-prettier v3.4.0,
 * Prettier v2.3.1,
 * Lodash v4.17.21,
 * browserify v17.0.0,
 * watchify v4.0.0,
 * date-fns v2.22.1
    
    
---
## Eslint
---
### To run ESlint you need next command:
```
$ npm run lint
```
### To run ESlint and fix error:
```
$npm run lint:fix
```
---
## Build
---
### For build  this app use command: 
```
$ npm run build-js
```

### For build run watchify: 
```
$ npm run watch-js
```
