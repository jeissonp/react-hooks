import React, { createContext } from 'react';
import { Tbody } from './Tbody';

const defaultStore = {
  loading: false,
  message: 'Hola',
};

export const store = createContext(defaultStore);

export const Users = () => <Table></Table>;
