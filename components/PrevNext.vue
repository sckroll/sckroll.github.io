<template>
  <div class="prev-next-nav">
    <div class="prev-next-nav-wrapper">
      <span class="prev-post">
        <span class="prev-next-label">이전 |</span>
        <nuxt-link
          v-if="prev"
          :to="{
            name: 'posts/year/month/day/slug',
            params: {
              year: prevPost.year,
              month: prevPost.month,
              day: prevPost.day,
              slug: prev.slug,
            },
          }"
          >{{ prev.title }}</nuxt-link
        >
        <span v-else class="post-empty">이전 포스트가 없습니다.</span>
      </span>
      <span class="next-post">
        <nuxt-link
          v-if="next"
          :to="{
            name: 'posts/year/month/day/slug',
            params: {
              year: nextPost.year,
              month: nextPost.month,
              day: nextPost.day,
              slug: next.slug,
            },
          }"
          >{{ next.title }}</nuxt-link
        >
        <span v-else class="post-empty">다음 포스트가 없습니다.</span>
        <span class="prev-next-label">| 다음</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      prevPost: {
        year: 0,
        month: 0,
        day: 0,
      },
      nextPost: {
        year: 0,
        month: 0,
        day: 0,
      },
    }
  },
  mounted() {
    if (this.prev) {
      const prevCreatedTime = Date.parse(this.prev.createdAt)
      const prevDateObj = new Date(prevCreatedTime)

      this.prevPost.year = prevDateObj.getFullYear()
      this.prevPost.month = this.addZero(prevDateObj.getMonth() + 1)
      this.prevPost.day = this.addZero(prevDateObj.getDate())
    }

    if (this.next) {
      const nextCreatedTime = Date.parse(this.next.createdAt)
      const nextDateObj = new Date(nextCreatedTime)

      this.nextPost.year = nextDateObj.getFullYear()
      this.nextPost.month = this.addZero(nextDateObj.getMonth() + 1)
      this.nextPost.day = this.addZero(nextDateObj.getDate())
    }
  },
  methods: {
    addZero(num) {
      const result = (num < 10 ? '0' : '') + num.toString(10)
      return result
    },
  },
}
</script>

<style>
.prev-next-nav {
  display: flex;
  justify-content: center;
  background-color: #dddddd;
}

.prev-next-nav-wrapper {
  width: var(--container-xl);
  padding: 15px 30px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
  line-height: 130%;
}

.prev-next-label {
  font-weight: 700;
}

.prev-post a {
  padding: 5px 5px;
  transition: all 0.1s ease;
}

.prev-post a:hover {
  background-color: #eeeeee;
  transition: all 0.1s ease;
}

.next-post {
  float: right;
}

.next-post a {
  padding: 5px 5px;
  transition: all 0.1s ease;
}

.next-post a:hover {
  background-color: #eeeeee;
  transition: all 0.1s ease;
}

.post-empty {
  color: #666666;
}

@media screen and (max-width: 1200px) {
  .prev-next-nav-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .prev-next-nav-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .prev-next-nav-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
