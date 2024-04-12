import Header from '@/components/header/header';
import s from './main.module.scss'
import FrontBlock from '@/components/frontBlock/frontBlock';
import Pluss from '@/components/pluss/pluss';
import PortfolioBlock from '@/components/portfolio/portfolio';
import DealsBlock from '@/components/deals/deals'

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <FrontBlock />
      <Pluss />
      <PortfolioBlock />
      <DealsBlock />
    </main>
    </>
  );
}
