from db import get_database

def get_collections():
    db = get_database()
    temp, humi, light, soil = db["temperatures"], db["humidities"], db["lights"], db["soil_moistures"] 
    return temp, humi, light, soil 