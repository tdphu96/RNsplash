# react-native-splash
splash
## Installation

```sh
npm install react-native-splash
```

## Usage

```js
import React, { useEffect } from "react";
import { Text } from "react-native";
import Splash from "react-native-splash";

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await Splash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);
  return <Text>My awesome app</Text>;
}

// ...

Splash.hide()
```
## With React Navigation

```js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "react-native-splash";

function App() {
  return (
    <NavigationContainer onReady={() => Splash.hide()}>
      {/* content */}
    </NavigationContainer>
  );
}

// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
