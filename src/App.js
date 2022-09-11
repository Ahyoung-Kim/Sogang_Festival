import './App.css';
import { Reset } from 'styled-reset'
import { Routes, Route } from "react-router-dom";

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      {/* 스타일 리셋 */}
      <Reset />

      {/* 헤더 */}
      <Header />

      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<div>메인</div>} />

        {/* 플리마켓/마당 페이지 */}
        <Route path="/flea-market" element={<div>플리마켓/마당</div>}>
          <Route path=":day" element={<div></div>} />
          <Route path=":flea_id" element={<div></div>} />
        </Route>

        {/* 푸드 트럭 페이지 */}
        <Route path="/food-truck" element={<div>푸드 트럭</div>}>
          <Route path=":day" element={<div></div>} />
          <Route path=":food_id" element={<div></div>} />
        </Route>

        {/* 공연 일정 페이지 */}
        <Route path="/schedule" element={<div>공연일정</div>} />

      </Routes>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default App;
