import './App.css'
import NavBar from './NavBar'
import ContactInfo from './data/ContactInfo'
import HomePage from './data/HomePage'
import MobilePhoneList from './data/MobilePhoneList'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './data/ProductDetails'
import AddProduct from './data/AddProduct'
import PageNotFound from './data/PageNotFound'



function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path='/products' element={<MobilePhoneList/>}/>
      <Route path="/homepage" element={<HomePage/>}/>
      <Route path='/contacts' element={<ContactInfo/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      




      </Routes>
      
      
    </>
  )
}

export default App
