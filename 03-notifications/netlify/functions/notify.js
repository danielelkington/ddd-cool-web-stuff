const webpush = require('web-push')
const publicKey = 'BEGh6bJSeZ0k6u6WJuj_XC-d5aJSMkqPwQXgx7J43F4ML5XkrFyFUWATi8TxoRD9Yi1pZVN1TRQwJ6JYsDvArqo'
webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  publicKey,process.env.PRIVATE_VAPID_KEY
)

exports.handler = async function (event) {
  // Send a notification after 5 seconds
  console.log(event.body)
  setTimeout(() => {
    webpush.sendNotification(event.body, {title: 'Test Notification'})
  }, 5000)
  return {
    statusCode: 200
  }
}