const fetch = require('node-fetch');

const fetchStock = (symbol, callback) => {
  fetch(`http://download.finance.yahoo.com/d/quotes.csv?s=${symbol}&f=sl1d1t1c1ohgv&e=.csv&columns='symbol,price,date,time,change,col1,high,low,col2`).then(response => response.text())
  .then(data => {
    const [sym, price] = data.split(',');
    callback(sym, price);
  })
}

module.exports = fetchStock;
