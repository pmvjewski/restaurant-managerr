import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "menus";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: Sequelize.DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    category:{
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

export const getOneMenu = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getAllMenu = async () => databaseProvider.getAll(MODEL_NAME);

export const createMenu = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateMenu = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteMenu = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
