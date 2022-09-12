import { useState } from 'react';
import styles from './Home.module.css';
import imgLogo from '../assets/Logo.png';
import { EmptyList } from '../components/EmptyList';
import { TaskCard } from '../components/TaskCard';

export function Home() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState('');

  function handleTextTask(event){
    event.target.setCustomValidity('');
    setInputTask(event.target.value);
  }

  function handleNewTask(event){
    event.preventDefault();
    setTask([...task, inputTask]);  
    setInputTask('');
  }

  function handleRemoveTask(taskToDelete){
    const tasksWithoutDeletedOne = task.filter(task => {
      return task !== taskToDelete;
    })
    setTask(tasksWithoutDeletedOne);
  }

    return (
      <div className={styles.container}>
        <header className={styles.containerHeader}>
          <img className={styles.imageLogo} src={imgLogo} alt="Logotipo da empresa" />
          
        </header>

        <main className={styles.mainContainer}>
          <div className={styles.tasksWrapper}>

            <form className={styles.inputContainer} onSubmit={handleNewTask}>
              <textarea 
                    className={styles.inputContent}
                    name='task'
                    value={inputTask}
                    placeholder='Adicione uma tarefa'
                    onChange={handleTextTask}
                    required
                />
              <button type="submit" className={styles.inputButton}>Criar +</button>
            </form>


            <div className={styles.tasksHeader}>
              <div className={styles.createdTasks}>Tarefas Criadas <span className={styles.tasksCounter}> {task.length} </span> </div>
              <div className={styles.finishedTasks}>Concluídas <span className={styles.tasksCounter}> 5 de 15 </span> </div>
            </div>
            
            { task ? task.map(task => {
              return <TaskCard key={task} title={task} onClick={() => handleRemoveTask(task)}/>
            }) : <EmptyList/>} 

          </div>
        </main>

      </div>
    )
  }  