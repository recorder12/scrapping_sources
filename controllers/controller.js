import { teachMe } from "./teachMe";

export const home = (req, res) => {
  res.render("homeback2", { PageTitle: "Home" });
};

export const postSearch = (req, res) => {
  //Uploaded image, car keyword post

  const {
    body: { image, carModel },
  } = req;
};

export const getLogin = (req, res) => {
  res.render("admin");
};

export const postLogin = (req, res) => {
  const {
    body: { password },
  } = req;
  if (password === process.env.password) {
    //env에 집어넣음
    start(); // python function
  }
};

export const postUpdate = (req, res) => {};
