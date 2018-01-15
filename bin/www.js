const app = require('../');
const http = require('http');
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
