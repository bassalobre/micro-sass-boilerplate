'use server'

import { signIn } from '@/services/auth'

interface LoginResponse {
  success: boolean
  message: string | null
  error: string | null
}

export const magicLinkLogin = async (
  form: FormData,
): Promise<LoginResponse> => {
  try {
    await signIn('email', {
      email: form.get('email'),
      redirect: false,
    })

    return { success: true, message: 'success', error: null }
  } catch (error: any) {
    return { success: false, message: null, error: error.message }
  }
}

export const credentialsLogin = async (
  form: FormData,
): Promise<LoginResponse> => {
  try {
    await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: false,
    })

    return { success: true, message: 'success', error: null }
  } catch (error: any) {
    let errorMessage = 'Unknown error occurred. Please try again later.'

    if (error.code === 'credentials') {
      errorMessage = 'Invalid credentials'
    }

    return { success: false, message: null, error: errorMessage }
  }
}

export const googleLogin = async (): Promise<LoginResponse> => {
  try {
    const response = await signIn('google', {
      redirect: false,
    })

    return { success: true, message: response, error: null }
  } catch (error: any) {
    return { success: false, message: null, error: error.message }
  }
}
