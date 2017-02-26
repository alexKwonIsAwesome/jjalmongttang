import React, { Component } from 'react';
import logo from '../../public/logo.svg';

class HeaderContainer extends Component {

  render() {
    return (
      <header className="grid-container">
        <div className="grid-100">
          <div id="logo"><a className="active" href="#" id="logo"><img alt="logo" src={logo} /></a></div>
            <div id="nav-list">
              <ul>
                <li><a className="active" href="#">메인</a></li>
                <li><a href="#">새 업데이트</a></li>
                <li><a href="#">하태핫태</a></li>
              </ul>
            </div>
            <div id="nav-button">
              <a href="#" className="btn btn-primary" id="jjal-upload">짤 업로드</a>
              <a href="#" className="btn btn-secondary btn-seperation">로그인</a>
              <a href="#" className="btn btn-secondary">가입</a>
            </div>
        </div>
    </header>
    );
  }
}

export default HeaderContainer;
