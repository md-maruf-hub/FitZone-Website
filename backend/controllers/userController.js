const User = require('../models/User')
const bcrypt = require('bcryptjs')

/*
========================================
GET USER PROFILE
========================================
*/

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
UPDATE USER PROFILE
========================================
*/

const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    // Update Password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(req.body.password, salt)
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
ADMIN - GET ALL USERS
========================================
*/

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password')

    res.json(users)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
ADMIN - GET SINGLE USER
========================================
*/

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
ADMIN - UPDATE USER ROLE
========================================
*/

const updateUserRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    user.role = req.body.role || user.role

    const updatedUser = await user.save()

    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
ADMIN - DELETE USER
========================================
*/

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    await user.deleteOne()

    res.json({
      message: 'User deleted successfully',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUserRole,
}