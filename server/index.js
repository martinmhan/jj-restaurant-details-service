const app = require('./app.js')
const PORT = 9002;

app.listen(PORT, (err) => {
  if (err) { console.log(err); } else {
    console.log('Listening on PORT', PORT);
  }
});
