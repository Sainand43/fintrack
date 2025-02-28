import { PermissionsAndroid } from "react-native";
import SmsAndroid from "react-native-get-sms-android";
import axios from "axios";

export const fetchAndSendSms = async (userId) => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS);
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      console.log("SMS permission denied");
      return;
    }

    SmsAndroid.list(
      {},
      (fail) => console.log("Failed to fetch SMS", fail),
      async (count, smsList) => {
        const transactions = JSON.parse(smsList).map((sms) => ({
          sender: sms.address,
          message: sms.body,
          user: userId,
        }));

        await axios.post("http://YOUR_SERVER_IP:5000/sms/store", transactions);
      }
    );
  } catch (error) {
    console.error("Error fetching SMS:", error);
  }
};
