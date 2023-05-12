import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Main from "./Main";
import PaymentSuccess from "./paymentSuccess";
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
    </Routes>
  </Router>

  </>
   
  );
}

export default App;
