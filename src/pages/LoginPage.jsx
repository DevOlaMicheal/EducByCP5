import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; 
import AuthSidebar from '../components/AuthSidebar';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    useEffect(() => {
        document.title = 'Edu-Tech';
    }, []);

        const navigate = useNavigate()
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const [err, setErr] = useState(null)

    const signin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/')
        }).catch((error ) => {
            setErr(error.message)
        })

    }

    return (
        <div>
            <nav style={{'--bs-breadcrumb-divider': "'>'"}} aria-label="breadcrumb" className="py-3">
            {/* <nav className="py-3"> */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">
                            <i className="fa fa-home"></i>
                        </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">Account</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                </ol>
            </nav>

            <div className="row gx-1">
                <div className="col-9">
                    <div className="row">
                        <div className="col-6">
                            <div className="card p-4">
                                <h2>New Customer</h2>

                                <p className="fw-bold">Register Account</p>

                                <p>Creating an account gives you unlimited access to all our educational and vocational courses.</p>

                                <div>
                                    <button type="submit" className="btn btn-dark">CONTINUE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4">
                            {err && (<div className="alert alert-danger" role="alert">
                                {err}
                             </div>)}
                                <form className="register-form" onSubmit={signin}>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email Address</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="text" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>

                                    <div className="text-end">
                                        <button type="submit" className="btn btn-dark">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthSidebar />
            </div>
        </div>
    );
};

export default LoginPage;
