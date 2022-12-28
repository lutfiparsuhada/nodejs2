import  {Sequelize} from "sequelize";

const db = new Sequelize('messi_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
