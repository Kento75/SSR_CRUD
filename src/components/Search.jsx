import React, { Compponent, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';


const Search = ({
  searchWord,
  searchedList,
  isAddMode
}) => (
  <div>
    <div>
      <TextField hintText="検索ワード" floatingLabelText="Enterで検索" value={ searhWord } />
    </div>
    <div>
      <Table>
        <TableBody displayRowChckbox={false}>
          { searchedList.map(searchedData =>
            <TableRow>
              <TableRowColumn>{ searchedData.company_code }</TableRowColumn>
              <TableRowColumn>{ searchedData.company_name }</TableRowColumn>
              <TableRowColumn>{ searchedData.address }</TableRowColumn>
              <TableRowColumn>{ searchedData.mail }</TableRowColumn>
            </TableRow>
          ) }
        </TableBody>
      </Table>
    </div>
  </div>
)

// 各propの型指定
Search.propTypes = {
  searchWord:    PropTypes.string.isRequired,
  searchedList:  PropTypes.arrayOf(PropTypes.shape({
    company_code: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    address:      PropTypes.string.isRequired,
    mail:         PropTypes.string.isRequired
  })).isRequired
}