import styles from "./../styles/Login.module.css";
import Link from "next/link";

import LoginCard from "../src/components/LoginCard/loginCard";

import Input from "../src/components/Input/input";
import Button from "../src/components/Button/button";

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="text" placeholder="Seu nome" />
          <Input type="text" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Cadastrar</Button>
          <Link href="/login">Já possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
