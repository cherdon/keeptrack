import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../constants/colors";
import Dimens from "../constants/dimens";
import Strings from "../constants/strings";

import InterText from "./InterText";
import { TouchableHighlight } from 'react-native-gesture-handler';

export default (props) => {
    const { location, checkedIn, lastVisited, url } = props.item;

    const handleCheckInOut = () => {
        alert("");
    };

    const handleMenuDialog = () => {
        alert("");
    };

    const renderSubcaption = () => {
        if (checkedIn) {
            return <InterText color={Colors.secondaryLighter} size={16} numberOfLines={1}>{Strings.checkedIn}</InterText>
        } else {
            return <InterText color={Colors.grey3} size={16} numberOfLines={1}>{`${Strings.lastVisited} ${lastVisited}`}</InterText>
        }
    };
    
    const renderIcon = () => {
        if (checkedIn) {
            return <MaterialIcon name="exit-run" size={Dimens.glyphSize} color={Colors.secondaryLighter} />
        } else {
            return <Icon name="arrow-forward" size={Dimens.glyphSize} color={Colors.primaryLighter} />
        }
    };

    return (
        <TouchableHighlight
            underlayColor={Colors.black}
            activeOpacity={0.95}
            onPress={handleCheckInOut}
            onLongPress={handleMenuDialog}
        ><View style={styles.listItem}>
            <View style={styles.leftFragment}>
                <InterText flavor="medium" size={Dimens.fontSizeLarge} numberOfLines={1}>{location}</InterText>
                {renderSubcaption()}
            </View>

            <View style={styles.rightFragment}>
                {renderIcon()}
            </View>
        </View></TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: Colors.white,
        paddingHorizontal: 30,
        height: 70,
        flexDirection: "row"
    },

    leftFragment: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },

    rightFragment: {
        flex: 0.2,
        flexDirection: "row",
        //backgroundColor: "red",
        justifyContent: "flex-end",
        alignItems: "center"
    }
});