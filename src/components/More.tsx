import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Cart = () => {
  const menuItems = [
    'About Us',
    'Track Order',
    'Store Locator',
    'Privacy Policy',
    'Terms & Conditions',
    'Alliances',
    'Nutritional Info',
    'Feedback',
    'Download Menu',
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* <TouchableOpacity> */}
          {/* <Text style={styles.backText}>Back</Text> */}
        {/* </TouchableOpacity> */}
        <Text style={styles.headerTitle}>More</Text>
      </View>

      {/* Menu Items Section */}
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
            <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>
        ))}


      {/* Social Media Links */}
      <View style={styles.socialMedia}>
        {['Facebook', 'YouTube', 'Twitter', 'Instagram', 'Call'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.icon}>
            <Text style={styles.iconText}>{icon[0]}</Text> {/* Placeholder for icons */}
          </TouchableOpacity>
        ))}
      </View>

      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backText: {
    color: 'blue',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'red',
  },
  menu: {
    flex: 1,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1, // Adds a border around the box
    borderColor: '#ddd', // Light gray border color
    borderRadius: 10, // Rounded corners for the box
    marginHorizontal: 15, // Adds horizontal spacing between items and the screen edge
    marginVertical: 5, // Adds vertical spacing between each box
    backgroundColor: '#fff', // Sets the background color of the box
    shadowColor: '#000', // Shadow for a card-like effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Adds elevation for Android shadow effect
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 18,
    color: '#aaa',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
});
