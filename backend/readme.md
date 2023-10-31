API ENDPOINTS:
--------------
1. /api/v1/book/new

=> This is used to create new book having book name, author name, and summary of the book.

=> Basically it uses POST HTTP verb to create a book in database named "BOOK_MANAGEMENT".

2. /api/v1/books

=> This is used to get all created books that is stored in database.

=> It uses GET HTTP verb to retrieve all the data from database.

=> Apifeature like "serach" (used for searching book from book name), "filter" (used for filtering book from author name) and      "pagination" (show 5 books record per page) is implemented.

3. api/v1/bookDetails/:id

=> This is used to get details about a perticular book having id equals to id present in api endpoint.

=> It uses GET HTTP verb to retrieve the perticular book details.

4. api/v1/book/update/:id

=> This is used to update the book details having id equals to id present in api endpoint.

=> It uses PUT HTTP verb to update that perticular book details.

5. api/v1/book/:id

=> This is used to delete a book permanently from the database having id equals present in api endpoint.

=> It uses DELETE HTTP verb to delete that perticular book.

ERROR HANDLING:
---------------
1. Errors like unhandled promise rejection, uncaught exception, wrong mongodb id error, duplicate mongoose key error and other error that arise during the working of APIs is also handled.

HOW TO RUN THIS PROJECT:
------------------------
=> All the parts of the project are deployed on the web, here are the deployed links
   backend : 

=> Still, if you want to make a new version of this project for yourself. Follow these steps:
   Fork the Repo
   Clone the project: git clone <forked repo url>

=> You will see onr directory named backend.

=> For the backend, you can follow these steps:
   1. cd server

=> For Installing dependencies
   1. npm install

=> To Start the server
   1. npm run dev

=> After that you need to make a config.env file which is present inside the config folder and create two entries there.
   1. DATABASE : This should have the mongo db URI for connecting the server to the database
   2. PORT : This should have the port number on which you want to run your server

DECISIONS AND ASSUMPTIONS:
--------------------------
=> Instead of writing try catch block on every functions, I have made a catchAsyncError.js file present in the middleware folder, which includes a functions that take a function as argument try to resolve that.

=> For error handling I have made a error middleware and handled errors like unhandled promise rejection, uncaught exception, wrong mongodb id error, duplicate mongoose key error etc.

=> I have implemented serch, filter and pagination feature in API which is used to fetch all data records of book from database.
