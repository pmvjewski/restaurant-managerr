import{
    getAllMenu,
    getOneMenu,
    deleteMenu,
    createMenu,
    updateMenu,
} from "../models/menu.js";
export const MenuService ={
    read: async (id) => (await getOneMenu({where:{id}})) || null,
    readAll: async () => {
     const items = (await getAllMenu()) || []
     if(items.length<12)
     return "Źle jest xD"
    },
    create: async (id,name,price,category) =>
    await createMenu({
        id,
        name,
        price,
        category,
    }),
    update: async (id,fieldsToUpdate) =>
    await updateMenu({ where: { id } }, fieldsToUpdate),
    delete: async (id) => await deleteMenu({ where: { id } }),
}