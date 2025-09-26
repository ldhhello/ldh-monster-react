import { type PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 90rem;

  box-sizing: border-box;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 5rem;
  gap: 2rem;
`;

type Props = {

}

export default function ProjectBox({children}: PropsWithChildren<Props>) {
  return <Container>
    {children}
  </Container>
}