'use client';

import CityCard from '@/views/home/CityCard';

export default function Home() {
  return (
    <div className="h-screen w-full bg-white grid grid-cols-2 gap-4">
      <div>01</div>
      <div className="flex justify-center">
        <CityCard />
      </div>
    </div>
  );
}
