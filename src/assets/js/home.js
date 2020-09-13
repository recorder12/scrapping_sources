import axios from "axios";
const searchButton = document.getElementById("search");
const resultContainer = document.getElementById("jsList");

const app = async () => {
  searchButton.removeEventListener("click", app);
  const carModel = document.getElementById("car-model").value;
  const uploadedImg = document.getElementById("car-image");
  const img1 = uploadedImg.src;
  if (document.getElementById("lists")) {
    document.getElementById("lists").remove();
  }

  if (img1 === "http://localhost:4000/") {
    alert("차량 이미지를 업로드해주세요");
    init();
    return;
  }

  if (!carModel || carModel === "" || carModel === " " || carModel === "  ") {
    alert("차량 모델명을 입력해주세요");
    init();
    return;
  }

  makeDelay();

  const response = await axios({
    url: "/api/search",
    method: "POST",
    data: {
      carModel,
      img1,
    },
  });

  const Lists = await response.data.db;
  console.log("done!");
  displayList(Lists);
  init();
};

const makeDelay = () => {
  const delayBox = document.createElement("div");
  delayBox.className = "delayBox";
  delayBox.id = "delayBox";

  const moveBar1 = document.createElement("div");
  const moveBar2 = document.createElement("div");
  const moveBar3 = document.createElement("div");
  const moveBar4 = document.createElement("div");
  const moveBar5 = document.createElement("div");
  moveBar1.className = "moving";
  moveBar2.className = "moving";
  moveBar3.className = "moving";
  moveBar4.className = "moving";
  moveBar5.className = "moving";
  moveBar1.id = "moveBar1";
  moveBar2.id = "moveBar2";
  moveBar3.id = "moveBar3";
  moveBar4.id = "moveBar4";
  moveBar5.id = "moveBar5";
  delayBox.appendChild(moveBar1);
  delayBox.appendChild(moveBar2);
  delayBox.appendChild(moveBar3);
  delayBox.appendChild(moveBar4);
  delayBox.appendChild(moveBar5);
  resultContainer.appendChild(delayBox);
};

const displayList = (array) => {
  document.getElementById("delayBox").remove();

  if (document.getElementById("lists")) {
    document.getElementById("lists").remove();
  }

  const lists = document.createElement("div");
  lists.id = "lists";
  resultContainer.appendChild(lists);

  if (array.length === 0) {
    const noMatch = document.createElement("span");
    noMatch.className = "noMatch";
    noMatch.innerHTML = "검색된 결과가 없습니다.";
    lists.appendChild(noMatch);
    return;
  }

  array.forEach((element) => {
    const listsChild = document.createElement("div");
    const spanBox = document.createElement("div");
    const link = document.createElement("a");
    const title = document.createElement("span");
    const price = document.createElement("span");
    const image = document.createElement("img");

    listsChild.className = "listsChild";
    spanBox.className = "spanBox";
    title.className = "title";
    price.className = "price";
    image.className = "image";

    title.innerHTML = "글 제목 : " + element.title;
    price.innerHTML = "가격 : " + element.price + " (만원)";
    link.href = element.pageURL;
    link.target = "_blank";
    image.src = element.imageURL;
    image.width = 300;

    lists.appendChild(listsChild);
    listsChild.appendChild(link);
    link.appendChild(spanBox);
    link.appendChild(image);
    spanBox.appendChild(title);
    spanBox.appendChild(price);
  });
};

const init = () => {
  searchButton.addEventListener("click", app);
};

if (searchButton) {
  init();
}
