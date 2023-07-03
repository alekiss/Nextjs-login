import LoginCard from "../src/components/LoginCard/loginCard";
import styles from "./../styles/Login.module.css";
import Link from "next/link";

import Input from "../src/components/Input/input";
import Button from "../src/components/Button/button";

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Entre na sua conta">
        <form className={styles.form}>
          <Input type="text" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Entrar</Button>
          <Link href="/cadastro">Ainda não possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
