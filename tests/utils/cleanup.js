var Model = require('../../server/models/models.js')

module.exports = function(callback) {

  // recreate user table with sample user
  Model.User.sync({ force: true }).then(function() {
    // create user with
    // email: user@user.com
    // password: user
    Model.User.create({
      email: 'user@user.com',
      username: 'username',
      first_name: 'User',
      last_name: 'McUser',
      password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O',
      salesforce_id: '00356000003EbIO'
    }).then(callback)
  })
  
  // recreate Team table
  Model.Team.sync({ force: true }).then(function() {
    Model.Team.create({
      team_name: 'Team Awesome',
      salesforce_id: '00156000003o1vJAAQ'
    }).then(callback)
  })

  // recreate Event table
  Model.Event.sync({ force: true }).then(function() {
    Model.Event.create({
      event_name: 'First Event'
    }).then(callback)
  })

  // recreate Campaign table
  Model.Campaign.sync({ force: true }).then(function() {
    Model.Campaign.create({
      campaign_name: 'Do awesome shtuff'
    }).then(callback)
  })

}