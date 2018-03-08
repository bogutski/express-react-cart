import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class SearchField extends Component {
  changeSearch(v) {
    const re = new RegExp(v, 'ig');
    const filtered = this.props.productList.filter(el => el.name.match(re));
    console.log(filtered);
  }

  render() {
    return (
      <InputGroup>
        <Input onChange={e => this.changeSearch(e.target.value)} />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField));
