// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';
// This Info component is a regular React component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);
// regular Javascript function
//pass in regular component
//return HOC component
// spread props means ALL props get passed
const withAdminWarning = (WrappedComponent) => {

  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} _ />
    </div>

  );
};
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please provide your authentication information</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="Here are the details" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Here are the details" />, document.getElementById('app'));