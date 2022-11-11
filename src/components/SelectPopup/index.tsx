import { Popup } from 'antd-mobile';
import type { FC } from 'react';
import cx from 'classnames';
import { useState } from 'react';

import './index.less';
export type HSelectPopupSelectorValue = string;
export interface HSelectPopupSelectOption {
  label: React.ReactNode;
  value: HSelectPopupSelectorValue;
}
interface SelectPopupProps {
  onClose?: () => void;
  visible?: boolean;
  title: string;
  defaultValue?: HSelectPopupSelectorValue;
  options: HSelectPopupSelectOption[];
  onConfirm: (val: HSelectPopupSelectorValue) => void;
}
const SelectPopup: FC<SelectPopupProps> = (props) => {
  const { visible, onClose, defaultValue, onConfirm, options, title } = props;
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0].value,
  );

  const handleChange = (itemValue: HSelectPopupSelectorValue) => {
    setSelectedValue(itemValue);
  };
  return (
    <Popup
      visible={visible}
      onMaskClick={onClose}
      bodyStyle={{ minHeight: '40vh' }}
    >
      <div className="select-popup-top">
        <div className="select-popup-top-cancel" onClick={onClose}>
          取消
        </div>
        <div className="select-popup-top-title">{title}</div>
        <div
          className="select-popup-top-ok"
          onClick={() => {
            onConfirm(selectedValue);
            onClose && onClose();
          }}
        >
          确定
        </div>
      </div>
      <div className="h-select-popup-content">
        {options.map((item, index) => {
          const { value, label } = item;
          const isSelected = selectedValue === value;
          return (
            <div
              key={value}
              onClick={() => handleChange(value)}
              className={cx('h-select-popup-option', {
                bordered: index > 0,
              })}
            >
              <div className="h-select-box">
                {isSelected && <div className="h-select-box-circle" />}
              </div>
              <div className="h-select-popup-option-label">{label}</div>
            </div>
          );
        })}
      </div>
    </Popup>
  );
};
export default SelectPopup;
