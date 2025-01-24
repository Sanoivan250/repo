
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('index',{title:'Home page',name:'James bond',age:'25'});
})
app.get('/men',(req,res)=>{
    res.render('men');
})
app.listen(7000, () => {
    console.log('Server is running on http://localhost:7000');
});