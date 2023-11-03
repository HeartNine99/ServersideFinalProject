const GasStoveController = require('./controllers/GasStoveController')
const UserController = require('./controllers/UserController')

module.exports = (app) =>{


    //get all gasStove
    app.get('/gasstoves', GasStoveController.index)

    //create
    app.post('/gasstove', GasStoveController.create)

    //edit
    app.put('/gasstove/:gasstoveId' , GasStoveController.put)

    //delete
    app.delete('/gasstove/:gasstoveId', GasStoveController.remove)

    //show by id
    app.get('/gasstove/:gasstoveId', GasStoveController.show)


   //get all user
   app.get('/users', UserController.index)

   //create
   app.post('/user', UserController.create)

   //edit
   app.put('/user/:userId', UserController.put)

   //delete
   app.delete('/user/:userId', UserController.remove)

   //show by id
   app.get('/user/:userId', UserController.show)


}