This is a sample NodeJS server that makes the CRUD operations to a database.

FrameWorks

1. NodeJS
2. ExpressJs
3. MYSQL 
4. XAMPP server

Preferences

1. POSTMAN( For easy api calls)

Getting started

1. Be sure to have install Node in your machine
2. Clone this repository
3. In project root folder: run npm install express(This will install expressJS for you)
4. In project root folder: run npm install (This will install all the required dependencies for you)
5. Start your XAMPP server (Or whatever you use for this)
6. Create a database that matches what is in the dbcon.js file which is in config folder of this project.
                         ***************************
                Import the .sql file in the database folder of this project
                         ***************************
7. Change the database connection in dbcon.js file to match your database configurations.
                         ****************************
    By now npm must have completed installing the required dependencies.
                        *****************************

9. To run the server, run nodemon app.js
10. You will see a log on your command prompt that tells you that the server is    running on port 4200.
11. If you get an error that the port is in use, you can change it in app.js, then re-run the server
12. Now open your browser and serve the url that is shown on your command prompt (localhost:4200).

Making the calls

Note: BaseUrl = localhost:4200 || localhost:the_port_you_set.
*************************************************************************************************************************

| Type   | Data     | URL                   | Function                                            | Examples         
| GET    |            BaseUrl/users         |        Get all users in the database                | localhost:4200/users  
| GET    | id(int)    BaseUrl/users/{id}    |         Get a certain user by id                    | localhost:4200/users/1
| POST   |            BaseUrl/users/add     |        Create a new user                            | Refer to screenshots. 
| DELETE | id(int)    BaseUrl/users/{id}    |         Delete a certain user by their id           | localhost:4200/users/1
| GET    |            BaseUrl/logs          |         Get a log of all operations  on the server  | localhost:4200/logs   
| POST   | id(int) BaseUrl/users/update/:id |      Update a certain user record by id             | Refer to screenshots  

**************************************************************************************************************************

Note* ( For endpoints BaseUrl/user || & BaseUrl/users/update/:id)

                           ******************************
        To create a new user or update a user, note that data is passed as a query. Check the screenshots folder to see how the data is passed using postman.
                           *******************************

Future Works
1. Creating a simple angular project to interact with the server..
2. More Endpoints for more database operations.


                                REMOTE SERVER DEPLOYMENT
                  

Requirements

1. A server: remote server(worked with ubuntu)
2. git installed on server
3. node installed on server(ubuntu command: sudo apt install nodejs)
4. npm installed on server(ubunti command: sudo apt install npm)
5. May require a domain pointing to the sever

Procedure

1. Clone the repo of this project onto your server(on any directory)
2. Use the database dump file in the database folder to import the database into your database.
3. Change the database connection on the dbcon.js file found on the config folder of this project.
4. Outside of the folder of this project, run the command: node node-server - this will start the server.
(Note that node-server is the name of this project folder, if you change yours, remember to run the command accordingly: example node my_server_folder_name)
5. You should see logs on the command line/terminal of your server that tells you the port on which the server is running on, and a database connection instance status.
6. To interact with the server will follow our earlier on stated routes, only that the BaseURL will change to the Ip address of the server: example my_server_ip_address:my_port(xxx.xxx.x.xxx:4200)

***********************************************************************************************************************
Note: To keep your server running even when you close the ssh session, run command: node my_server_directory app.js &
**********************************************************************************************************************


*************************************************************************************************************************
To download server logs from remote server:Generate the logs by runing the logs route, navigate to the directory in which you want to save the log document on, then  run (scp user@server_ip_address:directory_to_the_log_file_on_server . eg: scp user@xxx.xxx.x.xxx:/var/www/node-server/logs/logs.txt .)


  ***********************************************************************************************************************
  I hope you found this helpfull. Continue to learn and let us learn together..
  ***********************************************************************************************************************
                  

                           *********************************
             If you need any help, be sure to halla at muindegeofrey@gmail.com

 

                       



