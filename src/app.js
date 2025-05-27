const express = require('express');
const router = require('./routes/index');
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json()); // Для обработки JSON-данных
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)
// parse application/x-www-form-urlencoded

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

