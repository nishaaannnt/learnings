### **Most Common and Necessary Operations on JavaScript Objects**

Objects are a fundamental data structure in JavaScript. Below is a collection of essential operations, including their syntax and real-world examples. These methods and patterns are frequently used in development and interviews.

---

## **1. Creating and Copying Objects**

### **1.1 Object Literal**
The most common way to create an object.
```javascript
const person = { name: "Alice", age: 25 };
console.log(person); // { name: "Alice", age: 25 }
```

---

### **1.2 Copying an Object**
#### **Using `Object.assign()`**
Copies all enumerable own properties.
```javascript
const original = { name: "Alice", age: 25 };
const copy = Object.assign({}, original);
console.log(copy); // { name: "Alice", age: 25 }
```

#### **Using Spread Operator (`...`)**
Shorthand for shallow (points to same memory) copying.
```javascript
const original = { name: "Alice", age: 25 };
const copy = { ...original };
console.log(copy); // { name: "Alice", age: 25 }
```

---

### **1.3 Deep Copying**
For nested objects, use libraries like `Lodash` or manual deep(new object all together) cloning:
```javascript
const original = { name: "Alice", address: { city: "Wonderland" } };
const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy); // { name: "Alice", address: { city: "Wonderland" } }
```

---

## **2. Looping Through an Object**

### **2.1 `for...in` Loop**
Iterates over all enumerable properties.
```javascript
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
```

---

### **2.2 `Object.keys()`**
Iterates over keys as an array.
```javascript
const person = { name: "Alice", age: 25 };
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
// Output:
// name: Alice
// age: 25
```

---

### **2.3 `Object.values()`**
Iterates over values as an array.
```javascript
const person = { name: "Alice", age: 25 };
Object.values(person).forEach(value => {
  console.log(value);
});
// Output:
// Alice
// 25
```

---

### **2.4 `Object.entries()`**
Iterates over key-value pairs as an array of tuples.
```javascript
const person = { name: "Alice", age: 25 };
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25
```

---

## **3. Adding, Updating, and Deleting Properties**

### **3.1 Adding/Updating Properties**
```javascript
const person = { name: "Alice" };
person.age = 25; // Add new property
person.name = "Bob"; // Update existing property
console.log(person); // { name: "Bob", age: 25 }
```

---

### **3.2 Deleting Properties**
```javascript
const person = { name: "Alice", age: 25 };
delete person.age;
console.log(person); // { name: "Alice" }
```

---

## **4. Checking for Properties**

### **4.1 `in` Operator**
Checks if a property exists (including inherited properties).
```javascript
const person = { name: "Alice", age: 25 };
console.log("name" in person); // true
console.log("gender" in person); // false
```

---

### **4.2 `hasOwnProperty()`**
Checks if a property exists on the object itself (not inherited).
```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("toString")); // false (inherited)
```

---

## **5. Merging Objects**

### **Using `Object.assign()`**
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }
```

### **Using Spread Operator**
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }
```

---

## **6. Freezing and Sealing Objects**

### **6.1 `Object.freeze()`**
Prevents modifications to the object (immutable).
```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // Ignored in strict mode
console.log(obj); // { a: 1 }
```

---

### **6.2 `Object.seal()`**
Prevents adding or removing properties but allows modifications to existing properties.
```javascript
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // Allowed
delete obj.a; // Ignored
console.log(obj); // { a: 2 }
```

---

## **7. Getting Object Length**

### **Using `Object.keys()`**
```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length); // 3
```

---

## **8. Advanced Object Techniques**

### **8.1 Destructuring**
Extract properties into variables.
```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
```

---

### **8.2 Dynamic Properties**
Define properties dynamically.
```javascript
const key = "name";
const person = { [key]: "Alice" };
console.log(person); // { name: "Alice" }
```

---

### **8.3 Optional Chaining**
Safely access deeply nested properties.
```javascript
const person = { address: { city: "Wonderland" } };
console.log(person.address?.city); // Wonderland
console.log(person.contact?.phone); // undefined
```

---

### **8.4 Nullish Coalescing (`??`)**
Provide a fallback for `null` or `undefined`.
```javascript
const user = { name: null };
console.log(user.name ?? "Guest"); // Guest
```

---

## **9. Converting Objects**

### **9.1 Object to Array**
- **Keys to Array**: `Object.keys()`
- **Values to Array**: `Object.values()`
- **Entries to Array**: `Object.entries()`

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
```

---

### **9.2 Array to Object**
Using `reduce()`:
```javascript
const arr = [["a", 1], ["b", 2]];
const obj = arr.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(obj); // { a: 1, b: 2 }
```

---

### **10. Common Object Interview Questions**

#### **1. Count Occurrences of Properties in an Array of Objects**
```javascript
const users = [
  { role: "admin" },
  { role: "user" },
  { role: "admin" }
];
const roleCount = users.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});
console.log(roleCount); // { admin: 2, user: 1 }
```

#### **2. Deep Clone an Object**
```javascript
const obj = { name: "Alice", address: { city: "Wonderland" } };
const deepCopy = JSON.parse(JSON.stringify(obj));
console.log(deepCopy);
```

#### **3. Merge Two Objects with Dynamic Properties**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
console.log(merged);
```

---