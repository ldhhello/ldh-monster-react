import styled from 'styled-components';
import TechStack from './TechStack';
import { media } from '../design/media';

const Item = styled.div`
  box-sizing: border-box;
  height: 12rem;
  /* From https://css.glass */
  background: white;

  display: flex;
  flex-direction: row;
  padding: 0.9rem;
  align-items: center;
  justify-content: start;
  gap: 0.45rem;

  min-width: 20rem;

  p {
    font-size: 1.3rem;
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ItemImage = styled.img`
  height: 10.8rem;
  object-fit: contain;
  width: 10rem;
`

const VerticalBar = styled.div`
  width: 1px;
  height: 80%;
  margin-left: 3px;
  margin-right: 3px;
  background-color: black;
`

export type Props = {
  title: string,
  year?: number,
  techStack: string[],
  image: string,
  link?: string,
};

export default function ProjectItemMobile({title, year, image, techStack}: Props) {
  return <Item>
    <ItemImage src={image} />
    <VerticalBar />
    <InnerBox>
      <p>
        <strong>{title}</strong> ({year})
      </p>
      <TechStack list={techStack} />
    </InnerBox>
  </Item>
}