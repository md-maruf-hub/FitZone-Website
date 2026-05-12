const express = require('express')
const router = express.Router()

const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUserRole,
} = require('../controllers/userController')

const { protect, admin } = require('../middleware/authMiddleware')

/*
========================================
USER ROUTES
========================================
*/

// Get Logged In User Profile
router.get('/profile', protect, getUserProfile)

// Update Logged In User Profile
router.put('/profile', protect, updateUserProfile)

/*
========================================
ADMIN ROUTES
========================================
*/

// Get All Users
router.get('/', protect, admin, getAllUsers)

// Get Single User
router.get('/:id', protect, admin, getSingleUser)

// Update User Role
router.put('/:id', protect, admin, updateUserRole)

// Delete User
router.delete('/:id', protect, admin, deleteUser)

module.exports = router