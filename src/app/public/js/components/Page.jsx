import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Page extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="page">
            {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Page;
