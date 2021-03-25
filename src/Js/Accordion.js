import { FaChevronCircleDown, FaTimesCircle } from 'react-icons/fa';
import { Data } from './Data';

const Accordion = ({active, setActive }) => {
  return (
    <>
      {Data.map((dataItem) => (
        <div className='accordion' key={dataItem.id}>
          <div onClick={() => setActive(dataItem.question)} className='accordion__header'>
            <h2>{dataItem.question}</h2>
            <span>
              {active === dataItem.question ? (
                <FaTimesCircle fill='rgba(233, 41, 41, 0.8)' />
              ) : (
                <FaChevronCircleDown />
              )}
            </span>
          </div>
          <div
            className={(active === dataItem.question ? 'active' : '') + ' accordion__body'}
          >
            <p>{dataItem.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
