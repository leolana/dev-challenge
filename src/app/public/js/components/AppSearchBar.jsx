import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconActionSearch from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

class AppSearchBar extends React.Component {
  constructor() {
    super();    
    this.searchTerms = this.searchTerms.bind(this);
    this.searchTweets = this.searchTweets.bind(this);
    this.state = {
      dataSource: ["aa", "bb"],
    };
  }

  searchTerms() {
    console.log("Terms");
  }

  searchTweets() {
    console.log("Tweets");
  }

  render() {
    return (
      <AppBar
        iconElementLeft={<FlatButton onClick={this.search} icon={<IconActionSearch />}/>}
      >
        <AutoComplete 
          hintText="Pesquise o termo aqui (#acesso)"
          dataSource={this.state.dataSource}
          onUpdateInput={this.searchTerms}
          onNewRequest={this.searchTweets}
          fullWidth={true}
        />
      </AppBar>
    );
  }
};

export default AppSearchBar;