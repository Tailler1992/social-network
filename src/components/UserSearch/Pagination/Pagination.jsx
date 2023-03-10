import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPage} from '../../../redux/features/usersSlice';

import s from './Pagination.module.scss';

const Pagination = ({currentPage, totalElements, numberOfDisplayedItems}) => {
  const dispatch = useDispatch();
  const [currentButton, setCurrentButton] = useState(currentPage);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  let pages = Math.ceil(totalElements / numberOfDisplayedItems);

  const createPagination = (currentButton, pages) => {
    if (currentButton >= 1 && currentButton <= 3) {
      return [1, 2, 3, 4, '...', pages];
    } else if (currentButton === 4) {
      return [1, 2, 3, 4, 5, '...', pages];
    } else if (currentButton > 4 && currentButton < pages - 2) {
      return [1, '...', currentButton - 1, currentButton, currentButton + 1, '...', pages];
    } else if (currentButton > pages - 3) {
      return [1, '...', pages - 3, pages - 2, pages - 1, pages];
    }
  };

  useEffect(() => {
    setArrOfCurrButtons(createPagination(currentButton, pages));
    dispatch(setPage(currentButton));
  }, [currentButton]);

  return (
    <ul className={s.pagination}>
      <li className={`${s.prev} ${currentButton === 1 ? s.disabled : ''}`}
          onClick={() => setCurrentButton((prev) => prev <= 1 ? prev : prev - 1)}> Назад
      </li>

      {arrOfCurrButtons.map((el, index) => {
        const dots = isNaN(el) ? <li key={index} className={s.dots}>{el}</li> : null;
        const numbers =
          <li key={index}
              className={`${s.item} ${currentButton === el ? s.active : ''}`}
              onClick={() => setCurrentButton(el)}>{el}</li>;
        return (dots ?? numbers);
      })}

      <li className={`${s.next} ${currentButton === pages ? s.disabled : ''}`}
          onClick={() => setCurrentButton((next) => next >= pages ? next : next + 1)}> Вперед
      </li>
    </ul>
  );
};

export default Pagination;