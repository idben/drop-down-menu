import styles from "@/styles/Left4.module.sass"
import { useState, useEffect, useRef } from "react";
const Left4 = ({setOptionNum})=>{
  const selectRef = useRef()
  const [dropText, setDropText] = useState("請選擇")
  const [show, setShow] = useState(false)
  const [selectedValue, setSelectedValue] = useState('0');
  const optionAry = ["選項1", "選項22", "選項333", "選項4444"];


  const doDropDown = ()=>{
    setShow(!show);
  };

  const doClick = (n)=>{
    setSelectedValue(n);
    setOptionNum(n);
    setShow(false);
    setDropText(`目前選擇的是 ${optionAry[n-1]}`)
  }
return(
  <div className={`me-3 ${styles.left}`}>
    <div className={`${styles.option} ${styles.ddown}`} onClick={doDropDown}>{dropText}</div>
    <div className={`${styles.idbenMenu} ${show?styles.idbenMenuActive:""}`}>
      {optionAry && optionAry.map((option, index)=>(
        <div key={index} className={`${selectedValue === index+1 ? styles.active:""} ${styles.option}`} onClick={()=>{doClick(index+1)}}>{option}</div>
      ))}
    </div>
  </div>
)
}

export default Left4;