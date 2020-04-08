import React, { Component } from 'react'
import { View, Button, StyleSheet, Text, Image, ScrollView, Picker, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SearchBar } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';

class MakeTourScreen extends Component {

    // modal start
    state = {
        isModalVisible: false,
      };
    
      toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };
    //   modal end

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

        const air = {
            label: 'Air',
            value: null,
            color: '#f9f9f9',
          };
        const bus = {
            label: 'Bus',
            value: null,
            color: '#f9f9f9',
          };
        const train = {
            label: 'Train',
            value: null,
            color: '#f9f9f9',
          };
        const hotel = {
            label: 'Hotel',
            value: null,
            color: '#f9f9f9',
          };
        const person = {
            label: 'Person',
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
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10, maginBottom: 10, padding: 4}}>
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

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: -20, maginBottom: 10, padding: 4}}>
                        <View style={{width: 62, height: 62, backgroundColor: '#1D9BCE', borderRadius: 100, margin: 4}}>
                            <RNPickerSelect
                                placeholder={air}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Business', value: 'business' },
                                    { label: 'Economy', value: 'economy' },
                                ]}
                            />
                            <Text style={styles.travelBy}>Air</Text>
                        </View>
                        <View style={{width: 62, height: 62, backgroundColor: '#816DED', borderRadius: 100, margin: 4}}>
                            <RNPickerSelect
                                placeholder={bus}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'AC', value: 'ac' },
                                    { label: 'Non AC', value: 'nonac' },
                                ]}
                            />
                            <Text style={styles.travelBy}>Bus</Text>
                        </View>
                        <View style={{width: 62, height: 62, backgroundColor: '#FE68A9', borderRadius: 100, margin: 4}}>
                            <RNPickerSelect
                                placeholder={train}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'AC', value: 'ac' },
                                    { label: 'Non AC', value: 'nonac' },
                                ]}
                            />
                            <Text style={styles.travelBy}>Train</Text>
                        </View>
                        <View style={{width: 62, height: 62, backgroundColor: '#62CE5C', borderRadius: 100, margin: 4}}>
                            <RNPickerSelect
                                placeholder={hotel}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Low', value: 'low' },
                                    { label: 'Mrdium', value: 'medium' },
                                    { label: 'High', value: 'high' },
                                ]}
                            />
                            <Text style={styles.travelBy}>Hotel</Text>
                        </View>
                        <View style={{width: 62, height: 62, backgroundColor: '#2B75DA', borderRadius: 100, margin: 4}}>
                            <RNPickerSelect
                                placeholder={person}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: '1', value: '1' },
                                    { label: '2', value: '2' },
                                    { label: '3', value: '3' },
                                    { label: '4', value: '4' },
                                    { label: '5', value: '5' },
                                ]}
                            />
                            <Text style={styles.travelBy}>Person</Text>
                        </View>
                    </View>

                </View>
                <View style={{marginTop: 40}}>
                    <Image
                        style={{width: 70, height: 70, marginLeft: 200}}
                        source={require('../images/biman-icon.png')}
                    />
                </View>
                
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 30, marginHorizontal: 20}}>
                    <Button title="Your Prediction Cost" onPress={this.toggleModal}/>
                    <Modal isVisible={this.state.isModalVisible}>
                    <View style={{flex: 1,}}>
                        <Text style={{marginTop: 100, color: '#f9f9f9', fontWeight: 'bold', fontSize: 19, textAlign: 'center', marginBottom: 15}}>Dhaka to Coxs-Bazar</Text>
                        <Text style={styles.totalCost}>Days - 3</Text>
                        <Text style={styles.totalCost}>Travel By - Air</Text>
                        <Text style={styles.totalCost}>Hotel - Medium</Text>
                        <Text style={styles.totalCost}>Person - 4</Text>
                        <Text style={{marginBottom: 100, color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'center', marginTop: 30}}>Total Cost - 25000 tk</Text>
                        <Button title="Hide Me" onPress={this.toggleModal} />
                    </View>
                    </Modal>
                </View>

                <View>
                    <Image
                        style={{width: 70, height: 70, marginLeft: 70, marginTop: 40}}
                        source={require('../images/bus-icon.png')}
                    />
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
    totalCost: {
        marginTop: 2,
        color: '#BFD1D3',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 5
    },
    travelBy : {
        color: '#333',
        textAlign: 'center',
        marginTop: 10
    }
  });

  export default MakeTourScreen