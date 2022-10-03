const Log = require('../models/log');

// Bring in our seed data
const seed = require('../models/seed')


// ROUTE    GET /logs     (index)
const findAllLogs = (req, res) => {
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('logs/Index', {logs: foundLog})

        }
    });
}

// ROUTE    Get /logs/new    (new)
const showNewView = (req, res) => {
    res.render('logs/New');
}

// ROUTE    DELETE /logs/:id    (destroy)
const deleteOneLog = (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deleteLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    });
}

// ROUTE    Put /logs/:id    (update)
const updateOneLog = (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/logs/${updatedLog._id}`)
        }
    });}

// ROUTE    POST /logs    (create)
const createNewLog = (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    });
}

// ROUTE      GET /logs/:id/edit     (edit)
const showEditView = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('logs/Edit', {log: foundLog})
        }
    });
}

// ROUTE    Get /logs/:id    (show)
const showOneLog = (req, res) => {

    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('logs/Show', {log: foundLog});
        }
    });
}

// ROUTE       GET /logs/seed      (seed)
const seedData = (req, res) => {
    Log.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Log.create(seed.logs, (err, createdLogs) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/logs')
                }
            })
        }
    });
}

// ROUTE       GET /logs/clear      (clear)
const clearData = (req, res) => {
    Log.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
                res.status(200).redirect('/logs')
            }
    })
}


module.exports = {
    findAllLogs,
    showNewView,
    createNewLog,
    showOneLog,
    seedData,
    showEditView,
    updateOneLog,
    deleteOneLog,
    clearData
}