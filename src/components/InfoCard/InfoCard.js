import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import InfoDetails from './InfoDetails';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(60, 63, 81, 0.4)',
    zIndex: 100
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 0,
    transform: 'translate(-50%, -50%)',
    width: '800px',
    minHeight: '600px',
    maxHeight: '800px',
    padding: 0,
    overflow: 'auto',
    borderRadius: 'none'
  }
};
Modal.setAppElement('#root');

class InfoCard extends Component {
  render() {
    const { isOpen, onClose, infoDetails } = this.props;

    return (
      <Modal isOpen={isOpen} style={modalStyle} onRequestClose={onClose}>
        <InfoDetails onClose={onClose} infoDetails={infoDetails} />
      </Modal>
    );
  }
}
InfoCard.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  roomDetails: PropTypes.object
};
InfoCard.defaultProps = {
  isOpen: true
};
export default InfoCard;
