import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import icons from '@/constants/icons'

const TabIcon = ({focused, icon, title}:{focused: boolean;  icon: any; title: string})  =>(
    <View className='flex-1 mt-3 flex flex-col items-center'>
        <Image source={icon} tintColor={focused? '#FF8000' : '#666876'} resizeMode='contain'  className='size-6'/>
        <Text className={`${focused ? 'text-primary-300 font-rubrik-medium' : 'text-black-200 font-rubrik'} text-xs w-full text-center mt-1`}>
          {title}
        </Text>
    </View>
)

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel :false,
            tabBarStyle:{
                backgroundColor: 'white',
                position:"absolute",
                borderTopColor:"#FF8000",
                borderTopWidth:1,
                minHeight:70,
            }

        }}
    >
      <Tabs.Screen  
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) =>(
               <TabIcon icon={icons.home} focused={focused} title="Home"/>
            )
          }}
      />



<Tabs.Screen  
          name="explore"
          options={{
            title: 'Explore',
            headerShown: false,
            tabBarIcon: ({focused}) =>(
               <TabIcon icon={icons.search} focused={focused} title="Explore"/>
            )
          }}
      />

<Tabs.Screen  
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused}) =>(
               <TabIcon icon={icons.person} focused={focused} title="Profile"/>
            )
          }}
      />
    </Tabs>
  )
}

export default TabsLayout