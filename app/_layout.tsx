import { AuthProvider } from "../context/AuthContext";
import DrawerLayout from "./DrawerLayout";

export default function RootLayout() {
  return (
    <AuthProvider>
      <DrawerLayout />
    </AuthProvider>
  );
}
