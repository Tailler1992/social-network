const LoginForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder={'login'}/>
      </div>
      <div>
        <input type="password" placeholder={'password'}/>
      </div>
      <div>
        <label>
          <input type="checkbox"/> Запомнить меня
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const Login = () => {
  return (
    <>
      <h1>Авторизация</h1>
      <LoginForm/>
    </>
  );
};


export default Login;