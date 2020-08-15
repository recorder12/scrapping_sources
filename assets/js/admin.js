import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const updateButton = document.getElementById("admin__button");
const input = document.getElementById("admin__input");
const returnValue = document.getElementById("return__value");

const postAPI = async () => {
  const password = input.value;
  if (!password) {
    init();
    return;
  }

  const response = await axios({
    url: "/api/update",
    method: "POST",
    data: {
      password,
    },
  });

  if (response.status !== 200) {
    returnValue.innerHTML = "server disconnected";
  } else {
    returnValue.innerHTML = response.data.text;
  }
};

const init = () => {
  updateButton.addEventListener("click", postAPI);
};
if (updateButton) {
  init();
}
