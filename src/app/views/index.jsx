import escapeHtml from 'escape-html';
import Layout from './layout';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const index = React.createClass({

  render: function() {
    return (
      <Layout title={this.props.title}>
        <div id="content">
        </div>
      </Layout>
    );
  }
});

export default index;