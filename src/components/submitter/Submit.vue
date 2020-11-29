<template>
  <div>
    <div class = "terms-agreement">
      <h1>Terms Agreement</h1>
      <b-form-checkbox
        id="checkbox"
        v-model="status"
        name="checkbox"
        value="agree"
        unchecked-value="disagree"
      >
        I accept the terms and use
      </b-form-checkbox>
    </div>

    <div class = "task-selction">
      <h1>Task Selection</h1>
      <select v-model="task" id="task-select">
        <option disabled value = "">Please select a task</option>
        <option>1</option>
        <option>2</option>
      </select>
      <span>selected: {{ task }}</span><br>
      <br><b-button variant="primary" @click="refresh">Refresh</b-button>
      <b-button variant="primary" @click="apply">Apply</b-button>
    </div>

    <div class = "file-submission">
      <h1>Upload Your File</h1>
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
      <b-button variant="primary" @click="upload">Upload</b-button>

      <div v-if="file" class="progress">
        <div
          class="striped progress-bar"
          role = "progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: progress + '%'}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadService from '@/services/UploadFilesService'

export default {
  name: 'submit',
  data () {
    return {
      status: '',
      task: '',
      file: undefined,
      progress: 0,
      message: '',
      fileInfos: []
    }
  },
  methods: {
    upload: function () {
      this.progress = 0
      UploadService.upload(this.file, event => {
        this.progress = Math.round((100 * event.loaded) / event.total)
      })
        .then(response => {
          this.message = response.data.message
          return UploadService.getFiles()
        })
        .then(files => {
          this.fileInfos = files.data
        })
        .catch(() => {
          this.progress = 0
          this.message = "Can't upload the file"
          this.file = undefined
        })
    },
    apply: function () {
      if (this.status === 'agree') {
        if (this.task === '') {
          alert('Please select a task')
        } else if (this.task !== '') {
          alert('Please upload a file')
        }
      } else {
        alert('Please agree to the terms first')
      }
    },
    mounted: function () {
      UploadService.getFiles().then(response => {
        this.fileInfos = response.data
      })
    },

    refresh: function () {

    }
  }
}
</script>

<style scoped>
.terms-agreement {
  margin-top: 100px;
  text-align: center;
  margin-bottom: 100px;
}

.task-selction {
  margin-top: 100px;
  text-align: center;
  margin-bottom: 100px;
}

.file-submission {
  margin-top: 100px;
  text-align: center;
  margin-bottom: 100px;

}

</style>
