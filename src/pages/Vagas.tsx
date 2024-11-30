import React from 'react';
import styles from './vagas.module.css';

function Vagas() {
  const handleIconClick: any = (category: string) => {
    alert(`Você clicou em: ${category}`);
  };

  return (
    <div className={styles.vagasContainer}>
      {/* Cabeçalho de Categorias */}
      <div className={styles.vagasHeader}>
        <h1>Explore as Categorias</h1>
        <button className={styles.verTodas}>Mostrar todas as vagas &rarr;</button>
      </div>

      {/* Categorias de Vagas */}
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
<br />
<br />
<br />
      {/* Imagem promocional */}
      <div className={styles.ctaSection}>
  <img 
    src="cta.svg" 
    alt="Descubra mais oportunidades de trabalho" 
    className={styles.ctaImage} 
    
  />
</div>
{/* oportunidades em destaque */}
<br />
      <div className={styles.oportunidadesDestaque}>
  <div className={styles.vagasHeader}>
    <h1>Oportunidades em Destaque</h1>
    <button className={styles.verTodas}>Mostrar todas as vagas &rarr;</button>
  </div>
  <div className={styles.vagasGrid}>
    {[
      {
        title: "Email Marketing",
        company: "RianV",
        location: "Recife, Pernambuco",
        description: "A RianV está procurando um especialista em Email Marketing para ajudar a equipe.",
        
        logo: "rianV.svg",
      },
      {
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Francisco, US",
        description: "O Dropbox está procurando um Brand Designer para ajudar na equipe de design.",
        categories: ["Design", "Negócios"],
        logo: "dropbox.svg",
      },
      {
        title: "Email Marketing",
        company: "Pitch",
        location: "Recife, Pernambuco",
        description: "Pitch está procurando Gerente de Cliente para se juntar ao marketing.",
        categories: ["Design", "Negócios"],
        logo: "pitch.svg",
      },
      {
        title: "Visual Designer",
        company: "Blinklist",
        location: "Olinda, Pernambuco",
        description: "Blinklist está procurando Visual Designer para criar projetos inovadores.",
        categories: ["Design"],
        logo: "Blinklist.svg",
      },
      {
        title: "Engenheiro Civil",
        company: "Clod",
        location: "Paulista, Pernambuco",
        description: "A Clod está procurando Engenheiro Civil para nos ajudar com projetos estruturais.",
        categories: ["Engenharia", "Design"],
        logo: "clod.svg",
      },
      {
        title: "Lead Designer",
        company: "Canva",
        location: "Recife, Pernambuco",
        description: "O Canva está procurando um Engenheiro Líder para desenvolver novos produtos.",
        categories: ["Design", "Negócios"],
        logo: "canva.svg",
      },
      {
        title: "Estrategista de Marca",
        company: "GoDaddy",
        location: "Recife, Pernambuco",
        description: "A GoDaddy está procurando estrategista de marca para ajudar no marketing.",
        categories: ["Marketing"],
        logo: "Godaddy.svg",
      },
      {
        title: "Data Analyst",
        company: "Twitter",
        location: "São Paulo, São Paulo",
        description: "O Twitter está procurando Analista de Dados para ajudar na tomada de decisões.",
        categories: ["Tecnologia"],
        logo: "twitter.svg",
      },
    ].map((vaga, index) => (
      <div key={index} className={styles.vagaCard}>
        <div className={styles.iconContainer}>
          <img src={vaga.logo} alt={`Logo ${vaga.company}`} />
        </div>
        <h3>{vaga.title}</h3>
        <p>{vaga.company} ・ {vaga.location}</p>
        <p>{vaga.description}</p>
        <div className={styles.categories}>
          
        </div>
        <span className={styles.contractType}>Integral</span>
      </div>
    ))}
  </div>
</div>


      {/* Rodapé */}
      <footer className={styles.rodape}>
        <div className={styles.rodapeContainer}>
          <div className={styles.rodapeSection}>
            <h6>Sobre Nós</h6>
            <p>A Vaga Certa conecta talentos às melhores oportunidades de forma ágil e confiável.</p>
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
              +55 81 9 9697-3442<br />
              vagacertape@gmail.com<br />
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
