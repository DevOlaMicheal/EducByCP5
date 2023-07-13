import React, { useEffect, useState } from 'react';
import AuthSidebar from '../components/AuthSidebar';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    useEffect(() => {
        document.title = 'Edu-Tech';
    }, []);

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [errmsg, setErrmsg] = useState(null);

    
    
    
const signup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        navigate('/login')
    }).catch((error ) => {
        setErrmsg(error.message);
    })

}


    return (
        <div>
        <nav style={{'--bs-breadcrumb-divider': "'>'"}} aria-label="breadcrumb" className="py-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">
                        <i className="fa fa-home"></i>
                    </a>
                    
                </li>
                <li className="breadcrumb-item">
                    <a href="#">Account</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Register</li>
            </ol>
        </nav>

        <div className="row gx-1">
            <div className="col-9">
            {errmsg && (<div className="alert alert-danger" role="alert">
                                {errmsg}
                             </div>)}
                <form className="register-form" onSubmit={signup}>
                    <fieldset className="mb-4">
                        <h4>Your Personal Details</h4>
                        <hr />
                        <div className="row mb-3">
                            <label for="firstname" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstname" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="lastname" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastname" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="phone" className="col-sm-2 col-form-label">Telephone</label>
                            <div className="col-sm-10">
                                <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <h4>Your Password</h4>
                        <hr />

                        <div className="row mb-3">
                            <label for="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="password2" className="col-sm-2 col-form-label" >Confirm Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password2" />
                            </div>
                        </div>
                    </fieldset>

                    <div className="text-end">
                        <button type="submit" className="btn btn-dark">Create Account</button>
                    </div>
                </form>
            </div>

            <AuthSidebar />
        </div>
        </div>
    );
};

export default Register;
