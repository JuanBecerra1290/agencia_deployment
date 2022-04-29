import express from 'express'
import router from './routes/index.js';
import db from './confg/db.js';
import dotenv from 'dotenv'

dotenv.config({ path: 'variables.env' })


//instancia express
const app = express();

//Conectar a base de datos
db.authenticate()
    .then( () => console.log('Base de datos Conectada'))
    .catch( error => console.log(error))

//asigna el puerto. y host
const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

//Define la carpeta public
app.use(express.static('public'));

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener Año actual
app.use( (req, res, next) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    next();
});

//Agregar Body parser para leer datos de formulario
app.use(express.urlencoded({extended: true}))

//agrega router
app.use('/', router);

//inicia el servidor
app.listen(port, host, () =>{
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})