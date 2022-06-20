import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  profiles: [],
  query: '',
  likes: [],
  posts: [
    {body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta unde cum suscipit blanditiis ad illo facere nesciunt consequuntur voluptas recusandae accusantium optio, quisquam nemo eligendi autem repellat cumque natus quis. Dolores perferendis doloribus culpa nostrum odit aliquid voluptatem, fuga in quaerat quo. Illo similique doloribus fuga dicta, dolores sunt.", imgUrl: "https://tse2.mm.bing.net/th/id/OIP.NcSM1YV9TTf8qNvxjR0VEQHaEK?pid=ImgDet&rs=1"},
    {body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta unde cum suscipit blanditiis ad illo facere nesciunt consequuntur voluptas recusandae accusantium optio, quisquam nemo eligendi autem repellat cumque natus quis. Dolores perferendis doloribus culpa nostrum odit aliquid voluptatem, fuga in quaerat quo. Illo similique doloribus fuga dicta, dolores sunt.", imgUrl: "https://th.bing.com/th/id/R.77b3df32caa8f4644415c0a882f2576e?rik=me%2fmP0W5uF6oGA&pid=ImgRaw&r=0"},
    {body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta unde cum suscipit blanditiis ad illo facere nesciunt consequuntur voluptas recusandae accusantium optio, quisquam nemo eligendi autem repellat cumque natus quis. Dolores perferendis doloribus culpa nostrum odit aliquid voluptatem, fuga in quaerat quo. Illo similique doloribus fuga dicta, dolores sunt."},
    {body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta unde cum suscipit blanditiis ad illo facere nesciunt consequuntur voluptas recusandae accusantium optio, quisquam nemo eligendi autem repellat cumque natus quis. Dolores perferendis doloribus culpa nostrum odit aliquid voluptatem, fuga in quaerat quo. Illo similique doloribus fuga dicta, dolores sunt."}
  ],
  homeCurrentPage: 1,
  profileCurrentPage: 1,
  totalPages: 1,
  ad: {},
  tallAd: {},
  homePageDetails: null,
  profilePageDetails: null,
})
