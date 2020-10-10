module.exports = function(sequelize, DataTypes) {
    var Adventure = sequelize.define("Adventure", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
      type: DataTypes.TEXT,
      allowNull: true,
      }    
    });
    
    Adventure.associate = function(models) {
       Adventure.belongsTo(models.User, {
           foreignKey: {
           allowNull: true
           }
       });

       Adventure.hasMany(models.Date, {
        onDelete: "cascade"
    });
};

    return Adventure;
  };
