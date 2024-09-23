# `condition-component`

[![npm version](https://img.shields.io/npm/v/condition-component.svg)](https://www.npmjs.com/package/condition-component)  
[![license](https://img.shields.io/npm/l/condition-component.svg)](LICENSE)

A React-based package that provides components to replace traditional `if-else` and `switch-case` statements, making conditional rendering easier and cleaner in your React applications.

## Installation

You can install the package via npm or yarn:

### npm

```bash
npm install condition-component
```

### yarn

```bash
yarn add condition-component
```

## Features

- **Replace `if-else`**: Use React components to handle conditions in JSX instead of writing logic blocks in JavaScript.
- **Replace `switch-case`**: Simplify complex conditional rendering by avoiding `switch-case` statements.
- **Replace `array methods`**: Make `map`, `filter` (and more in the future) more readable avoiding javascript code inside render statements.
- **Readable and Reusable**: Enhance code readability and reusability through a component-driven approach.
- **Modular and Clean**: Keep your conditional logic modular and easy to maintain.

## Usage

Here's how you can use this package in your React project:

### Example 1: Replacing `if-else`

Instead of writing conditional logic like this:

```javascript
if (condition) {
  return <ComponentA />;
} else {
  return <ComponentB />;
}
```

You can use the package like this:

```jsx
import { Condition, If, Else } from "condition-component";

<Condition>
  <If condition={condition}>
    <ComponentA />
  </If>
  <Else>
    <ComponentB />
  </Else>
</Condition>;
```

### Example 2: Replacing `if-elseif-else`

Instead of writing conditional logic like this:

```javascript
if (condition) {
  return <ComponentA />;
} else if (condition2) {
  return <ComponentB />;
} else {
  return <ComponentC />;
}
```

You can use the package like this:

```jsx
import { Condition, If, ElseIf, Else } from "condition-component";

<Condition>
  <If condition={condition}>
    <ComponentA />
  </If>
  <ElseIf condition={condition2}>
    <ComponentB />
  </ElseIf>
  <Else>
    <ComponentB />
  </Else>
</Condition>;
```

### Example 3: Replacing `switch-case`

```jsx
import { Switch, Case, Default } from "condition-component";

<Switch value={value}>
  <Case value="option1">
    <Component1 />
  </Case>
  <Case value="option2">
    <Component2 />
  </Case>
  <Default>
    <DefaultComponent />
  </Default>
</Switch>;
```

### Example 4: Replacing `map` and `filter`

```jsx
import { Chain, Map, Filter } from "condition-component";

<Chain data={your_array_data}>
  <Filter>{(item) => condition}</Filter>
  <Map>{(item) => <p>{item}</p>}</Map>
</Chain>;
```

And also, you can use Map alone:

```jsx
import { Map } from "condition-component";

<Map>{(item) => <p>{item}</p>}</Map>;
```

## Contributing

We welcome contributions! Please submit a pull request or open an issue if you find a bug or have a suggestion for improvement.

Contact me:

- https://portfolio-vietanhle.vercel.app/
- anhkun123456@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This template should cover all essential aspects of a `README.md` file, including installation instructions, usage examples, API documentation, and contribution guidelines. Make sure to replace `condition-component` and other placeholders with the actual details of your package!
