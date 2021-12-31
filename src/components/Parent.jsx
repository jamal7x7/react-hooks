import '../style.css'
import { useState, createContext } from 'react'
import Child from './child'
import GrandChild from './GrandChild'

export const ParentContext = createContext()

function Parent({ children }) {
  const [count, setCount] = useState(0)

  const context = { count, setCount }

  return (
    <ParentContext.Provider value={context}>
      <div className='parent'>{children}</div>
    </ParentContext.Provider>
  )
}

export default Parent
