'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { credentialsLogin } from '@/app/login/actions'
import { toast } from '@/components/ui/use-toast'
import { redirect } from 'next/navigation'

export function CredentialsMethod() {
  const handleSubmit = async (data: FormData) => {
    const response = await credentialsLogin(data)

    if (response.success) {
      redirect('/dashboard')
    } else {
      toast({
        title: 'Error',
        description: response.error,
      })
    }
  }

  return (
    <form action={handleSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            required
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="********"
            type="password"
            autoCapitalize="none"
            autoCorrect="off"
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  )
}
