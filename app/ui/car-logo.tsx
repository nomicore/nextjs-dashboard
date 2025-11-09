import { TruckIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function CarLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      <TruckIcon className="h-12 w-12" />
      <p className="text-[44px]">Car</p>
    </div>
  );
}
