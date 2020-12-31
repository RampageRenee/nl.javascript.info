importance: 5

---

# Check for emptiness

Schrijf de functie `isEmpty(obj)` welke `true` terug geeft als een object geen properties heeft, anders `false`.

Het zou zo moeten werken:

```js
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
```
