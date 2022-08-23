module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "fooddb",
    dialect: "mysql",
    pool: {
        //connections allowed in pool
        max: 5,
        min: 0,
        //time to try to connect before throwing error
        acquire: 30000,
        //time to release when idle
        idle: 10000
    }
};