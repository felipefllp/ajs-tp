//-- FELIPE BARBOSA LOPES --//

import { useEffect, useState } from 'react';

import Header from './components/Header'
import Main from './components/Main';
import DateInput from './components/DateInput';

import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns'

export default function App() {

  const [date, setDate] = useState('');

  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [weeks, setWeeks] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  function handleDateChange(newDate) {
    setDate(newDate)

    const today = new Date()
    const birthday = new Date(newDate)

    setYears(differenceInYears(today, birthday))
    setMonths(differenceInMonths(today, birthday))
    setWeeks(differenceInWeeks(today, birthday))
    setDays(differenceInDays(today, birthday))
    setHours(differenceInHours(today, birthday))
    setMinutes(differenceInMinutes(today, birthday))
    setSeconds(differenceInSeconds(today, birthday))
  }

  useEffect(() => {
    const minInterval = setInterval(() => {
      setMinutes(curMin => curMin + 1)
    }, 60000);
    return () => {
      clearInterval(minInterval)
    }
  }, [minutes])

  useEffect(() => {
    const secInterval = setInterval(() => {
      setSeconds(curSec => curSec + 1)
    }, 1000);
    return () => {
      clearInterval(secInterval)
    }
  }, [seconds])

  return (
    <>
      <Header>Trabalho Prático - Biblioteca date-fns</Header>
      <Main>
        <DateInput
          labelDescription="Informe sua data e horario de nascimento:"
          inputValue={date}
          onInputChange={handleDateChange}
        />
        {date ?
          <div className="flex flex-col items-center">
            <div>
              <p> {`Você está vivo há ${years.toLocaleString()} anos.`} </p>
              <p> {`Ou ${months.toLocaleString()} meses.`} </p>
              <p> {`Ou ${weeks.toLocaleString()} semanas.`} </p>
              <p> {`Ou ${days.toLocaleString()} dias.`} </p>
              <p> {`Ou ${hours.toLocaleString()} horas.`} </p>
              <p> {`Ou ${minutes.toLocaleString()} minutos.`} </p>
              <p> {`Ou ${seconds.toLocaleString()} segundos.`} </p>
            </div>
          </div> : ''}
      </Main>
    </>
  );
}
