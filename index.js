const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

// Mongoose 연결 설정
mongoose.connect('mongodb+srv://mcahn:abcd1234@boilerplate.5wapf.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 기본 라우팅
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});