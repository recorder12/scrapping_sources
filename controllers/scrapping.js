import request from "request";
import cheerio from "cheerio";
import JSSoup from "jssoup";

export const updateDB = async () => {
  const page = 1;
  const URL = `https://www.bobaedream.co.kr/cyber/CyberCar.php?sel_m_gubun=ALL&page=${page}&order=S11&view_size=70`;

  useCheerio(URL);
};

const useCheerio = (URL) => {
  request(
    {
      method: "GET",
      url: URL,
    },
    (err, res, body) => {
      if (err) return console.log(err);

      let $ = cheerio.load(body);

      //console.log($(".list-inner")[0]);

      $(".list-inner")
        .keys(this)
        .forEach((key) => console.log(key, this[key]));
    }
  );
};

const useJSsoup = async (URL) => {
  const soup = await new JSSoup(URL);
  console.log(soup);
  const tag = await soup.find("head");
  console.log(tag);
};
