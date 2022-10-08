const express = require("express")
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    getByCategory,
    updateTask,
    deleteTask
} = require("../controllers/tasks")

const { protect } = require("../controllers/users")


router.route("/").post(protect, createTask).get(protect, getAllTasks)
router.route("/:category").get(protect, getByCategory)
router.route("/:id").get(protect, getTask).patch(protect, updateTask).delete(protect, deleteTask)

module.exports = router