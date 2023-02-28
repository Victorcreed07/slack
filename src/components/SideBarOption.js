import React from 'react'
import styled from 'styled-components';
import {collection,addDoc} from 'firebase/firestore'
import {useDispatch} from 'react-redux'
import {db} from '../firebase'
import {enterRoom} from '../features/appSlice'

const SideBarOption = ({Icon,title,addChannel,id}) => {


	const dispatch = useDispatch();

const Usercollection = collection(db,'chat-name')
const add = () => {

	const channelname = prompt("Enter channel Name")

	if(channelname)
		{
	addDoc(Usercollection,{name:channelname}).then(() => console.log("Done"))
	.catch((e) => alert(e))

		}


}

const select = () => {

if(id)
	{

		dispatch(enterRoom({
			roomId:id
		}))
	}
	
}

	return(
		<OptionContainer onClick={addChannel? add:select}>
			{Icon && <Icon fontSize='small' style={{ padding: 10}} />}
			{Icon ?(
				<h3>{title}</h3>
				):(
				<OptionChannel>
				<span>#</span>{title}
					
				</OptionChannel>
				)}
		</OptionContainer>

		)
}

export default SideBarOption

const OptionContainer = styled.div`
	
display:flex;
font-size:12px;
align-items:center;
padding-left:5px;
cursor: pointer;

	:hover {
		background-color:#7B83EB;
		opacity: 0.9;
	}

	>h3 {
		font-weight:500;
	}

`;

const OptionChannel = styled.h3`
	
	padding:10px;
	padding-left:18px;
	font-weight:300;
	

	>span {
		margin-right:18px;
	}

`