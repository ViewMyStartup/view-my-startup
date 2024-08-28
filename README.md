<div align=center>
	<span id="top">
	<h1>View My Startup</h1><br>

<h3>스타트업 정보 확인 및 모의 투자 서비스</h3><br>

<b>[View My Startup 바로가기](https://deploy-preview-36--team4-vms.netlify.app/)</b> <br>

<br> 
</div>

<details>
<summary>목차</summary>
  
1. [서비스 소개](#app)
2. [팀 소개](#team)
3. [기술 및 개발 환경](#dev)
4. [개발 일정](#schedule)
5. [역할 분담](#roles)
6. [구현 기능](#feature)
7. [컨벤션](#convention)
8. [프로젝트 구조](#tree)
9. [협업 문화](#culture)
10. [이슈 관리](#issues)
11. [버그 관리](#bug)

</details>
<br>

## <span id="app">📈 1. 서비스 소개</span>

<b>'View My Startup'</b>은 개인 투자자들이 스타트업의 정보를 쉽게 확인하고, 가상 투자 및 기업 간 비교를 통해 투자 결정을 모의 체험할 수 있는 서비스입니다. <br>

- **스타트업 정보 조회:** 전체 스타트업 목록에서 기업의 투자금액, 매출액 등을 비교할 수 있습니다.
- **기업 간 비교:** 최대 5개의 기업을 선택하여 상세한 비교 결과를 확인할 수 있습니다.
- **가상 투자:** 가상 투자 기능을 통해 원하는 스타트업에 투자하고, 투자 내역을 관리할 수 있습니다.
- **순위 및 선택 현황 조회:** 각 기업의 투자 순위 및 선택된 횟수를 조회할 수 있습니다.
- **투자 내역 수정 및 삭제:** 가상 투자 내역을 쉽게 수정하거나 삭제할 수 있습니다.

<br><br>

## <span id="team">🧑🏻‍💻👩🏻‍💻 2. 팀 소개</span>

| 고종민                                                                          | 김현우                                                                           | 김민서                                                                           | 김소희                                                                            | 정준호                                                                            |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/70881483?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/158241915?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/101076926?v=4" width="200px"/> | <img src= "https://avatars.githubusercontent.com/u/170756509?v=4" width="200px"/> | <img src= "https://avatars.githubusercontent.com/u/173429698?v=4" width="200px"/> |
| [charlieko123](https://github.com/charlieko123)                                 | [Accreditus](https://github.com/Accreditus)                                      | [claudia99503](https://github.com/claudia99503)                                  | [S2OHEE](https://github.com/S2OHEE)                                               | [J-Jun5](https://github.com/J-Jun5)                                               |

<br><br>

## <span id="dev">🛠️ 3. 기술 및 개발 환경</span>

### Frontend

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white">

### Backend

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white">

### Database

<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white">

### Design

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### 협업방식

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

### 배포

<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"> <img src="https://img.shields.io/badge/render-000000?style=for-the-badge&logo=render&logoColor=white">

<br><br>

## <span id="schedule">📅 4. 개발 일정</span>

<div align="center">
	
</div>

<br><br>

## <span id="roles">📝 5. 역할 분담</span>

### 고종민

🎶 공통 컴포넌트

- SearchBar
- CompanyCard
- MessagePopUpOneBtn
- MessagePopUpTwoBtn

🎨 프론트엔드

- 기업 전체 리스트 페이지 구현
- 기업 리스트 조회 API를 호출하여 페이지네이션, 검색, 정렬된 데이터를 화면에 렌더링

🛠️ 백엔드

- 기업 비교 API (POST /api/companies/compare)
  - 최대 5개 기업 비교 기능 구현
  - 누적 투자 금액, 매출액, 고용 인원에 따른 정렬 기능 구현
  - 비교 결과 반환 기능 포함
  - 내 기업의 순위와 근접한 기업 조회 기능
    - 내 기업의 순위와 근접한 위 2개, 아래 2개 기업의 정보 조회
    - 내 기업의 순위가 중간이 아닌 경우, 내 기업 포함 최대 5개 기업 조회

<br>
  
### 김현우

🎶 공통 컴포넌트

- LargeBtn
- MediumBtn
- ModalInvestMent
- ModalInvestMentUpdate
- ModalSelect

🎨 프론트엔드

- 기업 상세 페이지 구현
- 기업 상세 조회 API를 호출하여 해당 기업의 정보와 가상 투자 내역을 화면에 렌더링 / 투자자 댓글 추가, 삭제기능 호출
- 404 페이지 구현

🛠️ 백엔드

- 가상 투자 생성 API (POST /api/investments)
  - 투자자 이름, 투자 금액, 투자 코멘트, 비밀번호 포함
  * 가상 투자자 상세조회, 순위정렬 API (GET /api/investments/:id)
  - 투자자 이름, 투자 금액, 투자 코멘트, 비밀번호, 순위 포함 조회

<br>

### 김민서

🎶 공통 컴포넌트

- TextareaBar
- Dropdown
- DropdownSmallSize
- AddCompanyBtn
- CompareCompanyBtn
- CompareOtherCompanyBtn
- ResetBtn
- ModalPassword

🎨 프론트엔드

- 나의 기업 비교 페이지 구현
- 기업 비교 API를 호출하여 나의 기업과 선택한 기업의 비교 결과를 화면에 렌더링

🛠️ 백엔드

- 기업 리스트 조회 API (GET /api/companies)
  - 페이지네이션, 검색, 정렬 기능 포함

<br>

### 김소희

🎶 공통 컴포넌트

- Pagenation
- InputBar
- CompanyInfoList

🎨 프론트엔드

- 투자 현황 페이지 구현
- 투자 현황 API를 호출하여 전체 스타트업의 투자 정보를 화면에 렌더링

🛠️ 백엔드

- 데이터베이스 모델링
- 기업 상세 조회 API (GET /api/companies/<company_id>)
  - 기업 정보와 가상 투자 정보 포함

<br>

### 정준호

🎶 공통 컴포넌트

- CompanyInfoPerRow
- HeaderColumn
- PageNav

🎨 프론트엔드

- 투자 현황 페이지 구현
- 가상 투자 수정 및 삭제 API를 호출하여 투자 정보를 수정 및 삭제하고, 이를 화면에 렌더링

🛠️ 백엔드

- 가상 투자 수정 API (PUT /api/investments/<investment_id>)
  - 비밀번호 확인 후 투자 정보 수정 기능 구현
- 가상 투자 삭제 API (DELETE /api/investments/<investment_id>)
  - 비밀번호 확인 후 투자 정보 삭제 기능 구현

<br>
<br>

## <span id="feature">✨ 6. 구현 기능</span>

- 🔗 [기업 전체 리스트 페이지](https://github.com/ViewMyStartup/view-my-startup/blob/main/vms_fe/src/pages/DefaultPage.js)
- 🔗 [기업 상세 페이지](https://github.com/ViewMyStartup/view-my-startup/blob/main/vms_fe/src/pages/CompanyInvestDetail.js)
- 🔗 [나의 기업 비교 페이지](https://github.com/ViewMyStartup/view-my-startup/blob/main/vms_fe/src/pages/MyCompanyCompare.js)
- 🔗 [비교 현황 페이지](https://github.com/ViewMyStartup/view-my-startup/blob/main/vms_fe/src/pages/CurrentStateCompare.js)
- 🔗 [투자 현황 페이지](https://github.com/ViewMyStartup/view-my-startup/blob/main/vms_fe/src/pages/CurrentStateInvest.js)

### **API 명세**

| **API 이름**         | **엔드포인트**             | **메서드** | **설명**                                                            | **요청 매개변수**                                                                                                                                                                  | **응답 본문(성공 시)**                                                                                                                                        | **에러 응답 예시**                                                                                                                                                                                                                                                                                                       |
| -------------------- | -------------------------- | ---------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 기업 리스트 조회 API | /api/companies             | GET        | 전체 기업 리스트를 조회하는 API. 페이지네이션, 검색, 정렬 기능 제공 | `page` (정수, 선택)<br>`limit` (정수, 선택)<br>`search` (문자열, 선택)<br>`sort_by` (문자열, 선택)<br>`order` (문자열, 선택)                                                       | 페이지 번호, 한 페이지당 기업 수, 총 기업 수, 기업 정보 목록 포함<br>기업 정보: id, name, logoUrl, description, category, totalInvestment, revenue, employees | `{"error": "기업 리스트를 가져오는 중 오류가 발생했습니다."}`                                                                                                                                                                                                                                                            |
| 기업 상세조회 API    | /api/companies/:companyId  | GET        | 특정 기업의 상세 정보를 가져오는 API                                | `companyId` (정수, 필수, URL 매개변수)                                                                                                                                             | 기업 상세 정보: id, name, logoUrl, description, category, totalInvestment, revenue, employees, investments                                                    | `{"error": "찾으시는 기업이 존재하지 않습니다."}`                                                                                                                                                                                                                                                                        |
| 기업 비교 API        | /api/companies/compare     | POST       | 기업들의 비교 정보를 가져오고, 선택한 기업들의 선택 횟수를 증가시킴 | `companyIds` (배열, 필수)<br>`myCompanyId` (정수, 선택)<br>`sortBy` (문자열, 선택)<br>`order` (문자열, 선택)<br>`includeRank` (불린, 선택)<br>`checkMyCompanyRanking` (불린, 선택) | 비교된 기업들의 정보 배열<br>기업 정보: id, name, logoUrl, description, category, totalInvestment, revenue, employees, selections, rank (선택 사항)           | `{"error": "기업 ID는 1개이상 6개이하 제공되어야 합니다."}`<br>`{"error": "내 기업 ID는 제공된 기업 ID 목록에 포함되어야 합니다."}`<br>`{"error": "정렬 기준이 유효하지 않습니다."}`<br>`{"error": "기업 비교 정보를 가져오는 중 오류가 발생했습니다."}`                                                                 |
| 투자자 생성 API      | /investments               | POST       | 투자자 정보를 생성하는 API                                          | 요청 바디:<br>`companyId` (정수)<br>`investorName` (문자열)<br>`investmentAmount` (정수)<br>`investmentComment` (문자열)<br>`password` (문자열)                                    | 투자자 정보: companyId, investorName, investmentAmount, investmentComment, password                                                                           | 필드 누락: `{"status": 404, "code": "RESOURCE_NOT_FOUND", "message": "해당 회사 정보가 존재하지 않습니다", "identifier": "RESOURCE_ERROR", "occuredAt": "날짜"}`<br> 서버 에러: `{"status": 500, "code": "DATABASE_ERROR", "message": "예상 외 에러가 발생했습니다", "identifier": "SYSTEM_ERROR", "occuredAt": "날짜"}` |
| 투자자 상세조회 API  | /investments/:investmentId | GET        | 특정 투자자의 상세 정보를 조회하는 API                              | `investmentId` (정수, 필수, URL 매개변수)                                                                                                                                          | 투자자 정보: companyId, investorName, investmentAmount, investmentComment, password<br>총 투자 수와 순위 포함                                                 | `{"status": 404, "code": "RESOURCE_NOT_FOUND", "message": "해당 투자 정보가 존재하지 않습니다", "identifier": "RESOURCE_ERROR", "occuredAt": "날짜"}`                                                                                                                                                                    |
| 투자 정보 수정 API   | /api/investments/:id       | PUT        | 특정 투자 정보를 수정하는 API                                       | `id` (정수, 필수, URL 매개변수)                                                                                                                                                    | 수정된 투자 정보: id, companyId, investorName, investmentAmount, investmentComment, password                                                                  | `{"error": "해당 투자 정보가 존재하지 않습니다."}`                                                                                                                                                                                                                                                                       |
| 투자 정보 삭제 API   | /api/investments/:id       | DELETE     | 특정 투자 정보를 삭제하는 API                                       | `id` (정수, 필수, URL 매개변수)                                                                                                                                                    | (응답 본문 없음)                                                                                                                                              | `{"error": "해당 투자 정보가 존재하지 않습니다."}`                                                                                                                                                                                                                                                                       |

<br>
<br>

## <span id="convention">🖌️ 7. 컨벤션</span>

### Git 컨벤션

| Emoji | Code                          | 기능     | Description              |
| ----- | ----------------------------- | -------- | ------------------------ |
| ✨    | `:sparkles:`                  | Feat     | 새 기능                  |
| ♻️    | `:recycle:`                   | Refactor | 코드 리팩토링            |
| 📦    | `:wrench:`                    | Chore    | 리소스 수정/삭제         |
| 🐛    | `:bug:`                       | Fix      | 버그 수정                |
| 📝    | `:memo:`                      | Docs     | 문서 추가/수정           |
| 🎨    | `:art:`                       | Style    | UI/스타일 파일 추가/수정 |
| 🎉    | `:tada:`                      | Init     | 프로젝트 시작 / Init     |
| ✅    | `:white_check_mark:`          | Test     | 테스트 추가/수정         |
| ⏪    | `:rewind:`                    | Rewind   | 변경 사항 되돌리기       |
| 🔀    | `:twisted_rightwards_arrows:` | Merge    | 브랜치 합병              |
| 🗃     | `:card_file_box:`             | DB       | 데이터베이스 관련 수정   |
| 💡    | `:bulb:`                      | Comment  | 주석 추가/수정           |
| 🚀    | `:rocket:`                    | Deploy   | 배포                     |

<br>

### Code 컨벤션

- **변수/함수**
  - Camel 표기법 사용 (상수는 대문자)
- **컴포넌트/파일명**
  - Pascal 표기법 사용
- **이미지 파일**
  - Snake 표기법 사용 - `(형태)(의미)(순서)_(상태)` / 예: `btn_login_001_off.png`
- **ClassName** - Kebab 표기법 사용
  <br>

## <span id="tree">🌱 8. 프로젝트 구조</span>

### **🎨 프론트엔드**

- public/favicon/ : 파비콘
- src/assets/ : 전역에서 사용
- src/components/ : 공통 컴포넌트
- src/pages/ : 서비스에 사용되는 각 페이지
- src/routes/ : 페이지 라우팅

```
📦vms_fe
 ┣ 📂public
 ┃ ┣ 📜favicon.png
 ┃ ┗ 📜index.html
 ┗ 📂src
 ┃ ┣ 📂API
 ┃ ┃ ┗ 📜api.js
 ┃ ┃ ┗ 📜CompanyInvestDetailAPI.js
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📂mock_img
 ┃ ┃ ┃ ┃ ┣ 📜company_temp.svg
 ┃ ┃ ┃ ┃ ┣ 📜logo_desktop_tablet.svg
 ┃ ┃ ┃ ┃ ┗ 📜logo_mobile.svg
 ┃ ┃ ┃ ┣ 📜company_logo_1.svg
 ┃ ┃ ┃ ┣ 📜company_logo_2.svg
 ┃ ┃ ┃ ┣ 📜company_logo_3.svg
 ┃ ┃ ┃ ┣ 📜company_logo_4.svg
 ┃ ┃ ┃ ┣ 📜company_logo_5.svg
 ┃ ┃ ┃ ┣ 📜ic_check.svg
 ┃ ┃ ┃ ┣ 📜ic_circle.svg
 ┃ ┃ ┃ ┣ 📜ic_delete.svg
 ┃ ┃ ┃ ┣ 📜ic_delete_circle_small.svg
 ┃ ┃ ┃ ┣ 📜ic_kebab.svg
 ┃ ┃ ┃ ┣ 📜ic_minus.svg
 ┃ ┃ ┃ ┣ 📜ic_password_eye_close.svg
 ┃ ┃ ┃ ┣ 📜ic_password_eye_open.svg
 ┃ ┃ ┃ ┣ 📜ic_plus.svg
 ┃ ┃ ┃ ┣ 📜ic_restart.svg
 ┃ ┃ ┃ ┣ 📜ic_search.svg
 ┃ ┃ ┃ ┣ 📜ic_toggle.svg
 ┃ ┃ ┃ ┣ 📜logo_desktop_tablet.svg
 ┃ ┃ ┃ ┗ 📜logo_mobile.svg
 ┃ ┃ ┣ 📂mock
 ┃ ┃ ┃ ┣ 📜mockData.js
 ┃ ┃ ┃ ┗ 📜userData.js
 ┃ ┃ ┗ 📜temp.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜AddCompanyBtn.js
 ┃ ┃ ┃ ┣ 📜AddCompanyBtn.module.css
 ┃ ┃ ┃ ┣ 📜CompanyCard.js
 ┃ ┃ ┃ ┣ 📜CompanyCard.module.css
 ┃ ┃ ┃ ┣ 📜CompanyDataPerRow.js
 ┃ ┃ ┃ ┣ 📜CompanyDataPerRow.module.css
 ┃ ┃ ┃ ┣ 📜CompanyDataPerRowNoRank.js
 ┃ ┃ ┃ ┣ 📜CompanyDataPerRowNoRank.module.css
 ┃ ┃ ┃ ┣ 📜CompareCompanyBtn.js
 ┃ ┃ ┃ ┣ 📜CompareCompanyBtn.module.css
 ┃ ┃ ┃ ┣ 📜CompareOtherCompanyBtn.js
 ┃ ┃ ┃ ┣ 📜CompareOtherCompanyBtn.module.css
 ┃ ┃ ┃ ┣ 📜Dropdown.js
 ┃ ┃ ┃ ┣ 📜Dropdown.module.css
 ┃ ┃ ┃ ┣ 📜DropdownMiddleSize.js
 ┃ ┃ ┃ ┣ 📜DropdownMiddleSize.module.css
 ┃ ┃ ┃ ┣ 📜DropdownSmallSize.js
 ┃ ┃ ┃ ┣ 📜DropdownSmallSize.module.css
 ┃ ┃ ┃ ┣ 📜HeaderColumns.js
 ┃ ┃ ┃ ┣ 📜HeaderColumns.module.css
 ┃ ┃ ┃ ┣ 📜InputBar.js
 ┃ ┃ ┃ ┣ 📜InputBar.module.css
 ┃ ┃ ┃ ┣ 📜InvestmentComment.js
 ┃ ┃ ┃ ┣ 📜InvestmentComment.module.css
 ┃ ┃ ┃ ┣ 📜LargeBtn.js
 ┃ ┃ ┃ ┣ 📜LargeBtn.module.css
 ┃ ┃ ┃ ┣ 📜MediumBtn.js
 ┃ ┃ ┃ ┣ 📜MediumBtn.module.css
 ┃ ┃ ┃ ┣ 📜OutlineBtn.js
 ┃ ┃ ┃ ┣ 📜OutlineBtn.module.css
 ┃ ┃ ┃ ┣ 📜Pagination.js
 ┃ ┃ ┃ ┣ 📜Pagination.module.css
 ┃ ┃ ┃ ┣ 📜ResetBtn.js
 ┃ ┃ ┃ ┣ 📜ResetBtn.module.css
 ┃ ┃ ┃ ┣ 📜SearchBar.js
 ┃ ┃ ┃ ┣ 📜SearchBar.module.css
 ┃ ┃ ┃ ┣ 📜SearchBarSmall.js
 ┃ ┃ ┃ ┣ 📜SearchBarSmall.module.css
 ┃ ┃ ┃ ┣ 📜SelectBtn.js
 ┃ ┃ ┃ ┗ 📜SelectBtn.module.css
 ┃ ┃ ┣ 📜DataRowSetRender.js
 ┃ ┃ ┣ 📜DataRowSetRender.module.css
 ┃ ┃ ┣ 📜DataRowSetRenderNoRank.js
 ┃ ┃ ┣ 📜DataRowSetRenderNoRank.module.css
 ┃ ┃ ┣ 📜MessagePopUpOneBtn.js
 ┃ ┃ ┣ 📜MessagePopUpOneBtn.module.css
 ┃ ┃ ┣ 📜MessagePopUpTwoBtn.js
 ┃ ┃ ┣ 📜MessagePopUpTwoBtn.module.css
 ┃ ┃ ┣ 📜ModalInvestment.js
 ┃ ┃ ┣ 📜ModalInvestment.module.css
 ┃ ┃ ┣ 📜ModalInvestmentUpdate.js
 ┃ ┃ ┣ 📜ModalInvestmentUpdate.module.css
 ┃ ┃ ┣ 📜ModalPassword.js
 ┃ ┃ ┣ 📜ModalPassword.module.css
 ┃ ┃ ┣ 📜ModalSelectComparision.js
 ┃ ┃ ┣ 📜ModalSelectComparision.module.css
 ┃ ┃ ┣ 📜ModalSelectMyEnterprise.js
 ┃ ┃ ┣ 📜ModalSelectMyEnterprise.module.css
 ┃ ┃ ┣ 📜PageNav.js
 ┃ ┃ ┣ 📜PageNav.module.css
 ┃ ┃ ┣ 📜companyInfoList.js
 ┃ ┃ ┣ 📜companyItem.js
 ┃ ┃ ┗ 📜companyItem.module.css
 ┃ ┣ 📂context
 ┃ ┃ ┗ 📜CompanyDataContext.js
 ┃ ┃ ┗ 📜DropdownContext.js
 ┃ ┃ ┗ 📜ModalContext.js
 ┃ ┃ 📂hook
 ┃ ┃ ┗ 📜usePageHandler.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜CompanyInvestDetail.js
 ┃ ┃ ┣ 📜CompanyInvestDetail.module.css
 ┃ ┃ ┣ 📜CurrentStateCompare.js
 ┃ ┃ ┣ 📜CurrentStateCompare.module.css
 ┃ ┃ ┣ 📜CurrentStateInvest.js
 ┃ ┃ ┣ 📜CurrentStateInvest.module.css
 ┃ ┃ ┣ 📜DefaultPage.js
 ┃ ┃ ┣ 📜DefaultPage.module.css
 ┃ ┃ ┣ 📜MyCompanyCompare.js
 ┃ ┃ ┗ 📜MyCompanyCompare.module.css
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜reset.css
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜convertTo100mil.js
 ┃ ┃ ┗ 📜similarity.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┗ 📜test.js
```

### **🛠️ 백엔드**

- prisma/ :
- seeders/ :
- src/errors/ :
- src/middlewares/ :
- src/routes/ : 기업 및 가상 투자 API

```
📦vms_be
 ┣ 📂prisma
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📂20240819094145_init
 ┃ ┃ ┃ ┗ 📜migration.sql
 ┃ ┃ ┗ 📂20240820003106_add
 ┃ ┃ ┃ ┗ 📜migration.sql
 ┃ ┗ 📜schema.prisma
 ┣ 📂public
 ┃ ┗ 📜test.js
 ┣ 📂seeders
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜company_logo_1.svg
 ┃ ┃ ┣ 📜company_logo_2.svg
 ┃ ┃ ┣ 📜company_logo_3.svg
 ┃ ┃ ┣ 📜company_logo_4.svg
 ┃ ┃ ┗ 📜company_logo_5.svg
 ┃ ┣ 📜CompanyData.js
 ┃ ┣ 📜CompanySelectionData.js
 ┃ ┣ 📜investmentData.js
 ┃ ┣ 📜seedCompany.js
 ┃ ┣ 📜seedCompanySelection.js
 ┃ ┗ 📜seedInvestment.js
 ┣ 📂src
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜CommonException.js
 ┃ ┃ ┗ 📜CustomExceptions.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📜asyncHandler.js
 ┃ ┃ ┗ 📜errorHandler.js
 ┃ ┣ 📂models
 ┃ ┃ ┗ 📜temp.js
 ┃ ┗ 📂routes
 ┃ ┃ ┣ 📜companyRoutes.js
 ┃ ┃ ┗ 📜investmentRoutes.js
 ┣ 📂utils
 ┃ ┗ 📜temp.js
 ┣ 📜api_test.http
 ┗ 📜server.js
```

<br><br>

## <span id="culture">💪 9. 협업 문화</span>

- 일시: 월, 수, 금 오후 5시 ~ 7시 고정 + 평일 추가 상황 발생 시, 문제 상황이 있을 때마다 실시간으로 바로 피드백
- 내용: PR 내용 발표 및 코드 리뷰, 진행 상황 점검, 추가 이후 계획 논의

<br>

## <span id="issues">핵심 코드</span>

<br>

## <span id="bug">버그 문제</span>

<br>
<br>
