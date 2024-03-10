'use client'

import { Button } from '@/components/ui/button'
import { CredentialsMethod } from '@/app/login/components/credentials-method'
import { googleLogin } from '@/app/login/actions'
import { toast } from '@/components/ui/use-toast'
import { redirect } from 'next/navigation'

export function UserAuthForm() {
  const handleSubmit = async () => {
    const response = await googleLogin()

    if (response.success) {
      redirect(response.message || '/login')
    } else {
      toast({
        title: 'Error',
        description: response.error,
      })
    }
  }

  return (
    <div className="grid gap-6">
      <CredentialsMethod />
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
      <form className="mx-auto" action={handleSubmit}>
        <Button variant="outline" type="submit">
          Google
        </Button>
      </form>
    </div>
  )
}
