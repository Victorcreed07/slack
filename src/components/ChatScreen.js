import React,{useRef,useEffect} from 'react'
import styled from 'styled-components';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpIcon from '@mui/icons-material/Help';
import {useSelector} from 'react-redux'
import {selectRoom} from '../features/appSlice'
import {collection,getDocs,addDoc} from 'firebase/firestore'
import { useCollectionData,useCollection,useDocument } from 'react-firebase-hooks/firestore';
import {db} from '../firebase'
import { getFirestore, doc } from 'firebase/firestore';
import ChatInput from './ChatInput'
import Message from './Message'
import { query, orderBy, limit } from "firebase/firestore";  




const ChatScreen = () => {

const BottomRef = useRef(null)
const selectRoomId = useSelector(selectRoom);
const UserDocument = doc(db,`chat-name/${selectRoomId}`)
const Usercollection = collection(db,`chat-name/${selectRoomId}/messages`)
const q = query(Usercollection, orderBy("timestamp"));
const [channel, loading, error, snapshot] = useDocument(UserDocument);
const [messages,load] = useCollection(q);

console.log(selectRoomId)

useEffect(() => {

BottomRef?.current?.scrollIntoView({

	behavior:'smooth'
}); //show the bottom chat last

},[selectRoomId,load])


	return (
			<ChatContainer>

			
			{(selectRoomId === undefined || selectRoomId === null)?(

					<>

					</>


				):(

				<>
				<Header>
					<HeaderLeft>
						<h4>
							<strong>#{channel?.data()?.name}</strong>
						</h4>
						<StarOutlineIcon />
					</HeaderLeft>
					<HeaderRight>
						<p>
							<HelpIcon />Details
						</p>
					</HeaderRight>
				</Header>

				<ChatContent>
					{
						messages?.docs.map((i) => {

							const {message,timestamp,user,userpic} = i.data()

							return (

								<Message key={i.id}
								message={message}
								timestamp={timestamp}
								user={user}
								userpic={userpic} />
								)
							})
					}
					<ChatBottom ref={BottomRef}/>
				</ChatContent>


				<ChatInput roomId={selectRoomId} name={channel?.data()?.name} BottomRef={BottomRef} />

				</>
				)}

				
				
			</ChatContainer>

		)
}

export default ChatScreen



const ChatContent = styled.div`
	

`

const ChatBottom = styled.div`
	
	padding-bottom:200px;
`

const ChatContainer = styled.div`

flex:0.7;
overflow-y:scroll;
margin-top:60px;
flex-grow:1;
	

`

const Header  = styled.div`
	
	display: flex;
	justify-content:space-between;
	padding:16px;
	border-bottom:1px solid gray;

`
const HeaderLeft  = styled.div`

display:flex;

>h4	{

	text-transform:lowercase;
	margin-right:5px;
}
	
`
const HeaderRight  = styled.div`
	
	>p {
		display:flex;
		align-items:center;
	}
	
`


