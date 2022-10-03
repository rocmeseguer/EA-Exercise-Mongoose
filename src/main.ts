const mongoose = require('mongoose');

// Connection
mongoose.connect('mongodb://localhost:27017/ea-mongoose')
  .catch((error) => console.log(error));

// schema and model
import User from './models/User';
import Todo from './models/Todo';

// One user
const user1 = {
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
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}

// Insert
const newUser= new User(user1);
newUser.save()
    .then((user)=> {
        console.log('User Inserted ' + user) 
    })
    .catch((error) => {
        //console.log(error);
    });


// Find and Insert
User.findOne({id: 1}).exec()
    .then( (userFound) => {
        console.log(userFound)
        const newTodo = new Todo({id: 2, user: userFound._id, name: "Test"});
        newTodo.save()
          .then(() => console.log(' Todo Inserted ') )
          .catch((error) => console.log(' Todo duplicated' ));
    })
    .catch((error) => {
      //console.log(error);
    });


// Populate
Todo.findOne({id: 2}).populate('user').exec()
    .then( (todoFound) => {
        console.log(todoFound)
    })
    .catch((error) => {
      console.log(error);
    });
