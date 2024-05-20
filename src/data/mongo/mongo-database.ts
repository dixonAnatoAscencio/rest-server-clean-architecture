import mongoose from "mongoose";

interface Options {
  MongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { MongoUrl, dbName } = options;

    try {
      await mongoose.connect(MongoUrl, {
        dbName: dbName,
      });

      return true;
    } catch (error) {
      console.log("Mongo connection error: ", error);
      throw error;
    }
  }

  static async disconnect() {
    await mongoose.disconnect();
  }
}
