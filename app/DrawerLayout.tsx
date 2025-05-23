import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

// صفحه‌ها
import Tabs from "./(tabs)/_layout"; // تب‌های اصلی
import About from "./about";
import AddFood from "./add-food";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setIsAdmin(data.isAdmin === true);
        }
      }
    };
    checkAdmin();
  }, [user]);

  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="About" component={About} />
      {isAdmin && <Drawer.Screen name="Add Food" component={AddFood} />}
    </Drawer.Navigator>
  );
}
