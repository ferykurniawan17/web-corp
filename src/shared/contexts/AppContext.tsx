import React, { useEffect, useContext, createContext } from 'react';
import API from 'src/core/services/APIService';
import { Nullable } from '../types/GeneralTypes';

export type AppType = {
  caller: {
    post?: any;
    get?: any;
    put?: any;
    patch?: any;
    delete?: any;
    service: any;
  },
};

export const AppContext = createContext<AppType>({
  caller: {
    post: () => {},
    get: () => {},
    put: () => {},
    delete: () => {},
    service: null,
  },
});

export const useApp = () => useContext(AppContext);

const AppContextProvider = ({ children, ...rest }: any) => {
  // if (typeof window === 'undefined') {
  //   return null;
  // }
  let appToken = rest.authorization;

  let myInterceptor: Nullable<any> = null;

  useEffect(() => {
    setInspector();
  }, []);

  const setInspector = () => {
    myInterceptor = API.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if (error.response && error.response.data) {
        if (typeof error.response.data === 'string') {
          // showNotification('Sistem sedang mengalami gangguan, silakan coba lagi.');
          return Promise.reject(error);
        }
        // showNotification(error.response.data.message);
        return Promise.reject(error);
      }
      if (typeof error === 'object' && Object.keys(error).length > 0) {
        // showNotification('Sistem sedang mengalami gangguan, silakan coba lagi.');
      }
      return Promise.reject(error);
    });
  }

  const getHeader = () => {
    return {
      headers: {
        // 'Authorization': `Bearer ${token?.access_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };
  }

  const post = async (path: string, spec: Record<string, any>) => {
    return API.post(`${process.env.API}${path}`, spec, getHeader());
  }

  const patch = async (path: string, spec: Record<string, any>) => {
    return API.patch(`${process.env.API}${path}`, spec, getHeader());
  }

  const get = async (path: string, params: Record<string, any>) => {
    return API.get(
      `${process.env.API}${path}`,
      { ...getHeader(), params: params }
    );
  }

  const put = async (path: string, spec: Record<string, any>) => {
    return API.put(`${process.env.API}${path}`, spec, getHeader());
  }

  const remove = async (path: string, params: Record<string, any>) => {
    return API.delete(`${process.env.API}${path}`, { params, ...getHeader() });
  }

  const caller = {
    post,
    put,
    patch,
    get,
    delete: remove,
    service: API,
  };

  return (
    <AppContext.Provider value={{ caller }}>
      {children}
    </AppContext.Provider>
  );
};

export const withAuthContext = (Component: any) => {
  return (props: any) => (
    <AppContext.Consumer>
      {(context: AppType) => {
        return (
          <Component
            {...props}
            {...context}
          />
        );
      }}
    </AppContext.Consumer>
  );
}

export default AppContextProvider;