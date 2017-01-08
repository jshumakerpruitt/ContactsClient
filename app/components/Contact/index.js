/**
 *
 * Contact
 *
 */

import React from 'react';
import { Flex } from 'reflexbox';
import {
  Heading,
  Text,
  Button,
  ButtonCircle,
} from 'rebass';
import Icon from 'react-geomicons';


function Contact({ contact = {}, onDismiss }) {
  const gravatarUrl =
    `https://www.gravatar.com/avatar/${contact.gravatar || 'blank'}?s=260`;
  return (
    <Flex
      style={styles.container}
      flexColumn
      align="center"
      p={0}
      m={0}
    >
      <Flex
        flexAuto
        col={12}
        justify="flex-end"
      >
        <ButtonCircle
          color="black"
          backgroundColor="white"
          onClick={onDismiss}
        >
          <Icon name="close" />
        </ButtonCircle>
      </Flex>
      <Flex
        p={0}
        mt={3}
        style={styles.imgWrapper}
      >
        <img
          className="profile-pic"
          src={gravatarUrl}
          alt="profile"
        />
      </Flex>
      <Flex
        flexColumn
      >
        <Flex p={2} flexColumn>
          <Heading
            size={1}
            level={1}
          >
            {contact.name}
          </Heading>
          <Text>
            {contact.organization}
          </Text>
          <Text>
            {contact.email}
          </Text>
          <Text>
            {contact.phone}
          </Text>
          <Text>
            {contact.address}
          </Text>
          <Text>
            {contact.birthdate}
          </Text>
          <Flex my={1}>
            <Flex >
              <Button
                theme="primary"
                className="edit-button"
              >
                Edit
              </Button>
            </Flex>
            <Flex mx={1}>
              <Button
                theme="error"
                className="delete-button"
              >
                Delete
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

Contact.propTypes = {
  contact: React.PropTypes.object,
  onDismiss: React.PropTypes.func,
};

const styles = {
  container: {
    overflow: 'hidden',
    maxWidth: '90vw',
    boxSizing: 'border-box',
    borderRadius: '2px',
    backgroundColor: '#fff',
  },
  imgWrapper: {
    borderRadius: '2px',
    overflow: 'clip',
  },
};
export default Contact;
