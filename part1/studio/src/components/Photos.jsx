import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <div>
            <img src="https://preppykitchen.com/wp-content/uploads/2023/10/Waffle-Recipe-Feature.jpg" alt="recipe photo" style={{ width: "400px", height: "auto" }} className={styles.imageUpdates} />
        </div>
    );
}