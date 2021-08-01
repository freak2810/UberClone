import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image} from "react-native";
import tw from 'tailwind-react-native-classnames';

export default function HomeScreen() {
    return <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image style={{width: 100, height: 100, resizeMode: 'contain'}}
                   source={{uri: 'https://links.papareact.com/gzs'}}/>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    text: {}
})