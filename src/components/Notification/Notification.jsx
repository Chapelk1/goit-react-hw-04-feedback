import { Description } from 'components/Notification/Notification.styled'
import PropTypes from 'prop-types'

export const Notification = ({message}) => {
    return <Description>{message}</Description>;
}



Notification.propTypes = {
    message: PropTypes.string,
}