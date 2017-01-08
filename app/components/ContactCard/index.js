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
  Button,
} from 'rebass';

function ContactCard({ contact = {}, showContact, width }) {
  const gravatarUrl =
    `https://www.gravatar.com/avatar/${contact.gravatar || 'blank'}?s=260`;
  return (
    <Flex>
      <Card
        rounded
        backgroundColor="white"
        style={{ maxWidth: width }}
      >
        <CardImage
          src={gravatarUrl}
        />
        <Flex
          flexAuto
          flexColumn
          style={{ overflowX: 'hidden' }}
        >
          <Heading
            level={2}
            size={3}
          >
            {contact.name || 'Add Name'}
          </Heading>
          <Text>
            {contact.organization || 'Add an Organization'}
          </Text>
          <Text>
            {contact.email || 'Add Email Address'}
          </Text>
          <Text>
            {contact.phone || 'Add Phone Number'}
          </Text>
        </Flex>
        <Button
          onClick={showContact}
          style={{}}
          type="submit"
          className="submitButton"
          backgroundColor="primary"
          color="white"
          inverted
          rounded
        >
          +
        </Button>
      </Card>
    </Flex>
  );
}

ContactCard.propTypes = {
  contact: React.PropTypes.object,
  showContact: React.PropTypes.func,
  width: React.PropTypes.number,
};

export default ContactCard;
