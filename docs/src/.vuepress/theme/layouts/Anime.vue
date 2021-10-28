<template>
  <el-container>
    <el-main class="">
      <el-row
        :gutter="10"
        align="center"
        class="py-3"
      >
        <el-col
          v-for="anime in animePosts"
          :key="anime.name"
          :sm="24"
          :md="12"
        >
          <el-card class="card anime-card zoomIn">
            <router-link :to="anime.regularPath">
              <div class="anime-card-header">
                <div class="anime-icon">
                  <i class="el-icon-folder" />
                </div>
              </div>
              <div>
                <h4>{{ anime.frontmatter.title || anime.title }}</h4>
                <p class="anime-description">
                  {{ anime.frontmatter.description }}
                </p>
              </div>
            </router-link>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  computed: {
    animePosts () {
      return this.$pagination._matchedPages
    },
  },
}
</script>

<style lang="stylus" scoped>
.el-container {
  max-width: 1100px;
  margin-right: auto !important;
  margin-left: auto !important;
  min-height: 80vh;
  .anime-card.card {
    margin: .5rem;
    background: linear-gradient(45deg, darken($accentColor, 30%), darken($accentColor, 70%));
    color: lighten($accentColor, 80%);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    a:hover {
      text-decoration: none;
    }
    &:hover {
      transform: scale(0.99);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }
    .anime-card--links a {
      color: $accentColor;
      &:hover {
        color: lighten($accentColor, 30%);
      }
    }
    .anime-card-header {
      display: flex;
      margin-bottom: 1rem;
      justify-content: space-between;
      align-items: center;
      .anime-icon {
        font-size: 3em;
        position: relative;
        top: 0.3rem;
        color: lighten($accentColor, 50%);
      }
    }
    p.anime-description {
      color: lighten($accentColor, 60%);
      margin: 1.5rem auto;
    }
    .languages-list {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      color: lighten($accentColor, 40%);
      font-family: monospace;
      li {
        padding: 0 5px;
      }
    }
  }
}
</style>