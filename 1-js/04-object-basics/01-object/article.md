# Objects

Zoals we hebben gezien in het hoofdstuk over <info:types>, zijn er acht data types in JavaScript. Zeven van deze heten "primitive", omdat de inhoud slechts een enkele waarde bevat (zij het een string of een nummer enz.).

Objects daarintegen bewaren een collectie van verschillende datatype en meer complexe eenheden. In JavaScript, objects doordringen bijna alle aspecten van de taal. Daarom moeten we dit eerst begrijpen alvorens we hier dieper op in kunnen gaan.

Een Object kan worden gemaakt met figure brackets `{…}` met een optionele lijst met _properties_. Een eigenschap is een "key: value" , waar `key` een string is ( "property name" wordt deze ook wel eens genoemd), en `value` kan vanalles zijn.

Een Object kunnen we ook voorstellen als een archiveringssysteem met bestanden . Elk stukje data wordt bewaart in het bestand met een key. zo is het gemakkelijk een bestand te vinden, toe tevoegen of te verwijderen doormiddel van de naam.

![](object.svg)

Een leeg object ("leeg archiveringssysteem") kan worden gemaakt doormiddel van een of twee syntaxen:

```js
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

![](object-user-empty.svg)

Normaliter worden de figure brackets `{...}` gebruikt.Deze declaratie wordt _object literal_ genoemd.

## Literals and properties

We kunnen meteen eigenschappen in `{...}` stoppen als "key: value":

```js
let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
```

Een eigenschap heeft een key (ook wel benoemd als "name" of "identifier") voor de dubbelepunt `":"` en een value aan de rechter zijde van deze.

In het object `user`, zijn er twee waarde:

1. De eerste waarde heeft de naam `"name"` en de value `"John"`.
2. De tweede heeft de naam `"age"` en de value `30`.

Het resulterende object `user` kun je zien als een archiveringssysteem met 2 bestanden met de labels "name" en "age".

![user object](object-user.svg)

We kunnen op elk gewenst moment bestanden toevoegen, verwijderen of lezen.

Deze zijn toegankelijk door de "punt'notatie te gebruiken:

```js
// get property values of the object:
alert(user.name); // John
alert(user.age); // 30
```

De value kan van elk type zijn. laten we een boolean toevoegen:

```js
user.isAdmin = true;
```

![user object 2](object-user-isadmin.svg)

Om een waarde te verwijderen gebruiken we de `delete` operator:

```js
delete user.age;
```

![user object 3](object-user-delete.svg)

We kunnen ook meerderen woorden gebruiken, maar deze moeten dan wel tussen haakjes gezet worden:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // meerdere woorden worden tussen haakjes gezet
};
```

![](object-user-props.svg)

De laatste waarde in de lijst mag met een komma eindigen:

```js
let user = {
  name: "John",
  age: 30*!*,*/!*
}
```

Dit heet een "trailing" of "hanging" komma. Dit maakt het makkelijker om waarden te toevoegen/verwijderen/verplaatsen, alle regels worden hetzelfde.

````smart header="Object with const can be changed"
Let op: een object declared als `const` *kan* worden veranderd.

bijvoorbeeld:

```js run
const user = {
  name: "John"
};

*!*
user.name = "Pete"; // (*)
*/!*

alert(user.name); // Pete
```

Het zou verwacht worden dat  line `(*)` een error zou veroorzaken, maar dit is niet het geval. De `const` repareert de value van `user`, maar niet de inhoud.

De `const` zou alleen een error gevan als we zouden proberen de `user=...` als een geheel zouden veranderen.

Er is een andere manier om const object eigenschappen te maken, Dit verklaren we in een later hoofdstuk <info:property-descriptors>.
````

## Square brackets

voor meerdere woorden eigenschappen,zal de "punt" toegang niet werken:

```js run
// Dit zou een syntax error geven
user.likes birds = true
```

JavaScript begrijpt dit niet. Het gaat hier vanuit dat we `user.likes` bedoelen, en geeft ons dan een syntax error wanneer deze unexpected `birds` leest.

De "punt" heeft een key nodig om een geldige variable idnetificeerder te zijn .Dit betekent: geen spaties, mag niet met een cijfer beginnen en mag geen speciale tekens bevatten (`$` en `_` zijn wel toegestaan).

Er is een alternatieve "square bracket notation" dat met elke string werkt:

```js run
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

Nu is alles oke.Let er wel op det de sting in de haakjes correct is gequoot (elk type quote is bruikbaar).

Square brackets voorzien ook eenmaniet om de eigenschap naam te vangen als het resultaat van een expression -- het tegenovergestelde van eenliteral string -- zoals onderstaande variable:

```js
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
```

De variable `key` kan hiergecalculeerd worden in run-time of het hangt af van de user input. En dan gebuiken we dezeom toegang tot de eigenschap te krijgen. Dit geeft ons ontzettend veel flexibiliteit.

Bijvoorbeeld:

```js run
let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user[key]); // John (if enter "name")
```

De "punt" notatie kan op eenzelfde manier gebruikt worden:

```js run
let user = {
  name: "John",
  age: 30,
};
let key = "name";
alert(user.key); // undefined
```

### Computed properties

We kunnen de haakjes gebruiken in een object literal als we een objec creeren. Dit wordt _computed properties_ genoemd.
Bijvoorbeeld:

```js run
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
*!*
  [fruit]: 5, // De naam van de eigenschap is gepakt van de variabel fruit
