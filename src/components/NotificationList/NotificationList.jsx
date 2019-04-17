import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NotificationListStyles from './NotificationListStyles';
import './animation.css';

const NotificationList = ({ notifications, dismiss }) => (
    <div style={NotificationListStyles}>
        <ReactCSSTransitionGroup
            transitionName="animation"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
        >
            {notifications.map(noteParams => (
                <Notification key={noteParams.id} dismiss={dismiss} {...noteParams} />
            ))}
        </ReactCSSTransitionGroup>
    </div>
);

NotificationList.defaultName = 'NotificationList';
NotificationList.propTypes = {
    notifications: PropTypes.array,
    dismiss: PropTypes.func.isRequired
};
NotificationList.defaultProps = {
    notifications: []
};

export default NotificationList;
