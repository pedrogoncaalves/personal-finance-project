
import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { filterListByMonth, getCurrentMonth } from './helpers/DateFilter'
import { TableArea } from './components/TableArea/index'
import { InfoArea } from './components/InfoArea'


function App() {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);
  
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange}/>

      <TableArea list={filteredList}/>



        
      </C.Body>
    </C.Container>
  )
}

export default App;
