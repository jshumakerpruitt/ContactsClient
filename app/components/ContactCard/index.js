/**
*
* ContactCard
*
*/

import React from 'react';
import { Flex } from 'reflexbox';
import {
  Card,
  CardImage,
  Heading,
  Text,
} from 'rebass';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ContactCard({ contact }) {
  return (
    <Flex>
      <Card
        rounded
        width={256}
        backgroundColor="white"
      >
        <CardImage
          src={contact.avatar
            || 'http://placehold.it/320/08e/fff'}
        />
        <Heading
          level={2}
          size={3}
        >
          {contact.name || 'Add Name'}
        </Heading>
        <Text>
          {contact.email || 'Add Email Address'}
        </Text>
        <Text>
          {contact.phone || 'Add Phone Number'}
        </Text>
        <Text>
          {contact.address || 'Add Address'}
        </Text>
        <Text>
          {contact.organization || 'Add and Organization'}
        </Text>
        <Text>
          {contact.notes || 'Add a Note'}
        </Text>
      </Card>
    </Flex>
  );
}

ContactCard.propTypes = {
  contact: React.PropTypes.object,
};

export default ContactCard;
