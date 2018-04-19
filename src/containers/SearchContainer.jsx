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

// Storeに変化があったときに呼ばれる。
// propsの値を変化させる。
// ※ 上記のrender()でSearchに流しているpropsを変更
function mapStateToProps(state) {
  const {
    searchWord,
    searchedList
  } = state.rootReducer.search;
  return {

  }
}

// Storeの監視
// 変化があった場合mapStateTOPropsを実行して、
// searchcontainerのpropsを変更する。
export default connect(
  mapStateToProps
)(SearchContainer);
