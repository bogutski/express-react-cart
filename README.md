# Express React Cart

## Server side
* Express JS, Mongo Atlas, JWT
* Folder `client`
* `npm run dev`

## Client side
* React/Redux, React router
* Folder `server`
* `npm start`

### Testing
* Selenium web driver (Chromedriver) + Nigntwatch.js
* upload to `testing/lib` files: `chromedriver` and `selenium-server-standalone-3.8.1.jar` 
* Folder `testing`
* Run `npm run test`

---
## Environment
* PphStorm/WebStorm settings file https://www.dropbox.com/s/yf8vxiqkp8p5ook/settings.jar?dl=0 `File->Import Settings`
* Postman. Tool for testing API https://www.getpostman.com/. Import Postman settings from `docs/ER-cart.postman_collection.json`

---

##React components

### Pre

Put `object` in props. Props `on` turn on 
```javascript
import Pre from './modules/pre/pre';

<Pre obj={this.props.editedTerm} on />
```

