import { Route, Routes, BrowserRouter } from "react-router"
import Page from "./pages/Page"
import Login from "./pages/Login"
import { ActiveStatus } from "./components/enums/active"



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page active={ActiveStatus.FOODS}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/foods" element={<Page active={ActiveStatus.FOODS} />} />
          <Route path="/myorders" element={<Page active={ActiveStatus.ORDER} />} />
          <Route path="/cart" element={<Page active={ActiveStatus.CART} />} />




          <Route path="*" element={<Page active={ActiveStatus.FOODS}/>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
