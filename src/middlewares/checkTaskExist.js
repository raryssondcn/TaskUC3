const knex = require ("../database/knex")

async function checkTaskExist (req, res, next){
    const {id} = req.params
    const task = await knex("tasks").where({id})

    if(task.length === 0){
        return res.status(400).json("Tarefa não encontrado")
    }

    next()
}

module.exports = checkTaskExist