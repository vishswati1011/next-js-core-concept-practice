
const {MONGO_USERNAME,MONGO_PASSWORD}= process.env;

export const connectionUrl = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.nv3qi.mongodb.net/productdb?retryWrites=true&w=majority`;