import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import DateInput from './components/DateInput';

export default function App() {
  
  const [Date, setDate] = useState('1988-03-28');

  function handleDateChange(newDate) {
    setDate(newDate)
  }

  return (
    <>
      <Header>Trabalho Prático</Header>
      <Main>
        <DateInput
          labelDescription="Informe sua data de nascimento:"
          inputValue={Date}
          onInputChange={handleDateChange}
        />

        <p className="text-center">
          Asd
        </p>
      </Main>
    </>
  );
}
