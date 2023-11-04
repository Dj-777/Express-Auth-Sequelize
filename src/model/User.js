const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../helper/database.helper");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, Infinity], // Minimum length of 8 characters
        isPasswordValid(value) {
          if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/.test(value)) {
            throw new Error(
              "Password must contain at least one lowercase letter, one uppercase letter, and one special character."
            );
          }
        },
      },
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: Sequelize.ENUM("admin", "user"),
      defaultValue: "user",
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM("verified", "unverified"),
      defaultValue: "unverified",
      allowNull: false,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const saltRounds = 10;
          user.password = await bcrypt.hash(user.password, saltRounds);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const saltRounds = 10;
          user.password = await bcrypt.hash(user.password, saltRounds);
        }
      },
    },
  }
);

module.exports = User;
