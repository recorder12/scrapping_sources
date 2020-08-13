const classifier = knnClassifier.create();
const button = document.getElementById("search");
let net;
let imgWidth;
let imgHeight;

const app = async () => {
  const img = document.getElementById("car-image");
  const carModel = document.getElementById("car-model").value;
  if (!img) {
    prompt("upload car image!!");
    init();
    return;
  }
  imgWidth = img.width;
  imgHeight = img.height;

  console.log("Loading mobilenet..");

  // Load the model.
  net = await mobilenet.load();
  console.log("Successfully loaded model");
  //get image to educate class

  //get activate
  const activation = net.infer(img, true);
  //clssify the image
  classifier.addExample(activation, 1);

  let imageURL =
    "https://file4.bobaedream.co.kr/direct/2020/07/29/CA14441596001360_1.jpg";

  const img0 = getBase64FromImageUrl(imageURL);

  console.log(img0);

  const x = net.infer(img0, "conv_preds");
  const result = await classifier.predictClass(x);

  console.log(result.label);
  console.log(result.confidences[result.label]);
};

function getBase64FromImageUrl(url) {
  var img = new Image();

  img.setAttribute("crossOrigin", "anonymous");

  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(this, 0, 0);

    var dataURL = canvas.toDataURL("image/png");
  };

  img.src = url;
  img.width = imgWidth;
  img.height = imgHeight;
  return img;
}

const init = () => {
  button.addEventListener("click", app);
};

init();

/*



import axios from "axios";

const searchButton = document.getElementById("search");
const uploadImg = document.getElementById("car-image");
const inputCar = document.getElementById("car-model");
const imageFile = document.getElementById("preview");

let carModel = "";

const postImage = async (image, carModel) => {
  const response = await axios({
    url: "/api/search",
    method: "POST",
    data: {
      image,
      carModel,
    },
  });

  if ((response.status = 200)) {
    console.log("searching is done!");
  }
};

const handleSubmit = () => {
  carModel = inputCar.value;
  console.log(imageFile);
  console.log(typeof imageFile);

  if (imageFile.src) {
    postImage(imageFile, carModel);
  } else {
    init(); //나중에 플래쉬 메세지 추가. "이미지를 업로드 해주세요"
    console.log("No image");
  }
};


const handleImg = (event) => {
  event.preventDefault();
  imageFile.src = URL.createObjectURL(event.target.files[0]);
  console.log(imageFile.src);
};

const init = () => {
  searchButton.addEventListener("click", handleSubmit);
  uploadImg.addEventListener("change", handleImg);
};

init();

*/
