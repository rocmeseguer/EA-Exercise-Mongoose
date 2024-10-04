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
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "company": {
      "name": "Romaguera-Crona",
    }
}

// Insert User
const newUser= new UserModel(user1);
await newUser.save()
    .then( user => console.log('User Inserted ' + user._id))
    .catch( error => console.log(error));

// Insert Todo
const newTodo = new TodoModel({code: 2, user: newUser._id, name: "Test"});

try {
  const savedTodo = await newTodo.save();
  console.log(' Todo Inserted '  + savedTodo._id);
  const user = await UserModel
    .findByIdAndUpdate(newTodo.user,{$addToSet:{todos:savedTodo._id}});
} catch( error ) { console.log(' Error: ' +  error) };

// Insert Todo
const newTodo2 = new TodoModel({code: 3, user: newUser._id, name: "Test2"});

try {
  const savedTodo = await newTodo2.save();
  console.log(' Todo Inserted '  + savedTodo._id);
  const user = await UserModel
    .findByIdAndUpdate(newTodo.user,{$addToSet:{todos:savedTodo._id}});
} catch( error ) { console.log(' Error: ' +  error) };

// Find

await TodoModel.find({}).exec()
    .then( todoFound => console.log(' Todos '  + todoFound) )
    .catch((error) => console.log(error));    

// Populate
await TodoModel.findOne({code: 2}).exec()
    .then( todoFound => console.log(' Todo without Populate ' + todoFound))
    .catch((error) => console.log(error));


await TodoModel.findOne({code: 2}).populate('user').exec()
    .then( todoFound => console.log(' Todo with Populate ' + todoFound))
    .catch((error) => console.log(error));


// Delete

// An ObjectID of todos

await UserModel.findByIdAndUpdate(newUser._id,{$pull:{todos:newTodo._id}});

// Todos

await TodoModel.deleteMany({}).exec()
    .then( () => console.log( ' Todo deleted '))
    .catch((error) => console.log(error));

// User

await UserModel.deleteMany({}).exec()
    .then( () => console.log( ' User deleted '))
    .catch((error) => console.log(error));

}

Main();