import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-screen bg-background-gray01 px-[14vw] py-6 text-sm">
      <span className="block">
        스테이나음 | 대표자 김민정 | 주소 서울특별시 종로구 자하문로9길 24,
        2층(통인동) | 전화 1670-4123 | 이메일 help@stayfolio.com
      </span>
      <span className="mb-4 block">
        사업자등록번호 676-87-12345 | 통신판매업신고 제2022-서울종로-0499호
        &#91;사업자번호확인&#93; | 관광사업자등록 일반여행업 2018-000049호
        &#40;종로구청&#41;
      </span>
      <span className="mb-4 block text-font-gray">
        <Link href="/">이용약관</Link> / <Link href="/">개인정보처리방침</Link>{' '}
        / <Link href="/">이메일무단수집금지</Link>
      </span>
      <span className="block text-font-gray">
        2024 스테이나음 ALL RIGHTS RESERVED
      </span>
    </footer>
  )
}

export default Footer
