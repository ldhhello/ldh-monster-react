import styled from 'styled-components';
import TechStack from './TechStack';
import { media } from '../design/media';
import ProjectItemMobile from './ProjectItemMobile';
import { useBreakpoint } from '../design/useBreakpoint';

const Item = styled.div`
  box-sizing: border-box;
  height: 18rem;
  /* From https://css.glass */
  background: rgba(250, 246, 245, 0.46);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  //backdrop-filter: blur(9.3px);
  //-webkit-backdrop-filter: blur(9.3px);

  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  min-width: 22rem;

  ${media.tabletSmall`
    height: 17rem;
    min-width: 20rem;
    padding: 0.9rem;
    gap: 0.45rem;
  `}
`;

const ItemImage = styled.img`
  height: 12rem;
  object-fit: contain;
  ${media.tabletSmall`
    height: 10.8rem;
  `}
`

export type Props = {
  title: string,
  year?: number,
  techStack: string[],
  image: string,
  link?: string,
};

export default function ProjectItem({title, year, image, techStack}: Props) {
  const { isMobile, isMobileSmall } = useBreakpoint();

  if (isMobile || isMobileSmall)
    return ProjectItemMobile({title, year, image, techStack});

  return <Item>
    <ItemImage src={image} />
    <p>
      <strong>{title}</strong> ({year})
    </p>
    <TechStack list={techStack} />
  </Item>
}