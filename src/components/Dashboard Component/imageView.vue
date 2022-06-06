<template>
  <div class="container">
    <GoBack />
    <div class="upload-img">
      <div class="fit-content">
        <p>Upload an Image</p>
        <div class="input-bar">
          <input type="file" @change="previewImage" accept="image/*" />
        </div>
        <div class="progres-bar">
          <p>
            Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
        </div>
        <div v-if="imageData != null">
          <img class="preview" :src="picture" />
          <br />
          <button @click="onUpload">Upload</button>
        </div>
      </div>
    </div>
    <SideBar />
  </div>
</template>

<script>
import { storage } from "@/includes/firebase";
import GoBack from "./GoBack.vue";
import SideBar from "./SideBar.vue";

export default {
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = storage
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    },
  },
  components: { GoBack, SideBar },
};
</script>

<style scoped>
.upload-img {
  text-align: center;
  margin-top: 2rem;
  padding: 0 300px;
  box-sizing: border-box;
}
.fit-content {
  border: 1px solid #000;
}
img.preview {
  width: 200px;
}
.input-bar {
  margin-left: 5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>