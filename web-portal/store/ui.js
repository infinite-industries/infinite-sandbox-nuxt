
export const state = () => ({
  sidebarOpen: false
})

export const getters = {
  sidebarOpen: (state) => {
    return state.sidebarOpen
  }
}

export const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export const actions = {
  toggleSidebar: (context) => {
    context.commit('TOGGLE_SIDEBAR')
  }
}
