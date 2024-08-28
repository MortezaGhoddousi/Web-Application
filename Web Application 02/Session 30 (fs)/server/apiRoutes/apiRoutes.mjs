import express from "express";
import jwt from 'jsonwebtoken';
import {
    addUser,
    getUser,
    deleteUser,
    updateUser,
    getAllWorkouts,
    getWorkout,
    addWorkout,
    deleteWorkout,
    updateWorkout,
    loginUser,
    authorizedUser
} from "../db.mjs";


const router = express.Router();

// WORKOUTS
// Get all workouts
router.get("/workout/:user", (req, res) => {
    getAllWorkouts(req.params.user)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Get a workout
router.get("/workout/user/:id", (req, res) => {
    getWorkout(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// add a workout
router.post("/workout", (req, res) => {
    addWorkout(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// delete a workout
router.delete("/workout/:id", (req, res) => {
    deleteWorkout(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// update a workout
router.put("/workout/:id", (req, res) => {
    updateWorkout(req.params.id, req.body.workout)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// USERS
// Get a user
router.get("/user/:id", (req, res) => {
    getUser(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// add a user
router.post("/user", (req, res) => {
    addUser(req.body.user)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// delete a user
router.delete("/user/:id", (req, res) => {
    deleteUser(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// update a user
router.put("/user/:id", (req, res) => {
    updateUser(req.params.id, req.body.user)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// login user
router.post("/user/login", (req, res) => {
    loginUser(req.body.user)
    .then((result) => {
        const token = jwt.sign({username: result.username}, "WA02", {expiresIn: "1d"});
        res.cookie("token", token);
        res.json(result);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
})

// check current user
router.get("/user/login/current", (req, res) => {
    authorizedUser(req.cookies.token)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
})

// logout user
router.delete("/user/login/current", (req, res) => {
    res.clearCookie('token');
    res.json("cookie cleared!");
})

export default router;
