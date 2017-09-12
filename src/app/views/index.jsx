import escapeHtml from 'escape-html';
import Layout from './layout';
import AppBarExampleIconButton from './AppBarExampleIconButton';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const index = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    list: React.PropTypes.array
  },
  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  },
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  },

  render: function() {
    return (
      <Layout title={this.props.title}>
        <div id="content">
          <AppBarExampleIconButton />
        </div>
      </Layout>
    );
  }
});

export default index;