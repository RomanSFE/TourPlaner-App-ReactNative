import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SearchBar } from 'react-native-elements'

class ExplorerScreen extends Component {

    LocationDetails = () => {
        this.props.navigation.navigate('LocationDetails')
    }

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };

    render() {
        const { search } = this.state;
        return (
            <ScrollView>
                <View style={{backgroundColor: '#EBF0F4', height: 270}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, maginBottom: 10, padding: 8}}>
                        <Text><Icon style={styles.navItem} name="menu" size={40}/></Text>
                        <Image
                            style={{width: 40, height: 40, borderRadius: 100}}
                            source={require('../images/profile.jpg')}
                        />
                    </View>
                    <View style={{marginTop: 40,}}>
                        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#585858', paddingRight: 40, paddingLeft: 10}}>What are you Looking for?</Text>
                    </View>
                    <View style={{backgroundColor: '#f9f9f9', fontSize: 17, color: '#333', marginTop: 20  }}>
                        <SearchBar
                            style = {{backgroundColor: '#fff'}}
                            placeholder="search..."
                            onChangeText={this.updateSearch}
                            value={search}
                            placeholderTextColor= '#8D8E8F'
                            
                        />
                    </View>

                </View>
                    <View style={{marginTop: 10,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#585858', paddingRight: 40, paddingLeft: 10}}>Where you want to go?</Text>
                    </View>

                    <View style={{flex: 1, flexWrap: 'nowrap', flexDirection: 'row-reverse', justifyContent: 'space-around', marginTop: 15, maginBottom: 20, padding: 4}}>
                        <View>
                            <TouchableOpacity onPress={this.LocationDetails}>
                                <Image
                                    style={{width: 107, height: 120, borderRadius: 10, marginRight: 7}}
                                    source={require('../images/imgg2.jpg')}
                                />
                                <Text style={{fontWeight: 'bold'}}>Ranga Mati</Text>
                                <Text>Sylhet</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.LocationDetails}>
                                <Image
                                    style={{width: 107, height: 120, borderRadius: 10, marginRight: 7}}
                                    source={require('../images/pho3.jpg')}
                                />
                                <Text style={{fontWeight: 'bold'}}>Ranga Mati</Text>
                                <Text>Sylhet</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.LocationDetails}>
                                <Image
                                    style={{width: 107, height: 120, borderRadius: 10, marginRight: 7}}
                                    source={require('../images/imgg1.jpg')}
                                />
                                <Text style={{fontWeight: 'bold'}}>Ranga Mati</Text>
                                <Text>Sylhet</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    <View style={{flex: 1, flexDirection: 'row-reverse', justifyContent: 'space-around', marginTop: 15, maginBottom: 20, padding: 4}}>
                        <View>
                            <TouchableOpacity onPress={this.LocationDetails}>
                                <Image
                                    style={{width: 107, height: 120, borderRadius: 10, marginRight: 7}}
                                    source={require('../images/pho2.jpg')}
                                />
                                <Text style={{fontWeight: 'bold'}}>Ranga Mati</Text>
                                <Text>Sylhet</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.LocationDetails}>
                                <Image
                                    style={{width: 107, height: 120, borderRadius: 10, marginRight: 7}}
                                    source={require('../images/imgg3.jpg')}
                                />
                                <Text style={{fontWeight: 'bold'}}>Ranga Mati</Text>
                                <Text>Sylhet</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.LocationDetails}>
                                <Image
                                    style={{width: 107, height: 120, borderRadius: 10, marginRight: 7}}
                                    source={require('../images/imgg4.jpg')}
                                />
                                <Text style={{fontWeight: 'bold'}}>Ranga Mati</Text>
                                <Text>Sylhet</Text>
                            </TouchableOpacity>
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
        color: '#333'
    }
  });

  export default ExplorerScreen