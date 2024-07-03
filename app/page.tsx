import Image from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { BsMoonStars } from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-full">
        <Image
          src="/main.webp"
          alt="메인 이미지"
          width={500}
          height={50}
          className="h-screen w-full object-cover"
        />
        <div className="absolute right-[8vw] top-[200px] flex aspect-square h-[200px] flex-col items-center bg-white pt-[60px]">
          <div className="pb-1">온전히 나아지길</div>
          <div className="pb-5">바라는 마음</div>
          <Link href="/" className="border-b border-border-gray01 pb-1 text-xs">
            Read More
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 flex h-32 w-[200px] bg-black opacity-75"></div>
      </div>
      <div className="mx-auto w-[1200px] py-10">
        <div className="flex h-24 w-full justify-between bg-pink-400">
          <div className="flex items-center border-b border-border-gray01 pb-2">
            <ReservationTitle title="체크인" detail="2024.05.22(수)" />
            <div className="flex h-[60px] flex-col justify-end">
              <BsMoonStars className="mb-2 h-4 text-3xl" />
              <div className="text-font-black">3박</div>
            </div>
            <ReservationTitle title="체크아웃" detail="2024.05.22(수)" />
          </div>
        </div>
      </div>
    </main>
  )
}
interface reserveProps {
  title: string
  detail: string
}
const ReservationTitle = (props: reserveProps) => {
  const { title, detail } = props
  return (
    <div className="mx-10 flex flex-col items-center">
      <div className="pb-3 text-font-gray">{title}</div>
      <div className="text-font-black">{detail}</div>
    </div>
  )
}
