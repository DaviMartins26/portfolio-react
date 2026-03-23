import "./Projects.css"
import photo1 from "./landing-page.png"

// componente da seção de projetos
export default function Projects() {
  // lista de projetos 

  const projects = [
    {
      title: "Landing Page para Escola de Inglês",
      description:
        "Projeto desenvolvido para estudar os fundamentos do React por meio da criação de uma landing page inspirada em páginas de vendas. Durante o processo, foram praticados conceitos como componentização, estruturação de interface e estilização com CSS.",
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      image: "https://via.placeholder.com/500x280",
      demo: "https://first-page-react.vercel.app/",
      github: "https://github.com/DaviMartins26/First-Page-React",
    },
  ]

  return (
    // seção principal
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* título da seção */}
        <h2>Projetos</h2>

        <p className="projects-subtitle">
          Alguns dos projetos que representam meu processo de aprendizado e prática em desenvolvimento.
        </p>

        {/* lista de cards */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>


        {/* imagem do projeto clicável */}
        <div className="project-image">
          <a href={project.demo} target="_blank" rel="noreferrer">
          <img src={photo1} alt={project.title} />
          </a>
        </div>

              {/* conteúdo textual */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* tecnologias */}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                {/* botões */}
                <div className="project-buttons">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver projeto
                  </a>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}