import styles from './passwordinfo.module.css'

function PasswordInfo({markLetter, setMarkLetter, markWord, setMarkWord, markNumber, setMarkNumber, markSymbols, setMarkSymbols}) {
    return (
        <div className={styles.divInfo}>
            <div><input type="checkbox" checked={markLetter} onChange={(e)=> setMarkLetter(e.target.checked)}></input>Letters</div>
            <div><input type="checkbox" checked={markWord} onChange={(e)=> setMarkWord(e.target.checked)}></input>Words</div>
            <div><input type="checkbox" checked={markNumber} onChange={(e)=> setMarkNumber(e.target.checked)}></input>Numbers</div>
            <div><input type="checkbox" checked={markSymbols} onChange={(e)=> setMarkSymbols(e.target.checked)}></input>Symbols</div>
        </div>
    )
}

export default PasswordInfo