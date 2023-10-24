import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import useInfiniteScroll from 'hooks/useInfiniteScroll'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string,
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

type PostListProps = {
  selectedCategory: string,
  posts: PostType[],
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent<PostListProps> = function ({ selectedCategory, posts }) {

  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);

  return (<PostListWrapper ref={containerRef}>
    {postList.map(({ node: { frontmatter, id } }) => (
      <PostItem key={id} {...frontmatter} link="https://www.google.co.kr" />
    ))}
  </PostListWrapper>)
}

export default PostList