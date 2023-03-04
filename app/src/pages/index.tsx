import * as React from 'react'
import HackmdNote from '@components/HackmdNote.type'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'
import MainLayout from '@components/Layout/MainLayout'
import MainPostCard from '@components/Card/MainPostCard'
import FeaturedPostCard from '@components/Card/FeaturedPostCard'
import { get } from '@utils/api_methods'

interface Props {
  posts: HackmdNote[]
}

export const getStaticProps = async () => {
  const getUrl = process.env.API_BASE_URL + '/notes/'
  const json = await get(getUrl)
  return {
    props: {
      posts: json,
    },
  }
}

const Home = (props: Props) => {
  const { posts } = props

  posts.map((post) => {
    Object.assign(post, Object.fromEntries(post.title.split('__').map((x) => x.split('='))))
    // titleをパースして、postに上書き
  })

  return (
    <MainLayout>
      <Box sx={{ mb: 2 }}>
        {posts
          .filter((post) => post.type == 'public')
          .map((post, index) => (index == 1 ? <MainPostCard key={post.title} post={post} /> : null))}
      </Box>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} sx={{ mb: 2 }}>
        {posts
          .filter((post) => post.type == 'public')
          .map((post, index) => (index == 1 ? null : <FeaturedPostCard key={post.title} post={post} />))}
      </Masonry>
    </MainLayout>
  )
}

export default Home
