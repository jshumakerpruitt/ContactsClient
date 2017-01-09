/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Flex } from 'reflexbox';
import { Button } from 'rebass';

// TODO: consider moving auth DUCKS to HomePage
import * as actions from './actions';
import * as globalActions from 'containers/App/actions';
const mergedActions = { ...actions, ...globalActions };

import {
  selectToken,
  selectAuthError,
} from 'containers/App/selectors';

import AuthBox from 'components/AuthBox';
import ContactGrid from 'containers/ContactGrid';
import ContactForm from 'components/ContactForm';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    token: React.PropTypes.string,
    submitAuth: React.PropTypes.func,
    submitSignUp: React.PropTypes.func,
    submitContact: React.PropTypes.func,
    requestContacts: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { formHidden: false };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ formHidden: !this.state.formHidden });
  }

  render() {
    const { token } = this.props;

    return (
      <Flex
        style={styles.homePage}
        px={1}
        flexColumn
        flexAuto
        justify="center"
        align="center"
      >
        {token ?
          <Flex
            col={12}
            flexAuto
            flexColumn
            align="center"
          >
            <Button
              onClick={this.toggleForm}
              style={styles.submit}
              type="submit"
              className="submitButton"
              backgroundColor="primary"
              color="white"
              inverted
              rounded
            >
              {this.state.formHidden ? '+ Add Contact' : 'x Close'}
            </Button>
            { this.state.formHidden ? <Flex m={2}/> :
              <ContactForm
                title="Create Contact"
                submitForm={this.props.submitContact}
              />}
            <ContactGrid requestContacts={this.props.requestContacts} />
          </Flex>
        :
          <AuthBox
            submitSignUp={this.props.submitSignUp}
            submitAuth={this.props.submitAuth}
          />}
      </Flex>
    );
  }
}

const styles = {
};

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
  authError: selectAuthError(),
});

export default connect(mapStateToProps, mergedActions)(HomePage);
