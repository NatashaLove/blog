import React, { useContext, useState } from 'react';//useState here to control TextInput
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';//TextInput for the user to input text
import { Context } from '../context/BlogContext';// import can get access to our context

const EditScreen = ({navigation})=> {
    return (
        <View>
            <Text> Edit Screen - {navigation.getParam('id')//like that edit screen knows exactly what it is supposed to be editing.
            }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;