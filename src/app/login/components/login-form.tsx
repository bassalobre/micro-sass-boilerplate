'use client';

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {login} from "@/app/login/actions";
import {toast} from "@/components/ui/use-toast";

export default function LoginForm() {
    const handleSubmit = async (data: FormData) => {
        const response = await login(data);

        if (response.success) {
            toast({
                title: 'Magic link sent',
                description: 'Check your email for a magic link to authenticate your account'
            });
        } else {
            toast({
                title: 'Error',
                description: response.error
            });
        }
    };

    return (
        <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" placeholder="m@example.com" required type="email"/>
            </div>
            <Button className="w-full" type="submit">
                Send Magic Link
            </Button>
        </form>
    );
}
