
import styles from "./SignUp.module.css";
import blossomFlower from "./assets/blossom-flower.svg";
import googleLogo from "./assets/icons-google-logo.svg";
import appleLogo from "./assets/icons-apple-logo.svg";

function SignUp() {
  return (
    <main className={styles.page}>
      {/* Left side: Sign-up form */}
      <section className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="new-password"
              />
            </div>

            <label className={styles.terms}>
              <input type="checkbox" name="terms" />
              <span>I agree to the terms &amp; policy</span>
            </label>

            <button className={styles.signupButton} type="submit">
              Signup
            </button>
          </form>

          <div className={styles.divider}>
            <span />
            <p>Or</p>
            <span />
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button">
              <img src={googleLogo} alt="" />
              <span>Sign in with Google</span>
            </button>

            <button className={styles.socialButton} type="button">
              <img src={appleLogo} alt="" />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <p className={styles.loginText}>
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </section>

      {/* Right side: Blossom image */}
      <section className={styles.rightSection}>
        <img
          className={styles.blossomImage}
          src={blossomFlower}
          alt="Blossom flowers"
        />
      </section>
    </main>
  );
}

export default SignUp;
