import { Button } from '@/components/ui/button'
import React from 'react'
import { Search, Settings, User } from "lucide-react";
import Link from 'next/link';

export default function SignUpBtn() {
  return (
    <Button className={"capitalize"} size='lg' asChild>
        <Link href={'/signup'}>sign up</Link>
    </Button>
  )
}
