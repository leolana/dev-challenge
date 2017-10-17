import React, {Component} from 'react';
import AppSearchBar from './AppSearchBar.jsx';
import ListTweets from './ListTweets.jsx';
import Page from './Page.jsx'

class Content extends Component {

  render() {
    return (
      <Page>
        <div id="search-bar">
          <AppSearchBar 
            onChange={this.onChangeInput}
          />
        </div>
        <div id="list-tweets">
          <ListTweets />
        </div>
      </Page>
    );
  }
};

export default Content;
