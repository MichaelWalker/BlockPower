import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SampleComponent } from "./src/components/sampleComponent/SampleComponent";
import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

export default function App() {
    const [fontsLoaded] = useFonts({ Lato_400Regular });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View>
            <StatusBar style="auto" />
            <SampleComponent />
        </View>
    );
}
