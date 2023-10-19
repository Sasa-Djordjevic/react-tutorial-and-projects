import React, {useState} from 'react';

import Form from './components/Form';
import ColorList from './components/ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#5F9DF7').all(10));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
      <main>
        <ToastContainer position='top-center'/>
        <Form addColor={addColor} />
        <ColorList colors={colors} />
      </main>
  );
};
export default App;
