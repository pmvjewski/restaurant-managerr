import {OrderService} from "../services/order.js";

export const getOrder = async (req, res) => {
  const { params } = req;
  if (!params?.id) return res.json({ data: [] });
  return res.json({ data: await OrderService.read(params.id) });
};

export const getOrders = async (req, res) => {
  return res.json({ data: await OrderService.readAll() });
};

export const postOrder = async (req, res) => {
  const { body } = req;
  const { id, table_nr, is_takeaway, menu_id } = body || {};

  try {
    await OrderService.create(id, table_nr, is_takeaway, menu_id);
    res.status(201);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const patchOrder = async (req, res) => {
  const { body } = req;
  const { id, table_nr, is_takeaway, menu_id } = body || {};

  const fieldsToUpdate = {};
  if (table_nr !== undefined) fieldsToUpdate.table_nr = table_nr;
  if (is_takeaway !== undefined) fieldsToUpdate.is_takeaway = is_takeaway;
  if (menu_id !== undefined) fieldsToUpdate.menu_id = menu_id;

  try {
    await OrderService.update(id, fieldsToUpdate);
    res.status(200);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const deleteOrder = async (req, res) => {
  const { params } = req;
  const { id } = params || {};
  await OrderService.delete(id);
  return res.send();
};