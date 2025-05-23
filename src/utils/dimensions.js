import { Dimensions } from "react-native";

export const Height = Dimensions.get('window').height
export const Width = Dimensions.get('window').width
export const ScreenHeight = Dimensions.get('screen').height
export const ScreenWidth = Dimensions.get('screen').width

export const Margin = (value) => {
    if(ScreenWidth > 300 && ScreenWidth < 600) {
        return value*Width*0.1
    } else if(ScreenWidth < 300) {
        return value*Width*0.07
    } else {
        return value*Width*0.15
    }
}


export const ItemLength = (value) => {
    if(ScreenHeight > 800 && ScreenHeight < 1200) {
        return value*ScreenHeight*0.1
    } else if(ScreenHeight < 800) {
        return value*Height*0.07
    } else {
        return value*Height*0.15
    }
}