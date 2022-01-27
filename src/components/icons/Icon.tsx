import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import IconContext from './Context';
import { updateCSS } from './utils/dynamicCSS';

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '2em',
  height: '2em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};
export const iconStyles = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.anticon > * {
  line-height: 1;
}
.anticon svg {
  display: inline-block;
}
.anticon::before {
  display: none;
}
.anticon .anticon-icon {
  display: block;
}
.anticon[tabindex] {
  cursor: pointer;
}
.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}
@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
export const useInsertStyles = (styleStr: string = iconStyles) => {
  const { csp } = useContext(IconContext);

  useEffect(() => {
    updateCSS(styleStr, '@umi-antd-mobile-icons', {
      prepend: true,
      csp,
    });
  }, []);
};

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?:
    | React.ComponentType<
        CustomIconComponentProps | React.SVGProps<SVGSVGElement>
      >
    | React.ForwardRefExoticComponent<CustomIconComponentProps>;
  ariaLabel?: React.AriaAttributes['aria-label'];
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
  (props, ref) => {
    const {
      // affect outter <i>...</i>
      className,

      // affect inner <svg>...</svg>
      component: Component,
      viewBox,
      spin,
      rotate,

      tabIndex,
      onClick,

      // children
      children,
      ...restProps
    } = props;

    console.warn(
      Boolean(Component || children),
      'Should have `component` prop or `children`.',
    );

    useInsertStyles();

    const { prefixCls = 'anticon' } = React.useContext(IconContext);

    const classString = classNames(prefixCls, className);

    const svgClassString = classNames({
      [`${prefixCls}-spin`]: !!spin,
    });

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    const innerSvgProps: CustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
      style: svgStyle,
      viewBox,
    };

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    // component > children
    const renderInnerNode = () => {
      if (Component) {
        return <Component {...innerSvgProps}>{children}</Component>;
      }

      if (children) {
        console.warn(
          Boolean(viewBox) ||
            (React.Children.count(children) === 1 &&
              React.isValidElement(children) &&
              React.Children.only(children).type === 'use'),
          'Make sure that you provide correct `viewBox`' +
            ' prop (default `0 0 1024 1024`) to the icon.',
        );

        return (
          <svg {...innerSvgProps} viewBox={viewBox}>
            {children}
          </svg>
        );
      }

      return null;
    };

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    return (
      <span
        role="img"
        {...restProps}
        ref={ref}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        {renderInnerNode()}
      </span>
    );
  },
);

Icon.displayName = 'UmiAntdMobileIcon';

export default Icon;
