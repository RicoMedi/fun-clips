//require your server and start it

const server = require('./api/server.js');

// this will set up the PORT as an environment variable for the hosting provider
// to decide what port to use if none it will fallback to 8000
const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>{
    console.log(`Api listening on ${PORT}`)
})

//we are using nodemon so make sure to cd into backend 
// nodemon index will start my server