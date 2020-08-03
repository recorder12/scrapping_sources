import requests
from bs4 import BeautifulSoup
import time

max_Page = 100


def update_cyber_db():  # page별 url 가져옴

    db = []  # pagrurl, imageurl, title, price

    for page in range(1, max_Page + 1):

        URL = f"https://www.bobaedream.co.kr/cyber/CyberCar.php?sel_m_gubun=ALL&page={page}&order=S11&view_size=70"

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
        container = soup.find_all("div", {"class": "list-inner"})

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


def update_korean_db():  # page별 url 가져옴

    db = []  # pagrurl, imageurl, title, price

    for page in range(1, max_Page + 1):
        URL = f"https://bobaedream.co.kr/mycar/mycar_list.php?gubun=K&page={page}&order=S11&view_size=70"

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
        container = soup.find_all("div", {"class": "list-inner"})

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

            data = {"page_URL": page_URL,
                    "image_URL": image_URL, "title": title}
            db.append(data)
        time.sleep(3)
        print(f"{(page/max_Page)*100}% loading")

    print("Bobe_korean_db is updated!!")
    return db


def update_foreign_db():  # page별 url 가져옴

    db = []  # pagrurl, imageurl, title, price

    for page in range(1, max_Page + 1):
        URL = f"https://bobaedream.co.kr/mycar/mycar_list.php?gubun=I&page={page}&order=S11&view_size=70"

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
        container = soup.find_all("div", {"class": "list-inner"})

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

            data = {"page_URL": page_URL,
                    "image_URL": image_URL, "title": title}
            db.append(data)

        time.sleep(3)
        print(f"{(page/max_Page)*100}% loading")

    print("Bobe_foreign_db is updated!!")
    return db
