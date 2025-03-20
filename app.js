const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/approve', (req, res) => {
    const { paymentId } = req.body;
    console.log(`Approving payment: ${paymentId}`);
    // TODO: Verify payment details, then approve
    res.send({ success: true });
});

app.post('/complete', (req, res) => {
    const { paymentId, txid } = req.body;
    console.log(`Completing payment: ${paymentId}, Transaction ID: ${txid}`);
    // TODO: Confirm transaction completion
    res.send({ success: true });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
