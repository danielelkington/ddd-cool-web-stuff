const webpush = require('web-push')
const publicKey = 'BEGh6bJSeZ0k6u6WJuj_XC-d5aJSMkqPwQXgx7J43F4ML5XkrFyFUWATi8TxoRD9Yi1pZVN1TRQwJ6JYsDvArqo'
webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  publicKey,process.env.PRIVATE_VAPID_KEY
)

exports.handler = async function (event) {
  // Send a notification after 5 seconds
  await new Promise(res => setTimeout(res, 5000))
  console.log(event.body)
  webpush.sendNotification(JSON.parse(event.body), JSON.stringify({title: 'Test Notification'}))
  return {
    statusCode: 200
  }
}