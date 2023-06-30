import './App.css'
import MapCard from './Components/Practice1/MapCard'
import InputBox from './Components/Practice2/InputBox'
import Api from './Components/Practice3/Api'
import Counter1 from './Components/Practice4/Counter1'
import CounterRedux from './Components/Practice4/Counter2'
// import Main from './Components/Practice5/Main'
import Api2 from './Components/Practice6/Api2'
import Api3 from './Components/Practice7/Api3'
import Api4 from './Components/Practice8/Api4'
import Timer from './Components/Practice9/Timer'
import UseReff from "./Components/Practice10/UseReff";
import Form1 from './Components/Practice10/form1'

function App() {

  return (
    <>
   <div>
    {/* <Main/> */}
    <Counter1/>
    <CounterRedux/>
    <MapCard/>
    <InputBox/>
    <Api/>
    <Api2/>
    <Api3/>
    {/* <Api4/> */}
    <Timer/>
    <UseReff/>
    <Form1/>
    
   </div>
   
    </>
  )
}

export default App