*/!*
};

alert( bag.apple ); // 5 if fruit="apple"
```

De bedoeling van een computed property is simpel: [fruit] betekend dat de eigenschap's naam gepakt moet worden van `fruit`.

Dus al een gebruiker `"apple"` invoert, `bag` zal `{apple: 5}` worden.

Dus dit werkt hetzelfde als:

```js run
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
// pak de eigenschaps naam van de fruit variable
bag[fruit] = 5;
```

...Maar het ziet er netter uit.

We kunnen meer complexere expressies gebruiken in de haakjes:

```js
let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
```

Haakjes zijn veel krachtiger dan de "punt"notatie. Ze accepteren ele eigenschaps naam en variabel. Maar ze zijn ook omschachtiger om te schrijven.

Dus meestal, als de eigenschaps namen bekend zijnen simpel, dan wordt de punt gebruikt. En als we iets complexer nodig hebben dan gebruiken we de haakjes.

## Property value shorthand

In echte code gebruiken we vaak al bestaande variabelen voor eigenschaps namen.

Bijvoorbeeld:

```js run
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...andere eigenschappen
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

In het bovenstaande voorbeeld hebben de eigenschappen dezelfde naamals de variabelen. De use-case van het eigenschap maken is zo gebruikelijk dat er een speciale _property value shorthand_ is om het korter te maken.

Inplaats van `name:name` kunnen `name` schrijven:

```js
function makeUser(name, age) {
*!*
  return {
    name, // het zelfde als name: name
    age,  // het zelfde als age: age
    // ...
  };
*/!*
}
```

we kunnen zowel normale als shorthand egenschappen gebruiken in het zelfde object:

```js
let user = {
  name, // hetzelfde als name:name
  age: 30,
};
```

## Property names limitations

Zoals we al weten kan een variabel niet dezelfde naam als de woorden "for", "let", "return" etc hebben.

Maar voor een object eigenschap is er geen van deze restricties:

```js run
// deze eigenschappen zijn allemaal goed
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6
```

In het kort, er zijn geen limitaties op eigenschaps namen. ze kunnen elke strings of symolen zijn (speciale type voor identifiers bespreken we later).

Andere types worden automatisch omgezet in strings.

bijvoorbeeld het cijfer `0` wordt een string `"0"` wanneer deze gebruikt wordt als property key:

```js run
let obj = {
  0: "test", // hetzelfde als "0": "test"
};

// bijde alerts krijgen toegang tot de property (het cijfer 0 is veranderd naar de  string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (zelfde property)
```

er is een klein addertje onder het gras bij de speciale eigenschap genaamd `__proto__`. We kunnen deze niet naar een non-object value zetten:

```js run
let obj = {};
obj.__proto__ = 5; // geef een cijferr
alert(obj.__proto__); // [object Object] - de value is een object, werkt niet zoals de bedoeling was
```

Zoals we in de code kunnen zien is de opdracht naar een primitive `5` genegeert.

We zullen de speciale werking van `__proto__` in [subsequent hoofdstukken](info:prototype-inheritance), en stellen dan voor dit gedrag op te lossen [ways to fix](info:prototype-methods).

## Property existence test, "in" operator

In vergelijkint tot andere talen is dit een feature van JavaScript dat zeer benoemenswaardig is, de mogenlijkheid om tot elke eigenschap toegan te krijgen. Er zal geen error verschijnen als de eigenschap niet bestaat!

Het lezen van een niet bestaande eigenschap komt alleen terus als `undefined`.Zo kunnen we gemakkelijk testen of een eigenschap al bestaat:

```js run
let user = {};

alert(user.noSuchProperty === undefined); // true betekent "no such property"
```

Er is ook een special operator `"in"` hiervoor.

De syntax is:

```js
"key" in object;
```

Bijvoorbeeld:

```js run
let user = { name: "John", age: 30 };

alert("age" in user); // true, user.age bestaat
alert("blabla" in user); // false, user.blabla bestaat niet
```

Let op dat er aan de linker kant `in` een _property name_ moet staan. Dit is normaliter een quoted string.

Als we deze quotes niet gebruiken, betekent dat deze variable een naam moet hebben om het testbaar te maken.
Bijvoorbeeld:

```js run
let user = { age: 30 };

let key = "age";
alert( *!*key*/!* in user ); // true, property "age" bestaat
```

Waarom bestat de `in` operator? Is het niet voldoende om tevergelijken tegen `undefined`?

Meestal is de vergelijking met undefined prima werkbaar. Maar er is een speciaal geval waneer deze faalt, maar "in" werkt correct.

