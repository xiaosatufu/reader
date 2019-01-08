import React, { Component } from "react";

import { connect } from "react-redux";
import { getUrlPrmt } from "../../common/js/utils";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    // console.log(getUrlPrmt())
    const keywords = getUrlPrmt().keywords;
  }
  render() {
    const { searchTxt } = this.props;
    return <div>searchpage{searchTxt}</div>;
  }
}

const mapStateProps = state => ({
  searchTxt: state.getIn(["header", "searchTxt"])
});

const mapDispatchProps = dispatch => ({
    
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(SearchPage);
