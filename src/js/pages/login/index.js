import React from 'react';
import { Link } from 'react-router-dom';

import Title from '@components/title';

const Login = () => (
  <div>
    <Title title="Login Page" />
    <img src="/images/checkmark.png" />
    <Link to="/register">Register</Link>
  </div>
);

export default Login;
