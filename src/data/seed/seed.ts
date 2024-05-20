import { envs } from "../../config/envs"
import { MongoDatabase } from "../mongo/mongo-database"

(async () => {//funcion autoinvocada
    MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        MongoUrl: envs.MONGO_URL
    })
    await main()


    MongoDatabase.disconnect()

})()

async function main() {

}