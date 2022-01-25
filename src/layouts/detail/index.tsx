import { ReactChild, ReactFragment, ReactPortal } from "react";
import { NavBar } from "antd-mobile";
import { IRouteComponentProps } from "umi";
import styles from './index.less';

/**
 * 这是一个详情 layout， 默认有顶部导航栏，title 是读取的路由中的title
 * @param props
 */
export default (props: IRouteComponentProps) => {
  const { children, history, route, location, match, routes } = props;
  console.log('props', props);
  console.log('children', children);
  console.log('route', route);
  console.log('location', location);
  console.log('match', match);
  console.log('routes', routes);
  return <div className={styles['detail-layout']}>
    <NavBar back="返回" onBack={() => history.goBack()}>标题</NavBar>
    <div className={styles['container-warp']}>{children}</div>
  </div>;
}
