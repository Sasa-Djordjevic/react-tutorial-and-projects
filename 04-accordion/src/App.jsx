import React, {useState} from 'react';

import questions from './data';

import Questions from './components/Questions';

const App = () => {
  return (
    <main>
      <Questions data={questions}/>
    </main>
  );
};
export default App;
