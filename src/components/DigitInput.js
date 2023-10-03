import styles from './digitinput.module.css'

function CountInput({ passwordLength, setPasswordLength }) {

  return (
    <div className={styles.divRangeInput}>
      <input type="range" min="6" max="26" step="1" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
      <p> Digits: {passwordLength ? passwordLength : 16}</p>
    </div>
  )
}

export default CountInput