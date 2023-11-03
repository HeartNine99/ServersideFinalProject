const { Gasstove } = require('../models')

module.exports = {

    // Get all gasStoves
    async index(req, res) {
        try {
            const gasstoves = await Gasstove.findAll()
            res.send(gasstoves)
        } catch (err) {
            res.status(500).send({
                error: 'The gasStoves inforgmation was incorrect'
            })
        }
    },

    // Create gasStove
    async create(req, res) {
        try {
            const gasstove = await Gasstove.create(req.body)
            res.send(gasstove.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create gasStove incorrect'
            })
        }
    },

    // Edit gasStove
    async put(req, res) {
        try {
            await Gasstove.update(req.body, {
                where: {
                    id: req.params.gasstoveId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update gasStove incorrect'
            })
        }
    },

    // Delete gasStove
    async remove(req, res) {
        try {
            const gasstove = await Gasstove.findOne({
                where: {
                    id: req.params.gasstoveId
                }
            })
            if (!gasstove) {
                return res.status(403).send({
                    error: 'The gasStove information was incorrect'
                })
            }
            await gasstove.destroy()
            res.send(gasstove)
        } catch (err) {
            res.status(500).send({
                error: 'The gasStove information was incorrect'
            })
        }
    },

    // Show gasStove by id
    async show(req, res) {
        try {
            const gasstove = await Gasstove.findByPk(req.params.gasstoveId)
            res.send(gasstove)
        } catch (err) {
            res.status(500).send({
                error: 'The gasStove information was incorrect'
            })
        }
    }
}


