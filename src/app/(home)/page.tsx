'use client';

import CityCard from '@/views/home/city_card';
import HomeCaption from '@/views/home/home_caption';

export default function Home() {
  return (
    <div className="h-screen w-full grid grid-cols-2 gap-4">
      <HomeCaption />
      <CityCard />
    </div>
  );
}
