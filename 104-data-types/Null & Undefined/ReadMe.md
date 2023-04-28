## NULL & Undefined

> In general, null and undefined both represents "No value" or "Absence of meaningful value". They both represent falsy values in JavaScript.

1. Intentional and Unintentional

* When a variable is declared without assigning a value. JavaScript engine assigns it the value of undefined. **This is done Unintentionally.**

> undefined = “value is not assigned”. Variable is declared, but not assigned
> undefined is reserved as a default initial value for unassigned things

* On the other hand, JavaScript engine never assigns a value of null. It is specifically done in your program by your own. **This is done Intentionally**

> null = represents “nothing”, “empty” or “value unknown”.
> null to assign an “empty” or “unknown” value to a variable

2. Data Types

* null is an object.
* undefined has a data type of undefined.

3. Equality

* In case of (==) operator, 

```console.log(null == undefined) // true```

* In case of (===) strict equality operator,

```console.log(null === undefined) //false```

--------------
##### Credit 

1. [Priya Garg, From Twitter](https://twitter.com/priya_garg2)
2. [JavaScript.info](https://javascript.info/types)