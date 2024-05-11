import React, {} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './assets/screen/Dashboard';
import Login from './assets/screen/Login';
import Kategori from './assets/screen/Kategori';
import Produk from './assets/screen/Produk';
import PilihKategori from './assets/screen/PilihKategori';
import Profile from './assets/screen/Profile';
import Checkout from './assets/screen/Checkout';
import DetailPesanan from './assets/screen/DetailPesanan';
import DaftarTransaksi from './assets/screen/DaftarTransaksi';
import QRScannerTransaksi from './assets/screen/QRScannerTransaksi';
import SplashScreen from './assets/screen/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Kategori"
                    component={Kategori}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Produk"
                    component={Produk}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="PilihKategori"
                    component={PilihKategori}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="DetailPesanan"
                    component={DetailPesanan}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="DaftarTransaksi"
                    component={DaftarTransaksi}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="QRScannerTransaksi"
                    component={QRScannerTransaksi}
                    options={{
                        header: () => null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
