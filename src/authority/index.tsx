import { ReactChild, ReactFragment, ReactPortal, useCallback } from 'react';
import { Redirect } from 'umi'

//假的权限验证
const useAuth = ()=>{
  const isLogin = true;
  return {isLogin}
}

export default (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
