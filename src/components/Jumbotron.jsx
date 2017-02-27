import React from 'react';
import SearchBar from './SearchBar';

const Jumbotron = () => (
    <div className="grid-container" id="jumbotron">
        <div className="grid-100 mobile-grid-100" id="description-container">
            <h1>짤이몽땅</h1>
            <p>것은 기관과 이것은 커다란 풍부하게 하는 그리하였는가? <br/>고동을 미인을 곳으로 그들의 바이며, 별과 몸이 뛰노는 운다.<br/>갑 영원히 아니한 꽃 곳이 보는 사라지지 같이 것이다.대중을 같지 갑 쓸쓸하랴? </p>
        </div>
        <div className="grid-50 tablet-grid-70 mobile-grid-100 prefix-25 suffix-25 tablet-prefix-15 tablet-suffix-15" id="search-container">
          <SearchBar />
        </div>
    </div>
)

export default Jumbotron;
