import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "fakecarstock";
  res.locals.routes = routes;
  res.locals.description =
    "FakecarStock은 유사 차량 이미지를 검색하여 제공하는 사이트입니다. 허위매물 사기를 예방하는데 참조하시길 바랍니다. 하지만, 유사 이미지 검색이 많은 경우 반드시 허위매물임을 의미하지 않습니다. 본 사이트는 정보만을 제공할 뿐 사용자의 어떠한 결단에도 법적 책임을 지지 않습니다.";
  next();
};
