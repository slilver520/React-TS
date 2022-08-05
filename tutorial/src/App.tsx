import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './Reducer';
import { SampleProvider } from './SampleContext';


const App: React.FC = () => {
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  }
  return (
    <div>
      <Counter/>
      <MyForm onSubmit={onSubmit}></MyForm>
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
}

export default App;
