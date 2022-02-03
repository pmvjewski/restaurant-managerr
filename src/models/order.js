import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "orders";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    table_nr: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    is_takeaway:{
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
    },
    menu_id:{
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

export const getOneOrder = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getAllOrder = async () => databaseProvider.getAll(MODEL_NAME);

export const createOrder = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateOrder = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteOrder = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
