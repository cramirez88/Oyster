//Date (Table to hold dates)
//only has a date field cannot be null
// Date belongs to Aadventure
// A Date can't be created without Adventure due to the foreign key constraint



module.exports = function(sequelize, DataTypes) {
    var Date = sequelize.define("Date", {
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      am_8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      am_9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      am_10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      am_11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pm_10: {
        type: DataTypes.STRING,
        allowNull: true,
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