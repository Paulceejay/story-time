import { View, Text } from 'react-native'
import React, { useEffect} from 'react'
import BackgroundImage from '../components/ui/BackgroundImage'
import Logo from '../components/Logo'


const SplashScreen = ({ onFinish }: Void) => {

  useEffect(() => {
    // Simulate loading splashscrreen
    const timer = setTimeout(() => {
      onFinish(); // Callback to tell parent we're done
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BackgroundImage className="">
      <View className='flex-1 justify-center items-center'>
       <Logo className="rounded-[23px] w-16 h-16" />
        <Text className='text-[28px] font-normal text-dark-white font-Pacifico'>Bed Time Story</Text>
      </View>
    </BackgroundImage>
  )
}

export default SplashScreen