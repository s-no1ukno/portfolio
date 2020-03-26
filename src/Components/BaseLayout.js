import React from 'react';
import ProminentAppBar from './ProminentAppBar'
import Copyright from './Copyright'

export default function About(props) {
  return (
    <div>
      <ProminentAppBar />
      {props.children}
      <Copyright />
    </div>
  );
}