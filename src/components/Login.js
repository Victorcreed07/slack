import styled from 'styled-components';
import React from 'react'
import Button from '@mui/material/Button';
import {auth,provider} from '../firebase'
import { signInWithPopup } from "firebase/auth";

const Login = () => {


	const signIn = () => {
		
		signInWithPopup(auth,provider).catch((e) => alert(e));
		console.log("WTF")
	}

	return (

		<LoginContainer>
			<InnerLogin>
				<img src="https://images-platform.99static.com//GwS7w4dwL7P5akcTs2fhTQ2OPDM=/151x47:842x738/fit-in/500x500/99designs-contests-attachments/59/59601/attachment_59601298" 
				 alt="ninja chat"/>

				<h1>Sign in for Victor's Hub</h1>
				<p>vic.hub.in</p>


				<Button onClick={signIn}>Sign in with Google</Button>

			</InnerLogin>
		</LoginContainer>
		)
}

export default Login

const LoginContainer = styled.div`
	
height:100vh;
background-color:#f8f8f8;
display:grid;
place-items:center;


`;

const InnerLogin = styled.div`


padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.75);


>img {

	object-fit:contain;
	height:220px;

	 
}

>Button {

	margin-top:30px;

	background-color:#dd4b39;
	color:white;
}
	

`

