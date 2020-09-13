import mongoose from "mongoose";

const BobaeSchema = new mongoose.Schema({
  siteName: {
    type: String,
  },
  title: {
    type: String,
  },
  pageURL: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  price: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Bobae", BobaeSchema); //site 별로 모델을 정해놓고 나중에 타이틀로 서치
export default model;
