import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native'
import Button from '../components/common/Button'

class LandingScreen extends Component {
   

    Signin = () => {
        this.props.navigation.navigate('Signin')
    }
    Signup = () => {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../images/bg.png')} style={{width: '100%', height: '100%', marginTop: -150}}>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 210}}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 30, }}>TourPlaner</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <Button onPressButton={this.Signin} title= "Sign In" style={{ width: 300, borderRadius: 5, padding: 14, marginBottom: 20, backgroundColor: '#003688'}} />
                    <Button title= "Login With Facebook" style={{ width: 300, borderRadius: 5, padding: 14, marginBottom: 20, backgroundColor: '#0B64EB'}} />
                    <Button onPressButton={this.Signup} title= "Sign Up" style={{ width: 300, borderRadius: 5, padding: 14, backgroundColor: '#D5103F'}}/>
                </View>
                </ImageBackground>
                {/* <Image style={{height: 500, width: '100%', flex: 1, borderRadius: 5}} resizeMode="cover" source={require('../components/images/bbg1.jpg')}/> */}
                
            </View>
        )
    }
}
LandingScreen.navigationOptions = ()=>{
    return{
        header: null
    }
}
export default LandingScreen