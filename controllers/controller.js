import { updateDB } from "./scrapping";
import Bobae from "../models/Bobae";
import dotenv from "dotenv";
import routes from "../routes";
dotenv.config();

//Home
export const home = (req, res) => {
  res.render("homeback2", { PageTitle: "Home" });
};
//Admin
export const admin = (req, res) => {
  res.render("admin");
};
//APIs

//search API
export const postSearchDB = async (req, res) => {
  //car model 가져와서 db에서 검색한 결과 반환
  const {
    body: { carModel },
  } = req;

  try {
    const searchedDB = await Bobae.find({
      // to do: front로 보내서 이미지 매칭
      title: { $regex: carModel, $options: "i" },
    });
    res.json({ db: searchedDB });
    res.end();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

//update DB API
export const postUpdateCommmand = async (req, res) => {
  const {
    body: { password },
  } = req;

  if (password === process.env.admin_Password) {
    const updateResult = await postUpdateDB();
    console.log("done!");

    res.json({ text: "update is completed!" });
    res.end();
  } else {
    res.json({ text: "password is incorrect" });
    res.end();
  }
};
//Update DB function
export const postUpdateDB = async (req, res) => {
  console.log("Updating...");
  const db = await updateDB();

  db.forEach(async (element) => {
    const findSameData = await Bobae.findOne({ pageURL: element.pageURL });

    if (findSameData) {
      return;
    } else {
      try {
        const newDB = await Bobae.create({
          siteName: element.siteName,
          title: element.title,
          pageURL: element.pageURL,
          imageURL: element.imageURL,
          price: element.price,
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
};
