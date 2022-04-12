import Sequelize  from "sequelize";
import { sequelize } from '../database/database';


const Actas = sequelize.define(
    'actas',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        tipo: {
            type: Sequelize.TEXT
        },
        usuario: {
            type: Sequelize.TEXT
        },
        entregado: {
            type: Sequelize.BOOLEAN
        },
        createdAt: {
            type: Sequelize.TIME
        },
        updatedAt: {
            type: Sequelize.TIME
        },

    }
);



export default Actas;