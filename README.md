# float-ps [![Build Status](https://travis-ci.org/CreaturePhil/float-ps.svg?branch=master)](https://travis-ci.org/CreaturePhil/float-ps)

Pokemon Showdown Common Elements.

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
