import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'

function App() {


  return (
    <section className='bg-slate-50'>
   <RouterProvider router={router}></RouterProvider>
    </section>
  )
}

export default App
