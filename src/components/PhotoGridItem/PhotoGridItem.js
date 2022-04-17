import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <Source
            type="image/avif"
            srcSet={`${src.replace('.jpg', '@3x.avif')} 3x,
                    ${src.replace('.jpg', '@2x.avif')} 2x,
                    ${src.replace('.jpg', '.avif')} 1x`}
          
          />
          <Source
            type="image/jpeg"
            srcSet={`${src.replace('.jpg', '@3x.jpg')} 3x,
                    ${src.replace('.jpg', '@2x.jpg')} 2x,
                    ${src} 1x`}
          
          />
          <Image src={src}
          alt={alt} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture``;

const Source = styled.source``;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  padding: 4px 0;

  &:last-of-type{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:not(:last-of-type){
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
