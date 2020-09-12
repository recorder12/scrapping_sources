import resemble from "resemblejs";
const compare = require("resemblejs").compare;
const fs = require("mz/fs");
import imageDataURI from "image-data-uri";

import { updateCyber, updateKorea, updateIncome } from "./scrapping";
import Bobae from "../models/Bobae";
import dotenv from "dotenv";
import routes from "../routes";

dotenv.config();

//Home
export const home = (req, res) => {
  res.render("home", { PageTitle: "Home" });
};
//Admin
export const admin = (req, res) => {
  res.render("admin");
};
//APIs

//search API
export const postSearchDB = async (req, res) => {
  const {
    body: { carModel, img1 },
  } = req;

  let errorCount = 0;
  let cm = 0;
  let img2;
  let Lists = [];
  let matchNm = 0;

  const options = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255,
      },
      errorType: "movement",
      transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true,
    },
    scaleToSameSize: true,
    ignore: "antialiasing",
  };

  try {
    const searchedDB = await Bobae.find({
      title: { $regex: carModel, $options: "i" },
    });
    const length = searchedDB.length;

    searchedDB.forEach(async (element) => {
      try {
        img2 = await imageDataURI
          .encodeFromURL(element.imageURL) //Image URL이 잘못된 경우 그냥 지나감. db에서 그 부분을 지울 수도 있지만, 일시적은 네트워크 장애일 가능성도 있으므로 보류
          .then((res) => {
            //URL --> data URI로 변경
            return res;
          });
      } catch (error) {
        console.log(error);
        errorCount++;
        return false;
      }

      try {
        await compare(img1, img2, options, function (err, data) {
          if (err) {
            console.log("An error!");
          }
          if (data.misMatchPercentage < 30) {
            Lists.push(element);
            matchNm++;
          }

          if (cm === length - errorCount - 1) {
            console.log("ended!");
            res.json({ db: Lists });
            res.end();
          }
          console.log(
            `Counting Nm / totla Count : ${cm} / ${
              length - errorCount - 1
            } (matching Number : ${matchNm})`
          );
          cm++;
        });
      } catch (error) {
        if (cm === length - errorCount - 1) {
          console.log("ended!");
          res.json({ db: Lists });
          res.end();
        }
        console.log(error);
        cm++;
      }
    });

    //res.json({ db: Lists }); // API return 결과가 문제있음
    //res.end();
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

  for (let a = 1; a <= 100; a += 5) {
    const db = await updateCyber(a);
    console.log(`until ${a + 4}, done!`);

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
  }

  for (let a = 1; a <= 100; a += 5) {
    const db = await updateKorea(a);
    console.log(`until ${a + 4}, done!`);

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
  }

  for (let a = 1; a <= 100; a += 5) {
    const db = await updateIncome(a);
    console.log(`until ${a + 4}, done!`);

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
  }
};
