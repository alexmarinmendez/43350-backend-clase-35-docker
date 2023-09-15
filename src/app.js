import express from "express";

const app = express()

app.get('/simple', (req, res) => {
    res.json({ status: 'success' })
})

app.get('/complex', (req, res) => {
    let sum = 0
    for (let index = 0; index < 5e8; index++) {
        sum += index
    }
    res.send({ sum })
})

app.listen(8080, () => console.log('Server Up'))