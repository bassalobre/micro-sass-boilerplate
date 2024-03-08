'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GitHub } from '@/components/icons'
import { login } from '@/app/login/actions'
import { toast } from '@/components/ui/use-toast'

export function UserAuthForm() {
  const handleSubmit = async (data: FormData) => {
    const response = await login(data)

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
    <div className="grid gap-6">
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
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        <GitHub
          className="mr-2 h-4 w-4"
          width={16}
          height={16}
          viewBox="0 0 24 24"
        />
        GitHub
      </Button>
    </div>
  )
}
