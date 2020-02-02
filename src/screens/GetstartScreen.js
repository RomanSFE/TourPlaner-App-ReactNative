import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native'
import Button from '../components/common/Button'

class GetstartScreen extends Component {
   

    Landing = () => {
        this.props.navigation.navigate('Landing')
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../images/bg.png')} style={{width: '100%', height: '100%', marginTop: -150}}>
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 250,}}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 30, }}>TourPlaner</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 210 }}>
                    <Button onPressButton={this.Landing} title= "Get Started" style={{ width: 300, borderRadius: 5, padding: 14, marginBottom: 20, backgroundColor: '#003688'}} />
                </View>
                </ImageBackground>
                {/* <Image style={{height: 500, width: '100%', flex: 1, borderRadius: 5}} resizeMode="cover" source={require('../components/images/bbg1.jpg')}/> */}
                
            </View>
        )
    }
}
GetstartScreen.navigationOptions = ()=>{
    return{
        header: null
    }
}
export default GetstartScreen