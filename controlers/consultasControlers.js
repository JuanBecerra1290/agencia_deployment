import { Testimonio } from "../models/testimoniales.js";

const guardarTestimonial = async(req, res) => {
    console.log(req.body);

    const{nombre, email, mensaje} = req.body

    //Validar formulario
    if(nombre.trim()==='' || email.trim()==='' || mensaje.trim()===''){
        const advertencia = 'Todos los campo son obligatorios';

        const datosTestimonio = await Testimonio.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            advertencia,
            nombre,
            email,
            mensaje,
            datosTestimonio
        });
        return;
    }

    //Enviar datos a la BD.
    try{
        await Testimonio.create({
            nombre,
            email,
            mensaje
        })
        res.redirect('/testimoniales');
    }catch{
        console.log(error);
    }
    
    
}

export {guardarTestimonial}