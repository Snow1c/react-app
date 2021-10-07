import React, { useMemo, useState } from 'react'
import PostItem from './PostItem'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'
import classes from '../styles/PostList.module.css'

export default function PostList({ posts, title, ...props }) {

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="post-list">
      <h1 className={classes.listTitle}>{title}</h1>
      <div className={classes.postsControl}>
        {sortedAndSearchedPosts.length > 1
          ? <MySelect selectSortKind={sortPosts} className="sort-select" defaultValue="Сортировка по..."
            options={[
              { value: 'title', name: 'По названию', },
              { value: 'body', name: 'По описанию', },
            ]}
          />
          : <div></div>}

        <MyInput value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ width: 'auto' }}
          placeholder="Название поста..." />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? sortedAndSearchedPosts.map((post, index) =>
          <PostItem remove={props.remove} number={index + 1} post={post} key={post.id} />
        )
        : <h1 className={classes.noPosts}>Посты не найдены :(</h1>
      }
    </div>
  )
}
