import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SearchBar } from 'react-native-elements'

class MyTripsScreen extends Component {

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
                            // backgroundColor = '#f9f9f9'
                            inputStyle = '17'
                            
                        />
                    </View>
                </View>

                    <View style={{marginTop: 10,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#585858', paddingRight: 40, paddingLeft: 10}}>Recent Tours</Text>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#EEF0FD', marginHorizontal: 10, justifyContent: 'space-between', marginTop: 10, maginBottom: 5, padding: 10}}>
                        <Text style={{fontSize: 17, color: '#585858'}}>Rangamati</Text>
                        <Text>10/2/2020</Text>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#EEF0FD', marginHorizontal: 10, justifyContent: 'space-between', marginTop: 10, maginBottom: 5, padding: 10}}>
                        <Text style={{fontSize: 17, color: '#585858'}}>Coxs-Bazar</Text>
                        <Text>04/3/2020</Text>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#EEF0FD', marginHorizontal: 10, justifyContent: 'space-between', marginTop: 10, maginBottom: 5, padding: 10}}>
                        <Text style={{fontSize: 17, color: '#585858'}}>Bandarban</Text>
                        <Text>10/2/2020</Text>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#EEF0FD', marginHorizontal: 10, justifyContent: 'space-between', marginTop: 10, maginBottom: 5, padding: 10}}>
                        <Text style={{fontSize: 17, color: '#585858'}}>Sylhet</Text>
                        <Text>04/3/2020</Text>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#EEF0FD', marginHorizontal: 10, justifyContent: 'space-between', marginTop: 10, maginBottom: 5, padding: 10}}>
                        <Text style={{fontSize: 17, color: '#585858'}}>Chittagong</Text>
                        <Text>10/2/2020</Text>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#EEF0FD', marginHorizontal: 10, justifyContent: 'space-between', marginTop: 10, maginBottom: 5, padding: 10}}>
                        <Text style={{fontSize: 17, color: '#585858'}}>Saint Martin</Text>
                        <Text>04/3/2020</Text>
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

  export default MyTripsScreen