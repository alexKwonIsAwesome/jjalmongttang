import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import InstanceSection from '../containers/InstanceSection';

const JjalInstance = (props) => (
  <div>
    <HeaderContainer />
    <InstanceSection jjalId={props.params.id}/>
  </div>
)

export default JjalInstance;
