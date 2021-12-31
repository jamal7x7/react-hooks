import '../style.css'
import { useContext } from 'react'
import { ParentContext } from './Parent'

function GrandChild() {
  const { count } = useContext(ParentContext)

  return (
    <div className='card'>
      <div className='grand-child'>
        {/* <h1 className='gradient-text'>{count}</h1> */}
        <h1 className='conic-gradient-text'>{count}</h1>
      </div>
    </div>
  )
}

export default GrandChild
