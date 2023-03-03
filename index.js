const express= require("express")
const {PORT} = require('./config/serverConfig')


const setupAndStartServer = async () => {
    //create  the express object
    const app = express();

      console.log(process.env);

    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
    })

}


setupAndStartServer();