import styled from 'styled-components/macro'

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center
  width:80%:
  max-width:1100px;
  margin-top:50px;
  padding:20px;

 @media screen and (min-width: 768px){
      flex-direction:row
  });
`

export const Image = styled.img`
  max-width: 300px;
`

export const FormData = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const FormHeading = styled.h1`
    color="#334155";
    font-size:36px;
    flex-grow:1;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const Label = styled.label`
    color="#334155";
    font-size:14px;
    margin-bottom:10px;
`

export const Input = styled.input`
  color: #7b8794;
  font-size: 14px;
  padding: 8px;
  width: 100%;
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`

export const Select = styled.select`
  color: #7b8794;
  font-size: 14px;
  padding: 8px;
  width: 100%;
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`

export const Option = styled.option``

export const ErrorText = styled.p`
  font-size: 12px;
  color: #ff0b37;
  font-weight: 500;
`
