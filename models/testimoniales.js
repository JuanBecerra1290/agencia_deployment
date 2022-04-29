import { Sequelize } from "sequelize";
import db from "../confg/db.js";

const Testimonio = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

export {Testimonio}