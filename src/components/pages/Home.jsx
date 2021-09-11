import styles from './styles/Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

export default function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto">Criar Projeto</LinkButton>
            <img src={savings} alt="costs" />
        </section>
    )
}
