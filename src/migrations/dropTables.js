const db = require('../config/db')

class drops {
    async userTable () {
        try {
            await db.query("DROP TABLE users");
            console.log('drop table users success');
        }
        catch (error) {
            console.log('drop table users failed');
        }
    }
    async medicalOrganizationsTable () {
        try {
            await db.query("DROP TABLE medical_organizations");
            console.log('drop table medical_organizations success');
        }
        catch (error) {
            console.log('drop table medical_organizations failed');
        }
    }
    async doctorsTable () {
        try {
            await db.query("DROP TABLE doctors");
            console.log('drop table doctors success');
        }
        catch (error) {
            console.log('drop table doctors failed');
        }
    }
    async schedulesTable () {
        try {
            await db.query("DROP TABLE schedule");
            console.log('drop table schedule success');
        }
        catch (error) {
            console.log('drop table schedule failed');
        }
    }
}

const drop = new drops()
drop.userTable();
drop.medicalOrganizationsTable();
drop.doctorsTable();
drop.schedulesTable();