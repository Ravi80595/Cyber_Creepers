import connectMongo from "../../../Utils/ConnectDB";
import UserModel from "../../../Backend/Modals/UserModel";
import FeedsModel from "../../../Backend/Modals/FeedsModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addFeed(req, res) {
  const { method } = req;
  await connectMongo();
  console.log("Connected to Database");
  // const {email,password,firstname,lastname,avtar}= req.body

  switch (method) {
    case "GET":
      try {
        // const id = "63a53add139286913c6318e0"
        console.log("workingggggggggggg");
        const feed = await FeedsModel.find();
        console.log(feed);
        res.status(200).json({ success: true, data: feed });
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
