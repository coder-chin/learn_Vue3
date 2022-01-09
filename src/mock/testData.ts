export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export const testDate: ColumnProps[] = [
  {
    id: 1,
    title: "文章一",
    description: "描述111111",
    avatar:
      "https://portrait.gitee.com/uploads/avatars/user/1735/5207809_xiao_meng_mua_1607327332.png!avatar30",
  },
  {
    id: 2,
    title: "文章二",
    description: "描述222222",
    avatar:
      "https://portrait.gitee.com/uploads/avatars/user/1735/5207809_xiao_meng_mua_1607327332.png!avatar30",
  }
];

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: "这是我的第一篇文章",
    content: "this is a new post",
    image:
      "https://portrait.gitee.com/uploads/avatars/user/1735/5207809_xiao_meng_mua_1607327332.png!avatar30",
    createdAt: "2020-06-11 10:34:22",
    columnId: 1,
  },
  {
    id: 2,
    title: "这是我的第二篇文章",
    content: "this is a new post",
    image:
      "https://portrait.gitee.com/uploads/avatars/user/1735/5207809_xiao_meng_mua_1607327332.png!avatar30",
    createdAt: "2020-06-11 10:34:22",
    columnId: 1,
  },
  {
    id: 3,
    title: "这是我的第三篇文章",
    content: "this is a new post",
    image:
      "https://portrait.gitee.com/uploads/avatars/user/1735/5207809_xiao_meng_mua_1607327332.png!avatar30",
    createdAt: "2020-06-11 10:34:22",
    columnId: 1,
  },
];