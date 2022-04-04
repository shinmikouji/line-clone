import './App.css';
import SignIn from "./components/Singin"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Line from "./components/Line";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line></Line> : <SignIn></SignIn>}
    </div>
  );
}

export default App;
