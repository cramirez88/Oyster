module.exports = function(sequelize, DataTypes) {
    var Adventure = sequelize.define("Adventure", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateRange: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    });
    
    Adventure.associate = function(models) {
      //Adventure.belongsTo(models.User);
      Adventure.belongsTo(models.User, {            
        foreignKey: {allowNull: false}
      });
      
      Adventure.hasMany(models.Date, 
        {onDelete: "cascade"}
      );

    };

    return Adventure;
  };