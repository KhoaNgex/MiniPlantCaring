import sys
import datetime
from Adafruit_IO import MQTTClient

from collection import get_collections

##############################################
#########UPPER BOUND - LOWER BOUND############
##############################################

TEMP_UPPER_BOUND = 50
TEMP_LOWER_BOUND = -10

HUMI_UPPER_BOUND = 100
HUMI_LOWER_BOUND = 0

LIGHT_UPPER_BOUND = 5000
LIGHT_LOWER_BOUND = 0

SOIL_UPPER_BOUND = 10000
SOIL_LOWER_BOUND = 0

##############################################

AIO_FEED_ID = ["TEMP", "HUMI", "LIGHT", "SOIL"]
AIO_USERNAME = "langung"
AIO_KEY = "aio_oiBI50zQ17Lju7KPAEd6GdvXsjRQ"

temp, humi, light, soil = None, None, None, None

def connected(client):
    print("Connected successfully!")
    for feed in AIO_FEED_ID:
        client.subscribe(feed) 
    global temp, humi, light, soil
    temp, humi, light, soil = get_collections()

def subscribe(client, userdata, mid, granted_qos):
    print("Subscribed successfully!")

def disconnected(client):
    print("Disconnecting...")
    sys.exit(1)

def message(client, feed_id, payload):
    new_data = {'value': int(payload), 'receivedAt': datetime.datetime.now()}
    if feed_id == 'TEMP':
        # check range 
        if new_data['value'] >= TEMP_LOWER_BOUND and new_data['value'] <= TEMP_UPPER_BOUND:
            temp.insert_one(new_data)
            print('Successfully inserted!')
        else:
            print('Received Temperature Out Of Range!')
    elif feed_id == 'HUMI':
        if new_data['value'] >= HUMI_LOWER_BOUND and new_data['value'] <= HUMI_UPPER_BOUND:
            humi.insert_one(new_data)
            print('Successfully inserted!')
        else:
            print('Received Humidity Out Of Range!')
    elif feed_id == 'LIGHT':
        if new_data['value'] >= LIGHT_LOWER_BOUND and new_data['value'] <= LIGHT_UPPER_BOUND:
            light.insert_one(new_data)
            print('Successfully inserted!')
        else:
            print('Received Light Intensity Out Of Range!')
    elif feed_id == 'SOIL':
        if new_data['value'] >= SOIL_LOWER_BOUND and new_data['value'] <= SOIL_UPPER_BOUND:
            soil.insert_one(new_data)
            print('Successfully inserted!')
        else:
            print('Received Soil Moisture Out Of Range!')

client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect    = connected
client.on_disconnect = disconnected
client.on_message    = message
client.on_subscribe  = subscribe

client.connect()
client.loop_blocking()
