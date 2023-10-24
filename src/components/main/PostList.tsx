import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import useInfiniteScroll from 'hooks/useInfiniteScroll'
import { PostListItemType } from 'types/PostItem.type'

type PostListProps = {
  selectedCategory: string,
  posts: PostListItemType[],
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
    {postList.map(({ node: { frontmatter, id, fields: { slug } } }) => (
      <PostItem key={id} {...frontmatter} link={slug} />
    ))}
  </PostListWrapper>)
}

export default PostList