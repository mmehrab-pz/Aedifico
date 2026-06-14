import { Button } from '@/components/ui/button'
import React from 'react'
import { Search, Settings, User } from "lucide-react";
import Link from 'next/link';

export default function SingUpBtn() {
  return (
    <Button className={"capitalize"} size='lg' asChild>
        <Link href={'./singup'}>sing up</Link>
    </Button>
  )
}
