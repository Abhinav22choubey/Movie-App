import { Stack } from "expo-router";
import './global.css';
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function RootLayout() {

    return <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{headerShown: false,}}
        />
        <Stack.Screen
            name="movie/[id]"
            options={{headerShown: false,}}
        />
    </Stack>

}
