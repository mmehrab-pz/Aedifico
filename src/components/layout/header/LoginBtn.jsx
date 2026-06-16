
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import Link from "next/link"
import React from 'react'

export default function LoginBtn() {
  return (
  <Button className={"capitalize"} variant="secondary" size='lg' asChild>
    <Link href={'/login'}>login</Link>
  </Button>
  )
}
