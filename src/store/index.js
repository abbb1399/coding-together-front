import { createStore } from 'vuex'

import authModule from './modules/auth/index.js'
import requestsModule from './modules/requests/index.js'
import articlesModule from './modules/articles/index.js'
import scheduleMoudle from './modules/schedules/index.js'
import chatModule from './modules/chat/index.js'

const store =  createStore({
  modules: {
    articles: articlesModule,
    requests: requestsModule,
    auth: authModule,
    schedules: scheduleMoudle,
    chat: chatModule
  }
})

export default store;