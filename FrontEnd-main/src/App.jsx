import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signin from './components/SignIn';
import Register from './components/Register';
import AboutUs from "./components/AboutUs";
import IndividualRegister from "./components/IndividualRegister";
import CompanyRegister from "./components/CompanyRegister";
import ContributionDetails from "./components/ContributionDetails";
import PaymentForm from "./components/PaymentForm";
import SignInemail from "./components/SignInemail";
import OTPInput from "./components/OTPInput";
import AdminLogin from "./components/AdminLogin";
import Collegespecific from "./components/Collegespecific";
import Profile from "./components/Profile";
import IndividualEdit from "./components/IndividualEdit";
import CompanyEdit from "./components/CompanyEdit";
import ContributionPayment from "./components/ContributionPatyment";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register/individual" element={<IndividualRegister/>} />
        <Route path="/register/company" element={<CompanyRegister/>} />
        <Route path='/company' element={<ContributionDetails/>} />
        <Route path='/company/payment' element={<PaymentForm/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/collegespecific" element={<Collegespecific />} />
        <Route path="/check" element={<SignInemail/>} />
        <Route path="/check/otp" element={<OTPInput/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/profile/individualedit' element={<IndividualEdit/>} />
        <Route path='/profile/companyedit' element={<CompanyEdit/>} />
        <Route path='/company/payments' element={<ContributionPayment/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
