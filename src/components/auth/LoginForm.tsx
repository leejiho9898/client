import Button from 'components/common/Button';
import {
  FlexCenter,
  FlexColumn,
  InputStyled,
} from 'components/common/CommonComponents';
import { SortMenu } from 'components/search/ResultItems';
import { loginAPI } from 'libs/api/loginAPI';
import { ILoginData } from 'model/auth';
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginBox = styled(FlexColumn)`
  margin: 20px;
`;

const FindInfo = styled(SortMenu)`
  border: none;
  padding-top: 5px;
  width: 120px;
`;

function LoginForm() {
  const [loginData, setLoginData] = useState<ILoginData>({
    email: '',
    password: '',
  });
  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { email, password } = loginData;
  return (
    <>
      <LoginBox>
        <InputStyled
          type="text"
          placeholder="이메일"
          name="email"
          value={email}
          onChange={onChangeForm}
        />
        <InputStyled
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChangeForm}
        />
      </LoginBox>
      <Button
        width="300px"
        height="40px"
        buttonColor="hoverDarkColor"
        hoverButtonColor="backgroundColor"
        fontColor="white"
        hoverFontColor="hoverDarkColor"
        onClick={() => loginAPI(loginData)}
      >
        회원 로그인
      </Button>
      <FlexCenter>
        <FindInfo value="아이디 찾기" />
        <FindInfo value="비밀번호 찾기" />
      </FlexCenter>
      <FlexCenter>
        <FindInfo value="이메일로 가입하기" />
      </FlexCenter>
    </>
  );
}

export default LoginForm;
