const db = require('../config/db')

class userController {

    generateBearer() {
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async register(req, res) {
        const {email, password, phoneNumber, identifierType, identifierValue} = req.body;

        const findUser = await db.query(`SELECT * FROM users WHERE email = '${email}' OR phone_number = '${phoneNumber}' OR  identifier_alue = '${identifierValue}'`);

        if(findUser.rows.length > 0) {
            res.status(401).send(JSON.stringify({
                detail: 'User already exist',
            }));
            return;
        }

        const user = await db.query(`INSERT INTO users (email, password, verified, phone_number, identifier_type, identifier_value, life_status) values ('${email}', '${password}', true, '${phoneNumber}'}, '${identifierType}', '${identifierValue}', true);)`)
        const userId = user.rows[0].id;
        const bearer = this.generateBearer()
        await db.query(`INSERT INTO bearers (token, user_id) values ('${bearer}', '${userId}');)`)

        res.status(200).send(JSON.stringify({
            detail: 'user registered',
            user: {
                email,
                phoneNumber,
                identifierType,
                identifierValue,
                verified: true
            },
            token: bearer,
        }))
    }

    async login(req, res) {

    }

    async profile(req, res) {

    }
}
module.exports = new userController()