import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import axios from "axios";

const AuthScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const register = async () => {
    try {
      await axios.post("http://YOUR_SERVER_IP:5000/auth/register", { username, phone, password });
      alert("User registered. Please log in.");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const login = async () => {
    try {
      const response = await axios.post("http://YOUR_SERVER_IP:5000/auth/login", { phone, password });
      navigation.navigate("Dashboard", { user: response.data.user });
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <View>
      <Text>Phone:</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Button title="Register" onPress={register} />
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default AuthScreen;
