import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
export default function MySwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <div className="max-w-screen-2xl m-auto text-center">
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center py-8">
              <Image
                className="rounded-full"
                src="/images/person1.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <p className="text-gray-500 font-bold">Carl Anderson</p>
              <p>CEO, Co-Founder</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center">
              <Image
                className="rounded-full"
                src="/images/person2.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <p className="text-gray-500 font-bold">Carl Anderson</p>
              <p>CEO, Co-Founder</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center">
              <Image
                className="rounded-full"
                src="/images/person5.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <p className="text-gray-500 font-bold">Carl Anderson</p>
              <p>CEO, Co-Founder</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center">
              <Image
                className="rounded-full"
                src="/images/person3.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <p className="text-gray-500 font-bold">Carl Anderson</p>
              <p>CEO, Co-Founder</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center">
              <Image
                className="rounded-full"
                src="/images/person4.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <p className="text-gray-500 font-bold">Carl Anderson</p>
              <p>CEO, Co-Founder</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center">
              <Image
                className="rounded-full"
                src="/images/person5.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <p className="text-gray-500 font-bold">Carl Anderson</p>
              <p>CEO, Co-Founder</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
