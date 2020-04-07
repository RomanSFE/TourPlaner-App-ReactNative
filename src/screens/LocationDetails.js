import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SearchBar } from 'react-native-elements'

class LocationDetails extends Component {

    Explorer = () => {
        this.props.navigation.navigate('Explorer')
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Image
                        style={{width: '100%', height: 240,}}
                        source={require('../images/imgg3.jpg')}
                    />
                </View>

                <View style={{backgroundColor: '#f9f9f9', borderRadius: 20, marginTop: -10}}>
                    <View style={{marginTop: 10}}>
                        <Text style={{color: '#505050', padding: 5}}><Icon style={styles.navItem} name="place" size={15}/> Rangamati</Text>
                    </View>
                    <View style={{marginTop: 5,}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#585858', paddingRight: 40, paddingLeft: 10}}>Welcome to Rangamati</Text>
                    </View>
                    <View style={{marginTop: 5,}}>
                        <Text style={{fontSize: 14, fontWeight: 'normal', color: '#585858', paddingRight: 40, paddingLeft: 10}}>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed to
                            an unknown typesetter in the 15th century who is thought to have
                        </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={{color: '#333', fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>PHOTOS</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10, maginBottom: 20, padding: 4}}>
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
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10, maginBottom: 20, padding: 4}}>
                            <Image
                                style={{width: 107, height: 100, borderRadius: 10, marginRight: 7}}
                                source={require('../images/imgg4.jpg')}
                            />
                            <Image
                                style={{width: 107, height: 100, borderRadius: 10, marginRight: 7}}
                                source={require('../images/imgg2.jpg')}
                            />
                            <Image
                                style={{width: 107, height: 100, borderRadius: 10, marginRight: 7}}
                                source={require('../images/imgg1.jpg')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        color: '#BCBCBC',
    }
  });

  export default LocationDetails