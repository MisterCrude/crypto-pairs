import React from 'react';
import Notification from '../notification/Notification';

import NotificationListStyles from './NotificationListStyles';


const NotificationList = ({notifications, dismiss}) => (
        <div style={NotificationListStyles}>
            {notifications.map((noteParams) =>
               <Notification
                   key={noteParams.id}
                   dismiss={dismiss}
                   {...noteParams} />)}
        </div>
);

export default NotificationList;