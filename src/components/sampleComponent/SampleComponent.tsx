import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./SampleComponent.styles";

export const SampleComponent: FC = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.text}>Hello BlockPower!</Text>
        </View>
    );
};
