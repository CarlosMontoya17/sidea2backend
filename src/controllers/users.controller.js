import Users from "../models/users.model";
//const bcrypt = require("bcryptjs");
import bcrypt from "bcryptjs/dist/bcrypt";

export const signIn = async (req, res) => {
    const { username, password } = req.body;
    Users.findOne({
        where: {username}
    }).then(data => {
        if(!data){
            return res.status(404).json({
                message: 'User dont found'
            });
        }
        else{
            const validate = bcrypt.compareSync(password, data.password);
            if(!validate){
                return res.status(401).json({
                    message: 'Invalid Password'
                });
            }
            else{
                res.json({
                    message: data.username
                });
            }
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Interal Error'
        });
    });
    
}



export const getAll = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json({ data: users });
    }
    catch (err) {
        res.status(500).json({
            message: 'Users table is empty'
        });
    }
}

export const getOne = async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({
        where: { id }
    });
    res.json({
        data: user
    });
}



export const create = async (req, res) => {
    const { username, password, rol, type } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hasedPs = await bcrypt.hash(req.body.password, salt)
        let newUser = await Users.create({
            username,
            password: hasedPs,
            rol,
            type
        }, {
            fields: ['username', 'password', 'rol', 'type']
        });
        if (newUser) {
            return res.status(201).json({
                message: 'User created',
                data: newUser
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'User dont created'
        });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await Users.destroy({
        where: { id }
    }).then(data => {
        console.log(data);
        res.json({
            message: 'User deleted'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Internal Error'
        });
    });
}

export const updatedUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, rol, type } = req.body; 
    await Users.update({
        username, 
        password, 
        rol, 
        type
    }, {where: { id }}).then(data => {
        if(data == 0){
            res.sendStatus(500);
        }
        else{
            res.json({
                message: 'User was updated'
                
            });
        }

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Error while user trying updated'
        });
    });
}