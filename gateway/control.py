from flask import Flask, request, jsonify
from flask_cors import CORS
from Adafruit_IO import MQTTClient

AIO_FEED_ID = ["LED", "PUMP"]
AIO_USERNAME = "langung"
AIO_KEY = "aio_uQlL44Pook9QBxcCrBWmdqncSeQv"

def connected(client):
    print("Connected successfully!")
    for feed in AIO_FEED_ID:
        client.subscribe(feed) 

def subscribe(client, userdata, mid, granted_qos):
    print("Subscribed successfully!")

def disconnected(client):
    print("Disconnecting...")
    sys.exit(1)

client = MQTTClient(AIO_USERNAME, AIO_KEY)

client.on_connect    = connected
client.on_disconnect = disconnected
client.on_subscribe  = subscribe

# set up app for handling control signals
app = Flask(__name__)
cors = CORS(app)

@app.route('/control-signal', methods=['POST', 'OPTIONS'])
def control_signal():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'success'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        return response
    
    data = request.json
    signal = int(data['signal'])
    typ = data['type']
    client.publish(typ, signal)
    response = jsonify({'status': 'success'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    client.connect()
    app.run(debug=True)

