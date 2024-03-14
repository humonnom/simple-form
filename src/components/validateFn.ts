export const required = (value: string) =>
  value ? null : '값을 입력해주세요.';
export const min = (min: number) => (value: string) =>
  value.length >= min ? null : `최소 ${min}자 이상 입력해주세요.`;
export const max = (max: number) => (value: string) =>
  value.length <= max ? null : `최대 ${max}자 이하로 입력해주세요.`;
export const passwordFormat = (value: string) =>
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
    ? null
    : '비밀번호는 8자 이상이며, 숫자와 영문자를 포함해야 합니다.';

export const emailFormat = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? null
    : '이메일 형식에 맞게 입력해주세요..';
