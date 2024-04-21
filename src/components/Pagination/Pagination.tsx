import { Link } from "react-router-dom";
import { StatePageProps } from "../../interfaces/state.interface";
import { states } from "../../data/FlagsData";
import styles from "./styles.module.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const Pagination: React.FC<StatePageProps> = ({ state }) => {
    
    const currentIndex = states.findIndex((e) => e.id === state.id)
    const previousIndex = currentIndex > 0 ? currentIndex - 1: states.length - 1;
    const previousState = states[previousIndex];
    const nextIndex = currentIndex < states.length - 1 ? currentIndex + 1 : 0;
    const nextState = states[nextIndex];

    return (
        <nav className={styles.pagination}>
            <Link to={`/${previousState.name}`}><BsArrowLeftCircle />{previousState.name}</Link>
            <Link to={`/${nextState.name}`}>{nextState.name}<BsArrowRightCircle /></Link>
        </nav>
    )
}