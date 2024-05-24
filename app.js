const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(' this is cloud computing DEVOPS ; CI-CD PIPELINE STEP 1 !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
