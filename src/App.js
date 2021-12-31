import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import SignInPage from "./components/Users/SignInPage";
import RegistrationPage from "./components/Users/RegistrationPage";
import ItemListPage from "./components/Pages/ItemListPage";
import ItemDetailsPage from "./components/Pages/ItemDetailsPage";
import {Routes, Route, BrowserRouter} from "react-router-dom"

import PasswordResetPage from "./components/Users/PasswordResetPage";
import {ItemListProvider} from "./components/Contexts/ItemListContext";
import {ShoppingCartProvider} from "./components/Contexts/ShoppingCartContext";
import ShoppingCartPopup from "./components/ShoppingCart/ShoppingCartPopup";
import {motion} from 'framer-motion'
import {getElementError} from "@testing-library/react";
import CheckoutPage from "./components/Pages/CheckoutPage";

function App() {

  return (
      <div>
        <BrowserRouter>
      <ItemListProvider>
            <ShoppingCartProvider>

                <div className="App">
                    <ShoppingCartPopup/>

                    <div>
                        <Header/>
                            <Routes>
                            <Route path="/categories/:category/:subcategory?" element={<ItemListPage/>}/>
                            <Route path="/details/:slug" element={<ItemDetailsPage/>}/>

                            <Route path="/users/login" element={<SignInPage/>}/>
                            <Route path="/users/registration" element={<RegistrationPage/>}/>
                            <Route path="/users/password-reset" element={<PasswordResetPage/>}/>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/checkout/"element={<CheckoutPage/>} />
                        </Routes>
                    </div>
                    <Footer/>

                </div>

            </ShoppingCartProvider>
      </ItemListProvider>
        </BrowserRouter>
      </div>


  );
}

export default App;
