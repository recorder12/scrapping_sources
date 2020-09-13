import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "fakecarstock";
  res.locals.routes = routes;
  res.locals.description =
    "'FakeCarStock' 은 넷상에 존재하는 유사 차량 이미지를 검색하여 제공하는 사이트입니다. 실매물 검색은 제공하지 않으며 이를 위해 하단에 링크된 실매물 검색 사이트 사용을 추천드립니다. ";
  next();
};
