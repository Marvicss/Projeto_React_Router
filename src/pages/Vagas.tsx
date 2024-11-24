import React from 'react';
import styles from './vagas.module.css';

function Vagas() {
  const handleIconClick = (category: string) => {
    alert(`Você clicou em: ${category}`);
  };

  return (
    <div className={styles.vagasContainer}>
      <div className={styles.vagasHeader}>
        <h1>Explore as categorias</h1>
        <a href="#" className={styles.verTodas}>Mostrar todas as vagas &rarr;</a>
      </div>
      <div className={styles.vagasGrid}>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Design")}>
          <div className={styles.iconContainer}>🎨</div>
          <h3>Design</h3>
          <p>235 vagas disponíveis</p>
        </div>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Comercial")}>
          <div className={styles.iconContainer}>📊</div>
          <h3>Comercial</h3>
          <p>756 vagas disponíveis</p>
        </div>
        <div className={`${styles.vagaCard} ${styles.destaque}`} onClick={() => handleIconClick("Marketing")}>
          <div className={styles.iconContainer}>📣</div>
          <h3>Marketing</h3>
          <p>140 vagas disponíveis</p>
        </div>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Financeiro")}>
          <div className={styles.iconContainer}>💰</div>
          <h3>Financeiro</h3>
          <p>325 vagas disponíveis</p>
        </div>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Tecnologia")}>
          <div className={styles.iconContainer}>💻</div>
          <h3>Tecnologia</h3>
          <p>436 vagas disponíveis</p>
        </div>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Engenharia")}>
          <div className={styles.iconContainer}>⚙️</div>
          <h3>Engenharia</h3>
          <p>542 vagas disponíveis</p>
        </div>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Gestão")}>
          <div className={styles.iconContainer}>📋</div>
          <h3>Gestão</h3>
          <p>211 vagas disponíveis</p>
        </div>
        <div className={styles.vagaCard} onClick={() => handleIconClick("Recursos Humanos")}>
          <div className={styles.iconContainer}>👥</div>
          <h3>Recursos Humanos</h3>
          <p>346 vagas disponíveis</p>
        </div>
      </div>

      {/* receba */}
        <br></br>
        <br></br>
        <br></br>
     <img src="cta.svg" alt="receba" />
      {/* Rodapé */}
      <footer className={styles.rodape}>
        <div className={styles.rodapeContainer}>
          <div className={styles.rodapeSection}>
            <h6>Sobre Nós</h6>
            <p>A Vaga Certa é uma plataforma de empregos que conecta talentos às melhores oportunidades de forma ágil, confiável e acessível.</p>
          </div>
          <div className={styles.rodapeSection}>
            <h6>Empresa</h6>
            <ul>
              <li>Sobre Nós</li>
              <li>Como Funciona?</li>
              <li>Principais Vagas</li>
              <li>Serviços</li>
            </ul>
          </div>
          <div className={styles.rodapeSection}>
            <h6>Vagas</h6>
            <ul>
              <li>Categorias de Vagas</li>
              <li>Vagas Presenciais</li>
              <li>Vagas Remotas</li>
            </ul>
          </div>
          <div className={styles.rodapeSection}>
            <h6>Contato</h6>
            <p>
              +55 81 9 9697-3442
              <br />
              vagacertape@gmail.com
              <br />
              Recife, Pernambuco
            </p>
          </div>
        </div>
        <p className={styles.copyRight}>© VagaCerta, 2024</p>
      </footer>
    </div>
  );
}

export default Vagas;
