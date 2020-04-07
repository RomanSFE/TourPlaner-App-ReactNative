// import React from 'react'
import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

class EditAccountScreen extends Component {

    Account = () => {
        this.props.navigation.navigate('Account')
    }

    render() {
    return (
        <View>
            <View style={{ height: '40%' }}>
                <ImageBackground source={require('../images/profilebgg.jpg')} style={{width: '100%', height: '100%', backgroundSize: 'cover'}}></ImageBackground>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -20, maginBottom: 20}}>
                <Image
                    style={{width: 130, height: 130, borderRadius: 100}}
                    source={require('../images/profile.jpg')}
                />
            </View>
            <View style={{marginTop: 45, paddingLeft: 15, paddingTop: 10, marginHorizontal: 20}}>
                <Input placeholder='Enter Your Name' />
                <Input placeholder='Enter Your Email' />
                <Input placeholder='Enter Your Phone Number' />

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                    <Button onPressButton={this.Account} title="save" style={{ width: 130, height: 35, borderRadius: 5, marginHorizontal: 0, padding: 8, marginTop: 15, backgroundColor: '#7CC2FD'}} />
                </View>
            </View> 
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navItem: {
        color: '#A8A8A8',
    }
  });

  export default EditAccountScreen