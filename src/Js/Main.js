import { useState } from 'react';
import Accordion from './Accordion';

const Main = () => {
  const [active, setActive] = useState('');

  return (
    <main>
      <Accordion active={active} setActive={setActive} />
    </main>
  );
};

export default Main;
