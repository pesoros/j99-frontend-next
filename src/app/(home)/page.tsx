'use client';

import CityCard from '@/views/home/city_card';
import HomeCaption from '@/views/home/home_caption';

export default function Home() {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1554460196-e6afa9dc66b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] backdrop-blur-xl bg-white/30">
      <div className=" grid grid-cols-2 gap-4 top-0 left-0 w-full h-full z-10 bg-black/65 items-center">
        <HomeCaption />
        <CityCard />
      </div>
    </div>
  );
}
