import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="fixed h-12 w-screen px-[14vw]">
      <div className="flex w-full justify-between border-b border-b-border-gray01 py-3">
        <div className="font-semibold">스테이 나음</div>
        <div>
          <Link href="/" className="px-3">
            호텔 소개
          </Link>
          <Link href="/" className="px-3">
            고객 문의
          </Link>
          <Link href="/" className="px-3">
            특별한 제안
          </Link>
          <span className="px-3">|</span>
          <Link href="/" className="px-3 text-font-gray">
            로그인
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header