// import sequelize
import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize("krisna_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

// export connection
export default db;
