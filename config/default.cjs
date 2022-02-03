const { nodeEnv } = require("./utils.cjs");
const databaseConfig = require("../database/dbConfig.cjs");

module.exports = {
  env: nodeEnv,
  is_test: false,
  name: "restaurant-manager-js",
  database: databaseConfig,
  options: {
    port: process.env.PORT,
    public_routes_prefix: "/api/public",
    private_routes_prefix: "/api/private",
  },
};
