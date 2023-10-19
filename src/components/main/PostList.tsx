import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

type PostListProps = {
  posts : PostType[],
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent<PostListProps> = function ({posts}) {
  return <PostListWrapper>
   {posts.map(({node : {
    id,
    frontmatter
   }}) => {
    return (
      <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id}/>
    )
   })}
  </PostListWrapper>
}

export default PostList