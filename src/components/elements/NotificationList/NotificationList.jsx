import React from 'react';
import Notification from '../Notification';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NotificationListStyles from './NotificationListStyles';
import './animation.css';


const NotificationList = ({notifications, dismiss}) => (
    <div style={NotificationListStyles}>
        <ReactCSSTransitionGroup
            transitionName="animation"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {notifications.map((noteParams) =>
                <Notification
                    key={noteParams.id}
                    dismiss={dismiss}
                    {...noteParams}
                />
            )}
        </ReactCSSTransitionGroup>
    </div>
);

export default NotificationList;