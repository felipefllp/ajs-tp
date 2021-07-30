import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import TextInput from './components/TextInput';

export default function App() {
  
  const [name, setName] = useState('');

  const [vowels, setVowels] = useState('');

  function handleNameChange(newName) {
    setName(newName)
    setVowels(newName.match(/[aeiou]/gi))
  }

  return (
    <>
      <Header>Atividade Prévia - Filtragem de vogais em texto</Header>
      <Main>
        <TextInput
          labelDescription="Digite o texto desejado:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <p className="text-center">
          {vowels && vowels.length ? vowels.length : 0} vogais encontradas no texto:
        </p>
        <div className="vowels-box">
          {vowels}
        </div>
      </Main>
    </>
  );
}
