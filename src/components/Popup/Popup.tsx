import React, { FC, HTMLAttributes, useEffect, useState, MouseEvent } from 'react';
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
  const [isShow, setIsShow] = useState(show)
  const [contShow, setContShow] = useState(false)

  const classes = classNames('lt-popup', {'lt-popup-left': position === 'left', 'lt-popup-bottom': position === 'bottom', 'lt-popup-center': position === 'center'}, ClassName)

  useEffect(() => {
    if (position === 'left' || position === 'bottom') {
      setTimeout(() => {
        setContShow(show as boolean)
      }, 1000);
    } else {
      setContShow(show as boolean)
    }
  }, [show, position])

  const handleHide = (e: MouseEvent): void => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsShow(false)
  }

  return (
    <div className="lt-layer" style={{ display: isShow ? 'block' : 'none' }} onClick={handleHide}>
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