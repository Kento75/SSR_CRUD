import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import Search from '../components/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchWord,        // 検索文字列
      searchedList,      // 検索結果格納リスト  
    } = this.props;

    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Search
            searchWord={searchWord}
            searchedList={searchedList}
          />
        </div>
      </MuiThemeProvider>
    );
  }
};


// propの型指定
SearchContainer.propTypes = {
  searchWord:   PropTypes.string.isRequired,
  searchedList: PropTypes.arrayOf(PropTypes.shape({
    company_code: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    address:      PropTypes.string.isRequired,
    mail:         PropTypes.string.isRequired
  })).isRequired
}


function mapStateToProps(state) {
  const {
    searchWord,
    searchedList
  } = state.rootReducer.search;
  return {

  }
}