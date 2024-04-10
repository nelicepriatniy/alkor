import Header from '@/components/header/header';
import s from './main.module.scss'
import FrontBlock from '@/components/frontBlock/frontBlock';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <FrontBlock />
    </main>
    </>
  );
}
