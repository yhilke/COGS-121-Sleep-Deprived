const express = require('express');
const app = express();

//static files in public
app.use(express.static('public/'));

app.listen(3000, () => {
  console.log('server started on http://localhost:3000/');
});

//data goes here
const data = {

}
