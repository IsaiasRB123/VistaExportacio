const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', '.hbs');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el dashboard
app.get('/', (req, res) => {
    res.render('index', { title: 'Dashboard' });
});

app.get('/registrar', (req, res) => {
    res.render('registrar');
  });
  
//   app.get('/ProductosUpdate', (req, res) => {
//     res.render('forms/Productos/ProductosUpdate');
//   });
  
  app.get('/ver', (req, res) => {
    res.render('ver');
  });


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
