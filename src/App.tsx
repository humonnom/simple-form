import './App.css';
import TextField from './components/text-field.tsx';
import Form from './components/form.tsx';

// import { max, min } from './utils';

function App() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const initialData = {
        id: '',
        password: '',
        'password-confirm': '',
        name: '',
        email: '',
    };
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

            <Form id={'join'} onSubmit={handleSubmit} initialData={initialData}>
                <TextField
                    name={'id'}
                    type="text"
                    placeholder="아이디"
                    // validate={[min(5), max(15)]} {/*TODO: use min, max validators*/}
                />
                <TextField
                    name={'password'}
                    type="password"
                    placeholder="비밀번호"
                    // validate={[required]}
                />
                {/* TODO: create TextField for name, email and password confirm*/}
            </Form>
            <button
                type={'submit'}
                form={'join'}
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
