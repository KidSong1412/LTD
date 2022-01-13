import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

interface BasePopupProps {
  ClassName?: string;
}

type SwiperProps = BasePopupProps & HTMLAttributes<HTMLDivElement>

export const Swiper: FC<SwiperProps> = (props) => {
  const {
    ClassName,
    ...restProps
  } = props

  const [swiperData, setSwiperData] = useState([
    {id: 1, imgUrl: 'https://img01.yzcdn.cn/vant/apple-4.jpg'},
    {id: 2, imgUrl: 'https://img01.yzcdn.cn/vant/apple-3.jpg'},
    {id: 3, imgUrl: 'https://img01.yzcdn.cn/vant/apple-1.jpg'}
  ])
  const [translate, setTranslate] = useState(0)

  const classes = classNames('lt-swiper', ClassName)

  useEffect(() => {
    let i = 0
    setInterval(() => {
      i++
      if(i >= swiperData.length) i = 0
      setTranslate(-100 * i)
    }, 2000)
    return () => {
    }
  }, [])

  return (
    <div className="lt-swiper">
      {swiperData.map((item, index) => {
        return (
          <div className="lt-swiper-item" key={item.id} style={{transform: `translateX(${translate}%)`}}>
            <img src={item.imgUrl} alt="" />
          </div>
        )
      })}
    </div>
  )
}