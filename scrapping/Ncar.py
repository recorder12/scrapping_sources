import requests
from bs4 import BeautifulSoup


max_Page = 2


def update_korea_db():  # page별 url 가져옴

    db = []  # pagrurl, imageurl, title, price

    for page in range(1, max_Page + 1):
        URL = f"http://www.encar.com/dc/dc_carsearchlist.do?carType=kor&searchType=model&TG.R=A#!%7B%22action%22%3A%22%22%2C%22toggle%22%3A%7B%7D%2C%22layer%22%3A%22%22%2C%22sort%22%3A%22ModifiedDate%22%2C%22page%22%3A{page}%2C%22limit%22%3A%2250%22%7D"

        soup = BeautifulSoup(URL, "html.parser")

        table = soup.find("table", {"summary": "일반등록 차량목록-차량정보, 지역, 지역/등록일"})

        print(table)

        #elements = table.tbody.find_all("tr")

        """
    for tr in elements:
      print(tr)


      href = arr.find("a")["href"]
      block = arr.find("img")
      page_URL = f"https://bobaedream.co.kr{href}"
      image_URL = "https:" + block["src"]
      title = block["alt"]

      data = { "page_URL" : page_URL, "image_URL" : image_URL,
          "title" : title, "price" : "사이트에서 확인" }
      db.append(data)

    print(f"{(page/max_Page)*100}% loading")
    

    print("Ncar_korea_db is updated!!")
    return db
    """
