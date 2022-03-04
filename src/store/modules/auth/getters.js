export default {
  userId(state){
    return state.userId
  },
  token(state){
    return state.token
  },
  isAuthenticated(state){
    return !!state.token
  },
  didAutoLogout(state){
    return state.didAutoLogout
  },
  // 모든 유저 정보 가져오기
  getUsersInfo(state){
    return state.usersInfo
  },
  // 내 정보 가져오기
  getMyInfo(state){
    return state.myInfo
  }
}