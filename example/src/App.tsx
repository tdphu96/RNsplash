import * as React from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Image
} from 'react-native';

import * as Splash  from 'react-native-splash';

export default function App() {
  const [bootSplashIsVisible, setBootSplashIsVisible] = React.useState(true);
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] =
    React.useState(false);
  const opacity = React.useRef(new Animated.Value(1));
  const translateY = React.useRef(new Animated.Value(0));

  const init = async () => {

    try {
      await Splash.hide();

      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: Dimensions.get("window").height,
        }),
      ]).start();

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        setBootSplashIsVisible(false);
      });
    } catch (error) {
      setBootSplashIsVisible(false);
    }
  };

  React.useEffect(() => {
    Splash.getVisibilityStatus().then((status) => console.log(status));
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  return (
    <View style={styles.container}>
      <Image
      source={{uri: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg'}}
      fadeDuration={0}
      resizeMode="contain"
      style={styles.logo}/>
      {bootSplashIsVisible && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootsplash,
            { opacity: opacity.current },
          ]}
        >
          <Animated.Image
            source={{uri: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg'}}
            fadeDuration={0}
            resizeMode="contain"
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              styles.logo,
              { transform: [{ translateY: translateY.current }] },
            ]}
          />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    margin: 20,
    lineHeight: 30,
    color: "#333",
    textAlign: "center",
  },
  bootsplash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logo: {
    height: 89,
    width: 100,
  },
});

