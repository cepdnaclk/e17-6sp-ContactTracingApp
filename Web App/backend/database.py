from model import Todo
import motor.motor_asyncio

# # MongoDB Configurations
DATABASE_URL = "mongodb+srv://dilandds:bstindewrld@cluster0.lbyyy.mongodb.net/User?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE"
client = motor.motor_asyncio.AsyncIOMotorClient(DATABASE_URL, uuidRepresentation="standard")
# # # MongoDB database instance ("DB" by default, can be changed)
database = client["DB"]

# # # MongoDB users collection instance ("users" by default, can be changed)
collection1 = database["users"]
CKDU_Updates = database["CKDU_Updates"]

import requests

#function to get gro coordinates from location name
def get_geo_coordinates(location):
    key = "AIzaSyDPE8lT_LmBkJW2g0hNebCRzh3ltngh-JA"
    address = location
    params={
        'key':key,
        'address':address
    }
    base_url = "https://maps.googleapis.com/maps/api/geocode/json?"
    response= requests.get(base_url, params=params).json()
    #print(response.keys())
    p=response['results'][0]['geometry']['location']
    #print(response['results'])
    return p


async def fetch_one_todo(title):
    document = await CKDU_Updates.find_one({"Location":title},{'_id': 0})
    return document


#update database with coordinates
async def update_geo():
    myCursor =   CKDU_Updates.find({}, {"Location":1, "_id":0})
    async for cursor in myCursor:
        location =cursor["Location"]
        coordinates = get_geo_coordinates(location)
        CKDU_Updates.update_one({ "Location" : location },{ "$set": { "coordinates" : coordinates }} )
   
    
    
        
    #await CKDU_Updates.update_many({},{"$set":{"coordinates":get_geo_coordinates()}})
    return "Success"
