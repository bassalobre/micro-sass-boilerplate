'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { magicLinkLogin } from '@/app/login/actions'
import { toast } from '@/components/ui/use-toast'

export function MagicLinkMethod() {
  const handleSubmit = async (data: FormData) => {
    const response = await magicLinkLogin(data)

    if (response.success) {
      toast({
        title: 'Magic link sent',
        description:
          'Check your email for a magic link to authenticate your account',
      })
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
        <Button type="submit">Send Magic Link</Button>
      </div>
    </form>
  )
}
