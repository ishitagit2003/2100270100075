const axios = require('axios');
const fs = require('fs');

let credentials = null;

exports.registerCompany = async (req, res) => {
    const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

    if (!companyName || !ownerName || !rollNo || !ownerEmail || !accessCode) {
        return res.status(400).send('All fields are required');
    }

    if (credentials) {
        return res.status(400).send('You can register only once and cannot get the credentials again, DON\'T FORGET TO SAVE THIS!');
    }

    try {
        const response = await axios.post('http://20.244.56.144/test/register', {
            companyName,
            ownerName,
            rollNo,
            ownerEmail,
            accessCode
        });

        credentials = response.data;
        fs.writeFileSync('credentials.json', JSON.stringify(credentials, null, 2));

        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).send('Registration failed');
    }
};
