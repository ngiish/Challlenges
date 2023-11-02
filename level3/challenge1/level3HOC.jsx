//A simple code example of a Higher-Order Component:

import React from 'react';

// Define a Higher-Order Component
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component has mounted');
    }

    componentWillUnmount() {
      console.log('Component is about to unmount');
    }

    render() {
      // Render the wrapped component with any additional props
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Create a regular component
const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// Wrap the component with the Higher-Order Component
const EnhancedComponent = withLogger(MyComponent);

// Render the enhanced component
ReactDOM.render(<EnhancedComponent name="John" />, document.getElementById('root'));


