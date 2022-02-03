import { getStatus } from "./status.js";

import {
  deleteExample,
  getExample,
  getExamples,
  patchExample,
  postExample,
} from "./example.js";
import {
  deleteMenu,
  getMenu,
  getMenus,
  patchMenu,
  postMenu,
} from "./menu.js";
import {
  deleteOrder,
  getOrder,
  getOrders,
  patchOrder,
  postOrder,
} from "./order.js";
export default [
  {
    method: "GET",
    path: "/status",
    isPublic: true,
    cbs: [getStatus],
  },
  {
    method: "GET",
    path: "/example/all",
    cbs: [getExamples],
  },
  {
    method: "GET",
    path: "/example/:id",
    cbs: [getExample],
  },
  {
    method: "POST",
    path: "/example",
    cbs: [postExample],
  },
  {
    method: "PATCH",
    path: "/example",
    cbs: [patchExample],
  },
  {
    method: "DELETE",
    path: "/example/:id",
    cbs: [deleteExample],
  },
  {
    method: "GET",
    path: "/menu/all",
    cbs: [getMenus],
  },
  {
    method: "GET",
    path: "/menu/:id",
    cbs: [getMenu],
  },
  {
    method: "POST",
    path: "/menu",
    cbs: [postMenu],
  },
  {
    method: "PATCH",
    path: "/menu",
    cbs: [patchMenu],
  },
  {
    method: "DELETE",
    path: "/menu/:id",
    cbs: [deleteMenu],
  },
  {
    method: "GET",
    path: "/order/all",
    cbs: [getOrders],
  },
  {
    method: "GET",
    path: "/order/:id",
    cbs: [getOrder],
  },
  {
    method: "POST",
    path: "/order",
    cbs: [postOrder],
  },
  {
    method: "PATCH",
    path: "/order",
    cbs: [patchOrder],
  },
  {
    method: "DELETE",
    path: "/order/:id",
    cbs: [deleteOrder],
  },
];
