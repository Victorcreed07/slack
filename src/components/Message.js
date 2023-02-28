import React,{useState} from 'react'
import styled from 'styled-components';

const Message = ({message,user,timestamp,userpic}) => {


	return (

		<MessageContainer>
			<img src={userpic} alt="profpic" />
			<MessageInfo>
				<h4>
					{user}
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageContainer>

		)
}

export default Message


const MessageContainer = styled.div`


display:flex;
align-items:center;
padding:20px;

>img {

	height:50px;
	margin-right:5px;
	border-radius:3px;
}
	

`
const MessageInfo = styled.div`
	
`