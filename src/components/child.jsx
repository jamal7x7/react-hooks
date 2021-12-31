import '../style.css'
import { useContext } from 'react'

import { ParentContext } from './Parent'

function Child({ children }) {
  const { count, setCount } = useContext(ParentContext)

  function addOneHandler() {
    setCount(count + 1)
  }
  function subOneHandler() {
    setCount(count - 1)
  }
  return (
    <div className='parent'>
      <button className='conic-gradient' onClick={addOneHandler}>
        +1
      </button>

      {children}

      <button className='conic-gradient' onClick={subOneHandler}>
        -1
      </button>
    </div>
  )
}

export default Child
