import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <>
      <MainLayout></MainLayout>
      <StatusBar style="inverted" />
    </>
  );
}
