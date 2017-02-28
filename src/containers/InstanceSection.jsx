import React, { Component } from 'react';

import { connect } from 'react-redux';

class InstanceSection extends Component {
  render() {
    return (
      <div id="instance-section">
        <div className="grid-container">
            <div className="grid-66 tablet-grid-80 mobile-grid-100 tablet-prefix-10 tablet-suffix-10" id="grid-instance">
              <figure>
                <img alt="jjal instance" src={this.props.jjal.source} />
              </figure>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const jjalId = parseInt(ownProps.jjalId, 10);
  const jjals = state.jjals;
  
  let jjal = jjals.find(jjal => jjal.id === jjalId);
  return {
    jjal: jjal
  };
}

export default connect(mapStateToProps)(InstanceSection);
