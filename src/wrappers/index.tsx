import { Navigate, Outlet } from '@umijs/max';

//假的权限验证
const useAuth = () => {
  const isLogin = true;
  return { isLogin };
};

export default () => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return (
      <div>
        <Outlet context={{ prop: 'from Layout' }} />
      </div>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
};
