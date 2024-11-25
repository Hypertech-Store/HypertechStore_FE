import { ToastContainer } from 'react-toastify';
import Router from './router';

function App() {

  return (
    <>
      <ToastContainer position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition:Bounce />
      <Router />
    </>
  )
}

export default App
