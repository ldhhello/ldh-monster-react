import ExplainItem from '../components/ExplainItem';
import PrimaryBox from '../components/PrimaryBox';

export default function Index() {
  return <>
    <PrimaryBox />

    <ExplainItem image="/images/project/dimimonster.png" explain="디미몬스터" />
    <ExplainItem image="/images/project/dimimonster.png" explain="디미몬스터" reversed />
    <ExplainItem image="/images/project/dimimonster.png" explain="디미몬스터" />
    <ExplainItem image="/images/project/dimimonster.png" explain="디미몬스터" reversed />
  </>
}