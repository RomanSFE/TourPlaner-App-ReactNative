import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView, Picker, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SearchBar } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';

class MakeTourScreen extends Component {

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };

    render() {
        const { search } = this.state;

        const placeholder = {
            label: 'From',
            value: null,
            color: '#f9f9f9',
          };
        const to = {
            label: 'To',
            value: null,
            color: '#f9f9f9',
          };
        const days = {
            label: 'Days',
            value: null,
            color: '#f9f9f9',
          };
        return (
            <ScrollView>
                <View style={{backgroundColor: '#EBF0F4', height: 270}}>
                    <View style={{backgroundColor: '#f9f9f9', fontSize: 17, color: '#333', marginTop: 20  }}>
                        <SearchBar
                            style = {{backgroundColor: '#fff'}}
                            placeholder="search..."
                            onChangeText={this.updateSearch}
                            value={search}
                            placeholderTextColor= '#8D8E8F'
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: -80, maginBottom: 10, padding: 4}}>
                        <View style={{width: 106, backgroundColor: '#7CC5C6', borderRadius: 5, margin: 5}}>
                            <RNPickerSelect
                                placeholder={placeholder}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Dhaka', value: 'dhaka' },
                                    { label: 'Chittagong', value: 'chittagong' },
                                    { label: 'Rangamati', value: 'rangamati' },
                                ]}
                            />
                        </View>
                        <View style={{width: 106, backgroundColor: '#7CC5C6', borderRadius: 5, margin: 5}}>
                            <RNPickerSelect
                                placeholder={to}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Chittagong', value: 'chittagong' },
                                    { label: 'Sylhet', value: 'sylhet' },
                                    { label: 'Cox-Bazar', value: 'coxbazar' },
                                ]}
                            />
                        </View>
                        <View style={{width: 106, backgroundColor: '#7CC5C6', borderRadius: 5, margin: 5}}>
                            <RNPickerSelect
                                placeholder={days}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: '1', value: '1' },
                                    { label: '2', value: '2' },
                                    { label: '3', value: '3' },
                                    { label: '4', value: '4' },
                                    { label: '5', value: '5' },
                                ]}
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
        color: '#333'
    }
  });

  export default MakeTourScreen