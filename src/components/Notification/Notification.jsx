import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import NotificationStyles from './NotificationStyles';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.dismissTimeout = 3000;
    }

    componentDidMount() {
        setTimeout(() => this.props.dismiss(null, this.props.id), this.dismissTimeout);
    }

    render() {
        let { id, content, type, dismiss } = this.props;

        return (
            <div style={NotificationStyles.wrapper}>
                <div
                    style={{
                        ...NotificationStyles[`${type}Type`],
                        ...NotificationStyles.container
                    }}
                >
                    {/* Close button */}
                    <button onClick={e => dismiss(e, id)} style={NotificationStyles.closeButton}>
                        &times;
                    </button>

                    {/* Content */}

                    <FontAwesome
                        name={type === 'warning' ? 'exclamation-triangle' : 'exclamation-circle'}
                        style={{ ...NotificationStyles.sign, ...NotificationStyles[`${type}Sign`] }}
                    />
                    {content}
                </div>
            </div>
        );
    }
}

Notification.defaultName = 'Notification';
Notification.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dismiss: PropTypes.func.isRequired
};

export default Notification;
