import { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';

const SettingsContext = createContext({});

export function SettingsProvider({ children }) {
  const [state, setState] = useState({});

  useEffect(() => {
    async function getSettings() {
      const settingsResponse = await api.get('/settings');
      const menuResponse = await api.get(
        '/navigation/render/navigation-1?type=tree'
      );

      setState({
        settings: settingsResponse.data,
        menus: menuResponse.data,
      });
    }

    getSettings();
  }, []);

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(SettingsContext);
}
