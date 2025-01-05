import Link from "next/link";
import styles from "./style.module.css";


const LoginPage = () => {
    return (
        <div className={styles.login}>
            <div className={styles.container}>
            <h1>Quick Post</h1>
            <form className={styles.form}>
               <div className={styles.input}>
               <label htmlFor="email">Email</label>
               <input type="email" placeholder="Email" />
               </div>
               <div className={styles.input}>
               <label htmlFor="password">Password</label>
               <input type="password" placeholder="Password" />
               <div className={styles.forgot}>
               <p className={styles.forgotPassword}>Forgot Password?</p>
               </div>
               </div>
               <div className={styles.Submitbutton}>
               <Link href="/dashboard"><button type="submit">Log In</button></Link>
               </div>
                
            </form>
            <div className={styles.SignUpMethods}>
            <p className={styles.SignUp}>Don't have an account? <Link href="/signup"><span>Create New</span></Link></p>
            <p className={styles.or}>OR</p>
            <button>Sign in with Google</button>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;