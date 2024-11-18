import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cart = ({ route }) => {
  const { selectedItem } = route.params; // Get selectedItem from route params

  const navigation = useNavigation();

  // Initialize cartItems with the selectedItem passed from the Item screen
  const [cartItems, setCartItems] = useState([
    {
      id: selectedItem.id,
      name: selectedItem.name,
      size: selectedItem.size,
      price: selectedItem.total, // Assuming 'total' holds the correct price
      quantity: selectedItem.quantity,
    },
  ]);

  const [voucher, setVoucher] = useState("");
  const deliveryCharges = 129;
  const discount = 180;

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return itemsTotal + deliveryCharges - discount;
  };

  const confirmOrderBtn = () => {
    navigation.navigate('PaymentMethods', { item: { cartItems, total: calculateTotal() } });
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Voucher Section */}
      <View style={styles.voucherContainer}>
        <Text style={styles.sectionTitle}>Add a Voucher</Text>
        <View style={styles.voucherInputContainer}>
          <TextInput
            style={styles.voucherInput}
            placeholder="Enter a voucher code"
            value={voucher}
            onChangeText={setVoucher}
          />
          <TouchableOpacity style={styles.voucherButton}>
            <Text style={styles.voucherButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Details */}
      <Text style={styles.sectionTitle}>Order Details</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <View>
            <Text style={styles.itemName}>
              {item.name} | {item.size}
            </Text>
            <Text style={styles.selectedItem}>Rs. {item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleDecrease(item.id)}>
              <Ionicons name="remove-circle" size={24} color="#f00" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncrease(item.id)}>
              <Ionicons name="add-circle" size={24} color="#00f" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveItem(item.id)}
          >
            <Ionicons name="trash" size={24} color="#f00" />
          </TouchableOpacity>
        </View>
      ))}

      {/* Delivery Instructions */}
      <Text style={styles.instructionsTitle}>
        Delivery Instructions (Optional)
      </Text>
      <TextInput
        style={styles.instructionsInput}
        placeholder="Instructions for Delivery Expert"
        multiline
      />

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryText}>
            Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Delivery Charges</Text>
          <Text style={styles.summaryText}>Rs. {deliveryCharges}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>POS Fee</Text>
          <Text style={styles.summaryText}>Rs. 0</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Your Discount</Text>
          <Text style={styles.summaryText}>Rs. {discount}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryTitle}>Grand Total</Text>
          <Text style={styles.summaryTitle}>Rs. {calculateTotal()}</Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={confirmOrderBtn}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  voucherContainer: {
    marginBottom: 16,
  },
  voucherInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  voucherInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  voucherButton: {
    backgroundColor: "#00f",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  voucherButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    color: "#888",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 16,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  instructionsInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  summaryContainer: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#00f",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
