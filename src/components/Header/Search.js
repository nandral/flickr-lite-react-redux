import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import * as Actions from '../../actions/types';

// const Header = () => {
class Search extends React.Component {
  handleSearch = event => {
    const searchText = event.target.value;
    this.props.search(searchText);
  };

  componentDidMount() {
    this.props.search(null);
  }
  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Start typing to search flickr ..."
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: searchText => dispatch({ type: Actions.SEARCH_REQUEST, payload: searchText })
  };
};

export default connect(null, mapDispatchToProps)(Search);
