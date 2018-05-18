# Welcome to the TS/LAB - Web Service ATM Backend
# May 12 2018
# by marioestrada@eycgrupo.com

This lab shows the good practice of programming using the following:
 
- Logging console and to a file with winston library
- Securing the end points with a JSON WebToken
- Validating that the account inside the json web token is similar to the one requested
- Securing the end points with an API Key

#Configuration Files
- There is a directory called src/environment that contains the apiKey configuration among other options inside the file environment.ts
- There is also a file called errorMessages.ts where we placed the constants for all error messages returned by the end points

#Refactored from previous LAB
-under src/lib directory
- Created the tokenModel interface inside the routeGuard.ts file in order to return a well structured object to the cosumer class
- Created the file routeConstants.ts to be able to change easily the route strings
- Place some good practices inside the App.ts

#Loggin Packages

We are using winston for logging and placed some samples in the App.ts

**Assuming you are inside the finalLabWebService directory,
to install the node_modules use the following command.**

```
npm install
```

and to finally run the lab, compile it and execute the utility atmClient from build

```
tsc
node ./build/index.js
```

After the node ./build/index.js command , you will see that the application is running and listening on
port 3000 .  You can then use either a web browser or the **curl** command line utility to start querying
the end points.

**Example** using curl command line 

```
curl http://localhost:3000/atm 
```
Will responde if the service is alive in json format.

