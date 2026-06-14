import Puls from '@/components/ui/Puls'
import SingupForm from '@/components/layout/singup/SingupForm'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';

export default function page() {
  return (
    <main className='flex h-dvh justify-center items-center relative'>  
        <div className='graph'></div>
        <Button className={'absolute z-10 top-10 left-10'} asChild>
          <Link href={'/'}>
            <ArrowLeft />
          </Link>
        </Button>
        <SingupForm></SingupForm>
        <Puls></Puls>
    </main>
  )
}
