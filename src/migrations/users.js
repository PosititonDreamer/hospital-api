const db = require('../config/db')

class migrations {
    async userTable (req, res, error) {
        try {
            await db.query("CREATE TABLE users (" +
                "name SERIAL PRIMARY KEY," +
                "email VARCHAR(255)," +
                "password VARCHAR(255)," +
                "verified BOOLEAN," +
                "phoneNumber VARCHAR(13)," +
                "identifierType VARCHAR(3)," +
                "identifierValue VARCHAR(20)" +
                ")");
            console.log('migration table users success');
        }
        catch (error) {
            console.log('migration table users failed');
        }
    }
}

const migration = new migrations()
migration.userTable();