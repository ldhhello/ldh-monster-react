import React from 'react';
import styled from 'styled-components';
import TechStack from './TechStack';

const Item = styled.div`
  box-sizing: border-box;
  height: 18rem;
  /* From https://css.glass */
  background: rgba(245, 245, 245, 0.46);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);

  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  min-width: 22rem;
`;

const ItemImage = styled.img`
  height: 12rem;
  object-fit: contain;
`

type Props = {
  title: string,
  subtitle?: string,
  techStack: string[],
  image: string,
  link?: string,
};

export default function ProjectItem({title, subtitle, image, techStack}: Props) {
  return <Item>
    <ItemImage src={image} />
    <p>
      <strong>{title}</strong> {subtitle}
    </p>
    <TechStack list={techStack} />
  </Item>
}