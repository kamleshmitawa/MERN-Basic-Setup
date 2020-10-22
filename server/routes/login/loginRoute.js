
const { Router } = require('express')
const loginRouter = new Router({ prefix: '/login' })
const { loginModel } = require('../../../database/models')

loginRouter.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new loginModel({ username, email, password })
        await user.save()
        res.json({ message: "Successfully saved data" })
    }
    catch (err) {
        console.log(err, 'error in / route')
        throw err
    }
})

loginRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await loginModel.findOne({ email });
    res.json({ data: user, message: "Successfully Registred" })
})

module.exports = { loginRouter }