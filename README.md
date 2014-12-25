##euphony

Run node.js with all ES6 features today!

###install

    npm install euphony

###usage

`euphony` extending native `require` to allow recompile all es6 source to es5.

You should include `euphony` in the be begining of your code. Better way to do this is create one more file in your project:

`index.js`

```js
var {createReadStream, createWriteStream} = require('fs');
createReadStream('./src.log').pipe(createWriteStream('./dst.log'));
```

and `index.es5.js`

```js
require('euphony');
require('./index');
```

Now you can run your code:

    node index.es5
