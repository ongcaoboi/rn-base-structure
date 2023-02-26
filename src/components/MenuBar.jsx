import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const MenuBar = ({ dispathAction, menuChildren = [] }) => {
  const [menuItems, setMenuItems] = useState([])
  const [menuIndexSelected, setMenuIndexSelected] = useState(0)

  useEffect(() => {
    setMenuItems(menuChildren)
  }, [])

  const touchMenu = (menuItem, index) => {
    console.log(menuItem)
    setMenuIndexSelected(index)
    if (typeof dispathAction === 'function') {
      dispathAction(index)
    }
  }

  return (
    <View style={styles.menuBar}>
      {menuItems.map((item, index) => (
        <TouchableHighlight onPress={() => touchMenu(item, index)}
          underlayColor="gray" key={index} style={styles.menuItem}>
          <View style={styles.button}>
            <Text style={{ color: index === menuIndexSelected ? 'blue' : 'black' }}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  )
}

export default MenuBar

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
  },
  menuItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
