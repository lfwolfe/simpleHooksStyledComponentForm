import React, { useState, useRef, useEffect } from "react";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Label from "./components/Label";
import Input from "./components/Input";
import Error from "./components/Error";

function App() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const pword1Ref = useRef();
  const pword2Ref = useRef();
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    validateForm();
  }, [validEmail, validPassword, confirmPassword, formValid]);
  function validateEmail() {
    let value = emailRef.current.value;
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let valid = re.test(value);
    setValidEmail(valid);
    return;
  }
  function validatePassword() {
    let valid = pword1Ref.current.value.trim() !== "";
    setValidPassword(valid);
    confirmPasswordMatch();
    return valid;
  }
  function confirmPasswordMatch() {
    let valid = pword1Ref.current.value.trim() === pword2Ref.current.value;
    setConfirmPassword(valid);
    return valid;
  }
  function validateForm() {
    setFormValid(
      usernameRef.current.value.trim() !== "" &&
        emailRef.current.value.trim() !== "" &&
        validEmail &&
        pword1Ref.current.value.trim() !== "" &&
        validPassword &&
        pword2Ref.current.value.trim() !== "" &&
        confirmPassword
    );
  }
  function submitForm() {
    alert("form submitted!!");
  }
  return (
    <Layout>
      <Label>
        User Name
        <Input onBlur={validateForm} name='username' ref={usernameRef} />
      </Label>
      <Label>
        Email
        <Input
          onBlur={validateEmail}
          name='email'
          ref={emailRef}
          type='email'
        />
        {!validEmail && <Error>please input valid email</Error>}
      </Label>
      <Label>
        Password
        <Input
          name='password'
          onBlur={validatePassword}
          ref={pword1Ref}
          type='password'
        />
        {!validPassword && <Error>please input a password</Error>}
      </Label>
      <Label>
        Confirm Password
        <Input
          onBlur={confirmPasswordMatch}
          name='confirm-password'
          ref={pword2Ref}
          type='password'
        />
        {!confirmPassword && (
          <Error>This password doesn’t match. Try again.</Error>
        )}
      </Label>
      <Label>
        {!formValid ? (
          <Button>Create Account</Button>
        ) : (
          <Button onClick={submitForm} active>
            Create Account
          </Button>
        )}
      </Label>
    </Layout>
  );
}
export default App;
