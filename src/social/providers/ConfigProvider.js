import React, { createContext, useContext, useMemo } from 'react';
import { stripUndefinedValues } from '~/helpers/utils';

const defaultConfig = {
  // Disabling the ability to create button by anyone
  socialCommunityCreationButtonVisible: false,
};

const ConfigContext = createContext(defaultConfig);

export const useConfig = () => useContext(ConfigContext);

export default ({ children, config }) => {
  const value = useMemo(() => ({ ...defaultConfig, ...stripUndefinedValues(config) }), [config]);

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};
