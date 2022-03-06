import moment from 'moment'

export default {
  addRoom(state, roomInfo){
    // const obj ={
    //   roomId : roomInfo._id,
    //   roomName : roomInfo.roomName,
    //   users: roomInfo.users,
    //   // avatar: roomInfo.avatar
    // }
    state.newRoom = roomInfo
  },
  setRoomList(state, payload){
    state.roomList = payload
  },
  setMessages(state,messages){
    messages.forEach(msg => {
      const date = msg.date
      msg.timestamp = moment(date).format('HH:mm')
      msg.date = moment(date).format('YYYY-MM-DD')
    })

    state.messages = messages
  },
  addMessage(state,payload){
    state.messages.push(payload)
  },
  setNewlyAddedMessage(state, newMsg){ 
    state.newMessage = newMsg
  }

}