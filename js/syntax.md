### **Most Commonly Used JavaScript Methods for Arrays, Objects, and Functions**

---

## **1. Array Methods**
Arrays are commonly manipulated in JavaScript using these methods:

### **1.1 `map()`**
Creates a new array by applying a function to each element.
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

### **1.2 `filter()`**
Filters elements based on a condition, returning a new array.
```javascript
const nums = [1, 2, 3, 4];
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // [2, 4]
```

---

### **1.3 `reduce()`**
Reduces the array to a single value by applying a function.
```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

---

### **1.4 `forEach()`**
Executes a function on each array element (no return value).
```javascript
const nums = [1, 2, 3];
nums.forEach(num => console.log(num * 2));
// 2
// 4
// 6
```

---

### **1.5 `find()`**
Returns the first element that matches a condition.
```javascript
const nums = [1, 2, 3, 4];
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven); // 2
```

---

### **1.6 `findIndex()`**
Returns the index of the first element that matches a condition.
```javascript
const nums = [1, 2, 3, 4];
const index = nums.findIndex(num => num === 3);
console.log(index); // 2
```

---

### **1.7 `some()`**
Checks if **any** element matches a condition.
```javascript
const nums = [1, 2, 3];
const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven); // true
```

---

### **1.8 `every()`**
Checks if **all** elements match a condition.
```javascript
const nums = [2, 4, 6];
const allEven = nums.every(num => num % 2 === 0);
console.log(allEven); // true
```

---

### **1.9 `concat()`**
Combines two or more arrays into one.
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
```

---

### **1.10 `slice()`**
Returns a portion of an array.
```javascript
const nums = [1, 2, 3, 4];
const sliced = nums.slice(1, 3);
console.log(sliced); // [2, 3]
```

---

### **1.11 `splice()`**
Adds/removes elements from an array.
```javascript
const nums = [1, 2, 3];
nums.splice(1, 1, 10); // Remove 1 element at index 1, add 10
console.log(nums); // [1, 10, 3]
```

---

### **1.12 `length`**
Returns the number of elements in an array.
```javascript
const nums = [1, 2, 3];
console.log(nums.length); // 3
```

---

## **2. Object Methods**
JavaScript objects have several useful methods to interact with their properties.

### **2.1 `Object.keys()`**
Returns an array of the object's keys.
```javascript
const person = { name: "Alice", age: 25 };
console.log(Object.keys(person)); // ["name", "age"]
```

---

### **2.2 `Object.values()`**
Returns an array of the object's values.
```javascript
const person = { name: "Alice", age: 25 };
console.log(Object.values(person)); // ["Alice", 25]
```

---

### **2.3 `Object.entries()`**
Returns an array of key-value pairs.
```javascript
const person = { name: "Alice", age: 25 };
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25]]
```

---

### **2.4 `Object.assign()`**
Copies properties from one object to another.
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }
```

---

### **2.5 `hasOwnProperty()`**
Checks if a property exists in an object.
```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
```

---

## **3. Function Methods**
Functions are first-class citizens in JavaScript, and there are methods to control their behavior.

### **3.1 `call()`**
Calls a function with a specific `this` context.
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "Alice" };
greet.call(person); // Hello, Alice
```

---

### **3.2 `apply()`**
Similar to `call()`, but takes arguments as an array.
```javascript
function greet(age) {
  console.log(`${this.name} is ${age} years old`);
}
const person = { name: "Alice" };
greet.apply(person, [25]); // Alice is 25 years old
```

---

### **3.3 `bind()`**
Creates a new function with a specific `this` context.
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "Alice" };
const boundGreet = greet.bind(person);
boundGreet(); // Hello, Alice
```

---

### **3.4 Arrow Functions**
Concise syntax for writing functions; they do not bind their own `this`.
```javascript
const greet = () => console.log("Hello!");
greet(); // Hello!
```

---

## **4. String Methods**
While not explicitly categorized, these are commonly used in interviews.

### **4.1 `split()`**
Splits a string into an array.
```javascript
const str = "hello world";
console.log(str.split(" ")); // ["hello", "world"]
```

### **4.2 `join()`**
Joins array elements into a string.
```javascript
const words = ["hello", "world"];
console.log(words.join(" ")); // "hello world"
```

---

### **4.3 `includes()`**
Checks if a substring exists.
```javascript
const str = "hello world";
console.log(str.includes("world")); // true
```

---

### **4.4 `replace()`**
Replaces a substring with another.
```javascript
const str = "hello world";
console.log(str.replace("world", "JavaScript")); // "hello JavaScript"
```

---

## **5. Common Interview Examples**
Here are patterns you’ll often see:

### **1. Count Occurrences in an Array**
```javascript
const nums = [1, 2, 2, 3, 3, 3];
const counts = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { 1: 1, 2: 2, 3: 3 }
```

---

### **2. Flatten an Array**
```javascript
const nested = [1, [2, [3, [4]]]];
const flat = nested.flat(Infinity); // Deeply flattens the array
console.log(flat); // [1, 2, 3, 4]
```

---

### **3. Remove Duplicates**
```javascript
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]
```

---

### **4. Reverse a String**
```javascript
const str = "hello";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"
```

---


