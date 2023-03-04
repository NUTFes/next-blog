import * as React from 'react'
import HackmdNote from '@components/HackmdNote.type'
import PostCard from '@components/Card/PostCard'
import MainLayout from '@components/Layout/MainLayout'
import { get } from '@utils/api_methods'

interface Props {
  post: HackmdNote
}

export async function getStaticPaths() {
  const getUrl = `${process.env.API_BASE_URL}/notes/`
  const json = await get(getUrl)
  const paths = json.map((post: HackmdNote) => ({
    params: { id: post.shortId },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const getUrl = `${process.env.API_BASE_URL}/notes/${params.id}`
  const json = await get(getUrl)
  return {
    props: {
      post: json,
    },
  }
}

const Post = (props: Props) => {
  const { post } = props
  Object.assign(post, Object.fromEntries(post.title.split('__').map((x) => x.split('='))))
  // titleをパースして、postに上書き

  return (
    <MainLayout>
      <PostCard post={post} />
    </MainLayout>
  )
}

export default Post
