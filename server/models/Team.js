var Sequelize = require('sequelize')

var attributes = {
	uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  teamname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-z0-9\_\-]+$/i,
    }
  },
  about: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.BLOB,
  },
  amount_raised: {
    type: Sequelize.DECIMAL,
  },
  tier_level: {
    type: Sequelize.INTEGER,
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options