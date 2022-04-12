import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Actas from '../models/actas.model';

const Users = sequelize.define(
    'users', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
        },
        rol: {
            type: Sequelize.TEXT
        },
        type: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.TIME
        },
        updatedAt: {
            type: Sequelize.TIME
        },
    }/*, {
        timeStamps: false
    }*/
);

Users.hasMany(Actas, {foreignKey: 'usuario', sourceKey: 'id'});
Actas.belongsTo(Users, {foreignKey: 'usuario', sourceKey: 'id'});
export default Users;

