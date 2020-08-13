http://fakecarstock.com

To confirm whether the car is trading or not.

안내문 : 중고차 구매를 위해 방문하기 전 검색해보세요. 유명 거래 사이트에 동일 매물이 있는지 확인해드립니다.

- [x] 보배드림 web scrapping { imageURL, pageURL, price}; --> DB에 저장
      db = [{"searchSite" : sitename, "db" : [{
      "page_URL" : page_URL, "image_URL" : image_URL, "title" : title"]}]
- [ ] 엔카 web scrapping { imageURL, pageURL, price}; --> DB에 저장 (보류)
- [x] Node.js로 서버 구축
- [ ] MongoDB에 schema 형성
- [ ] 검수할 이미지 업로드 + 기종 이름 (ex) 소나타 --> title에서 title.find("기종이름") 으로 db에서 간추린 db 가져옴 --> 이걸로 이미지 대조
- [ ] teachME npm library 사용. https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image --> 업로드 이미지 사이즈, 색채 등 변경하며 교육. 모델 불러온 후 이미지별로 일치율 검사 --> 일치율 90% 이상인 경우 list 형성하여 front에 전달
- [ ] Google API 사용 ? 정확성 떨어짐. API로 이미지를 가져온 후 그걸로 teachme로 대조
- [ ] 네이버 블로그 API 사용 https://developers.naver.com/docs/search/image/ 정확성 떨어짐. (일단 보류)

Googple image 검색 --> 이미지별 teachme 대조
Bobae db와 일일히 대조
대조방식을 어떻게 할 것인가

API server 사용 x, node JS + python function 사용하되 내가 수시로 "/admin창으로 들어간 뒤 login, password에 고유 비번 만든 뒤 입력창 만들어 두고 post 했을 때 db update 가동, 그 결과 디스플레이 or console.log

작업 순서 :

1. node js 서버 구축 (front && AI factor complete)
2. python 함수 연결 --> JS로 변경 (complete)
3. MongoDB에 DB 저장 --> today
4. teachMe 적용 (완료)
5. Google API 연결
6. Front-End 형성 (css 추가 구성 필요, admin 부분 구성 필요)
7. Deploy
