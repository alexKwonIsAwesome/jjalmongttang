import React, { Component }from 'react';
import { connect } from 'react-redux';
import StackGrid from 'react-stack-grid';
import sizeMe from 'react-sizeme';

class JjalSection extends Component {
  handleColumnWidth() {
    if (this.props.size.width >= 1024) {
      return "25%"
    } else if (this.props.size.width >= 768 && this.props.size.width < 1024 ) {
      return "33.33%"
    } else if (this.props.size.width < 768) {
      return "50%"
    }
  }
  
  renderJjals() {
    return (
      this.props.jjals.map((jjal) => (
        <div key={jjal.id}>
          <figure>
            <img alt="love" src={jjal.source} />
          </figure>
        </div>
      ))
    )
  }

  render() {
    return (
      <div id="jjal-section">
        <div className="grid-container">
          <StackGrid className="jjal-layout" columnWidth={this.handleColumnWidth()} gutterWidth={20} gutterHeight={20} duration={0} monitorImagesLoaded={true}>
            {this.renderJjals()}
          </StackGrid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    jjals: state.jjals
  };
}

export default connect(mapStateToProps)(sizeMe()(JjalSection));
