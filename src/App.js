import { useState, useRef } from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aaa', body: 'lksja - язык программирования', },
    { id: 2, title: 'ss', body: 'askjdashkdajs - язык программирования', },
    { id: 3, title: 'bb', body: 'asdkjashkj - язык программирования', },
  ])

  window.addEventListener('keydown', (e) => {
    if(modal && e.key === 'Escape') {
      setModal(false)
    }
  })

  const [modal, setModal] = useState(false)

  // Получение поста из дочернего документа
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Получение поста из дочернего документа
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sortedPosts) => {
    setPosts(sortedPosts)
  }

  const filterPosts = (filteredPosts) => {
    setPosts(filteredPosts)
  }

  return (
    <div className="App">
      <MyButton style={{width: '100%', height: '50px'}} onClick={() => setModal(true)}><span className="add-post-title">Добавить пост</span></MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      {posts.length !== 0
        ? <PostList filter={filterPosts} remove={removePost} posts={posts} sort={sortPosts} title={"Список постов"} />
        : <h1 className="no-posts">Посты не найдены</h1>
      }
    </div>
  )
}

export default App;