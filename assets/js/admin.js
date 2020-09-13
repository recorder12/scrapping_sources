import axios from "axios";

const updateButton = document.getElementById("admin__button");
const input = document.getElementById("admin__input");
const returnValue = document.getElementById("return__value");

async function postAPI() {
  console.log("click");

  const password = input.value;

  // const response = await axios({
  //   url: "/api/update",
  //   method: "POST",
  //   data: {
  //     password,
  //   },
  // });

  // if (response.status !== 200) {
  //   returnValue.innerHTML = "server disconnected";
  // } else {
  //   returnValue.innerHTML = response.data.text;
  // }
}

function init() {
  updateButton.addEventListener("click", postAPI);
  console.log(updateButton);
}

if (updateButton) {
  init();
}
