import React, { Component, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import styles from '../styles/Styles_bai13';
import {SignupSchema} from '../validation/validation'

const Exbai13_keyboard = () => {

    return (
        <Formik
            initialValues={{ firstName: '' , lastName: '', email: '', passWord: '', confirmPW: ''}}
            validationSchema={SignupSchema}
            onSubmit={values => console.log(values)}>

            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style = {styles.container}>
                {/* Group View 1 */}
                    <View style = {styles.groupView1}>
                        <Text style = {styles.textView}>Register</Text>
                    </View>

                {/* Group View 2 */}
                    <View style = {styles.groupView2}>
                    {/* First Name */}
                        <View style = {styles.groupInput}>
                            <View style = {styles.contentText}>
                                <Text style = {styles.groupTextView2}>First Name</Text>
                            </View>
                            <View style = {styles.boxTextInput}>
                                <TextInput 
                                    style = {styles.groupTextInput} 
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}></TextInput>

                            {errors.firstName && touched.firstName ? (
                                <Text>{errors.firstName}</Text>
                            ) : null}
                            </View>
                        </View>
                    {/* Last Name */}
                        <View style = {styles.groupInput}>
                            <View style = {styles.contentText}>
                                <Text style = {styles.groupTextView2}>Last Name</Text>
                            </View>
                            <View style = {styles.boxTextInput}>
                                <TextInput 
                                    style = {styles.groupTextInput}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}></TextInput>
                            </View>
                        </View>
                    {/* Email */}
                        <View style = {styles.groupInput}>
                            <View style = {styles.contentText}>
                                <Text style = {styles.groupTextView2}>Email Address</Text>
                            </View>
                            <View style = {styles.boxTextInput}>
                                <TextInput 
                                    style = {styles.groupTextInput}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}></TextInput>
                            </View>
                        </View>
                    {/* Password */}
                        <View style = {styles.groupInput}>
                            <View style = {styles.contentText}>
                                <Text style = {styles.groupTextView2}>Password</Text>
                            </View>
                            <View style = {styles.boxTextInput}>
                                <TextInput 
                                    style = {styles.groupTextInput}
                                    onChangeText={handleChange('passWord')}
                                    onBlur={handleBlur('passWord')}
                                    value={values.passWord}></TextInput>
                            </View>
                        </View>
                    {/* Confirm Password */}
                        <View style = {styles.groupInput}>
                            <View style = {styles.contentText}>
                                <Text style = {styles.groupTextView2}>Confirm Password</Text>
                            </View>
                            <View style = {styles.boxTextInput}>
                                <TextInput 
                                    style = {styles.groupTextInput}
                                    onChangeText={handleChange('confirmPW')}
                                    onBlur={handleBlur('confirmPW')}
                                    value={values.confirmPW}></TextInput>
                            </View>
                        </View>
                    </View>
                
                {/* Group View 3 */}
                    <View style = {styles.groupView3}>
                        <TouchableOpacity 
                            style = {styles.buttonStyle} 
                            onPress={handleSubmit} title="Submit" >
                            <Text style = {styles.buttonText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

        </Formik>
    );
}

export default Exbai13_keyboard;