import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const SigninScreen = () => {

    return (
        <View>
            <View>
              <ImageBackground source={require('../images/bg.png')} style={{width: '100%', height: '100%', marginTop: -60}}>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 80, maginBottom: -50}}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 30, }}>TourPlaner</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', marginTop: -100, marginHorizontal: 20}}>
                  <Input placeholder='Enter Your Email or Phone Number' />
                  <Input placeholder='Enter Your Password' secureTextEntry={true} />

                  <Button title="Sign In" style={{ width: 300, borderRadius: 5, marginHorizontal: 10, padding: 14, marginTop: 20, backgroundColor: '#D5103F'}} /> 
                </View>
              </ImageBackground>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

//   SigninScreen.navigationOptions = ()=>{
//     return{
//         header: null
//     }
// }

export default SigninScreen