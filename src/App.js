import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { auth } from './Components/firebase';
import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login';
import { login, selectUser } from './reducers/userSlice';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        //login
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      }
      else{
        //logout
        // dispatch(logout)
      }
    })
  },[])
  console.log(user)
  return (
    <div className="App">
      {
        !user ? (<Login/>) : 
        (<HomeScreen/>)
      }
    </div>
  );
}

export default App;
