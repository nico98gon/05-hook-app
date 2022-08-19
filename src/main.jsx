import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from '../src/01-useState/CustomWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from "../src/03-examples/MultipleCustomHooks";
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLeyoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
// import { HooksApp } from './HooksApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <HooksApp /> */}
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHooks /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      {/* // <Padre /> */}
      {/* <TodoApp /> */}
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
