import './App.css';
import Counter from './components/counter';
import EventBind from './components/eventBind';
import Greet from './components/Greet'  
import Hello from './components/hello';
import Message from './components/message';
import NameList from './components/NameList';
import Parent from './components/parent';
import UserGreetings from './components/usergreeting';
import Welcome from './components/welcome';
import Stylesheet from './components/Stylesheet';
import Inlinestyle from './components/Inlinestyle';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/form';
import Expenseitem from './components/ExpenseItem'

function App() {
  return (
    <div className="App">
      
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inlinestyle></Inlinestyle> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <NameList></NameList> */}
      {/* <EventBind></EventBind> */}
      {/* <UserGreetings></UserGreetings> */}
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Welcome name='clark' heroName='superman'/>       */}
      {/* <Greet name='clark' heroName='superman'>This is children</Greet> */}
      {/*<Greet name='bruce' heroName="batsman"><button>Action</button></Greet>
      <Greet name='diana' heroName='super women'/>
      <Welcome name='clark' heroName='superman'/>
      <Welcome name='clark' heroName='superman'/> */}
      {/* <Hello/> */}
      <Expenseitem></Expenseitem>
      
   </div>
  );
}

export default App;
