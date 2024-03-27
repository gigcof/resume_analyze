const express = require('express');
const app = express();

const upload = multer();
const uploadDataAndGenerateResponse = require('./controllers/uploadController');

app.post('/upload', upload.single('resume'), uploadDataAndGenerateResponse);