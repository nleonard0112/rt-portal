/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/

module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: {
  	// mongo: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/linkrtportal',
  	postgres: {
      uri: process.env.DATABASE_URL,
      name: 'linkrtportal',
      username: process.env.PGUSER || 'postgres',
      password: 'linklove'
    }
  },
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
  google: {
    clientID: process.env.GOOGLE_CLIENTID || '62351010161-eqcnoa340ki5ekb9gvids4ksgqt9hf48.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU',
    callbackURL: process.env.GOOGLE_CALLBACK || "/auth/google/callback"
  },
  aws: {
    aws_bucket: 'linkrtportaltest',
    aws_access_key: 'AKIAIZKBXQVGFTBJRABA',
    aws_secret_key: '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'
  }
};
