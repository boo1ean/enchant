## Enchant your objects

Transform objects or scalars using predefined set of transform functions.

## Installation

```sh
npm install enchant
```

## Usage

```js

// Define transform function using chainable interface
var contactRequestTransform = t({
	name: t().firstCharUpper().slice(0, 5),
	email: t().lowercase(),
	body: t().stripTags().trim()
});

// Apply transform function to the target object
contactRequestTransform({
	name: 'johny the wild',
	email: 'Johny.The.Wild@gmail.com',
	body: '<script>alert(1)</alert> uhaha!'
});

// ->

{
	name: 'Johny',
	email: 'johny.the.wild@gmail.com',
	body: 'uhaha!'
}
```

## License
MIT
