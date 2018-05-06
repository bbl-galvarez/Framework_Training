# Welcome to the TS/LAB - Web Service ATM interface

**To clone the this repo type the following commands**
### Provided you install the nodejs , npm and typescript environment first.

```
git clone -s https://github.com/marioestradarosa/tsbootcamp.git
```

**To update the repo locally after cloning and view more labs 
  type the following command**

```
git pull
```
This lab shows the good practice of programming using the following:
 
- Interfaces 
- Model Classes
- External libraries integration (express and cors)

We use express to build our endpoints for our webservice that will expose the ATM class to the outside world

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

``` 
curl http://localhsot:3000/atm/23232-1    
```

Will respond with the account balance in json format.


***tsc*** command will transpile the typescript files .ts into java script files .js and placed them into the ***build*** directory.


