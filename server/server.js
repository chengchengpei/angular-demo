const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const fackResp = [{
    "description": "Hp Elite Book 8440p  intel (R) Core i5 2.6 Ghz  4-GB DDR III Ram  320-GB HDD  DVD super Rw+  3G SIM Option  Card Reader  HD Camera  Finger sensor  14.1 \" LED Display  2.0 USB Port  Original Charger  3 - Months Laptop Warranty",
    "title": "Hp Laptop 8440p",
    "url": "https://www.olx.com.pk/item/hp-laptop-8440p-IDWWZGV.html",
    "price": "Rs 13,000"
  },
  {
    "description": "Brand new Macbook pro retina 13\" 2015 mf 840 8gb 256gb",
    "title": "Macbook Pro Mf 840 retina 13\" 2015 sealed pack",
    "url": "https://www.olx.com.pk/item/macbook-pro-mf-840-retina-13-2015-sealed-pack-IDWVKzj.html",
    "price": "Rs 1,40,000"
  },
  {
    "description": "12 GB ram ,500 GB hard disk, full windows touch support touch screen , graphics card ,64 bit operating system , genuine windows 8",
    "title": "Asus, corei 7, 3rd generation",
    "url": "https://www.olx.com.pk/item/asus-corei-7-3rd-generation-IDWWks9.html",
    "price": "Rs 31,000"
  },
  {
    "description": "Urgent sell I want to buy bike 4gb ram Heard 250 gb Graphic card 3gb Desplay 15.6 inch DVD rom multi Bettry 1 hour Wifi Bluetooth All port is working 100% working no single fult with genuine charger and bag",
    "title": "Dv6 Hp pavilion",
    "url": "https://www.olx.com.pk/item/dv6-hp-pavilion-IDWVKAw.html",
    "price": "Rs 15,000"
  },
  {
    "description": "Selling toshiba laptop satlite pro u200 in good condition.2 gb ram 80 gb hard 12 inch lcd . with geniun charger.laptop is at farooq abad only call or msg at mobile .no olx chat",
    "title": "Toshiba laptop",
    "url": "https://www.olx.com.pk/item/toshiba-laptop-IDWVB9o.html",
    "price": "Rs 6,800"
  },
  {
    "description": "500 gb hardisk 2 gb ram window 7",
    "title": "Hp compaq 610",
    "url": "https://www.olx.com.pk/item/hp-compaq-610-IDWVKCn.html",
    "price": "Rs 10,000"
  }];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 8080;
const router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.post('/', function(req, res) {
  console.log(req.body);
  res.json(fackResp);
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

