import styled from 'styled-components';
import TechStack from './TechStack';
import { media } from '../design/media';

const Item = styled.div`
  box-sizing: border-box;
  height: 8.6rem;
  /* From https://css.glass */
  //background: white;
  background: rgba(245, 245, 245, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  padding: 0.6rem;
  align-items: center;
  justify-content: start;
  gap: 0.45rem;

  min-width: 10rem;

  p {
    font-size: 1.08rem;
  }
  ${media.mobileSmall`
    p {
      font-size: 1.02rem;
    }
  `}
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ItemImage = styled.img`
  height: 7.5rem;
  object-fit: contain;
  width: 6rem;
`

const VerticalBar = styled.div`
  width: 1px;
  height: 90%;
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