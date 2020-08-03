import requests
from bs4 import BeautifulSoup

max_Page = 50

def get_page_URLS(): ## page별 url 가져옴
  page_URLS = []
  for page in range(1, max_Page + 1):
    URL = f"https://www.bobaedream.co.kr/cyber/CyberCar.php?sel_m_gubun=ALL&page={page}&order=S11&view_size=70"
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser")
    container = soup.find_all("div", {"class": "list-inner"}) 
    
    for arr in container:
      link = arr.find("a")["href"]
      link = f"https://bobaedream.co.kr{link}"
      page_URLS.append(link)    
    print(f"{(page/max_Page)*100}% loading")

  print("Bobe_db is updated!!")
  return page_URLS

def get_page_inform(page): 
  image_URLS = []
  result = requests.get(page)
  soup = BeautifulSoup(result.text, "html.parser")
  price = soup.find("span", {"class" : "price"}).find("b").string
  images = soup.find_all("img", {"alt" : "차량사진"})

  for image in images:
    src = image["src"]
    image_URL = f"https:{src}"
    image_URLS.append(image_URL)
  return [image_URLS, price]

def update_db():
  Bobe_db = []  
  page_URLS = get_page_URLS()

  for page in page_URLS:
    page_inform = get_page_inform(page)
    image_URL = page_inform[0]
    price = page_inform[1]
    page_inform = { 'page_URL' : page, 'image_URL' : image_URL, 'price': price }
    print("loading...")
    Bobe_db.append(page_inform)

  return Bobe_db