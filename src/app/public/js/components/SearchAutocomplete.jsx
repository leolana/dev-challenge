import React, {Component} from 'react';
import Autocomplete  from 'material-ui/Autocomplete';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

class SearchAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue: inputValue
    }, function() {
      self.performSearch();
    });
  }

  performSearch() {
    const
      self = this,
      url  = googleAutoSuggestURL + this.state.inputValue;

    if(this.state.inputValue !== '') {
      JSONP(url, function(error, data) {
        let searchResults, retrievedSearchTerms;

        if(error) return error;

        searchResults = data[1];

        retrievedSearchTerms = searchResults.map(function(result) {
          return result[0];
        });

        self.setState({
          dataSource: retrievedSearchTerms
        });
      });
    }
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
        dataSource    = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInput} />
      </MuiThemeProvider
  }
}

export default SearchAutocomplete;