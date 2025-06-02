import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TextInputForm from '../ui/TextInputForm'
import SignInWithGoogle from '../ui/SignInWithGoogle'

const LoginForm = () => {
  return (
    <View>
     <Text className="text-dark-white text-[26px] font-semibold font-MontserratAlt">
        Login
      </Text>

      <View>
          {/* Text Input for Email */}
          <TextInputForm textInputTitle="Enter Email" />

           {/* Text input for Password */}
        <TextInputForm textInputTitle="Enter Password" />

        <View className="bg-dark-primary w-ful h-16 rounded-full my-2">
          <TouchableOpacity className="flex-1 justify-center items-center">
            <Text className="text-dark-white font-MontserratAlt font-normal text-xl">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* already have an account section */}
        <View className="flex-row py-3">
          <Text className="text-dark-white text-14 font-MontserratAlt font-light">
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text className="pl-2 text-dark-primary text-14 font-MontserratAlt font-light">
              Create account?
            </Text>
          </TouchableOpacity>
        </View>

        {/* sign up with Google option */}
        <SignInWithGoogle />
      </View>
    </View>
  )
}

export default LoginForm