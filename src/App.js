import './style.css'
import Parent from './components/Parent'
import Child from './components/child'
import GrandChild from './components/GrandChild'

function App() {
  return (
    <div className='App'>
      <Parent>
        <Child>
          <GrandChild />
        </Child>
      </Parent>
    </div>
  )
}

export default App
