## Welcome to the Traffic Control System

Based on the MEAN stack, this software can be used to efficiently manage the traffic in an area.

### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .  

### Installation 
``` 
git clone https://github.com/ubarsaiyan/traffic-control-system
cd traffic-control-system
cp .env.example .env
sudo systemctl start mongod (mongodb in some installations)
npm install
npm start (for development)
cd adminMongo
npm install
npm start
```

Go to localhost:4040 to create documents and localhost:1234 to view and query the documents. Open the console log (F12) to check for errors. 