import { useRef, type ChangeEvent, type MouseEvent } from 'react'

import styles from './DragAndDrop.module.css'

const DragAndDrop = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files == null || e.target.files.length === 0) {
      console.log('input:file changed event fired - no files selected')
    } else {
      console.log(`input:file changed event fired - ${e.target.files[0].name}`)
    }
  }

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    inputRef.current?.click()
  }

  return (
    <form className={styles.container}>
      <input
        type="file"
        name="input-file-upload"
        id="input-file-upload"
        className={styles.inputFileUpload}
        onChange={handleChange}
        ref={inputRef}
      />
      <label htmlFor="input-file-upload" className={styles.labelFileUpload}>
        <p>Drag and Drop your file here or</p>
        <button className={styles.uploadButton} onClick={onButtonClick}>
          Upload a file
        </button>
      </label>
    </form>
  )
}

export default DragAndDrop
