import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://anhdung244:Anhdung0855@cluster0.uvv7l.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    // const result = await meetupsCollection.find().toArray();

    // console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup fetch data" });
  }
}

export default handler;
