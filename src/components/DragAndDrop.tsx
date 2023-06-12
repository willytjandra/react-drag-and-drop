import styles from './DragAndDrop.module.css'

const DragAndDrop = () => (
  <div>
    <form className={styles.container}>
      <input type="file" name="input-file-upload" id="input-file-upload" className={styles.inputFileUpload} />
      <label htmlFor="input-file-upload" className={styles.labelFileUpload}>
        <p>Drag and Drop your file here or</p>
        <button className={styles.uploadButton}>Upload a file</button>
      </label>
    </form>
  </div>
)

export default DragAndDrop
