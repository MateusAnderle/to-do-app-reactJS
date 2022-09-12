import styles from './TaskCard.module.css';
import { Trash } from 'phosphor-react';

export function TaskCard({ title, onClick }){
    return(
        <div className={styles.contentBox}>
            <input 
                type="checkbox" 
                className={styles.checkboxStyle}
            />
            <div className={styles.taskContent}>{title}</div>
            <button onClick={onClick} className={styles.imageWrapper} title='Deletar tarefa'>
                <Trash size={22} color="#808080"/>
            </button>
        </div>
    );
}