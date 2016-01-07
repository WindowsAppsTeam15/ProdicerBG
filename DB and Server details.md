DB and Server details
=====================

Producers routes:
-----------------

| **route**                                                         | **method** | **result**                          | **Request body**               | **Request header**                               |
|-------------------------------------------------------------------|------------|-------------------------------------|--------------------------------|--------------------------------------------------|
| <https://murmuring-mountain-9323.herokuapp.com/api/producers>     | GET        | Returns all producers               | {}                             | { Content-Type: application/json }               |
| <https://murmuring-mountain-9323.herokuapp.com/api/producers>     | POST       | Registers new producer – Returns it | {“type”,                       
                                                                                                                                                        
                                                                                                                        “name”,                         
                                                                                                                                                        
                                                                                                                        “description”                   
                                                                                                                                                        
                                                                                                                        “mainProducts” -&gt; \[Array\]  
                                                                                                                                                        
                                                                                                                        “address”,                      
                                                                                                                                                        
                                                                                                                        “telephone”,                    
                                                                                                                                                        
                                                                                                                        “logo” -&gt; \[Byte array\]}    | {Authorization:                                  
                                                                                                                                                                                                           
                                                                                                                                                         Bearer + TOKEN,                                   
                                                                                                                                                                                                           
                                                                                                                                                         Content-Type: application/json }                  |
| <https://murmuring-mountain-9323.herokuapp.com/api/producers>/:id | PUT        | Edits producer – Returns it         | {“name”,                       
                                                                                                                                                        
                                                                                                                        “description”                   
                                                                                                                                                        
                                                                                                                        “mainProducts” -&gt; \[Array\]  
                                                                                                                                                        
                                                                                                                        “address”,                      
                                                                                                                                                        
                                                                                                                        “telephone”,                    
                                                                                                                                                        
                                                                                                                        “logo” -&gt; \[Byte array\]}    
                                                                                                                                                        
                                                                                                                        (any of the above)              | {Authorization:                                  
                                                                                                                                                                                                           
                                                                                                                                                         Bearer + TOKEN, Content-Type: application/json }  |
| <https://murmuring-mountain-9323.herokuapp.com/api/producers>/:id | DELETE     | Deletes producer                    | {}                             | {Authorization:                                  
                                                                                                                                                                                                           
                                                                                                                                                         Bearer + TOKEN, Content-Type: application/json }  |
| <https://murmuring-mountain-9323.herokuapp.com/api/producers>/:id | GET        | Returns producer                    | {}                             | { Content-Type: application/json }               |

Users routes:
-------------

| **route**                                                       | **method** | **result**                                  | **Request body** | **Request header**                               |
|-----------------------------------------------------------------|------------|---------------------------------------------|------------------|--------------------------------------------------|
| <https://murmuring-mountain-9323.herokuapp.com/api/users>       | POST       | Registers user – returns username and token | {"username",     
                                                                                                                                                
                                                                                                                              "password",       
                                                                                                                                                
                                                                                                                              “email”}          | { Content-Type: application/json }               |
| <https://murmuring-mountain-9323.herokuapp.com/api/users/token> | POST       | Logs user – returns username and token      | {"username",     
                                                                                                                                                
                                                                                                                              "password"}       | { Content-Type: application/json }               |
| <https://murmuring-mountain-9323.herokuapp.com/api/users>       | PUT        | Changes user details – returns username     | {"username",     
                                                                                                                                                
                                                                                                                              "password",       
                                                                                                                                                
                                                                                                                              “email”}          | {Authorization:                                  
                                                                                                                                                                                                   
                                                                                                                                                 Bearer + TOKEN, Content-Type: application/json }  |

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
