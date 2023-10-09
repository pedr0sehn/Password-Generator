import { useState } from 'react';
import styles from './generate.module.css';

function GeneratePassword({ letters, words, numbers, characters, numberOfDigits }) {

    let passwordPreferences = []

    const [ps, setPs] = useState('')

    let password = ""

    function copyPassword() {
        navigator.clipboard.writeText(ps);
    }

    if (letters) passwordPreferences.push("letters")
    if (numbers) passwordPreferences.push("numbers")
    if (characters) passwordPreferences.push("characters")

    const uLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lLtrs = uLtrs.toLocaleLowerCase()
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const wrds = [
        "coffee", "boss", "noob", "pro",
        "god", "red", "lol", "driver",
        "chair", "tree", "margarine", "mouse", "ballon",
        "strange", "friend", "horse", "sun", "old"
    ]
    const chr = ["!", "#", "_","$", "%", "&"]

    function createPassword() {

        if (!password.length < 6) password = ""

        let passwordType

        if (passwordPreferences[0] === "letters") passwordType = 1
        if (passwordPreferences[0] === "numbers") passwordType = 2
        if (passwordPreferences[0] === "characters") passwordType = 3
        if (passwordPreferences[1] === "numbers") passwordType = 4
        if (passwordPreferences[0] === "letters" && passwordPreferences[1] === "characters") passwordType = 5
        if (passwordPreferences[0] === "numbers" && passwordPreferences[1] === "characters") passwordType = 6
        if (passwordPreferences[2] === "characters") passwordType = 7

        for (let i = 0; i < numberOfDigits; i++) {
            switch (passwordType) {
                case 1:
                    Math.floor(Math.random() * 2) === 0 ? password += (lLtrs[Math.floor(Math.random() * uLtrs.length)]) : password += (uLtrs[Math.floor(Math.random() * uLtrs.length)])
                    break;
                case 2:
                    password += (nums[Math.floor(Math.random() * nums.length)])
                    break;
                case 3:
                    password += (chr[Math.floor(Math.random() * chr.length)])
                    break;
                case 4:
                    switch (Math.floor(Math.random() * 2)) {
                        case 0:
                            Math.floor(Math.random() * 2) === 0 ? password += (lLtrs[Math.floor(Math.random() * uLtrs.length)]) : password += (uLtrs[Math.floor(Math.random() * uLtrs.length)])
                            break;
                        case 1:
                            password += (nums[Math.floor(Math.random() * nums.length)])
                            break
                        default:
                            console.log("none")
                            break
                    }
                    break;
                case 5:
                    switch (Math.floor(Math.random() * 2)) {
                        case 0:
                            Math.floor(Math.random() * 2) === 0 ? password += (lLtrs[Math.floor(Math.random() * uLtrs.length)]) : password += (uLtrs[Math.floor(Math.random() * uLtrs.length)])
                            break;
                        case 1:
                            password += (chr[Math.floor(Math.random() * chr.length)])
                            break
                        default:
                            console.log("none")
                            break
                    }
                    break;
                case 6:
                    switch (Math.floor(Math.random() * 2)) {
                        case 0:
                            password += (nums[Math.floor(Math.random() * nums.length)])
                            break;
                        case 1:
                            password += (chr[Math.floor(Math.random() * chr.length)])
                            break
                        default:
                            console.log("none")
                            break
                    }
                    break;
                case 7:
                    switch (Math.floor(Math.random() * 3)) {
                        case 0:
                            Math.floor(Math.random() * 2) === 0 ? password += (lLtrs[Math.floor(Math.random() * uLtrs.length)]) : password += (uLtrs[Math.floor(Math.random() * uLtrs.length)])
                            break;
                        case 1:
                            password += (nums[Math.floor(Math.random() * nums.length)])
                            break
                        case 2:
                            password += (chr[Math.floor(Math.random() * chr.length)])
                            break
                        default:
                            console.log("none")
                            break
                    }
                    break;
                default:
                    alert("Mark one of these boxes")
                    break;
            }
        }
        setPs(password)
    }
    return (
        <div className={styles.parentDiv}>
            <div className={styles.button} onClick={createPassword}>Generate Password</div>
            <div className={styles.passwordDiv}>
                <div className={styles.password}>{ps}</div>
                <div className={styles.copyPassword} onClick={copyPassword}></div>
            </div>
        </div>
    )
}

export default GeneratePassword