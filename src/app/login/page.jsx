import { Button } from '@/components/ui/button'
import Puls from '@/components/ui/Puls'
import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from 'lucide-react';
import LoginForm from '@/components/layout/login/LoginForm';

export default function page() {
  return (
    <main className='flex h-dvh justify-center items-center relative'>  
        <div className='graph'></div>
        <Button className={'absolute z-10 top-10 left-10'} asChild>
          <Link href={'/'}>
            <ArrowLeft />
          </Link>
        </Button>
        <LoginForm></LoginForm>
        <Puls></Puls>
    </main>
  )
}