wanneer een property al bestaat, maar waarvan de inhoud `undefined` is:

```js run
let obj = {
  test: undefined,
};

alert(obj.test); // het is undefined, duso - niet zo een eigenschap?

alert("test" in obj); // true, de property bestaat!
```

In bevenstaande code, de property `obj.test` bestaat technisch gezien wel. Dus de `in` operator werkt naar behoren.

Zulke situaties komen vrijwel nooit voor, omdat `undefined` niet expliciet benoemd zouden moeten worden. meestal gebruiken we `null` voor "unknown" of "empty" values. Dus de `in` operator is een bijna mytische verschijning in de code.

## De "for..in" loop

Om over alle keys in een object te lopen bestaat er een speciale loop: `for..in`. Dit is totaal verschillend van de `for(;;)` constructie die we eerder hebben besproken.

De syntax:

```js
for (key in object) {
  // voor elke key in de objects eigenschappen wordt deze uitgevoerd
}
```

Voorbeeld, de output van alle `user`eigenschappen:

```js run
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // waarden voor de keys
  alert(user[key]); // John, 30, true
}
```

Let op dat voor alle "for" constructies ons toestaaan de looping variabel te declareren in de loop, de `let key` hier.

Ook kunnen we hier een andere variabel naam gebruiken dan `key`. Bijvoorbeeld, `"for (let prop in obj)"` wordt ook veelom gebruikt.

### GeOrdered zoals een object

Zijn objects geordered? Of in andere woorden,als we over een object loopen, krijgen we dan alle properties in die volgorde dan dat we deze hebben toegevoegd? Kunnen we hier vanuitgaan?

Het korte antwoord hierop is: "geordent op een speciale wijze": integer properties zijn gesorteerd, andere worden weergegeven op de manier waar ze zijn toegevoegd.

Als voorbeeld hier een Object met telefoon codes:

```js run
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

*!*
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
*/!*
```

Het Object suggereert een lijst met optiesvoor de gebruiker. Als we een site maken voor gebruikers gestationeerd in Duitsland dan willen we waarschijnlijk beginnen met`49`.

Maar als we de code uitvoeren krijgen we totaal wat anders:

- USA (1) goes first
- then Switzerland (41) and so on.

De telefoon codes gaan op oplopende volgorde want het zijn integers.dit wordt dan `1, 41, 44, 49`.

````smart header="Integer properties? Wat is dat?"
De "integer property" deze term betekent dat een String  geconverteerd kan worden naar en van een integer zonder te veranderen.

Dus, "49" is een integer property naam, want  wanneer deze getransformeert word naar een integer en weer terug blijft deze hetzelfde. Maar "+49" en "1.2" zijn geen:

```js run
// Math.trunc is een ingebouwde functie die het decimale gedeelte verwijderd
alert( String(Math.trunc(Number("49"))) ); // "49", zelfde, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", niet hetzelfde "+49" ⇒ geen integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ geen integer property
```
````

...aan de andere kant, als de keys non-integer zijn, dan worden ze weergegeven op aangemaakte volgorde, voorbeeld:

```js run
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // voegt een toe

*!*
// non-integer properties worden weergegeven op aangemaakte volgorde
*/!*
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

Om het probleem met de telefoon codes op te lossen kunnen we gebruik maken van een "cheat" doormiddel van de codes non-integer te maken. Hettoevoegen van een plus teken `"+"` voor elke code is genoeg.

zoals dit:

```js run
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}
```

Nu werkt het naar behoren.

## Samenvatting

Objects zijn associatieve arrays met een aantal speciale functies.

Ze bewaren properties (key-value pairs), waar:

- Property keysstrings or symbolen moeten zijn (meestal strings).
- Values kunnen van elk type zijn.

Om toegan tot een property te krijgen, gebruiken we:

- de punt notatie: `obj.property`.
- Haakjes notatie `obj["property"]`. Haakjesgeven ons de mogenlijkheid om de key van een variabel te nemen `obj[varWithKey]`.

Additionele operators:

- Het verwijderen van een property: `delete obj.prop`.
- Het controleren of een property met een geegven key bestaat: `"key" in obj`.
- Het doorlopen van een object: `for (let key in obj)` loop.

Wat we bestudeerd hebben in dit hoofdstuk heet een "plain object", of `Object`.

Er zijn veel andere soorten objecten in JavaScript:

- `Array` het bewaren van ordered data in collecties,
- `Date` het bewaren van data en tijd informatie,
- `Error` het bearen van informatie over een error.
- ...En ga zo maar door.

Deze hebebn hun eigen... die we later bestuderen. Soms zullen mensen zoiets zeggen als "Array type" or "Date type", maar formeel gezien zijn dit geen types op zich zelf, ze behoren tot een enkel "object" data type.En ze verlengen dit op verschillende manieren.

Objects in JavaScript zijn erg krachtig. We hebben hier alleen even de oppervlakte laten zien van een veeel groter geheel. We zullen later meer met Objects wekren en er meer over leren verder in deze tutorial.
