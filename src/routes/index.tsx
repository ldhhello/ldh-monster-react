import { useEffect } from 'react';
import PrimaryBox from '../components/PrimaryBox';
import ExplainBox from '../components/ExplainBox';

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <>
    <PrimaryBox />
    <ExplainBox />
  </>
}