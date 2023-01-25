import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../../redux/features/usersSlice';

import User from './User/User';
import Pagination from './Pagination/Pagination';

import s from './UserSearch.module.scss';

const UserSearch = () => {
    const {users, isFetching, pagination} = useSelector((state) => state.usersSlice);
    const {page, count, usersCount} = pagination;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers({page, count}));
    }, [page]);

    const skeleton = [...new Array(count)].map((_, index) => <li key={index} className={s.skeleton}></li>);

    return (
      <>
        <ul className={s.container}>
          {isFetching
            ? skeleton
            : users.map(({id, name, photos, status, followed}) =>
              <User key={id} id={id} name={name} photo={photos.large} status={status} followed={followed}/>)}
        </ul>
        {isFetching
          ? <div> Загрузка</div>
          : <div className={s.pgContainer}>
            <Pagination currentPage={page} numberOfDisplayedItems={count} totalElements={usersCount}/>
          </div>
        }
      </>
    );
  }
;

export default UserSearch;