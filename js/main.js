const BlizzAPI = require('blizzapi');

const api = new BlizzAPI({
  region: 'us',
  clientId: '6be9138a6e11454bb11a6a8b4fdccb90',
  clientSecret: 'U25MbSQ958RkHQpUmw8SrnL7w3veyMtO'
});

const data = await api.query('/data/wow/pet');

console.log(data);