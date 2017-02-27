import React, { Component }from 'react';
import { connect } from 'react-redux';
import StackGrid from 'react-stack-grid';

class JjalSection extends Component {
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
          <StackGrid className="jjal-layout" columnWidth="25%" gutterWidth={20} gutterHeight={20}>
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

export default connect(mapStateToProps)(JjalSection);
