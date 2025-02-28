import React, { useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import SmsAndroid from "react-native-get-sms-android";
import axios from "axios";

const SmsFetcher = ({ user }) => {
  useEffect(() => {
    const requestSmsPermission = async () => {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        fetchSms();
      }
    };

    const fetchSms = () => {
      SmsAndroid.list(
        {},
        (fail) => console.log("Failed to fetch SMS", fail),
        async (count, smsList) => {
          const transactions = JSON.parse(smsList).map((sms) => ({
            sender: sms.address,
            message: sms.body,
            user: user.id,
          }));

          await axios.post("http://YOUR_SERVER_IP:5000/sms/store", transactions);
        }
      );
    };

    requestSmsPermission();
  }, []);

  return null;
};

export default SmsFetcher;
