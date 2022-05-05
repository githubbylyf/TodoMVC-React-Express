var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/',(req, res) => {
    fs.readFile(path.join(__dirname,'../data.json'), 'utf-8', (err, jsondata) => {
        res.json(JSON.parse(jsondata));
    });
    return;
})

router.post('/', (req, res) => {
    fs.writeFile(path.join(__dirname,'../data.json'), JSON.stringify(req.body), 'utf-8',  (err) => {
        res.json();
    });
    return;
})

module.exports = router;