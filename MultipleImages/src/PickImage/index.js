import React from 'react'
import {View, Button} from 'react-native'
import ImagePicker from "react-native-customized-image-picker";

const PickImage = () => {
    const handlePress = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }
    return(
        <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Button title = 'Choose Photo' onPress = {handlePress}/>
        </View>
    )
}

export default PickImage