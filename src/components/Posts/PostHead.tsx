import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent } from 'react';
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo';

type PostHeadProps = PostHeadInfoProps & {
    thumnail: IGatsbyImageData
}

type GatsbyImgProps = {
    image: IGatsbyImageData,
    alt: string,
    className?: string,
}


const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BackgroundImage = styled((props: GatsbyImgProps) => (
    <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
    z-index: -1;
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: brightness(0.25);
`;

const PostHead: FunctionComponent<PostHeadProps> = ({
    title,
    date,
    categories,
    thumnail
}) => {
    return (
        <PostHeadWrapper>
            <BackgroundImage image={thumnail} alt="thumnail" />
            <PostHeadInfo title={title} date={date} categories={categories} />
        </PostHeadWrapper>
    );
}

export default PostHead;