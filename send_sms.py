from twilio.rest import TwilioRestClient

account_sid= "AC358a60437a112c5c59d3b52da1f0dcc7"
auth_token= "SKf230fe334742d70753a9b56434ffa0d9"
client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="election", to="+15005550009", from_="+96505647814")
print(message.sid)


