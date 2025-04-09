

import "./user.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    message: string
  }
  
  export default function ErrorMessage({ message }: Props) {
    return (
      <>
      <section className="msg_error">
      <p >{message}</p>
      </section>
      <ToastContainer />
      
      </>
    )
  }
  