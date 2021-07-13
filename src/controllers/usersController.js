const User = require('../models/User')

module.exports = {
    indexGet: async (req, res) => {
        try {
            const userOne = new User('gildong', 'gildong@gmail.com')
            const userTwo = new User('minsu', 'minsu@gmail.com')
            res.json({ users: [userOne, userTwo] })
        } catch (error) {
            res.status(400).json({ error: { message: error } })
        } finally {
            res.end()
        }
    },

    indexPost: async (req, res) => {
        try {
            const { name, email } = req.body
            const user = new User(name, email)
            res.json(user)
        } catch (error) {
            res.status(400).json({ error: { message: error } })
        } finally {
            res.end()
        }
    },
}
