
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
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  // Utilizando novamente o useEffect para sempre que a listra filtrada mudar,
  // as operações de receita e despesa apareçam novamente.

  useEffect(() => {
    let income = 0;
    let expense = 0;
    for (let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expense += filteredList[i].value
      }
    }

  }, [filteredList])
  
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

      <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
}

export default App;
