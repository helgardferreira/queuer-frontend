import { createContext } from 'react';

const UserContext = createContext({
  name: 'John Doe',
  age: 21,
  gender: 'Male',
  dateOfBirth: '1997-11-20',
  city: 'Munich',
  country: 'Germany',
  address: '12 Foo Bar St.',
});

export default UserContext;
