import { createStore } from "vuex";
import { testDate, testPosts, ColumnProps, PostProps } from "../mock/testData";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  user: UserProps;
  columns: ColumnProps[];
  posts: PostProps[];
}

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    columns: testDate,
    posts: testPosts,
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "Chin" };
    },
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter((c) => c.id > 2).length;
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid )
    },
  },
});

export default store