'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="fixed top-0 z-10 w-screen bg-white px-10 md:px-[14vw]">
      <div className="flex w-full justify-between border-b border-b-border-gray02 bg-white py-6">
        <div className="font-semibold">스테이 나음</div>
        <div className="block md:hidden">
          <GiHamburgerMenu className="text-3xl" />
        </div>
        <div className="hidden md:block">
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
            <Link href="signin" className="px-3 text-font-gray">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
