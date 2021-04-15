const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/voters', (req, res) => {
    const sql = 'SELECT * FROM voters';

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            messgae: 'success',
            data: rows,
        });
    });
});

module.exports = router;