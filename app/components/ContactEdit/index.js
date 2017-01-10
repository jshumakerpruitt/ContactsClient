/**
 *
 * Contact
 *
 */

import React from 'react';

import { Flex } from 'reflexbox';
import {
  Button,
  ButtonCircle,
} from 'rebass';
import Icon from 'react-geomicons';

import ContactForm from 'components/ContactForm';

class ContactEdit extends React.Component {
  static propTypes = {
    contact: React.PropTypes.object,
    onDismiss: React.PropTypes.func,
    onDelete: React.PropTypes.func,
    toggleEdit: React.PropTypes.func,
    submitForm: React.PropTypes.func,
  };

  onDeleteClick() {
    this.props.onDelete(this.props.contact.id);
    this.props.onDismiss();
  }

  render() {
    const { contact } = this.props;

    return (
      <Flex
        style={styles.container}
        flexColumn
        align="center"
        px={3}
        py={0}
        m={0}
      >
        <Flex
          col={12}
          flexAuto
          justify="flex-end"
        >
          <ButtonCircle
            color="black"
            backgroundColor="white"
            onClick={this.props.onDismiss}
          >
            <Icon name="close" />
          </ButtonCircle>
        </Flex>
        <Flex
          col={12}
          p={0}
          mt={3}
          style={styles.imgWrapper}
        >
          <Flex
            flexColumn
            col={12}
            align="center"
          >
            <ContactForm
              title="Update Contact"
              submitForm={this.props.submitForm}
              contact={contact}
              initialValues={contact}
            />
            <Button
              px={3}
              mb={3}
              theme="error"
              className="delete-button"
              onClick={this.props.toggleEdit}
            >
              <Flex
                justify="space-between"
                align="center"
              >
                <Icon
                  name="close"
                />
                <Flex px={1}>
                Cancel
                </Flex>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

const styles = {
  container: {
    overflow: 'hidden',
    width: '90vw',
    boxSizing: 'border-box',
    borderRadius: '2px',
    backgroundColor: '#fff',
  },
  imgWrapper: {
    borderRadius: '2px',
    overflow: 'clip',
  },
};
export default ContactEdit;
