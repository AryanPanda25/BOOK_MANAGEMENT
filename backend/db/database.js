import { connect } from "mongoose";

const DATABASE = process.env.DATABASE;
connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection successful with database!!!") })
    .catch((err) => { console.log(err) });
