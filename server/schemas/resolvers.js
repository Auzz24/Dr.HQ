const { AuthenticationError } = require('apollo-server-express');
// const { User, Product, Category, Order } = require('../models');
const { User, Doctor} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    allDoctors: async () => {
      return await Doctor.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate();
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addDoctor: async (parent, args) => {
      const doctor = await Doctor.create(args);
      return { doctor };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;