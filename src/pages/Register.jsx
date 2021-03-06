// import { Title } from "@material-ui/icons";
import styled from "styled-components"

const Container=styled.div`
width:100vw;
height:100vh;
background-color:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
display:flex:
align-items:center;
justify-content:center;
`;
const Wrapper=styled.div`
width:40%;
padding:20px;
background-color:white;
`;
const Title=styled.h1`
font-weight:300;
font-size:25px;
`;
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input=styled.input`
flex:1;
margin:20px 10px 0px 0px;
min-width:40%;
`;
const Agreement=styled.span`
font-size:12px;
margin:20px 0px;
`;
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create Account</Title>
            <Form>
                <Input placeholder="Full Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email Id"/>
                <Input placeholder="Password"/>
                <Input placeholder="Mobile number"/>
                <Agreement>I Accept all the terms and conditions</Agreement>
                <Button>Create Profile</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register