import React, { createContext, useState } from 'react';

export const AuthContext = createContext<{ user: any; setUser: React.Dispatch<React.SetStateAction<any>> | null }>({
  user: null,
  setUser: null,
});

import type { PropsWithChildren } from 'react';

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};