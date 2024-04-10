import Header from '@/components/header/header';
import s from './main.module.scss'
import FrontBlock from '@/components/frontBlock/frontBlock';
import Pluss from '@/components/pluss/pluss';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <FrontBlock />
      <Pluss />
    </main>
    </>
  );
}
