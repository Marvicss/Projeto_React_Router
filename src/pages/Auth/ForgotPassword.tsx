import React from 'react';
import './auth.module.css';

const ForgotPassword: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/assets/logo.svg" alt="Logo" className="auth-logo" />
        <p>Bem-vindo ao sistema de redefinição de senha.</p>
        <p>Preencha o formulário ao lado.</p>
      </div>
      <div className="auth-right">
        <h2>Esqueci minha senha</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

