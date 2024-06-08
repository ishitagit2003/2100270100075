const axios = require('axios');

exports.obtainAuthToken = async (req, res) => {
    const { companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo } = req.body;

    if (!companyName || !clientID || !clientSecret || !ownerName || !ownerEmail || !rollNo) {
        return res.status(400).send('All fields are required');
    }

    try {
        const response = await axios.post('http://20.244.56.144/test/auth', {
            companyName,
            clientID,
            clientSecret,
            ownerName,
            ownerEmail,
            rollNo
        });

        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).send('Authorization failed');
    }
};
