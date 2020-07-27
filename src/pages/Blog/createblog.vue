<template>
  <q-page>
    <div class="container column q-gutter-y-lg" style="padding:20px 0">
      <q-input label="Post Title" filled v-model="postTitle">
        <template v-slot:prepend>
          <q-icon name="fa fa-heading" />
        </template>
      </q-input>
      <q-file
        v-model="files"
        label="Pick Image"
        hint="optional"
        filled
        counter
        accept="image/*"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-input filled type="textarea" label="Post" v-model="post">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input label="URL(optional)" v-model="url">
        <template v-slot:prepend>
          <q-icon name="" />
        </template>
      </q-input>

      <div class="row justify-end">
        <q-btn align="right" color="white" text-color="black" label="Post" @click="submitPost" />
      </div>
    </div>
  </q-page>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    files: "",
    post: "",
    postTitle: "",
    url: ""
  }),
  methods: {
   submitPost(){
     this.createPost()
   },
   async createPost() {
      const files = this.files;
      const post = this.post;
      const postTitle = this.postTitle;


     const result = await this.$apollo.mutate({
        mutation: gql`
          mutation($post: String, $title: String, $postedby: String) {
            createPost(post: $post, title: $title, postedby: $postedby) {
              id
            }
          }
        `,
        variables:{
          post,
          title:postTitle,
          postedby: "5effc23dfc1eec3a9caced26"
        },

      });
      console.log(result)
    }
  }
};
</script>

<style></style>
