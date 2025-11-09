import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import NavBar from '@/app/ui/nav-bar';

const images = [
  { key: 1, name: 'Hyundai i10 2024', src: '/car/gran1.png' },
  { key: 2, name: 'Toyota Wigo 2023', src: '/car/wigo1.png'},
  { key: 3, name: 'Kia K3', src: '/car/kia33.png' },
  { key: 4, name: 'Vin Fast 3', src: '/car/vf3.png' },
  { key: 5, name: 'Toyota Wigo 2023', src: '/car/wigo1.png'},
  { key: 6, name: 'Vin Fast 3', src: '/car/vf3.png' },
  { key: 7, name: 'Kia K3', src: '/car/kia33.png' },
  { key: 8, name: 'Hyundai i10 2024', src: '/car/gran1.png' },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 banner"></div>
      <NavBar />
      <div className="mt-4 grid grid-cols-4 gap-4 car-list">
        {images.map((image) => {
          return (
            <div className="rounded-lg bg-gray-50 px-6 py-8" key={image.key}>
              <Image
                src={image.src}
                width={266}
                height={169}
                className="md:block"
                alt={image.name}
              />
              <h2>{image.name}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
}
