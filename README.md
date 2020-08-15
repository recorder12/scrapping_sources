http://fakecarstock.com

To confirm whether the car is on trading or not.

안내문 : 중고차 구매를 위해 방문하기 전 검색해보세요. 유명 거래 사이트에 동일 매물이 있는지 확인해드립니다.

- [x] 보배드림 web scrapping { imageURL, pageURL, price}; --> DB에 저장
      db = [{"searchSite" : sitename, "db" : [{
      "page_URL" : page_URL, "image_URL" : image_URL, "title" : title"]}]
- [x] Node.js로 서버 구축
- [x] MongoDB에 schema 형성
- [ ] 검수할 이미지 업로드 + 기종 이름 (ex) 소나타 --> title에서 title.find("기종이름") 으로 db에서 간추린 db 가져옴 --> 이걸로 이미지 대조
- [x] teachME npm library 사용. https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image --> 업로드 이미지 사이즈, 색채 등 변경하며 교육. 모델 불러온 후 이미지별로 일치율 검사 --> 일치율 90% 이상인 경우 list 형성하여 front에 전달
- [ ] Google API 사용 ? 정확성 떨어짐. API로 이미지를 가져온 후 그걸로 teachme로 대조
- [ ] 네이버 블로그 API 사용 https://developers.naver.com/docs/search/image/ 정확성 떨어짐. (일단 보류)


작업 순서 :

1. node js 서버 구축 (front && AI factor complete) <done>
2. python 함수 연결 --> JS로 변경 <done>
3. MongoDB에 DB 저장 <done>
4. searched DB 가져오는 API 적용 
5. teachMe 구동 재확인  <done>
6. Google API 연결
7. Front-End 꾸밈 (css 추가 구성 필요, admin 부분 구성 필요)
8. Deploy

db 업데이트 방식 : 보배드림만 우선 스크래핑해서 저장하자. 어차피 가장 큰 규모의 사이트니까, 대신 모든 매물 저장

1. 스크래핑 한 결과를 dbModel Schema에 쪼개서 넣음. forEach문 사용. 처음에 보배드림에 전체 매물, 국산, 수입별로 모두 업데이트 (page를 나눠가면서 며칠에 나눠서 받든지 해서 에러 최소화)
2. db = { siteName, pageURL, imageURL, title, price}, 보배드림 Schema를 만들어서 collection을 형성
3. 추후 siteName별로 collection을 나눔
4. 매주 혹은 매일 업데이트 하는데 스크래핑을 1페이지부터 되로 가면서 10페이지씩 스크래핑 후 db에 확인. 만일 동일 pageURL이 있으면 거기서 멈춤. 이러면 스크래핑을 최소화 하면서 업데이트 가능


8/14 update API 제작 완료
Next To Do : searched DB 가져오는 API 프론트에서 적용 

