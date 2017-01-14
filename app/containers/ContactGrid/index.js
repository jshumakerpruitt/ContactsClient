/**
 * ContactGrid
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from 'containers/HomePage/actions';

import {
  selectContacts,
  selectContactIds,
} from 'containers/HomePage/selectors';

import { Flex } from 'reflexbox';
import {
  Text,
  Overlay,
} from 'rebass';

import ContactCard from 'components/ContactCard';
import ContactEdit from 'components/ContactEdit';
import Contact from 'components/Contact';

export class ContactGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestContacts: React.PropTypes.func,
    contacts: React.PropTypes.object,
    contactIds: React.PropTypes.array,
    deleteContact: React.PropTypes.func,
    updateContact: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      idx: 1,
      edit: false,
      danger: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
  }

  componentDidMount() {
    this.props.requestContacts();
  }

  openOverlay(idx) {
    this.setState({ overlay: true, idx });
  }

  closeOverlay() {
    this.setState({ overlay: false, edit: false, danger: false });
  }

  handleDelete() {
    this.props.deleteContact(this.state.idx);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  toggleDanger() {
    this.setState({ danger: !this.state.danger });
  }

  render() {
    const { contacts } = this.props;

    return (
      <Flex
        wrap
        justify="center"
        p={0}
        m={0}
      >
        <Overlay
          onDismiss={this.closeOverlay}
          open={this.state.overlay}
          style={{ maxHeight: '100vh',
            overflowY: 'auto',

          }}
        >
          {this.state.edit ?
            <ContactEdit
              title="Update Contact"
              submitForm={this.props.updateContact}
              contact={contacts[this.state.idx]}
              toggleEdit={this.toggleEdit}
              onDismiss={this.closeOverlay}
            />
          :
            <Contact
              danger={this.state.danger}
              toggleDanger={this.toggleDanger}
              contact={contacts[this.state.idx]}
              onDismiss={this.closeOverlay}
              toggleEdit={this.toggleEdit}
              onDelete={this.props.deleteContact}
            />}
        </Overlay>
        {contacts.length === 0 ? <Text>No Contacts Found.</Text> : ''}
        {this.props.contactIds.map((id) =>
          <Flex key={id} p={0} mx={2} my={1}>
            <ContactCard
              idx={id}
              contact={contacts[id]}
              showContact={this.openOverlay}
              width={256}
            />
          </Flex>
         )}
      </Flex>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contacts: selectContacts(),
  contactIds: selectContactIds(),
});

export default connect(mapStateToProps, actions)(ContactGrid);
