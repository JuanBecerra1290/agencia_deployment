import { Viaje } from '../models/Viajes.js';
import { Testimonio } from '../models/testimoniales.js';

const paginaInicio = async (req, res) =>{

    //consultando Viajes
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }))
    promiseDB.push(Testimonio.findAll({ limit: 3 }))
    try {
        const resultado = await Promise.all( promiseDB )
        

        res.render('inicio', {
            clase: 'home',
            viajes: resultado[0],
            datosTestimonio: resultado[1]
        });
    } catch {
        console.log(error);
    }
}
const paginaNosotros = (req, res) =>{
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res) =>{
    //consultando base de datos
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}
const paginaTestimoniales = async (req, res) =>{
    //Consultando base testimoniales
    const datosTestimonio = await Testimonio.findAll();

    res.render('testimoniales', {
        pagina: 'Testimoniales',
        datosTestimonio
    });
}

const paginaDetalleViaje = async(req, res) =>{
    const {viaje} = req.params;

    try{
        const resultado = await Viaje.findOne({ where: { slug: viaje }});

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            resultado
        })
    }catch{
        console.log(error)
    }
}

export {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje}