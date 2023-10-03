import './App.css';
import { useState } from 'react';
import PasswordInfo from './components/PasswordInfo';
import CountInput from './components/DigitInput';
import GeneratePassword from './components/generatePassword/GeneratePassword';
import Footer from './components/Footer';

function App() {

  const [markLetter, setMarkLetter] = useState(true)
  const [markNumber, setMarkNumber] = useState(false)
  const [markCharacter, setMarkCharacter] = useState(false)
  const [passwordLength, setPasswordLength] = useState('16')

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <PasswordInfo markLetter={markLetter} setMarkLetter={setMarkLetter} markNumber={markNumber} setMarkNumber={setMarkNumber} markCharacter={markCharacter} setMarkCharacter={setMarkCharacter} />
      <CountInput passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
      <GeneratePassword letters={markLetter} numbers={markNumber} characters={markCharacter} numberOfDigits={passwordLength} />
      <Footer />
    </div>
  );
}

export default App;
