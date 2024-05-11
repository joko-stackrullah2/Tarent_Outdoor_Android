import { View, Image } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoApp from '../app/logo.jpg'


const SplashScreen = ({navigation}) => {
    const getDataUser = async () => {
        try {
            const value = await AsyncStorage.getItem('@userData')
            if (value !== null) {
                var shared_key = value;
                if (shared_key != null && shared_key != '') {
                    console.log('already login');
                    console.log('Shared Key: ' + shared_key);
                    setTimeout(() => {
                        navigation.navigate('Dashboard');
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }],
                        });
                    }, 1000);
                } else {
                    setTimeout(() => {
                        navigation.navigate('Login');
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    }, 1000);
                }
            } else {
                setTimeout(() => {
                    navigation.navigate('Login');
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                }, 1000);
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getDataUser()
    }, [])
    

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
            <Image source={LogoApp} style={{width:150, height:150}} resizeMode={'contain'} />
        </View>
    )
}

export default SplashScreen