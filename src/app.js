const express = require('express');
const helloRoutes = require('./routes/helloRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', helloRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
