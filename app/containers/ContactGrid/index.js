/**
 * ContactGrid
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { deleteContact } from 'containers/HomePage/actions';

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
import Contact from 'components/Contact';


export class ContactGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestContacts: React.PropTypes.func,
    contacts: React.PropTypes.object,
    contactIds: React.PropTypes.array,
    deleteContact: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = { overlay: false, idx: 1 };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestContacts();
  }

  openOverlay(idx) {
    this.setState({ overlay: true, idx });
  }

  closeOverlay() {
    this.setState({ overlay: false });
  }

  handleDelete() {
    this.props.deleteContact(this.state.idx);
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
        >
          <Contact
            contact={contacts[this.state.idx]}
            onDismiss={this.closeOverlay}
            onDelete={this.props.deleteContact}
          />
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

export default connect(mapStateToProps, { deleteContact })(ContactGrid);