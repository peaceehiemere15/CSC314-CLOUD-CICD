const express = require('express');
const app = express();
const port = 8080;

// app.use(express.static('public'))
app.get('/', (req, res) => res.send(
' this is cCSC314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS. NAME: OSAGIE DANIEL EHIREHMEN MATRIC NUMBER: VUG/CSC/22/7545'
));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
