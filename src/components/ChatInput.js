import React,{useState} from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {collection,getDocs,addDoc} from 'firebase/firestore'
import {db} from '../firebase'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const ChatInput = ({roomId,name,BottomRef}) => {

const [user, loading, error] = useAuthState(auth);
const [input,setInput] = useState("")
const Usercollection = collection(db,`chat-name/${roomId}/messages`)

const sendDb =(e) => {

	if(!roomId)
		{
			return false
		}

e.preventDefault()
 addDoc(Usercollection,{
			message:input,
			user:user?.displayName,
			timestamp:Date.now(),
			userpic:user?.photoURL

		}).then(() => console.log("Done")).catch((e) => alert(e))

 BottomRef?.current?.scrollIntoView({

	behavior:'smooth'
}); //show the bottom chat last

		
		setInput('')

}

	return(


		<InputContainer>
			<form>
				<input placeholder={`Chat @${name}`} value={input} 
					onChange={(e) => setInput(e.target.value)}/>
				<Button onClick={sendDb} type="submit">Send</Button>
			</form>
		</InputContainer>


		)
}

export default ChatInput


const InputContainer = styled.div`


>form {

	display:flex;
	position:relative;
	justify-content:center;
}

>form>input {

	position:fixed;
	bottom:30px;
	width:60%;
	border-radius:5px;
	outline:none;
	border :1px solid gray;
	padding:15px;

}

>form>Button {

	display:none;
}
	

`
