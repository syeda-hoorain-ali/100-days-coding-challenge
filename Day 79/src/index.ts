import express from 'express';
import authMiddleware from './auth.js';

const app = express();
const PORT = 5000;

app.use(authMiddleware);

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});