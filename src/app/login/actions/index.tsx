'use server';

import { signIn } from "@/services/auth";

interface LoginResponse {
    success: boolean;
    error: string | null;
}

export const login = async (form: FormData): Promise<LoginResponse> => {
    try {
        await signIn('email', { email: form.get('email'), redirect: false });

        return { success: true, error: null };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};
