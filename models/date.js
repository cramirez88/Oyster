//Date (Table to hold dates)
//only has a date field cannot be null
// Date belongs to Aadventure
// A Date can't be created without Adventure due to the foreign key constraint



module.exports = function(sequelize, DataTypes) {
    var Date = sequelize.define("Date", {
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    });
  
    Date.associate = function(models) {
        Date.belongsTo(models.Adventure, {
            foreignKey: {
              allowNull: false
            }
        });
        
        Date.hasMany(models.Time, {
          onDelete: "cascade"
        });
    };
  
    return Date;
  };