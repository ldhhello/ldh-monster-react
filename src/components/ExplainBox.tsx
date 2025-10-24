import styled from "styled-components";
import ExplainItem from "./ExplainItem";
import { media } from "../design/media";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-top: 4rem;

  ${media.mobile`
    gap: 3rem;
  `}
`;

export default function ExplainBox() {
  return <Container>
    <ExplainItem image="/images/explainbox/cream.png" explain="우리집" />
    <ExplainItem image="/images/explainbox/배사.jpg" explain="인천 어딘가" reversed />
    <ExplainItem image="/images/explainbox/ldh_young.jpg" explain="천안 상록리조트" />
    <ExplainItem image="/images/explainbox/sing.jpg" explain="노래방" reversed />
  </Container>
}