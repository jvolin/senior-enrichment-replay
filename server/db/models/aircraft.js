const Sequelize = require('sequelize');
const db = require('../_db');

const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1903
    }
  },
  type: {
    type: Sequelize.ENUM('Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue')
  },
  cost: {
    type: Sequelize.DOUBLE,
    set(val) {
      this.setDataValue('cost', val * 100000000)
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaulValue: 'https://images.fineartamerica.com/images-medium-large/flying-machine-spalding-1889-patent-art-prior-art-design.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
});

Aircraft.getAircraftByType = function(val) {
  return this.findAll({
    where: {
      type: val
    }
  })
}

module.exports = Aircraft

