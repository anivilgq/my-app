import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = () => {
    return <form>
            <div>
                <Field type="text" placeholder="Login" name="login" component="input" />
            </div>
            <div>
                <Field type="text" placeholder="Password" name="password" component="input" />
            </div>
            <div>
                <Field type="checkbox" component="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm />
    </div>
}

export default Login;