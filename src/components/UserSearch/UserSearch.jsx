import {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../../features/usersSlice';

import s from './UserSearch.module.scss';
import User from './User/User';
import Pagination from './Pagination/Pagination';

const UserSearch = () => {
    const {users, page, count, usersCount, isFetching} = useSelector((state) => state.usersSlice);
    const dispatch = useDispatch();

    useEffect(() => {

      dispatch(fetchUsers({page, count}));
    }, [count, page, dispatch]);

    return (
      <>
        <ul className={s.container}>
          {isFetching
            ? [...new Array(count)].map((_, index) => <li key={index} className={s.skeleton}></li>)
            : users.map(({id, name, photos, status}) =>
              <User key={id} id={id} name={name} photo={photos.large} status={status}/>)}
        </ul>
        <Pagination currentPage={page} numberOfDisplayedItems={count} totalElements={usersCount}/>
      </>
    );
  }
;

export default UserSearch;