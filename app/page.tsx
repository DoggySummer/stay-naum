import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Image src="/main.webp" alt="메인 이미지" />
    </main>
  )
}
