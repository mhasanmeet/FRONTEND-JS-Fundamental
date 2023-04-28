## **Assignment** and **Mutation** in JavaScript variable

JavaScript two type data 
* Primitive data, string, number, boolean data
* Non-primitive data, object and array data

Assignment is: When store data in a variable like in var, let and const. 

In JS primitive data, if we use const to store data then it is not mutable, like;

```js

    const data = "myName";
```

This string const is not mutable. 

But in no primitive, we can mutate data even it is store in const, like;

```js

    const data = {
        name: "Mahmudul Hasan",
        age: 29,
        sex: "male"
    }
```

Even this object store in const, we can change the data of this object, like;

```js

    data.name = "Kazi Sakib"
```

Now the new object look like this;

```js

    const data = {
        name: "Kazi Sakib",
        age: 29,
        sex: "male"
    }
```  

so even if we use const, we can change const data. We can prevent to change const data in non-primitive value, like;

```js

    const data = Object.freeze({
        name: "Kazi Sakib",
        age: 29,
        sex: "male"
    })
```

Now this object data is not changeable. It is now totally constant. 


