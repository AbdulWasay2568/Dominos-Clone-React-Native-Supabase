import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const Item = ({ route, navigation }) => {
  const { item } = route.params; // Receiving item from navigation params

  if (!route?.params?.item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Item details are missing. Please navigate to this page correctly.
        </Text>
      </View>
    );
  }
  // State variables for item customization
  const [size, setSize] = useState("Small");
  const [crust, setCrust] = useState("");
  const [extraCheese, setExtraCheese] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Prices for different options
  const prices = {
    Small: 420,
    Medium: 1400,
    Large: 1680,
    Cheese: 175,
  };

  // Update quantity ensuring it doesn't go below 1
  const handleQuantityChange = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };

  // Calculate the total price
  const calculateTotal = () => {
    const basePrice = prices[size] || 0;
    const cheesePrice = extraCheese ? prices.Cheese : 0;
    return (basePrice + cheesePrice) * quantity;
  };

  // Handler for the "Add to Cart" button
  const handleAddToCart = (item) => {
    const selectedItem = {
      id: item.id,
      name: item.name,
      size,
      crust,
      extraCheese,
      quantity,
      total: calculateTotal(),
    };
  //   setTimeout(() => {
  //     navigation.navigate('Cart', { selectedItem });
  // }, 0);
    navigation.navigate("Cart", { selectedItem }); 
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image and description */}
      <View style={styles.imageSection}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
        />
        <Text style={styles.pizzaTitle}>{item.name}</Text>
        <Text style={styles.pizzaDescription}>{item.description}</Text>
      </View>

      {/* Pizza size selection */}
      <CustomOptionSelector
        title="Size"
        options={["Small", "Medium", "Large"]}
        selectedOption={size}
        onSelectOption={setSize}
      />

      {/* Pizza crust selection */}
      <CustomOptionSelector
        title="Crust"
        options={["Pan", "Hand Tossed"]}
        selectedOption={crust}
        onSelectOption={setCrust}
      />

      {/* Extra cheese option */}
      <View style={styles.optionsSection}>
        <Text style={styles.sectionTitle}>Extra Toppings</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            extraCheese && styles.selectedOption,
          ]}
          onPress={() => setExtraCheese(!extraCheese)}
        >
          <Text
            style={[
              styles.optionText,
              extraCheese && styles.selectedOptionText,
            ]}
          >
            Cheese
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quantity selector */}
      <View style={styles.quantitySection}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(-1)}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(1)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Add to Cart button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress = {() => handleAddToCart(item)}
      >
        <Text style={styles.addToCartText}>
          Add to Cart • Rs. {calculateTotal()}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CustomOptionSelector = ({ title, options, selectedOption, onSelectOption }) => (
  <View style={styles.optionsSection}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.optionsRow}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => onSelectOption(option)}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === option && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  imageSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  pizzaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  pizzaDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  optionsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#e63946",
    borderColor: "#e63946",
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  quantitySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 12,
  },
  addToCartButton: {
    backgroundColor: "#e63946",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  
});

export default Item;




