import React from 'react';
import FontAwesome from 'react-fontawesome';

import NotificationStyles from './NotificationStyles';


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.dismissTimeout = 2000;
    }

    componentDidMount() {
        setTimeout(() => this.props.dismiss(null, this.props.id), this.dismissTimeout);
    };

    render() {
        let {
            id,
            content,
            type,
            dismiss
        } = this.props;

        return(
            // TODO: add semantic tags for this component
            <div style={{...NotificationStyles[`${type}Type`], ...NotificationStyles.container}}>
                {/* Close button */}
                <button
                    onClick={(e) => dismiss(e, id)}
                    style={NotificationStyles.closeButton}>
                    <FontAwesome name="times" />
                </button>

                {/* Content */}
                {content}
            </div>
        );
    }
}

export default Notification;