import axios from "axios";
const searchButton = document.getElementById("search");
const resultContainer = document.getElementById("jsList");
const uploadedImg = document.getElementById("car-image");

const app = async () => {
  const carModel = document.getElementById("car-model").value;

  if (!uploadedImg) {
    prompt("upload car image!!"); // 추후 수정 input 창이 없게
    init();
    return;
  }

  if (!carModel || carModel === "") {
    // 추후 수정
    prompt("Input Car Model!!");
    init();
    return;
  }

  const img1 = uploadedImg.src;

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
  //console.log(Lists);

  // const Lists = [
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  //   {
  //     pageURL:
  //       "https://www.bobaedream.co.kr//cyber/CyberCar_view.php?no=731075&gubun=I",
  //     title: "마세라티 르반떼 3.0 S 그란스포츠",
  //     imageURL:
  //       "https://file2.bobaedream.co.kr/pds/CyberCar/5/731075/thum5_731075.jpg",
  //     price: 3000,
  //   },
  // ];

  displayList(Lists);
  //searchButton.addEventListener("click", removeList);
};

const displayList = (array) => {
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
