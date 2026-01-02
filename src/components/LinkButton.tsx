import linkImg from '../assets/box-arrow-up-right.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  to: string,
}

const Image = styled.img`
  padding-left: 6px;
  padding-right: 6px;
  height: 0.87rem;
`

export default function LinkButton({ to }: Props) {
  return <Link to={to}>
    <Image src={linkImg} />
  </Link>
}