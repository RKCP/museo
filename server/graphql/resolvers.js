const { MONGO_URI } = require("../../config.js");
const { User } = require("../mongo/models");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => console.log(`Connected to Mongo`));

async function getUser() {
  const user = await User.find({ id: 9 });
  console.log(user);
}

getUser();

module.exports = {
  Query: {
    users: () => {
      // we fetched all users from Mongo
      return [
        { name: "Vic", id: 9 },
        { name: "Leo", id: 10 },
      ];
    },
    user: async (_, { id }) => {
      const user = await User.findOne({ id });
      console.log(user);
      return user;
    },
  },
};
