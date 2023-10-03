import styles from './passwordinfo.module.css'

function PasswordInfo({markLetter, setMarkLetter, markNumber, setMarkNumber, markCharacter, setMarkCharacter}) {
    return (
        <div className={styles.divInfo}>
            <div><input type="checkbox" checked={markLetter} onChange={(e)=> setMarkLetter(e.target.checked)}></input> Contains letters</div>
            <div><input type="checkbox" checked={markNumber} onChange={(e)=> setMarkNumber(e.target.checked)}></input> Contains numbers</div>
            <div><input type="checkbox" checked={markCharacter} onChange={(e)=> setMarkCharacter(e.target.checked)}></input> Contains characters</div>
        </div>
    )
}

export default PasswordInfo