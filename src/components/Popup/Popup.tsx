import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';

type popupPosition = 'left' | 'center' | 'bottom';
type showType = false | true;

interface BasePopupProps {
  ClassName?: string;
  position?: popupPosition;
  content?: any;
  show?: showType;
  width?: number | string;
}

type PopupProps = BasePopupProps & HTMLAttributes<HTMLDivElement>

export const Popup: FC<PopupProps> = (props) => {
  const {
    ClassName,
    position = "left",
    content,
    show,
    width,
    ...restProps
  } = props
  const [contShow, setContShow] = useState(false)

  const classes = classNames('lt-popup', {'lt-popup-left': position === 'left', 'lt-popup-bottom': position === 'bottom', 'lt-popup-center': position === 'center'}, ClassName)

  useEffect(() => {
    setTimeout(() => {
      setContShow(show as boolean)
    }, 1000);
  }, [show])

  return (
    <div className="lt-layer" style={{ display: show ? 'block' : 'none' }}>
      <div
        className={classes}
        style={{ width: width }}
        {...restProps}>
        <div className='lt-cont' style={{ display: contShow ? 'block' : 'none' }}>
          {content}
        </div>
      </div>
    </div>
  )
}