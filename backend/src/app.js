const express = require('express')
const cors = require('cors')
const app = express()

//para di mag undefined ang req.body 
app.use(express.json());

// Basic CORS (lahat ng origins allowed)
app.use(cors());


// Kapag may nag-access ng http://localhost:5000/ (o depende sa port),
// magbabalik ito ng text na 'success'.
app.get('/test', (req, res) => {
    // Ipapadala bilang response ang string na 'success'
    res.send('success')
})

app.use('/api/auth', require('./features/auth/authRoute'));

module.exports = app;