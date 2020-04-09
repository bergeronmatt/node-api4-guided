const server = require("./api/server.js");

//Step 1 set the port to heroku 
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
