import React, { useState } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import MenuBar from '../components/MenuBar'
import TouchableHighlightExample from '../components/TouchableHighlightExample'

const menuItems = [
  {
    title: 'Home',
    img: '',
    key: 1,
    view: <TouchableHighlightExample></TouchableHighlightExample>
  },
  {
    title: 'Group',
    img: '',
    key: 2,
    view: <Text>Group</Text>
  },
  {
    title: 'Contact',
    img: '',
    key: 3,
    view: <Text>Contact</Text>
  },
  {
    title: 'Me',
    img: '',
    key: 4,
    view: <Text>Me</Text>
  },
]

const MainLayout = () => {
  const [viewChild, setViewChild] = useState(menuItems[0].view)

  const dispathAction = (index) => {
    setViewChild(menuItems[index].view)
  }

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 0, position: 'absolute' }} >
        <Image source={require('../../assets/869501.jpg')}
          style={{ zIndex: 0, position: 'absolute', marginLeft: -870, marginTop: -200, resizeMode: 'contain' }} />
      </View>
      <View style={styles.childView}>
        {viewChild}
      </View>
      <MenuBar menuChildren={menuItems} dispathAction={dispathAction}></MenuBar>
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  childView: {
    zIndex: 1,
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 20,
    left: 0,
    bottom: 60,
    right: 0,
  }
});
