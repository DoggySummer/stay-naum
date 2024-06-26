import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="mt-[160px] w-full text-center font-semibold">로그인</div>
      <div className="mt-20 flex w-full flex-col items-center">
        <input
          className="mb-4 w-[400px] border-b border-border-gray01 py-3 focus:outline-none"
          placeholder="아이디"
        />
        <input
          className="mb-4 w-[400px] border-b border-border-gray01 py-3 focus:outline-none"
          placeholder="비밀번호"
          type="password"
        />
      </div>
      <div className="mt-16 flex w-full items-center justify-center">
        <div className="h-[1px] w-[160px] bg-border-gray03" />
        <div className="mx-6 text-border-gray03">또는</div>
        <div className="h-[1px] w-[160px] bg-border-gray03" />
      </div>
      <div className="mx-auto mt-8 flex w-[200px] items-center justify-between">
        <Image src="/naver.png" alt="naver login" width={50} height={50} />
        <Image src="/kakao.png" alt="kakao login" width={50} height={50} />
      </div>
      <div className="mx-auto mb-16 mt-8 flex w-[400px] items-center justify-center text-sm">
        <div className="mx-4">회원가입</div>
        <div className="mx-4">|</div>
        <div className="mx-4">아이디 찾기</div>
        <div className="mx-4">|</div>
        <div className="mx-4">비밀번호 찾기</div>
      </div>
    </div>
  )
}

export default Page
