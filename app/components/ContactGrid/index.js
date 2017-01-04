/**
*
* ContactGrid
*
*/

import React from 'react';
import { Flex } from 'reflexbox';
import {
  Text,
} from 'rebass';

import ContactCard from 'components/ContactCard';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


function ContactGrid({ contacts }) {
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

ContactGrid.propTypes = {
  contacts: React.PropTypes.array,
};

export default ContactGrid;
