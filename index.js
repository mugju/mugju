const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const morgan = require('morgan');



const app = express();
app.set('port',80); //80번 열자
app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'));

app.get('/', async (req, res) => {
    try{
        const file = await fs.readFile('./index.html');
        res.writeHead(200);
        res.end(file);

    } catch(err){
        res.end(err.message);

    }
    
});
  
app.listen(app.get('port'), () => {
    console.log(app.get('port'),`에서 대기중`);
});