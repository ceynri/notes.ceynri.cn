---
title: "时间轴"
---

# 📅 时间轴

<br>

> 收录了本站所有登记了发布时间的文章（按首次发布时间排序）

<ul class="page-recent-ul">
  <li 
    class="page-recent-row"
    v-for="(post, index) in topPublishPosts"
    :key="index"
    href="post"
  >
    <a :href="post.regularPath">{{ post.title }}</a>
    <span>{{ post.date }}</span>
  </li>
</ul>

<div @click="loadMore" class="page-recent-btn" v-if="showBtn">
  <div ref="btn">{{ btnInfo }}</div>
</div>

<script>
export default {
  data() {
    return {
      // 一次显示文章数目
      step: 15,
      // 已显示文章块（一块有step篇文章）
      showed: 1,
      // 所有文章
      posts: [],
      // 文章的数目
      postNum: 0,
      btnInfo: '加载更多',
      showBtn: true,
      timeout: null,
    }
  },

  mounted() {
    this.posts = this.getPosts()
    this.postNum = this.posts.length
  },

  computed: {
    topPublishPosts() {
      return this.posts.slice(0, this.showed * this.step)
    }
  },

  methods: {
    getPosts() {
      // 获得本站的所有页面信息
      const pages = this.$site.pages
      const tmpPosts = []
      for (let page of pages) {
        // 筛选出具有“date”front matter的文章
        if (page.frontmatter.date === undefined) {
          continue
        }
        const date = new Date(page.frontmatter.date)
        tmpPosts.push({
          title: page.title,
          regularPath: page.regularPath,
          updateTimestamp: date.getTime(),
          date: this.formatDate(date)
        })
      }
      return tmpPosts.sort((a, b) => b.updateTimestamp - a.updateTimestamp)
    },
    formatDate(date) {
      if (!(date instanceof Date)) {
        return
      }
      const year = date.getFullYear()
      // padStart方法可在不满足arg1表示的长度时使用arg2补齐
      const month = ((date.getMonth() + 1) + '').padStart(2, '0')
      const day = (date.getDate() + '').padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    loadMore() {
      // 防止多次触发
      if (this.timeout) {
        return
      }
      if (this.showed * this.step < this.postNum) {
        this.showed++
      } else {
        this.btnInfo = '加载完成'
        // 先淡出
        this.$refs.btn.style.opacity = 0
        // 再删除该元素
        this.timeout = setTimeout(() => this.showBtn = false, 300)
      }
    }
  }
}
</script>

<style scoped>
.page-recent-ul {
  padding-left: 0;
}

.page-recent-row {
  line-height: 2;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

.page-recent-row::after {
  content: "";
  order: 2;
  flex: 1;
  border-bottom: 1px dashed #eee;
  position: relative;
  top: 50%;
  right: 0;
}

.page-recent-row a, .page-recent-row span {
  background: white;
  z-index: 1;
}

.page-recent-row a {
  order: 1;
  max-width: 50%;
  padding-right: 20px;
}

.page-recent-row span {
  order: 3;
  color: #aaa;
  padding-left: 20px;
}

.page-recent-btn {
  text-align: center;
  margin: 30px 0;
}

.page-recent-btn div {
  display: inline-block;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}

.page-recent-btn div:hover {
  background-color: #4abf8a;
  cursor: pointer;
}
</style>
