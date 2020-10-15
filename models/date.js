//Date (Table to hold dates)
//only has a date field cannot be null
// Date belongs to Aadventure
// A Date can't be created without Adventure due to the foreign key constraint



module.exports = function(sequelize, DataTypes) {
    var Date = sequelize.define("Date", {
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Date.associate = function(models) {
      Date.belongsTo(models.Adventure, {
        foreignKey: {allowNull: false}
      });
      Date.hasMany(models.Favorite);
      //Date.belongsToMany(models.Favorite, {through: 'DateFavorite'});
    };
  
  return Date;
};