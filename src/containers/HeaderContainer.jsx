import React, { Component } from 'react';
import logo from '../../public/logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderContainer extends Component {
  switchPane() {
    if (this.props.isLoggedIn) {
      return (
        <div id="nav-button" className="auth">
          <div className="nav-button-group">
            <a href="#" className="btn btn-primary" id="jjal-upload">짤 업로드</a>
            <a href="#" className="btn btn-secondary">내 줍줍</a>
          </div>
          <a href="#" id="profile-image">
            <img alt="user-profile" className="image-circle" src="image/facebook-profile-2.jpg"/>
          </a>
        </div>
      )
    }

    return (
      <div id="nav-button">
        <a href="#" className="btn btn-primary" id="jjal-upload">짤 업로드</a>
        <a href="#" className="btn btn-secondary btn-seperation">로그인</a>
        <a href="#" className="btn btn-secondary">가입</a>
      </div>
    )
  }

  render() {
    return (
      <header className="grid-container">
        <div className="grid-100">
          <div id="logo"><Link className="active" to="/" id="logo"><img alt="logo" src={logo} /></Link></div>
            <div id="nav-list">
              <ul>
                <li><a className="active" href="#">메인</a></li>
                <li><a href="#">새 업데이트</a></li>
                <li><a href="#">하태핫태</a></li>
              </ul>
            </div>
            {this.switchPane()}
        </div>
    </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(HeaderContainer);
