import  Sequelize  from "sequelize";

export const sequelize = new Sequelize(
    "sidea2",
    "root",
    "Admin$2021$A",
    {
        host: "144.126.136.14",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

