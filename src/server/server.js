const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('dist'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './dist/index.html'));
});
	
app.listen(PORT, () => {
	console.log('Server is listening on port: ', PORT);
});