import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './Reducer';


const App: React.FC = () => {
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  }
  return (
    <div>
      <Counter/>
      <MyForm onSubmit={onSubmit}></MyForm>
      <ReducerSample/>
    </div>
  );
}

export default App;
