import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Link href={'/signup'} asChild> 
        <Pressable>
          <Text> Create Account </Text>
        </Pressable>
      </Link>
      
    </View>
  )
}

export default Login