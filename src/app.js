const express = require ('express');
const path = require ('path');
const app = express ();
const PORT = 3000;

const indexRoutes = require ('./routes/index.routes');

app.use(express.static(path.join(__dirname,'..','public')));

//app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.use('/',indexRoutes);

//app.get('/about', (req,res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));

app.use('/about',indexRoutes);



app.listen(PORT, () => console.log('server running in http://localhost:' + PORT));