## Welcome to day 1 Introduction to IONIC

In the first day, you learned how to start a new IONIC application, reuse the AMTSservice, HTTPinterceptor, Model Definitions and the Environment configuration file.

So, far the only component We built using ``` ionic generate page login  ``` was the loginPage component. We then refactored it in order to use the IONIC Angular Directives ion-list , ion-label and ion-item in order to layout the component.

Another refactoring was the method ***setAccountNumber*** which we converted to return a promise<boolean> , so it was being called using then() from the login component and properly display an Error Toast informing the user of any invalid account/pin combination.


### Important note:

If you are using the IONIC Dev App keep in mind that the Enviornment configuration file is pointing to http://localhost:3000/atm in the local development, however it must be changed to your computer IP address in the network so that the phone can connect to the ATM API, otherwise it will give you an error, since the app will not find the service in its local address.


