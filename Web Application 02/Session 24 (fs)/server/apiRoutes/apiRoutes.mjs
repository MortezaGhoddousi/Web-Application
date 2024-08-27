import express from "express";
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
    addWorkout(req.body.workout)
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

export default router;
