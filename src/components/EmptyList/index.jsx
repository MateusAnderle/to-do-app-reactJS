import styles from './EmptyList.module.css';
import clipboard from '../../assets/Clipboard.png';

export function EmptyList(){
    return(
        <div className={styles.tasksContent}>
            <img src={clipboard} className={styles.clipboardStyle} alt="imagem de uma prancheta" />
            <div className={styles.clipboardBold}>Você ainda não tem tarefas cadastradas</div>
            <div className={styles.clipboardRegular}>Crie tarefas e organize seus itens a fazer</div>
        </div>
    );
}