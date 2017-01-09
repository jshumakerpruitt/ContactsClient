/*
 *
 * EditContactsPage
 *
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { initialize } from 'redux-form/immutable';
import { Button } from 'rebass';
import { Flex } from 'reflexbox';

// TODO: consider moving auth DUCKS to HomePage
// import * as actions from './actions';
// import * as globalActions from 'containers/App/actions';

import {
} from 'containers/App/selectors';
import * as actions from './actions';

import {
  selectContact,
} from './selectors';


import ContactForm from 'components/ContactForm';


export class EditContactsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contact: React.PropTypes.object,
    updateContact: React.PropTypes.func,
    requestContact: React.PropTypes.func,
    params: React.PropTypes.object,
    initialize: React.PropTypes.func,
  }

  componentDidMount() {
    // get the id from the url
    // request that contact from the server
    // so we know it's fresh
    const { params } = this.props;
    if (params && params.id) {
      this.props.requestContact(params.id);
    }
  }

  componentDidUpdate() {
    // prefil the form with values returned from server
    this.props.initialize('contact', this.props.contact);
  }

  render() {
    return (
      <Flex
        style={styles.homePage}
        px={1}
        flexColumn
        flexAuto
        justify="center"
        align="center"
      >
        <Flex
          col={12}
          flexAuto
          flexColumn
          align="center"
        >
          <Link to="/">
            <Button
              backgroundColor="warning"
              color="white"
              inverted
              rounded
            >
              Cancel
            </Button>
          </Link>
          {this.props.contact ?
            <ContactForm
              title="Update Contact"
              submitForm={this.props.updateContact}
            /> : ''}
        </Flex>
      </Flex>
    );
  }
}

const styles = {
};

const mapStateToProps = createStructuredSelector({
  contact: selectContact(),
});

export default
connect(mapStateToProps, { ...actions, initialize })(EditContactsPage);
