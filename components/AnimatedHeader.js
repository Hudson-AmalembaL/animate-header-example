import React from "react";
import { Animated, Text, Image, Dimensions, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 100;
const minHeaderHeight = 70;
const maxHeaderHeight = 140;


const { width, height } = Dimensions.get('window')

const AnimatedHeader = ({ animatedValue }) => {
    const insets = useSafeAreaInsets()
    const headerHeight = animatedValue.interpolate({
        // inputRange: [0, HEADER_HEIGHT + insets.top],
        // outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
        inputRange: [0, 500],
        outputRange: [maxHeaderHeight, minHeaderHeight],
        extrapolate: 'clamp'
    })

    const opacity = animatedValue.interpolate({
        inputRange: [0, 100, 200],
        outputRange: [1, 0.5, 0],
        extrapolate: 'clamp'
    })

    const size = animatedValue.interpolate({
        inputRange: [0, 100, 200, 300, 400],
        outputRange: [20, 18, 15, 13, 12],
        extrapolate: 'clamp'
    })
    const imageHeight = animatedValue.interpolate({
        inputRange: [0, 400],
        outputRange: [70, 55],
        extrapolate: 'clamp',
    })

    const imagePosition = animatedValue.interpolate({
        inputRange: [0, 500],
        // outputRange: [(37 * height) / 100, 0],
        outputRange: [5, 0],
        extrapolateLeft: 'indentity',
        extrapolate: 'clamp'
    })
    return (
        <Animated.View style={{
            // position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            height: headerHeight,
            backgroundColor: '#eeef',
            // display: 'flex',
            // flexDirection: 'row'
            padding: 10,

        }}
        >
            <View style={{ display: 'flex', backgroundColor: '#eeef', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Animated.Image
                        style={{
                            height: imageHeight,
                            width: imageHeight,
                            borderRadius: imageHeight,
                        }}
                        source={{
                            uri:
                                'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
                        }}
                    />
                    {/* <Animated.Text
                    style={{
                        opacity: opacity,
                        fontSize: size,
                        transform: [{ translateX: imagePosition }],
                    }}>
                    Header
                </Animated.Text> */}

                    <Animated.View style={{ paddingVertical: 15, paddingHorizontal: 5 }}>
                        <Animated.Text style={{ color: '#444' }}>
                            Welcome
                        </Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: size, }}>
                            Hudson Luseno
                        </Animated.Text>
                    </Animated.View>

                </View>

                <Animated.View style={{ paddingVertical: 20, paddingHorizontal: 15 }}>
                    <Animated.Text>X</Animated.Text>
                </Animated.View>

            </View>
            <Animated.View
                style={{
                    padding: 5,
                    opacity: opacity,
                    transform: [{ translateY: imagePosition }],
                }}

            >
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={"#33dddd"}
                    clearButtonMode="always"
                    style={{
                        height: 40,
                        marginHorizontal: 20,
                        backgroundColor: "#eefeff",
                        borderRadius: 10,
                        padding: 10,
                    }}
                />
            </Animated.View>
        </Animated.View>
    );
}

export default AnimatedHeader