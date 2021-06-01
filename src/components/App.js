import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Header from "./Header";
import AllProduct from "./AllProduct";
import DetailProduct from "./DetailProduct";
import KindsProduct from "./KindsProduct";
import AreaProduct from "./AreaProduct";
import AddProduct from "./AddProduct";
import Home from "./Home";
import SearchProduct from "./SearchProduct";
import SelectKinds from "./SelectKinds";
import UpdateProduct from "./UpdateProduct";
import SendMail from "./SendMail";
import Footer from "./Footer";

function App() {
  const area0 = [
    { name: "선택하세요", index: 0 },
    { name: "서울특별시", index: 1 },
    { name: "인천광역시", index: 2 },
    { name: "대전광역시", index: 3 },
    { name: "광주광역시", index: 4 },
    { name: "대구광역시", index: 5 },
    { name: "울산광역시", index: 6 },
    { name: "부산광역시", index: 7 },
    { name: "경기도", index: 8 },
    { name: "강원도", index: 9 },
    { name: "충청북도", index: 10 },
    { name: "충청남도", index: 11 },
    { name: "전라북도", index: 12 },
    { name: "전라남도", index: 13 },
    { name: "경상북도", index: 14 },
    { name: "경상남도", index: 15 },
    { name: "제주도", index: 16 },
  ];

  const area1 = [
    [],
    [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    [
      "계양구",
      "남구",
      "남동구",
      "동구",
      "부평구",
      "서구",
      "연수구",
      "중구",
      "강화군",
      "옹진군",
    ],
    ["대덕구", "동구", "서구", "유성구", "중구"],
    ["광산구", "남구", "동구", "북구", "서구"],
    ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
    ["남구", "동구", "북구", "중구", "울주군"],
    [
      "강서구",
      "금정구",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
      "기장군",
    ],
    [
      "고양시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안성시",
      "안양시",
      "양주시",
      "오산시",
      "용인시",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
      "가평군",
      "양평군",
      "여주군",
      "연천군",
    ],
    [
      "강릉시",
      "동해시",
      "삼척시",
      "속초시",
      "원주시",
      "춘천시",
      "태백시",
      "고성군",
      "양구군",
      "양양군",
      "영월군",
      "인제군",
      "정선군",
      "철원군",
      "평창군",
      "홍천군",
      "화천군",
      "횡성군",
    ],
    [
      "제천시",
      "청주시",
      "충주시",
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "증평군",
      "진천군",
      "청원군",
    ],
    [
      "계룡시",
      "공주시",
      "논산시",
      "보령시",
      "서산시",
      "아산시",
      "천안시",
      "금산군",
      "당진군",
      "부여군",
      "서천군",
      "연기군",
      "예산군",
      "청양군",
      "태안군",
      "홍성군",
    ],
    [
      "군산시",
      "김제시",
      "남원시",
      "익산시",
      "전주시",
      "정읍시",
      "고창군",
      "무주군",
      "부안군",
      "순창군",
      "완주군",
      "임실군",
      "장수군",
      "진안군",
    ],
    [
      "광양시",
      "나주시",
      "목포시",
      "순천시",
      "여수시",
      "강진군",
      "고흥군",
      "곡성군",
      "구례군",
      "담양군",
      "무안군",
      "보성군",
      "신안군",
      "영광군",
      "영암군",
      "완도군",
      "장성군",
      "장흥군",
      "진도군",
      "함평군",
      "해남군",
      "화순군",
    ],
    [
      "경산시",
      "경주시",
      "구미시",
      "김천시",
      "문경시",
      "상주시",
      "안동시",
      "영주시",
      "영천시",
      "포항시",
      "고령군",
      "군위군",
      "봉화군",
      "성주군",
      "영덕군",
      "영양군",
      "예천군",
      "울릉군",
      "울진군",
      "의성군",
      "청도군",
      "청송군",
      "칠곡군",
    ],
    [
      "거제시",
      "김해시",
      "마산시",
      "밀양시",
      "사천시",
      "양산시",
      "진주시",
      "진해시",
      "창원시",
      "통영시",
      "거창군",
      "고성군",
      "남해군",
      "산청군",
      "의령군",
      "창녕군",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],
    ["서귀포시", "제주시", "남제주군", "북제주군"],
  ];

  const productKinds = [
    { kind: "전자제품", loca: "elec" },
    { kind: "의류/악세사리", loca: "clothes" },
    { kind: "가구/인테리어", loca: "furniture" },
    { kind: "유아용품", loca: "kids" },
    { kind: "게임/취미", loca: "game" },
    { kind: "뷰티/미용", loca: "beauty" },
    { kind: "도서/티켓/음반", loca: "document" },
    { kind: "생활/가공식품", loca: "life" },
    { kind: "스포츠/레저", loca: "sports" },
    { kind: "기타 중고물품", loca: "etc" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            modalOpen1={modalOpen1}
            setModalOpen1={setModalOpen1}
          />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp area0={area0} area1={area1} />
          </Route>
          <Route exact path="/allproduct">
            <AllProduct />
          </Route>
          <Route path="/areaproduct">
            <AreaProduct area0={area0} area1={area1} />
          </Route>
          <Route path="/addproduct">
            <AddProduct productKinds={productKinds} />
          </Route>
          <Route path="/selectkinds">
            <SelectKinds productKinds={productKinds} />
          </Route>
          <Route path="/updateproduct/:id">
            <UpdateProduct productKinds={productKinds} />
          </Route>
          <Route path="/allproduct/:id">
            <DetailProduct setModalOpen={setModalOpen} />
          </Route>
          <Route path="/kindproduct/:kinds">
            <KindsProduct productKinds={productKinds} />
          </Route>
          <Route path="/search/:keyword">
            <SearchProduct />
          </Route>
          <Route path="/sendmail/:product_id">
            <SendMail />
          </Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
