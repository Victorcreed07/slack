import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditIcon from '@mui/icons-material/Edit';

import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from './SideBarOption'
import { useCollection } from 'react-firebase-hooks/firestore';
import {collection} from 'firebase/firestore'
import {db} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase'


const SideBar = () => {
const Usercollection = collection(db,'chat-name')
const [user] = useAuthState(auth);
const [channels, loading, error, snapshot] = useCollection(Usercollection);

	return(

		<SideBarContainer>
			<SideBarHead>
				<SideBarInfo>
					<h2>Victor's Hub</h2>
					<h3>
					<FiberManualRecordIcon />
					{user?.displayName}
					</h3>
				</SideBarInfo>
				<EditIcon />

			</SideBarHead>
			

			<SideBarOption Icon = {InsertCommentIcon} title="Threads" />
			<SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
			<SideBarOption Icon={DraftsIcon} title="Saved items" />
			<SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
			<SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SideBarOption Icon ={AppsIcon} title="Apps" />
			<SideBarOption Icon={FileCopyIcon} title="File browser" />
			<SideBarOption Icon = {ExpandLessIcon} title="Show less" />
			<hr />
			<SideBarOption Icon = {ExpandMoreIcon} title="Channels" />
			<hr />
			<SideBarOption Icon = {AddIcon} addChannel title="Add Channel" />

			{
				channels?.docs.map((i) => (

					<SideBarOption key={i.id} id={i.id} title={i.data().name}/>
					))
			}
		</SideBarContainer>

		)
}

export default SideBar

const SideBarContainer = styled.div`
	
	background-color: #464EB8;
	flex:0.3;
	height:100vh;
	border-top:1px solid #7B83EB;
	max-width:260px;
	margin-top:60px;
	color:white;


	> hr {

		margin-top:10px;
		margin-bottom:10px;
		border:1px solid #7B83EB;
	}

`;

const SideBarHead = styled.div`

display:flex;
flex:1;
padding:15px;
max-height:80px;
border-bottom:1px solid #7B83EB;


> .MuiSvgIcon-root{

	border-radius:1000px;
	background-color:white;
	font-size:20px;
	color:#464EB8;
	padding:10px;
	margin-left:4rem;

	


}

`;

const SideBarInfo = styled.div`
	
	flex:1;

	> h2 {

		font-size:17px;
		font-weight:800;
		margin-bottom:10px

	}
	> h3 {
		display:flex;
		font-size:13px;
		font-weight:400;
		align-items:center;
		

	}

	>h3 > .MuiSvgIcon-root {

		font-size:14px;
		color:red;
		margin-top:2px;

	}

`;

