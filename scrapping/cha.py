import requests
from bs4 import BeautifulSoup
import time

max_Page = 2


def update_cyber_db():  # page별 url 가져옴

    db = []  # pagrurl, imageurl, title, price

    for page in range(1, max_Page + 1):

        URL = f"https://www.kbchachacha.com/public/search/main.kbc#!?_menu=buy&page={page}&sort=-orderDate"

        try:
            result = requests.get(URL)

        except:
            print("server error!")
            time.sleep(3)
            result = requests.get(URL)
            while(result.status_code != 200):
                print("server error!")
                time.sleep(3)
                result = requests.get(URL)

        soup = BeautifulSoup(result.text, "html.parser")
        container = soup.find("div", {"class": "list-in"})
        print(container)

        """
s
        for arr in container:
            href = arr.find("a")["href"]
            block = arr.find("img")
            page_URL = f"https://bobaedream.co.kr{href}"

            if(block):
                image_block = block["src"]
                if(image_block):
                    image_URL = "https:" + block["src"]
                else:
                    continue
            else:
                continue

            title = block["alt"]

            data = {"page_URL": page_URL, "image_URL": image_URL,
                    "title": title, "price": "사이트에서 확인"}
            db.append(data)

        time.sleep(3)
        print(f"{(page/max_Page)*100}% loading")

    print("Bobe_cyber_db is updated!!")
    return db

"""


update_cyber_db()
