'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { Eclipse } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function DarkLightModeBtn() {
    const { theme, setTheme } = useTheme();
  return (
    <Button variant='secondary' size='lg' className={'mr-2.5'}
              onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
        <Eclipse />
    </Button>
  )
}
