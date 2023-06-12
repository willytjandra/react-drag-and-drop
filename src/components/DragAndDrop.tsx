import { useRef, type ChangeEvent, type MouseEvent, useState, type DragEvent } from 'react'

import styles from './DragAndDrop.module.css'

const DragAndDrop = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)

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

  const handleDrag = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setDragActive(false)
    if (e.dataTransfer.files == null || e.dataTransfer.files.length === 0) {
      console.log('handleDrop - no files selected')
    } else {
      console.log(`handleDrop - ${e.dataTransfer.files[0].name}`)
    }
  }

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault()
      }}
      onDragEnter={handleDrag}
    >
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
      {dragActive && (
        <div className={styles.dropFileContainer} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
          Drop your file here
        </div>
      )}
    </form>
  )
}

export default DragAndDrop
