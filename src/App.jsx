import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Anniversary from './pages/AnniversaryMinistry'
import Anniversary8 from './pages/AnniversaryMinistry2'
import Anniversary8th from './pages/AnniversaryMinistry3'
import Attendees from './pages/AnniversaryAttendees'
import PM_Attendees from './pages/PM_AnnivAttendees'
import HomePage from './pages/HomePage'
import PrayerRequestForm from './pages/PrayerRequestForm'
import CCLAfternoon1 from './pages/CCLAfternoonService1'
import CCLAfternoon2 from './pages/CCLAfternoonService2'
import CCLAfternoon3 from './pages/CCLAfternoonService3'
import MailingList from './pages/MailingList'

const App = () => {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<PrayerRequestForm />}/>
      <Route path='/ccl-afternoon-1st-anniversary-a' element={<CCLAfternoon1 />}/>
      <Route path='/ccl-afternoon-1st-anniversary-b' element={<CCLAfternoon2 />}/>
      <Route path='/ccl-afternoon-1st-anniversary-c' element={<CCLAfternoon3 />}/>

      <Route path='/anniversary' element={<Anniversary />}/>
      <Route path='/anniversary8' element={<Anniversary8 />}/>
      <Route path='/anniversary8th' element={<Anniversary8th />}/>

      <Route path='/attendees' element={<Attendees />}/>
      <Route path='/afternoon-anniv-visitors' element={<PM_Attendees />}/>

      <Route path='/home' element={<HomePage />}/>
      <Route path='/mailing-list' element={<MailingList />}/>
    </Route>
  )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
