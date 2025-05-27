const db = require('../config/db')

class migrations {
    async userTable () {
        try {
            await db.query("CREATE TABLE users (" +
                "id SERIAL PRIMARY KEY," +
                "email VARCHAR(255)," +
                "password VARCHAR(255)," +
                "verified BOOLEAN," +
                "phone_number VARCHAR(13)," +
                "identifier_type VARCHAR(3)," +
                "identifier_value VARCHAR(20)," +
                "life_status BOOLEAN" +
                ")");
            console.log('migration table users success');
        }
        catch (error) {
            console.log('migration table users failed');
        }
    }
    async medicalOrganizationsTable () {
        try {
            await db.query("CREATE TABLE medical_organizations (" +
                "id SERIAL PRIMARY KEY," +
                "title VARCHAR(255)," +
                "address VARCHAR(255)" +
                ")");
            console.log('migration table medical_organizations success');
        }
        catch (error) {
            console.log('migration table medical_organizations failed');
        }
    }
    async doctorsTable () {
        try {
            await db.query("CREATE TABLE doctors (" +
                "id SERIAL PRIMARY KEY," +
                "id_medical_organization INTEGER," +
                "full_name VARCHAR(255)," +
                "specialization VARCHAR(255)" +
                ")");
            console.log('migration table doctors success');
        }
        catch (error) {
            console.log('migration table doctors failed');
        }
    }
    async schedulesTable () {
        try {
            await db.query("CREATE TABLE schedule (" +
                "id SERIAL PRIMARY KEY," +
                "id_doctor INTEGER," +
                "date DATE," +
                "time TIME," +
                "occupied BOOLEAN," +
                "user_id INTEGER DEFAULT NULL" +
                ")");
            console.log('migration table schedule success');
        }
        catch (error) {
            console.log('migration table schedule failed');
        }
    }
}

const migration = new migrations()
migration.userTable();
migration.medicalOrganizationsTable();
migration.doctorsTable();
migration.schedulesTable();