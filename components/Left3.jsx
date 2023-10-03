import styles from "@/styles/Left3.module.sass"
import { useState, useEffect, useRef } from "react";
const Left3 = ({setOptionNum})=>{
  const selectRef = useRef()
  const [selectedValue, setSelectedValue] = useState('0');
  const optionAry = ["選項1", "選項22", "選項333", "選項4444"];


  const doChange = ()=>{
    setSelectedValue(selectRef.current.value);
    setOptionNum(parseInt(selectRef.current.value));
    selectRef.current.blur();
  };

  const doClick = (n)=>{
    setSelectedValue(n);
    setOptionNum(n);
  }
return(
  <div className={`me-3 ${styles.left}`}>
    <select ref={selectRef} className={styles.select1} defaultValue="0" onChange={doChange}>
      <option value="0" disabled>請選擇</option>
      {optionAry && optionAry.map((option, index)=>(
        <option key={index} value={index} >{option}</option>  
      ))}
    </select>
    <div className={styles.idbenMenu}>
      {optionAry && optionAry.map((option, index)=>(
        <div key={index} className={`${selectedValue === index+1 ? styles.active:""} ${styles.option}`} onClick={()=>{doClick(index+1)}}>{option}</div>
      ))}
    </div>
  </div>
)
}

export default Left3;