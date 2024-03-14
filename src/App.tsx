import { useState } from 'react';
import './App.css';
import TextField from './components/text-field.tsx';
import {
  required,
  min,
  max,
  passwordFormat,
  emailFormat,
} from './components/validateFn.ts';

function App() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [formValidation, setFormValidation] = useState({
    id: true,
    password: true,
    passwordConfirm: true,
    name: true,
    email: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert('제출되었습니다.');
  };

  const updateValidation = (name: string, isValid: boolean) => {
    setFormValidation((prevState) => ({
      ...prevState,
      [name]: isValid,
    }));
  };

  const isSubmitDisabled = Object.values(formValidation).some(
    (valid) => !valid
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <h1>회원가입</h1>
      <p>회원가입을 위해 아래 정보를 입력해주세요.</p>
      <form id={'join'} onSubmit={handleSubmit}>
        <TextField
          name={'id'}
          type="text"
          placeholder="아이디"
          validate={[required, min(5), max(15)]}
          updateValidation={updateValidation}
        />
        <TextField
          name={'password'}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(111);
            setPassword(e.target.value);
          }}
          validate={[required, passwordFormat, min(8), max(20)]}
          updateValidation={updateValidation}
        />
        <TextField
          name={'password-confirm'}
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => {
            console.log(e.target.value);
            setPasswordConfirm(e.target.value);
          }}
          validate={[required, passwordFormat, min(8), max(20)]}
          updateValidation={updateValidation}
        />
        {passwordError && <p>{passwordError}</p>}
        <TextField
          name={'name'}
          type="text"
          placeholder="이름"
          validate={[required]}
          updateValidation={updateValidation}
        />
        <TextField
          name={'email'}
          type="text"
          placeholder="이메일"
          validate={[required, emailFormat]}
          updateValidation={updateValidation}
        />
      </form>
      <button
        type={'submit'}
        form={'join'}
        disabled={isSubmitDisabled}
        style={{
          width: '300px',
        }}
      >
        제출하기
      </button>
    </div>
  );
}

export default App;
