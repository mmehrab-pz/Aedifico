import Puls from '@/components/ui/Puls'
import SingupForm from '@/components/layout/singup/SingupForm'
import React from 'react'

export default function page() {
  return (
    <main className='flex h-dvh justify-center items-center'>  
        <div className='graph'></div>
        <SingupForm></SingupForm>
        <Puls></Puls>
    </main>
  )
}
