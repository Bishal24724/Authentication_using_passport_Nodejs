import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('passportAuthentication', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
