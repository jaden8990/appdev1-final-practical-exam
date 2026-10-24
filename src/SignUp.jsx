
import styles from "./SignUp.module.css";
import blossomFlower from "./assets/blossom-flower.svg";

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
          </div>

          <label className={styles.terms}>
            <input type="checkbox" />
            <span>I agree to the terms &amp; policy</span>
          </label>

          <button className={styles.signupButton} type="submit">
            Signup
          </button>
        </form>
      </section>

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
