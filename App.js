import React from 'react';
import Routes from './src/routes';

export default function App() {
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  return <Routes />;
}
