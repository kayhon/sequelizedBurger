module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};



// CREATE TABLE IF NOT EXISTS `Burgers` 
// (`id` INTEGER NOT NULL auto_increment ,
//  `name` VARCHAR(255) NOT NULL, `devoured` 
//  TINYINT(1) DEFAULT false, `createdAt` DATETIME NOT NULL,
//   `updatedAt`
// DATETIME NOT NULL, PRIMARY KEY (`id`)




// ------------------------------------------------
// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define("Burger", {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//      },
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   });
//   return Burger;
// };

// --------------------------------------------------
// module.exports = (sequelize, DataTypes)=>{
//   var Burgers = sequelize.define("Burger", {
//     burger_name: DataTypes.STRING,
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   }, {
//     classMethods: {
//       associate: function(models) {
//       }
//     }
//   });
//   return Burger;

//   ------------------------------------------
//   module.exports = (sequelize, DataTypes)=>{
//     var Burgers = sequelize.define("Burger", {
//       burger_name: DataTypes.STRING,
//       devoured: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//       }
//     }, {
//       classMethods: {
//         associate: function(models) {
//         }
//       }
//     });
//     return Burger;
// -----------------------------------------------


// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burgersController.js).
// module.exports = burger;
