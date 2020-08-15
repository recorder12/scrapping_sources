import request from "request";
import cheerio from "cheerio";
import fetch from "node-fetch";

// To do : 10 page 완료 후 db에 siteURL 서치, 확인 결과 없으면 계속 진행, 있으면 거기까지 업데이트 후 종료

export const updateDB = async () => {
  let db = [];
  const maxPage = 2;

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
      siteName: "보배드림",
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
