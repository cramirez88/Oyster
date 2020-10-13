module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        url: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL,
        },
        lat: {
            type: DataTypes.DECIMAL,            
        },
        long: {
            type: DataTypes.DECIMAL,
        },
        address: {
            type: DataTypes.STRING,            
        },
        phone: {
            type: DataTypes.STRING,            
        },    
    });
    
    Favorite.associate = function(models) {
        // Favorite.belongsTo(models.User, {
        //     foreignKey: {
        //     allowNull: false
        //     }
        // });

        Favorite.belongsTo(models.User,{
            foreignKey: {allowNull: false}
        });

        Favorite.belongsTo(models.Date, {    
            foreignKey: {allowNull: true}
        });

    };
  
    return Favorite;
  };

//   `Name: ${biz.name}
//                 Image Url: ${biz.image_url}    
//                 Yelp URL: ${biz.url}
//                 Rating: ${biz.rating}
//                 Latitude: ${biz.coordinates.latitude}
//                 Longitude: ${biz.coordinates.longitude}
//                 Location: ${biz.location.display_address} 
//                 Phone: ${biz.display_phone}
//                 Distance in Meters: ${biz.distance}