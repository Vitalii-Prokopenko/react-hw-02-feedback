import PropTypes from 'prop-types';
import css from '../notification/notification.module.css';

const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
