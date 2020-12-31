importance: 3

---

# Multiply numeric properties by 2

Maak een function `multiplyNumeric(obj)` die alle numerieke waarde multipliceert by `2` van `obj` .

Bijvoorbeeld:

```js
// voor de call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// na de call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
```

Let op dat `multiplyNumeric` niks terug geeft. het zou het object in-place moeten aanpassen

P.S. gebruik `typeof`om te controleren of er een nummer is.
