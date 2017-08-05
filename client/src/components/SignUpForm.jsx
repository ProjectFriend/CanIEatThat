import React, {PropTypes } from 'react';
import {Link } from 'react-router';
import {Card, Cardtext } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Textfield from 'material-ui/TextField';

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <Card className='container'>
        <form action='/' onSubmit={onSubmit}>
            <h2 className='card-heading'>Sign Up</h2>
            {/*an if conditional to catch errors*/}
            {errors.summary && <p className='error-message'>{errors.summary}</p>}

            <div className='field-line'>
                <Textfield
                    floatingLabelText='Name'
                    name='name'
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
            </div>

            <div className='field-line'>
                floatingLabelText='Password'
                type='password'
                name='password'
                onChange={onChange}
                errorText={errors.password}
                value={user.password}
                />
            </div>
            <div className='button-line'>
                <RaisedButton type='submit' label='Create New Account' primary />
            </div>

            <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
    </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
};

export default SignUpForm;