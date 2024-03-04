require('dotenv').config();
const { Sequelize } = require('sequelize');
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');
const {DB_RENDER_URL} = process.env;
 

const sequelize = new Sequelize(DB_RENDER_URL, {
   logging: false,
   native: false,
   dialectOptions: {
     ssl: {
       require: true,
       rejectUnauthorized: false, 
     },
   },
 });



FavoriteModel(sequelize);
UserModel(sequelize)

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite,{through: 'user_favorite' });
Favorite.belongsToMany(User,{through: 'user_favorite' });



module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
