import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function Login({loginFunction}) {
    return (
        <div className="grid pt-5 md:pt-20 grid-cols-1 mx-10 md:mx-20 lg:mx-30 xl:mx-40 md:grid-cols-2 my-10 gap-10">
            <LoginForm loginFunction={loginFunction}/>
            <SignUpForm loginFunction={loginFunction} />
        </div>
    )
}