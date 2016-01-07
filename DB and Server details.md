DB and Server details
=====================

Users routes:
-------------

<https://murmuring-mountain-9323.herokuapp.com/api/users>

POST

Request body :

{“username”, “password”, “email”}

Request headers:

{ Content-Type: application/json }

Registers user – returns username and token

<https://murmuring-mountain-9323.herokuapp.com/api/users/token>

POST

Logs user – returns username and token

Request body :

{"username", "password"}

Request headers:

{ Content-Type: application/json }

<https://murmuring-mountain-9323.herokuapp.com/api/users>

PUT

Request body :

{"username", "password", “email”}

Request headers:

{Authorization: Bearer + TOKEN, Content-Type: application/json }

Changes user details – returns username

Producers routes:
-----------------

<https://murmuring-mountain-9323.herokuapp.com/api/producers>

GET

Request body :

{}

Request headers:

{ Content-Type: application/json }

Returns all producers

<https://murmuring-mountain-9323.herokuapp.com/api/producers/:id>

GET

Request body :

{}

Request headers:

{ Content-Type: application/json }

Returns producer

<https://murmuring-mountain-9323.herokuapp.com/api/producers>

POST

Request body :

{“type”, “name”, “description”, “mainProducts” -&gt; \\\[Array\\\], “address”, “telephone”, “logo” -&gt; \\\[Byte array\\\]}

Request headers:

{ Authorization: Bearer + TOKEN, Content-Type: application/json }

Registers new producer and Returns it

<https://murmuring-mountain-9323.herokuapp.com/api/producers/:id>

PUT

Request body :

{ “name”, “description”, “mainProducts” -&gt; \\\[Array\\\], “address”, “telephone”, “logo” -&gt; \\\[Byte array\\\]}

(all are optional, but at least one should be included)

Request headers:

{ Authorization: Bearer + TOKEN, Content-Type: application/json }

Edits producer and returns it

<https://murmuring-mountain-9323.herokuapp.com/api/producers/:id>

DELETE

Request body :

{}

Request headers:

{ Authorization: Bearer + TOKEN, Content-Type: application/json }

Deletes producer

<span id="users-routes" class="anchor"></span>

Registered user:
----------------

{"username": "veselin",

"password": "veselin",

"email": "veselin@veselin.com",

"token": "pOm5W1CQ2OMKA5Qe"}

Registered producers:
---------------------

{

"type": "machinary",

"isDeleted": false,

"email": "veselin@veselin.com",

"userId": "568ec590cf1f0b03004fdf76",

"name": "First producer to be registered",

"description": "Vety simple description",

"\_id": "568ec790cf1f0b03004fdf77",

"mainProducts": \["cars"\]

}

{

"type": "machinary",

"isDeleted": false,

"email": "veselin@veselin.com",

"userId": "568ec590cf1f0b03004fdf76",

"name": "Second producer to be registered",

"description": "I dont have any time for this description",

"\_id": "568ec8eecf1f0b03004fdf78",

"mainProducts": \["cars"\]

}
