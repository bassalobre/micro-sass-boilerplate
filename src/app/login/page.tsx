import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import LoginForm from "@/app/login/components/login-form";

export default function Login() {
    return (
        <main className="min-h-screen flex align-middle justify-center">
            <Card className="w-full max-w-md m-auto">
                <CardHeader className="text-center space-y-1">
                    <CardTitle className="text-3xl">Authenticate</CardTitle>
                    <CardDescription>Enter your email to receive a magic link to authenticate your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </main>
    )
}

