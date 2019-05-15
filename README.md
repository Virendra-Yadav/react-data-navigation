# Description
This package is for navigate the data in React JS, React Native.<br>
This package is for send data from one component to other in React JS.<br>
This package is mainly for beginner of React developement.<br>
This help you to navigate through components with some data.

## Quick Start
All you need to do is one React project.<br>
Create some components where you want to navigate data in React.

## Use of package
1. Install **react-data-navigation**<br>
```npm i react-data-navigation --save```
2. You just need to import the **DataNavigation** class in your components.<br>
3. Import the **DataNavigation** class in your componet where you want to use this package<br>
Now you can use the package's methods.

### home.js
```
import { DataNavigation } from 'react-data-navigation';
.
.
.
// For set the data you need to call setData(key, value) Function i.e.
// eg. DataNavigation.setData('name', 'Viren'); 
// it will set the 'Viren' as respect to 'name' key.
```

### about.js
```
import { DataNavigation } from 'react-data-navigation';
.
.
.
// Here we want to get the name value, which you set in home component than
// console.log('Hey my name is' + DataNavigation.getData('name'));
// it will print in console : Hey my name is Viren.
```

## Properties

* getData(key) : method<br>
It will return the value of data object
* getWholeData() : method<br>
It will give the whole data object
* removeData(key) : method<br>
It will delete the data in data object.
* setData(key, value) : method<br>
It will set the value in the object with key.
## Author

Source code can be found on [github](https://github.com/Virendra-Yadav/react-data-navigation/)

Developed by [Virendra Yadav](https://www.linkedin.com/in/virendraayadav/)

