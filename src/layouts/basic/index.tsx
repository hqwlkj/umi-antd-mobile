import { ReactChild, ReactFragment, ReactPortal } from "react";

/**
 * 这是一个空白的 layout， 显示的内容完全用户自定义
 * @param props
 */
export default (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
  return <div>{ props.children }</div>;
}
