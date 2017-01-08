/*
 *
 * EditContactsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
          <ContactForm
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
