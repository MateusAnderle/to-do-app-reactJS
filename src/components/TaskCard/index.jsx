import styles from './TaskCard.module.css';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export function TaskCard({ title, onClick, getChecked }){
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange () {
        setIsChecked(!isChecked);
    };

    return(
        <div className={styles.contentBox}>
                <input 
                    type="checkbox" 
                    name="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                    onClick={() => getChecked(isChecked)}
                />
            <div className={styles.taskContent} style={isChecked ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{title}</div>
            <button onClick={onClick} className={styles.imageWrapper} title='Deletar tarefa'>
                <Trash size={22} color="#808080"/>
            </button>
        </div>
    );
}