/*
 *
 * EditContactsPage
 *
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from 'rebass';
import { Flex } from 'reflexbox';

// TODO: consider moving auth DUCKS to HomePage
// import * as actions from './actions';
// import * as globalActions from 'containers/App/actions';

import {
} from 'containers/App/selectors';

import {
} from './selectors';

import ContactForm from 'components/ContactForm';


export class EditContactsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    submitAuth: React.PropTypes.func,
    submitSignUp: React.PropTypes.func,
    submitContact: React.PropTypes.func,
    requestContacts: React.PropTypes.func,
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
          <ContactForm
            title="Update Contact"
            submitForm={() => {}}
          />
        </Flex>
      </Flex>
    );
  }
}

const styles = {
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContactsPage);
