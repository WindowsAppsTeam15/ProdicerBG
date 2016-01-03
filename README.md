ProducerBG
==========

Short description
-----------------

It should be a platform containing information about Bulgarian producers. Each producer will be shortly presented with logo (if available), name, type of production (e.g. furniture, ceramics, food, etc.), short description, contact information (location – address, telephone and e-mail). With their registration, producers actually make profiles of their company. Everyone can see this information, without the need of registration. Producers could create, alter (edit) and delete the profiles of their company. Users can directly call, e-mail or get the directions to the producers address.

What we should implement
------------------------

-   Welcome screen – it will have three options to choose from – create new profile (register new producer), basic search for producer (by name), or go to advanced search of producers;

-   The advanced search – it will be by name, by type of production or/and by address. The search by address will allow to search from the current position of the user or the user will set position from which he/she wants to search;

-   The registration form - if the user chooses to register new producer, he/she will have a form to fill in with all the information needed for the platform;

-   The edit producer form – every registered producer will be able to edit or delete its profile in an edit form;

-   List of producers view – it will list the search results with a few details about each producer;

-   Producer details view – it will show the details description for a specified producer. From here, the user will be able to call or email directly the producer. He/she will also be able to check for the direction from his current location to the producers address;

-   Settings screen – where user can chose whether to update local data using WiFi / Mobile data connection or only on his request;

According to the requirements from 2014
---------------------------------------

(Up to 15 points) Use custom views and adapters:

-   We will have to use both custom views and adapters in our List of producers view

(Up to 9 points) Use two of the following device APIs: Accelerometer, Camera, Compass and Geolocation:

-   By now the idea uses the Geolocation. This time I will do more effort to use the Accelerometer to close the application as we already discussed for the Windows app. On top of these we will use the API for making calls.

(Up to 9 points) Use two of the following content providers: Capture, Connection, Contacts, Media, Third-party provider (Facebook, Google, etc…):

-   We will use the Media to upload logo of the producer and the Contacts to add new producer as a contact if the user wishes. We will also use third party providers – Google Maps and Gmail.

(Up to 9 points) Use SQLite as a data storage:

-   I would suggest storing all the data in a SQLite on the device. The info about each producer will be very limited in size and even if we have a large number of producers (thousands), we won’t take more than several MB on the device. This way it will be able to operate offline and it will updates the data only when it has access to internet. It won’t be very difficult to do these updates.

(Up to 9 points) Use some kind of remote data:

-   I would suggest using again Parse.com or try node.js as this course goes at the same time;

(Up to 7 points) Service for a background jobs:

-   This will be the update local data service as explained above.

(Up to 9 points) Touch friendly UI. Fulfill the criteria:

-   Usable UI – no probs;

-   Support multiple device screen sizes – we will work on this. It will be slightly more difficult than in the Win Apps, but it is manageable;

-   Use fragments – we should investigate better this as I am still not sure how they could be helpful;

(Up to 9 points) Use notifications to provide feedback to the user:

-   We can implement it similarly to what we have done in Win App course. On top of that, we can notify user when the local data has been updated as a background process.

(Up to 9 points) Use at least four of the following gestures: Swipe, Fling, Pinch close or pinch open, Long press, Touch or double touch, Double touch drag:

-   We will implement this when we are ready with the functionality.

(Up to 9 points) High-quality code

(Up to 6 points) Validation and Error handling
