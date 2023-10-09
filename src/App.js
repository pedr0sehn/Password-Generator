import './App.css';
import { useState } from 'react';
import PasswordInfo from './components/PasswordInfo';
import CountInput from './components/DigitInput';
import GeneratePassword from './components/generatePassword/GeneratePassword';
import Footer from './components/Footer';

function App() {

  const [markLetter, setMarkLetter] = useState(true)
  const [markWord, setMarkWord] = useState(false)
  const [markNumber, setMarkNumber] = useState(false)
  const [markSymbols, setMarkSymbols] = useState(false)
  const [passwordLength, setPasswordLength] = useState('16')

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <PasswordInfo markLetter={markLetter} setMarkLetter={setMarkLetter} markWord={markWord} setMarkWord={setMarkWord} markNumber={markNumber} setMarkNumber={setMarkNumber} markCharacter={markSymbols} setMarkCharacter={setMarkSymbols} />
      <CountInput passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
      <GeneratePassword letters={markLetter} words={markWord} numbers={markNumber} characters={markCharacter} numberOfDigits={passwordLength} />
      <Footer />
    </div>
  );
}

export default App;
