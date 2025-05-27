const express = require('express');
const router = require('./routes');
const cors = require('cors')
const app = express();

app.use(cors());
app.use('/api/v1/', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

