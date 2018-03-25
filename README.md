# Express React Cart

### Features
* React/Redux, React router
* Express JS on ES6, Babel
* TDD / BDD tests
* Cloud database Mongo Atlas
* Cloud storage for files Cloudinary 
* JWT authorisation
* Save state for cart and product list after reloading
* Responsive (Bootstrap 4)
* Configurable catalog tree
* Search
* MongoDB dump/restore

### TODO
* Import / Export products
* Product parameters 
* Server side rendering
* Connect `Twilio` for SMS notifications
* Connect `Braintree` for payments 
* Facebook authorization
* Billing and shipping list in profile
* Faceted search by parameters 
* SEO configuration

![Express React Cart](docs/img/front-page.png?raw=true)

## Server side
* Folder `server`
* Initial install `npm i`
* `npm run dev`

## Client side
* Folder `client`
* Initial install `npm i`
* `npm start`

### Testing
* Selenium web driver (Chromedriver) + Nigntwatch.js
* upload to `testing/bdd_nightwatch/lib` files: `chromedriver` and `selenium-server-standalone-3.8.1.jar` 
* Folder `testing`
* Initial install `npm i`
* Run `npm run test`

---
## Environment
* PphStorm/WebStorm settings file https://www.dropbox.com/s/yf8vxiqkp8p5ook/settings.jar?dl=0 `File->Import Settings`
* Postman. Tool for testing API https://www.getpostman.com/. Import Postman settings from `docs/ER-cart.postman_collection.json`

---

### React components

### Pre

Put `object` in props. Props `on` turn on 
```javascript
import Pre from './modules/pre/pre';

<Pre obj={anyObject} on />
```

###Routing
Also wrap component to `withRouter`

```javascript
this.props.history.push('/destination');

```
