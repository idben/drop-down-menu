import styles from "@/styles/Left.module.sass"
const Left = ({setOptionNum})=>{
  const optionAry = ["選項1", "選項22", "選項333", "選項4444"];
  const doClick = (n)=>{
    setOptionNum(n)
  };
  return(
    <div className={styles.left}>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          選項
        </button>
        <ul className="dropdown-menu">
          {optionAry && optionAry.map((option, index)=>(
            <li key={index}><div className="dropdown-item" onClick={e=>{doClick(index+1)}}>{option}</div></li>
          ))}
        </ul>
      </div>
    </div>)
}

export default Left;