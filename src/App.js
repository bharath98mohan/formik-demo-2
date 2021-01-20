import React from 'react';
import './App.css';
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';
import { theme, ThemeProvider } from "@chakra-ui/core"
import ModalExample from './components/ModalExample'
import SimpleText from './components/antdFunctionality/SimpleText'

function App() {
  return (
    <div className="App">
      <EnrollmentForm />
    </div>
  );
}

export default App;
