http://fakecarstock.com

To confirm whether the car is trading or not.

안내문 : 중고차 구매를 위해 방문하기 전 검색해보세요. 유명 거래 사이트에 동일 매물이 있는지 확인해드립니다.

- [x] 보배드림 web scrapping { imageURL, pageURL, price}; --> DB에 저장
      db = [{"searchSite" : sitename, "db" : [{
      "page_URL" : page_URL, "image_URL" : image_URL, "title" : title"]}]
- [ ] 엔카 web scrapping { imageURL, pageURL, price}; --> DB에 저장 (보류)
- [ ] Node.js로 서버 구축
- [ ] MongoDB에 schema 형성
- [ ] 검수할 이미지 업로드 + 기종 이름 (ex) 소나타 --> title에서 title.find("기종이름") 으로 db에서 간추린 db 가져옴 --> 이걸로 이미지 대조
- [ ] teachME npm library 사용. https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image --> 업로드 이미지 사이즈, 색채 등 변경하며 교육. 모델 불러온 후 이미지별로 일치율 검사 --> 일치율 90% 이상인 경우 list 형성하여 front에 전달
- [ ] Google API 사용 ? 정확성 떨어짐. API로 이미지를 가져온 후 그걸로 teachme로 대조
- [ ] 네이버 블로그 API 사용 https://developers.naver.com/docs/search/image/ 정확성 떨어짐. (일단 보류)

Python으로 매일 정해진 시각에 db 업데이트
방법은 node js에서 시간 API를 가져와서 정해진 시각이 된 경우 (새벽 3-4시쯤, 트래픽 적은 때) python 파일 내 함수 돌림 그 결과를
mongoDB에 업데이트.


Googple image 검색 --> 이미지별 teachme 대조
Bobae db와 일일히 대조
대조방식을 어떻게 할 것인가

