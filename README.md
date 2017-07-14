
less-plugin-export-variables
=======================

Exports LESS CSS global variables into an ES6 javascript file.

Transforms:

```less
@brand-primary: #428bca;
```

into:

```javascript
export const brandPrimary = '#428bca';
```

## lessc usage

```
npm install -g less-plugin-export-variables
```

and then on the command line,

```
lessc file.less --export-variables
```

## Programmatic usage

Programmatic usage is not supported at this time.

## Browser usage

Browser usage is not supported as this time.