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


export class ContactGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestContacts: React.PropTypes.func,
    contacts: React.PropTypes.array,
  }
  constructor(props) {
    super(props);
    this.state = { overlay: false };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  componentDidMount() {
    this.props.requestContacts();
  }

  openOverlay() {
    this.setState({ overlay: true });
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
      >
        <Overlay
          onDismiss={this.closeOverlay}
          open={this.state.overlay}
          box
        >
          <Flex
            style={{
              width: '80vw',
              maxWidth: '500px',
            }}
          >
            <Flex
              flexAuto
            >
              <ContactCard contact={contacts[0]} showContact={this.openOverlay} />
            </Flex>
          </Flex>
        </Overlay>

        {contacts.length === 0 ? <Text>No Contacts Found.</Text> : ''}
        {contacts.map((contact, i) =>
          <Flex key={i} p={0} mx={2} my={1}>
            <ContactCard contact={contact} showContact={this.openOverlay} />
          </Flex>
         )}
      </Flex>
    );
  }
}

ContactGrid.propTypes = {
  contacts: React.PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  contacts: selectContacts(),
});

export default connect(mapStateToProps)(ContactGrid);
