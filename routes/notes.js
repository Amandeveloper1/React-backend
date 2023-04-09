const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')


// create Notes
router.post('/createnote', (req, res) => {

    const note = Notes(req.body);
    note.save();

    console.log(req.body)
    res.json(req.body)


})

// Delete Notes
router.delete('/delete', (req, res) => {

    // const note = Notes(req.body);
    // note.save();

    // console.log(req.body)
    res.json(req.body)
    res.json("delete")


})

// Edit Notes
// router.put('/edit', (req, res) => {

//     const note = Notes(req.body);
//     note.save();

//     console.log(req.body)
//     res.json(req.body)


// })

// Show Notes
// router.get('/show', (req, res) => {

//     const note = Notes(req.body);
//     note.save();

//     console.log(req.body)
//     res.json(req.body)


// })



module.exports = router