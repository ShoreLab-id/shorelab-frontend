'use client'

import { oxygen } from '@/templates/font'
import { useState } from 'react'

const TitleSection = () => {
  return (
    <div
      data-aos="fade-up"
      id="title"
      className="flex gap-10 items-center justify-center">
      <div className="size-32 bg-slate-200 animate-pulse rounded-lg" />
      <h1 className={oxygen + "text-9xl font-bold text-white"}>ShoreLab</h1>
    </div>
  )
}

export default TitleSection