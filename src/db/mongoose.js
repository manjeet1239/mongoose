const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//here we define the model
const oscar = mongoose.model("oscar", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});
// here we define the model instances this add in database
const me = new oscar({
  name: "bolt",
  age: 8
});

// crud operation
me.save()
  .then(me => {
    console.log(me);
  })
  .catch(err => {
    console.log("Error", err);
  });
