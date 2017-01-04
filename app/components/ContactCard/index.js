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
        <CardImage src={contact.avatar} />
        <Heading
          level={2}
          size={3}
        >
          {contact.name}
        </Heading>
        <Text>
          {contact.notes}
        </Text>
      </Card>
    </Flex>
  );
}

ContactCard.propTypes = {
  contact: React.PropTypes.object,
};

export default ContactCard;
