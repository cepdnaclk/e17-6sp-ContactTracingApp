
import motor.motor_asyncio
from fastapi import FastAPI, Request, Depends
from fastapi_users import FastAPIUsers, models
from fastapi_users.db import MongoDBUserDatabase
from fastapi_users.authentication import CookieAuthentication, JWTAuthentication
from database import *
from model import *

# --- MongoDB Setup -----------------------------------------------------------
collection = database.collection1

# --- Users Collection Schema Setup -------------------------------------------

# Pydantic models for MongoDB "User" collection schema


class User(models.BaseUser):

    firstName: str
    lastName: str


class UserCreate(models.BaseUserCreate):
    

    firstName: str
    lastName: str


class UserUpdate(User, models.BaseUserUpdate):
    
    pass


class UserDB(User, models.BaseUserDB):
    
    pass


# --- Authentication Method Setup ---------------------------------------------

"""
    Session duration/expiration can be changed through the lifetime_seconds
    attribute

"""

# Secret Key 
SECRET = "SECRET"

# Authentication Method JWT
auth_backends = []
authentication = JWTAuthentication(secret=SECRET, lifetime_seconds=3600)
auth_backends.append(authentication)


# --- FastAPIUsers Object Declaration -----------------------------------------

# MongoDB "users" collection adaptor for API calls
user_db = MongoDBUserDatabase(UserDB, collection)

# FastAPI Users helper class with all the configurations from above
# It provides all the routes
fastapi_users = FastAPIUsers(
    user_db,
    auth_backends,
    User,
    UserCreate,
    UserUpdate,
    UserDB
)


# --- FastAPI Server Initialization -------------------------------------------

# Initiating FastAPI Server
app = FastAPI()

# Managing CORS for the React Frontend connections
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# --- User Authentication Routes ----------------------------------------------

# Add route for Login                           POST "/auth/login"
app.include_router(
    fastapi_users.get_auth_router(auth_backends[0]),
    prefix="/auth",
    tags=["auth"]
)

# Add route for Registeration                   POST "/auth/register"

# init any backend process to sending out a
# successful registeration email
def on_after_register(user: UserDB, request: Request):
    print("User {user.id} has registered.")

app.include_router(
    # fastapi_users.get_register_router(),
    fastapi_users.get_register_router(on_after_register),
    prefix="/auth",
    tags=["auth"]
)

# Add route for User utilities "/auth/users/*"

""" 
    Get current logged in user profile          GET "/auth/users/me"
    Update current logged in user profile       PATCH "/auth/users/me"
    Get "_id" user profile                      GET "/auth/users/"
    Update "_id" user profile                   PATCH "/auth/users/{id}"
    Delete "_id" user profile                   DELETE "/auth/users/{id}" 
"""

app.include_router(
    fastapi_users.get_users_router(),
    prefix="/auth/users",
    tags=["auth"]
)

# Add route for Reset Password utility

"""
    Forgot Password                             POST /auth/users/forgot-password
    Reset Password                              POST /auth/users/reset-password                         
"""

app.include_router(
    fastapi_users.get_reset_password_router("SECRET"),
    prefix="/auth/users",
    tags=["auth"]
)


# --- Custom Unprotected Routes  --------------------------------------

"""
     API calls don't necessarily require a user to be logged in.

    
"""

@app.get("/custom-unprotected-route", tags=["unprotected-routes"])
async def get_custom_unprotected_route():
    # Add database CRUD operation logic here
    response = await fetch_one_todo("Anhui")
    print (response)
    return response

@app.post("/custom-unprotected-route", tags=["unprotected-routes"])
async def post_custom_unprotected_route(
    body: dict
    ):
    # Add database CRUD operation logic here
    print(body)
    return "Success!"

@app.get("/geo", tags=["unprotected-routes"])
async def get_custom_unprotected_route():
    # Add database CRUD operation logic here
    response = await update_geo()
    print (response)
    return response


# --- Protected Routes  ----------------------------------------

"""
    
    require the user to be in logged in state.

"""

@app.get("/custom-protected-route", tags=["protected-routes"])
async def get_custom_protected_route(
    user: User = Depends(fastapi_users.get_current_user)
):
    # Add database CRUD operation logic 
    response = await fetch_one_todo("Fujian")
    print (response)
    return response

@app.post("/custom-protected-route", tags=["protected-routes"])
async def post_custom_protected_route(
    body: dict, 
    user: User = Depends(fastapi_users.get_current_user)
):
    # Add database CRUD operation logic here
    print(body)
    return "Success!"
