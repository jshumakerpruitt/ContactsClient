/**
 * ContactGrid
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectContacts,
} from 'containers/HomePage/selectors';


import { Flex } from 'reflexbox';
import {
  Text,
} from 'rebass';

import ContactCard from 'components/ContactCard';


export class ContactGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestContacts: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.requestContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <Flex
        wrap
        justify="center"
      >
        {contacts.length === 0 ? <Text>No Contacts Found.</Text> : ''}
        {contacts.map((contact, i) =>
          <Flex key={i} p={0} mx={2} my={1}>
            <ContactCard contact={contact} />
          </Flex>
         )}
      </Flex>
    );
  }
}

ContactGrid.propTypes = {
  contacts: React.PropTypes.array,
};

// TODO: use reselect
const mapStateToProps = createStructuredSelector({
  contacts: selectContacts(),
});

export default connect(mapStateToProps)(ContactGrid);
