const Sequelize = require('sequelize');
const db = require('../_db');

 const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gfi: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 10
    }
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://s4.postimg.org/smzesjdal/International_Flag_of_Planet_Earth_02.jpg'
  }
})

Country.getTopFive = function() {
  return this.findAll({
    order: ['gfi'],
    limit: 5
  })
}

module.exports = Country
