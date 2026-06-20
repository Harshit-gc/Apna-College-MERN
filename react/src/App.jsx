import './App.css'
import Title from './React/Ch1/Title'
import Curlybraces from './React/Ch1/Curlybraces'
import Cardstab from './React/Ch1/Cardstab';
import Title2 from './React/Ch2/Title2';
import Productstab from './React/Ch2/React_Props/Productstab';
import Productstab1 from './React/Ch2/Passing_ArraysAsProps/Productstab1';
import Productstab2 from './React/Ch2/RenderingArrays/Productstab2';
import Title3 from './React/Ch3/Title3';
import Events from './React/Ch3/Events';
import EventObject from './React/Ch3/EventObject';
import Counter from './React/Ch3/Counter';
import LudoBoard from './React/Ch4/Objects_useState/LudoBoard';
import Title4 from './React/Ch4/Title4';
import Title5 from './React/Ch6/Title5';
import Form from './React/Ch6/Forms/Form';
import HandlingMultipleInput from './React/Ch6/Forms/HandlingMultipleInput';
import Counter1 from './React/Ch6/useEffect/Counter1';
import Counter2 from './React/Ch6/useEffect/Counter2';


function App() {
  return (
    <>
    {/* React Ch 1 */}
      <Title />
      <Curlybraces />
      <Cardstab />

    {/* React Ch 2 */}
      <Title2 />
      <Productstab />
      <Productstab1 />
      <Productstab2 />

    {/* React Ch 3 */}
      <Title3 />
      <Events />
      <EventObject />
      <Counter />

    {/* React Ch 4 */}
      <Title4 />
      <LudoBoard />

    {/* React Ch 5 */}
      <Title5 />
      <Form />
      <HandlingMultipleInput />
      <Counter1 />
      <Counter2 />
    </>
  );
}

export default App
