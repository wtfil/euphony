##euphony

Run node.js with all ES6 features today!

###install

    npm install euphony

###usage

`euphony` extends native `require` allowing use es6 code in `.js` files.

You should include `euphony` in the be begining of your programm, to overide all modules. Better way to do this is create one more file:

`index.js`

```js
var {createReadStream, createWriteStream} = require('fs');
createReadStream('./src.log').pipe(createWriteStream('./dst.log'));
// any other es6 code here
```

and `index.es5.js`

```js
require('euphony');
require('./index');
```

Now you can run your code:

    node index.es5
