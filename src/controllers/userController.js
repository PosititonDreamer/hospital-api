const db = require('../config/db')

const generateBearer = () => {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 20; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

class userController {

    async register(req, res) {
        const {email, password, phoneNumber, identifierType, identifierValue} = req.body;

        const findUser = await db.query(`SELECT * FROM users WHERE email = '${email}' OR phone_number = '${phoneNumber}' OR  identifier_value = '${identifierValue}'`);

        if(findUser.rows.length > 0) {
            res.status(400).json({
                status: "error",
                detail: "user already exist"
            })
            return;
        }

        const user = await db.query(`INSERT INTO users (email, password, verified, phone_number, identifier_type, identifier_value, life_status) values ('${email}', '${password}', true, '${phoneNumber}', '${identifierType}', '${identifierValue}', true) RETURNING id`)
        const userId = user.rows[0].id
        const bearer = generateBearer()
        await db.query(`INSERT INTO bearers (token, user_id) values ('${bearer}', '${userId}')`)

        res.json({
            detail: 'user registered',
            user: {
                email,
                phoneNumber,
                identifierType,
                identifierValue,
                verified: true
            },
            token: bearer,
        })
    }

    async login(req, res) {

    }

    async profile(req, res) {

    }
}
module.exports = new userController()