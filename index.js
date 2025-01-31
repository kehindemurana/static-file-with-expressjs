// import Express
const express = require('express');
const  app = express();
const PORT = 4000;
const path = require('path');

//Static Middleware
console.log (app.use(express.static(path.join(__dirname, 'public'))))
// Define a route
app.get('/home', function(req, res){
 
    res.send('<h1>GeeksforGeeks</h1>')
});

// Start the server
app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
    
})


