export const home = (req, res) => {
  res.render("home", { PageTitle: "Home" });
};

export const postSearch = (req, res) => {
  //Uploaded image, car keyword post
  const {
    body: { image, carName },
  } = req;
};

export const result = (req, res) => {
  res.render("result", resultList);
};

export const getAdmin = (req, res) => {
  res.render("admin");
};

export const postAdmin = (req, res) => {
  const {
    body: { password },
  } = req;
  if (password === process.env.password) {
    //env에 집어넣음
    start(); // python function
  }
};
