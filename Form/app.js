
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/submit-form', (req, res) => {
  const { name, desc, startd,dued } = req.body;
  const apiKey = '30fd46ec65416d6a2769b135f1da4053';
  const apiToken = 'ATTA4e37ddbddb825e06cd7125ed20bbba34b5af54ceb4d879f63751bd06a8f0e06d0D7B6632';
  const boardId = 'vBnymCPV';
  const listId = 'ATTI242777f74b8b293ac537d06daece20148586BC4D';
  const url = `https://api.trello.com/1/cards?idList=5abbe4b7ddc1b351ef961414&key=APIKey&token=APIToken`;
  request.post(url, (error, response, body) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while creating the card.');
    } else {
      console.log('Card created successfully.');
      res.status(200).send('Card created successfully.');
    }
  });
});

app.listen(3000, () => {
  console.log("running ");
});
