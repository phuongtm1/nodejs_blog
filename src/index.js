const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const hbs = handlebars.create({ extname: '.hbs' });

const app = express();
const port = 3000;
const route = require('./routes');

//Get img in public folder
app.use(express.static(path.join(__dirname, 'public')));
//set  parameter req.body khi dùng form
app.use(express.urlencoded({extended: true}));
//set  parameter req.body khi dùng code js
app.use(express.json());

//Http logger
// app.use(morgan('combined'));

//Tempalte engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})










// Tạo 1 project nodejs mới: npm init

// Tải express framework: npm install express
// chạy project: node src/index.js

// cài nodemon dùng tự reload trang khi phát hiện thay đổi code:
// npm install nodemon --save-dev

// cài morgan để xem log :
// npm i morgan --save-dev

// cài scss:
// npm install node-sass --save-dev