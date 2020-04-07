// import React from 'react'
import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/common/Button'


class AccountScreen extends Component {

    EditAccount = () => {
        this.props.navigation.navigate('EditAccount')
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
            <View style={{marginTop: 45, paddingLeft: 15, paddingTop: 10}}>
                <Text style={{color: '#333', fontWeight: 'bold', fontSize: 18, padding: 3 }}><Icon style={styles.navItem} name="person" size={20}/> Abdulla Al Roman</Text>
                <Text style={{color: '#333', fontWeight: 'medium', fontSize: 18, padding: 3 }}><Icon style={styles.navItem} name="email" size={20}/> romannsu142@gmail.com</Text>
                <Text style={{color: '#333', fontWeight: 'medium', fontSize: 18, padding: 3 }}><Icon style={styles.navItem} name="call" size={20}/> 01749183644</Text>

                <Button onPressButton={this.EditAccount} title="Edit profile" style={{ width: 130, borderRadius: 5, marginHorizontal: 0, padding: 8, marginTop: 15, backgroundColor: '#7CC2FD'}} />
            </View>
            <View style={{marginTop: 15, padding: 8}}>
                <Text style={{color: '#333', fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>PHOTOS</Text>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 60, maginBottom: 20, padding: 4}}>
                    <Image
                        style={{width: 107, height: 100, borderRadius: 10, marginRight: 7}}
                        source={require('../images/pho2.jpg')}
                    />
                    <Image
                        style={{width: 107, height: 100, borderRadius: 10, marginRight: 7}}
                        source={require('../images/pho1.jpg')}
                    />
                    <Image
                        style={{width: 107, height: 100, borderRadius: 10, marginRight: 7}}
                        source={require('../images/pho3.jpg')}
                    />
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

  export default AccountScreen