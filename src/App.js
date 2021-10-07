import { useState, useEffect } from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import axios from 'axios';
import Loader from './components/UI/loader/Loader';

function App() {
  const [posts, setPosts] = useState([])
  const [totalCount, setTotalCount] = useState(0 )

  useEffect(() => {
    fetchPosts()
  }, [])

  window.addEventListener('keydown', (e) => {
    if (modal && e.key === 'Escape') {
      setModal(false)
    }
  })

  const [modal, setModal] = useState(false)

  async function fetchPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    setPosts(response.data)
    console.log(response)
  }

  // Получение поста из дочернего документа
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Получение поста из дочернего документа
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  if (posts.length !== 0) {
    return (
      <div className="App">
        <MyButton style={{ width: '100%', height: '50px' }} onClick={() => setModal(true)}><span className="add-post-title">Добавить пост</span></MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>

        {/* <PostList filter={filterPosts} remove={removePost} posts={posts} sort={sortPosts} title={"Список постов"} /> */}
        {posts.length !== 0
          ? <PostList remove={removePost} posts={posts} title={"Список постов"} />
          : <h1 classN  ame="no-posts">Посты не найдены</h1>
          // : <Loader />
        }
      </div>
    )
  }
  else {
    return <Loader />
  }

}

export default App;