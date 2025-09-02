
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './copmonents/Routes'

function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
