# sequelizedBurger (Eat-da-burger! Part2)

"sequelizedBurger (Eat-da-burger! Part2)" is a remake of my "MySqlBurger (Eat-Da-Burger!)" is a customizable restaurant app that lets users 'Order Burgers From Custom Menu' and/or input the names of burgers they'd like to eat. The mafor difference between theses 2 apps is that this new one is implementing one of todays leading technologies when it comes to using database's "SEQUELIZE". Sequelize is supposed to make the developers life more easy when working with databases even though I feel it wasnt easy for me converting this particular site.<br>
Give it a try live on Heroku: https://immense-shore-92175.herokuapp.com/
<br>

## NEW SITE = "SEQUELIZED" VERSION<br>
Give it a try live on Heroku: https://immense-shore-92175.herokuapp.com/<br>
![User-Menu-View-burgdone-jpg](https://github.com/kayhon/sequelizedBurger/blob/master/public/assets/img/burgdone.jpg)<br><br>


### OLD SITE = "NOT-SEQUELIZED" or "PRE-SEQUELIZED" VERSION<br>
Give it a try live on Heroku: https://frozen-river-40606.herokuapp.com/ <br>
![User-Menu-View-burg00-jpg](https://github.com/kayhon/mysqlburger/raw/master/public/assets/img/burg00.jpg)<br><br>


## App Features

-After a user submits a burger name, the app will display the new burger on the left side of the menu/page, waiting to be ordered/devoured.<br>
-Each burger in the waiting area also has a 'Devour it!' button. When the user clicks it, the burger will move to the right side of the page where it says'Burgers Previously Ordered/Devoured!'.<br>
-*Bonus feature*:You have the option to re-order the same burger you already ate/ordered by clicking the 'Devoured/Eat-Again' Button and it pops back to the available side(on the left). <br>
-When you 'Add a Burger' you can pick which side it goes to.
-*coming soon feature* The User also has the option to delete any burger anywhere & anytime on the screen. It is hidden right now awaiting further coding.<br>
-*Regular Feature* Each Burger maintains a unique 'ID', wherever it is, because the app will store each burger in a database, whether devoured or not.<br>


### Technologies Used

* Sequelized
* Node.js
* MySql
* Express
* Handlebars


#### Directory structure / File Setup 
#### (Model View Control - 'MVC Design')

All the files and directories have the following structure:

```
.
├── config
│   ├── config.json
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│   └── index.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.jpg
│   └── test.html-unused
│
├── views
│  ├── index.handlebars
│  └── layouts
│  │    └── main.handlebars
│  └── partials
│      └── burger-block.handlebars│
│
├── server.js
```
