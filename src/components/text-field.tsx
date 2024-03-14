import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  //   validate?: ((v: string) => void)[];
  validate?: ((v: string) => string | null)[];
  updateValidation: (name: string, isValid: boolean) => void;
  name: string;
}

// NOTE: 아래 주석 /* eslint-disable @typescript-eslint/no-unused-vars */ 를 제거하고 작업 해주세요.

const TextField = ({ validate, updateValidation, name, ...rest }: Props) => {
  //   const error: {
  //     success: boolean;
  //     message?: string;
  //   } = {
  //     success: false,
  //     message: '값을 입력해주세요.',
  //   };

  const [error, setError] = useState<{
    success: boolean;
    message?: string;
  }>({ success: true });
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === '') {
      setError({ success: false });
    } else if (validate) {
      const validationResult = validate
        .map((fn) => fn(value))
        .find((result) => result !== null);
      if (validationResult) {
        setError({ success: false, message: validationResult });
      } else {
        setError({ success: true });
      }
    }
  }, [value, validate]);

  useEffect(() => {
    if (error.success !== undefined) {
      updateValidation(name, error.success);
    }
  }, []);

  return (
    <div className={'text-field'}>
      <input {...rest} value={value} onChange={handleChange} />
      <div className={'error-message'}>
        {!error.success && <p id={`${name}-error`}>{error.message}</p>}
      </div>
    </div>
  );
};

export default TextField;
