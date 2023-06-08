# @ir/mui-utils

A set of utility components for Material-UI in React applications.

## Installation

To install the package, you can use either npm or yarn:

```shell
npm install @ir/mui-utils
```

# API

## TimedCircularProgress

### `Props`

#### `counterStart` (optional)

Type: `number`
Default: `5`

The number from which to start the countdown.

#### `hideCounter` (optional)

Type: `boolean`
Default: `false`

A flag that determines whether to hide the countdown number in the center of the circular progress.

### `Usage`

```jsx
import { TimedCircularProgress } from '@ir/mui-utils';

function MyApp() {
  return <TimedCircularProgress counterStart={10} hideCounter={false} />;
}

export default MyApp;
```

## License

This project is licensed under the terms of the MIT license. For more details, see [LICENSE](./LICENSE) file in the project root.
