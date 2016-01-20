# float-ps [![Build Status](https://travis-ci.org/CreaturePhil/float-ps.svg?branch=master)](https://travis-ci.org/CreaturePhil/float-ps)

Pokemon Showdown Common Elements.

## Usage

```js
const Float = require('float-ui');
const Float_PS = require('float-ps');

Float.extendElements(Float_PS);

console.log(Float.renderElement('<CommandButton command="Hi">Say Hi!</CommandButton>'));
// => <button name="send" value="Hi">Say Hi!</button>
```

## Install

```
$ npm install --save float-ps
```

## Elements

### Break

Converts into multiple `<br>` tags.

Prop:

- ``amount``: _Number_

Example:

```js
<Break amount="5"></Break>
// => <br></br><br></br><br></br><br></br><br></br>
```

### CommandButton

Creates a button that parses a command.

Prop:

- ``command``: _String_

Example:

```js
<CommandButton command="/say hi">Click me!</CommandButton>
// => <button name="send" value="/me says hi">Click me!</button>
```

## License

MIT © [Phil](LICENSE)
