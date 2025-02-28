import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { fetchAndSendSms } from "../services/SmsService";

const DashboardScreen = ({ route }) => {
  const { user } = route.params;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchAndSendSms(user.id);
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`http://YOUR_SERVER_IP:5000/sms/user/${user.id}`);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <View>
      <Text>Welcome, {user.username}</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.sender}: {item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DashboardScreen;
