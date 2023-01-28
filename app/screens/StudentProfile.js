import React, { useState } from 'react';
import { Image, ScrollView, TextInput, View } from 'react-native';
import { SizedBox } from 'sizedbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomFlatButton from '../components/CustomFlatButton';
import colors from '../config/colors';


function CustomLineInputField({ hintText, onChangeText, value, keyboardType }) {
    return (<TextInput value={value} onChangeText={onChangeText} placeholder={hintText} showSoftInputOnFocus={true} style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,

    }} />);
}

function StudentProfile(props) {
    const [firstName, setfirstName] = useState('Mr.Sagara');
    const [lastName, setlastName] = useState('Rathnayaka');
    const [email, setemail] = useState('sagara23@gmail.com');
    const [mobile, setmobile] = useState('+94 787653452');
    const [province, setprovince] = useState('South Province');


    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.white, padding: 20 }}>
            <View>
                <MaterialCommunityIcons name="pencil" size={24} color={colors.primary} style={{
                    position: 'absolute',
                    right: 10
                }} />
            </View>
            <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg' }}
                style={{ width: 150, height: 150, borderRadius: 75, alignSelf: 'center' }} />

            <View>
                <SizedBox vertical={10} />

                <CustomLineInputField
                    onChangeText={setfirstName}
                    hintText='First Name'
                    value={firstName} />

                <SizedBox vertical={10} />

                <CustomLineInputField
                    onChangeText={setlastName}
                    value={lastName}
                    hintText='Last Name' />

                <SizedBox vertical={10} />

                <CustomLineInputField
                    onChangeText={setemail}
                    value={email}
                    hintText='Email Address' />

                <SizedBox vertical={10} />

                <CustomLineInputField
                    onChangeText={setmobile}
                    value={mobile}
                    hintText='Mobile' keyboardType="numeric" />

                <SizedBox vertical={10} />

                <CustomLineInputField
                    onChangeText={setprovince}
                    value={province}
                    hintText='Province' />

            </View>
            <SizedBox vertical={10} />
            <View>
                <CustomFlatButton title='Update'
                    tap={() => {
                        const userData = {
                            "firstName": firstName,
                            "lastName": lastName,
                            "email": email,
                            "province": province,
                        }
                        console.log(userData);
                    }}
                />
            </View>

        </ScrollView>
    );
}

export default StudentProfile;