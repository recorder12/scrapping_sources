import dotenv from "dotenv";
dotenv.config();

//Home
const HOME = "/";

//Api
const API = "/api";
const SEARCH = "/search";
const UPDATE = `/update`;

//Admin
const ADMIN = `/${process.env.admin_URL}`;
//const ADMIN = `/admin`;

const routes = {
  home: HOME,
  api: API,
  search: SEARCH,
  update: UPDATE,
  admin: ADMIN,
};

export default routes;
