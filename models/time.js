module.exports = function(sequelize, DataTypes) {
    var Time = sequelize.define("Time", {
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
    
    Time.associate = function(models) {
      Time.belongsTo(models.Favorite, {
          foreignKey: {
          allowNull: true
          }
      });
      
      Time.belongsTo(models.Date, {
        foreignKey: {
        allowNull: false
        }
      });
      
    };
  
    return Time;
  };