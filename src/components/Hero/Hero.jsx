import "./Hero.css"
import photo1 from "./placeholder-gato.jpg"

// componente principal da apresentação inicial do portfólio
export default function Hero() {
  return (
    // seção principal do topo da página
    <section className="hero">
      
      {/* container para organizar foto e texto lado a lado */}
      <div className="hero-container">

        {/* lado esquerdo: imagem de perfil */}
        <div className="hero-image">
          <img
            src={photo1}
            alt="Foto de perfil de Davi"
          />
        </div>

        {/* lado direito: textos e botões */}
        <div className="hero-content">
          <h1>Davi Martins</h1>

          <h2>Estudante de Engenharia de Software | Desenvolvedor em formação</h2>

          <p>
            Sou estudante de Engenharia de Software na PUCPR e estou construindo
            minha base prática em desenvolvimento, explorando tecnologias como
            React, Java e conceitos de front-end. Este portfólio reúne projetos
            que representam meu processo de aprendizado e evolução nestas áreas.
          </p>

          {/* área dos botões */}
          <div className="hero-buttons">
            <a href="https://github.com/DaviMartins26" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/engsoftdavimundt/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="#projects">
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}