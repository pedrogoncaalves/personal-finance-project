import { useState, useEffect } from 'react'
import * as C from './components/App.styles'
import { Category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { FilterListByMonth, getCurrentMonth } from './helpers/DateFilter'
import { TableArea } from './components/TableArea/index'


function App() {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth))
  }, [list, currentMonth]);
  

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        



        <TableArea/>
      </C.Body>
    </C.Container>
  )
}

export default App
