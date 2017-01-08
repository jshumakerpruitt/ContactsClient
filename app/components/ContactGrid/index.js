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
  Overlay,
} from 'rebass';

import ContactCard from 'components/ContactCard';
import Contact from 'components/Contact';


export class ContactGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestContacts: React.PropTypes.func,
    contacts: React.PropTypes.array,
  }
  constructor(props) {
    super(props);
    this.state = { overlay: false, idx: 1 };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
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
          />
        </Overlay>
        {contacts.length === 0 ? <Text>No Contacts Found.</Text> : ''}
        {contacts.map((contact, i) =>
          <Flex key={i} p={0} mx={2} my={1}>
            <ContactCard idx={i} contact={contact} showContact={this.openOverlay} />
          </Flex>
         )}
      </Flex>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contacts: selectContacts(),
});

export default connect(mapStateToProps)(ContactGrid);
