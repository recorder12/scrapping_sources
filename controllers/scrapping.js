import request from "request";
import cheerio from "cheerio";
import fetch from "node-fetch";

export const updateDB = async () => {
  let db = [{ siteName: "BobaeDream" }];
  const maxPage = 3;

  for (let page = 1; page < maxPage; page++) {
    let URL = `https://www.bobaedream.co.kr/cyber/CyberCar.php?sel_m_gubun=ALL&page=${page}&order=S11&view_size=70`;

    const updatedDB = await getDB(URL);
    db = db.concat(updatedDB);

    await delay(5000);

    console.log(
      `Bobae DB Update : ${((page / maxPage) * 100).toFixed(2)}% updating...`
    );
  }

  return db;
};

const getDB = async (URL) => {
  let response = await fetch(URL);

  while (response.status !== 200) {
    console.log("disconnect error!");
    response = await fetch(URL);
  }

  console.log(response.status);

  const body = await response.text();

  await delay(2000);

  let $ = cheerio.load(body);
  let partialDB = [];
  let data = {};
  $(".list-inner").each(function (i, e) {
    const pageURL = `https://www.bobaedream.co.kr/${$(this)
      .attr("class", "mode-cell thumb")
      .find("a")
      .attr("href")}`;
    const imageURL = `https:${$(this)
      .attr("class", "mode-cell thumb")
      .find("img")
      .attr("src")}`;
    const title = $(this)
      .attr("class", "mode-cell title")
      .find("p")
      .find("a")
      .attr("title");

    const price = $(this)
      .attr("class", "mode-cell price")
      .find("strong")
      .first()
      .text();

    data = {
      pageURL: pageURL,
      imageURL: imageURL,
      title: title,
      price: price,
    };

    partialDB.push(data);
  });

  return new Promise((res) => res(partialDB));
};

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
