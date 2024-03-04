import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import LoginForm from "@/app/login/components/login-form";

export default function Login() {
    return (
        <Card className="w-full max-w-md mx-auto m-auto mt-80">
            <CardHeader className="text-center space-y-1">
                <CardTitle className="text-3xl">Authenticate</CardTitle>
                <CardDescription>Enter your email to receive a magic link to authenticate your account</CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    )
}

