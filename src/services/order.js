import{
    getAllOrder,
    getOneOrder,
    deleteOrder,
    createOrder,
    updateOrder,
} from "../models/order.js";
export const OrderService ={
    read: async (id) => (await getOneOrder({where:{id}})) || null,
    readAll: async () => (await getAllOrder()) || [],
    create: async (id,table_nr,is_takeaway,menu_id) =>
    await createOrder({
        id,
        table_nr,
        is_takeaway,
        menu_id,
    }),
    update: async (id,fieldsToUpdate) =>
    await updateOrder({ where: { id } }, fieldsToUpdate),
    delete: async (id) => await deleteOrder({ where: { id } }),
}