'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import type { ANNOUNCEMENTS_QUERYResult } from '../../sanity.types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function AnnouncementsCarousel({
  announcements,
}: {
  announcements: ANNOUNCEMENTS_QUERYResult;
}) {
  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="h-full w-full border-2 border-black"
      >
        {announcements.map((announcement) => (
          <SwiperSlide key={announcement.subtitle} className="relative">
            <Image
              src={urlFor(
                announcement?.announcementImage?.asset?._ref ??
                  '/placeholder.png',
              )
                .width(500)
                .height(300)
                .url()}
              fill
              className="object-cover"
              alt={announcement.title || ''}
            />
            {announcement.link ? (
              <Link href={announcement.link}>
                <div className="absolute bottom-0 w-full bg-black text-white md:h-1/5">
                  <div className="mx-2 my-2 md:mx-4 md:my-4">
                    <h4 className="break-words">{announcement.title}</h4>
                    <p className="ml-1">{announcement.subtitle}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="absolute bottom-0 w-full bg-black text-white md:h-1/5">
                <div className="mx-2 my-2 md:mx-4 md:my-4">
                  <h4 className="break-words">{announcement.title}</h4>
                  <p className="ml-1">{announcement.subtitle}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
          }
        `}
      </style>
    </>
  );
}
