import React from 'react';
import { Link } from 'react-router-dom';

export const SignInPage = () => (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="../components/Home.jsx">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to='/ForgotPassword'><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/Registration">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
)