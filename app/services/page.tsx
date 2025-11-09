import CarLogo from '@/app/ui/car-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import NavBar from '@/app/ui/nav-bar';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/*  <div className={styles.shape} /> */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 banner"></div>
      <NavBar />
      <div className="flex items-center justify-center">
        <Image
          src="/car/ser.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </main>
  );
}
