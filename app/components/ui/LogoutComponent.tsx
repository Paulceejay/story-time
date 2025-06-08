import { supabase } from '../../lib/supabase'
import { useUserStore } from '@/store/userStore'
import { Text, Alert, TouchableOpacity, View } from 'react-native'
import { useRouter } from "expo-router";

const LogoutComponent = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
          Alert.alert('Error', error.message)
        } else {
          useUserStore.getState().clearUser()
          router.replace("/_auth/login");
        }
      }
  return (
  <View className='flex-1 items-end justify-end mt-10'>  <TouchableOpacity
  className="bg-red-500 py-3 px-6 rounded-lg"
  onPress={handleLogout}
>
  <Text className="text-white text-center font-semibold">Log Out</Text>
</TouchableOpacity></View>
  )
}

export default LogoutComponent