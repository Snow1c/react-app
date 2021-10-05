import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '', })

  const addNewPost = (event) => {
    event.preventDefault()

    if (post.title === '' || post.body === '') {
      alert('Необходимо заполнить все поля для добавления нового поста')
      return 1
    }

    const newPost = {
      ...post,
      id: Date.now(),
    }

    create(newPost)

    setPost({ title: '', body: '', })
    console.log('Добавлен новый пост:', post)
  }

  return (
    <form className='clearfix'>
      <h1 style={{ textAlign: 'center' }}>Добавление поста</h1>
      { /* Управляемый компонент */}
      <MyInput value={post.title} onChange={e => {
        // console.log(post)
        setPost({ ...post, title: e.target.value })
      }} type="text" placeholder="Название поста" />

      <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Описание поста" />

      { /* Неконтролируемый компонент */}
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста"/> */}

      <MyButton onClick={addNewPost}>Добавить</MyButton>
    </form>
  )
}
