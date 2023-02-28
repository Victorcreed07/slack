import styled from 'styled-components';
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import {signOut} from "firebase/auth";
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {

 const [user, loading, error] = useAuthState(auth);

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeadAvatar onClick={() => signOut(auth)}
				src={user?.photoURL}/>
				<AccessTimeIcon />
				
			</HeaderLeft>

			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search Chat" />

			</HeaderSearch>


			<HeaderRight>
				<HelpIcon />

			</HeaderRight>
		</HeaderContainer>

		)
}

export default Header


const HeaderRight = styled.div`
	display: flex;
	flex:0.3;
	align-items:flex-end;

	> .MuiSvgIcon-root{

		margin-left:auto;
		margin-right:30px;
	}

`;


const HeaderSearch = styled.div`
	
	display:flex;
	flex:0.4;
	border-radius:6px;
	opacity:1;
	background-color:#7B83EB;
	padding-left:50px;
	color:gray;
	border:1px gray solid;

	> input {

		background:transparent;
		border:none;
		text-align:center;
		min-width:30vw;
		outline:0;
		color:white;
	}

`


const HeaderContainer = styled.div`
	
	display:flex;
	position: fixed;
	align-items:center;
	width:100%;
	background-color:#464EB8;
	padding:10px;
	color:white;
/*	justify-content:space-between;*/
`;

const HeaderLeft = styled.div`
	
flex:0.3;
display:flex;
align-items:center;
justify-content:space-between;
margin-left:20px;

> .MuiSvgIcon-root {
	margin-right:50px;
}

`;

const HeadAvatar = styled(Avatar)`
	
	cursor: pointer;

	:hover{
		opacity: 0.8;
	}
`;