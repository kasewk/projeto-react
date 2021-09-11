import ProjectForm from '../projects/ProjectForm'
import styles from './styles/NewProject.module.css'

export default function NewProject() {
    return (
        <section className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </section>
    )
}
