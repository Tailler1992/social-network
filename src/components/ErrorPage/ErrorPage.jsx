import {useRouteError} from 'react-router-dom';
import s from './ErrorPage.module.scss';
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={s.errorPage}>
      <h1>Oops!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  );
}

export default ErrorPage;
