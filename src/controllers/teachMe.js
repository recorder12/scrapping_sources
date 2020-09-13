/*

import * as tf from "@tensorflow/tfjs";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import imagetoBase64 from "image-to-base64";

export const teachMe = async (img, data) => {
  const imgURL = data.imageURL;
  const img0 = tf.browser.fromPixels(img);
  //load model
  const classifier = knnClassifier.create();
  const net = await mobilenetModule.load();
  console.log("Successfully loaded model");
  //teach class
  const activation = net.infer(img0, "conv_preds");
  classifier.addExample(activation, 1);

  //match images
  const x = net.infer(convertImg(imgURL), "conv_preds");
  const result = await classifier.predictClass(x);
  console.log("Activation", x);
  console.log("result", result);
};

const convertImg = (imgURL) => {
  imagetoBase64(imgURL) // Image URL
    .then((response) => {
      console.log(response); // "iVBORw0KGgoAAAANSwCAIA..."
      return response;
    })
    .catch((error) => {
      console.log(error); // Logs an error if there was one
    });
};

*/
