const mongoose = require('mongoose');

// Connection
mongoose.connect('mongodb://localhost:27017/ea-mongoose')
  .catch((error) => console.log(error));

// Madel and Interface
import { IUser, UserModel } from './models/User';
import { ITodo, TodoModel } from './models/Todo';

async function Main() {

// One user
const user1: IUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
    }
}

// Insert User
const newUser= new UserModel(user1);
await newUser.save()
    .then( user => {
        console.log('User Inserted ' + user._id + ' ' + user.id) 
    })
    .catch( error => {
        console.log(error);
    });

// Insert Todo
const newTodo = new TodoModel({id: 2, user: newUser._id, name: "Test"});
await newTodo.save()
    .then( todo => console.log(' Todo Inserted '  + todo._id + ' ' + todo.id) )
    .catch( error  => console.log(' Todo duplicated' ));

// Insert Todo
const newTodo2 = new TodoModel({id: 3, user: newUser._id, name: "Test"});
await newTodo2.save()
    .then( todo => console.log(' Todo Inserted '  + todo._id + ' ' + todo.id) )
    .catch( error  => console.log(' Todo duplicated' ));

await TodoModel.find({}).exec()
    .then( todoFound => console.log(' Todos '  + todoFound) )
    .catch((error) => {
      console.log(error);
    });    

// Populate
await TodoModel.findOne({id: 2}).exec()
    .then( todoFound => {
        console.log(' Todo without Populate ' + todoFound)
    })
    .catch((error) => {
      console.log(error);
    });


await TodoModel.findOne({id: 2}).populate('user').exec()
    .then( todoFound => {
        console.log(' Todo with Populate ' + todoFound)
    })
    .catch((error) => {
      console.log(error);
    });


// Delete
await TodoModel.deleteMany({}).exec()
    .then( () => console.log( ' Todo deleted '))
    .catch((error) => {
      console.log(error);
    });

await UserModel.deleteMany({}).exec()
    .then( () => console.log( ' User deleted '))
    .catch((error) => {
      console.log(error);
    });

}

Main();