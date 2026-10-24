import styles from "./SignUp.module.css";
import blossomFlower from "./assets/blossom-flower.svg";

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}></section>

      <section className={styles.rightSection}>
        <img
          className={styles.blossomImage}
          src={blossomFlower}
          alt="Blossom flower"
        />
      </section>
    </main>
  );
}

export default SignUp;