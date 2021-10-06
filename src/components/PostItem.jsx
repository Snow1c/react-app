import React, {createRef, useRef} from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem(props) {
  const ref = useRef()
  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => {
          ref.current.classList.toggle('delete')
          // Для анимации
          setTimeout(() => {
            props.remove(props.post)
          }, 300)
        }}>Удалить</MyButton>
      </div>
    </div>
  )
}
