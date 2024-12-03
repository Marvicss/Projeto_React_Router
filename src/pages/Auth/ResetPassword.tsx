import React from 'react';
import './auth.module.css';

const ResetPassword: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/assets/logo.svg" alt="Logo" className="auth-logo" />
        <p>Bem-vindo ao sistema de redefinição de senha.</p>
        <p>Digite o código enviado ao seu e-mail e redefina sua senha.</p>
      </div>
      <div className="auth-right">
        <h2>Redefinição de senha</h2>
        <form>
          <div className="form-group">
            <label htmlFor="code">Código</label>
            <input
              type="text"
              id="code"
              placeholder="Digite o código"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Nova senha</label>
            <input
              type="password"
              id="new-password"
              placeholder="Digite sua nova senha"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar nova senha</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirme sua nova senha"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Redefinir
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
