import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function Login({loginFunction}) {
    return (
        <div>
            <LoginForm loginFunction={loginFunction}/>
            <SignUpForm loginFunction={loginFunction} />
        </div>
    )
}