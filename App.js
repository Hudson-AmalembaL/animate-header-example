import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AnimatedHeader from './components/AnimatedHeader';
import DATA from './data';


export default function App() {
  const offset = useRef(new Animated.Value(0)).current
  const scrollY = new Animated.Value(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} scrollY={scrollY} />
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{
          alignItems: 'center',
          // paddingTop: 220,
          paddingHorizontal: 20
        }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          {DATA.map(item => (
            <View
              key={item.id}
              style={{ marginBottom: 140 }}
            >
              <Text style={{ color: "#101010", fontSize: 32 }}>{item.title}</Text>

            </View>
          ))}

        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor='#eeef' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
