const newman = require('newman');
require('dotenv').config();

const collectionUrl = `https://api.postman.com/collections/25690510-ef55dc18-b0b1-40ec-a142-2c2c1b09f0a7?access_key=${process.env.secretKey}`;

newman.run({
    collection: collectionUrl,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('Collection run completed');
});
