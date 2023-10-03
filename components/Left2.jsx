import styles from "@/styles/Left2.module.sass"
import { useState, useEffect, useRef } from "react";
const Left2 = ({setOptionNum})=>{
  const selectRef = useRef()
  const [size, setSize] = useState(1);
  const optionAry = ["選項1", "選項22", "選項333", "選項4444"];

  useEffect(() => {
    const updateSize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setSize(4);
      } else {
        setSize(1);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const doChange = ()=>{
    setOptionNum(parseInt(selectRef.current.value));
    selectRef.current.blur();
  };
return(
  <div className={`me-3 ${styles.left}`}>
    <select ref={selectRef} className={styles.select1} defaultValue="0" size={size} onChange={doChange}>
      <option value="0" disabled>請選擇</option>
      {optionAry && optionAry.map((option, index)=>(
        <option key={index} value={index} >{option}</option>  
      ))}
    </select>
  </div>
)
}

export default Left2;