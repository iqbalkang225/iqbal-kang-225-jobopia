import { toast } from 'react-toastify'

const formatMessage = message => {
  const lastIndexSlash = message.lastIndexOf('/') + 1
  const lastIndexOfBracket = message.lastIndexOf(')')
  return message
    .substring(lastIndexSlash, lastIndexOfBracket)
    .split('-')
    .join(' ')
}

const getNotification = (type, message) => {
  return toast[type](
    !message.includes('/') ? message : formatMessage(message),
    {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      theme: 'dark',
    }
  )
}

export { getNotification, formatMessage }
