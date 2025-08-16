<script setup lang="ts">
</script>

<template>
  <div class="fade-in-up">
    <header class="page-header">
      <h1 class="page-title">Currículo</h1>
      <p class="page-subtitle">
        Minha experiência profissional, formação acadêmica e habilidades técnicas.
      </p>
    </header>

    <section class="experience-section">
      <div class="card">
        <h2 class="card-title">Experiência Profissional</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">08/2025 - Atualmente</div>
            <h3 class="timeline-title">Desenvolvedor PHP</h3>
            <div class="timeline-company">Centro Universitário Cidade Verde</div>
            <div class="timeline-description">
              <p>Desenvolvimento de aplicações web utilizando PHP e Laravel como tecnologias principais.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">01/2024 - 08/2025</div>
            <h3 class="timeline-title">Engenheiro de Dados</h3>
            <div class="timeline-company">Centro Universitário Cidade Verde</div>
            <div class="timeline-description">
              <p>Responsável pela coleta, tratamento e análise de grandes volumes de dados educacionais, apoiando decisões estratégicas no âmbito acadêmico.</p>
              <ul>
                <li>Desenvolvimento de pipelines de dados escaláveis e eficientes, utilizando Python, SQL, Pandas e outras bibliotecas especializadas</li>
                <li>Criação de automações e dashboards com Power BI, otimizando relatórios institucionais e operacionais</li>
                <li>Suporte a colaboradores internos, promovendo redução de custos, eliminação de processos manuais e aumento da produtividade</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">03/2023 - 01/2024</div>
            <h3 class="timeline-title">Recepcionista Atendente</h3>
            <div class="timeline-company">Universidade Anhembi Morumbi</div>
            <div class="timeline-description">
              <p>Atendimento ao público e suporte administrativo.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">04/2022 - 03/2023</div>
            <h3 class="timeline-title">Auxiliar Geral</h3>
            <div class="timeline-company">Supermercado Borgio</div>
            <div class="timeline-description">
              <p>Atividades operacionais e atendimento ao cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section">
      <div class="card">
        <h2 class="card-title">Formação Acadêmica</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">01/2024 - 12/2027</div>
            <h3 class="timeline-title">Bacharelado em Engenharia de Software</h3>
            <div class="timeline-company">UniCV - Centro Universitário Cidade Verde</div>
            <div class="timeline-description">
              <p>Curso presencial focado em desenvolvimento de software e engenharia de sistemas.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">01/2024 - 06/2026</div>
            <h3 class="timeline-title">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
            <div class="timeline-company">UniCV - Centro Universitário Cidade Verde</div>
            <div class="timeline-description">
              <p>Curso presencial com foco em análise, desenvolvimento e manutenção de sistemas de informação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="card">
        <h2 class="card-title">Habilidades Técnicas</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Linguagens de Programação</h3>
            <div class="skill-tags">
              <span class="skill-tag">
                <i class="devicon-php-plain"></i>
                PHP
              </span>
              <span class="skill-tag">
                <i class="devicon-python-plain"></i>
                Python
              </span>
              <span class="skill-tag">
                <i class="devicon-mysql-plain"></i>
                SQL
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h3>Frameworks</h3>
            <div class="skill-tags">
              <span class="skill-tag">
                <i class="devicon-laravel-plain"></i>
                Laravel
              </span>
              <span class="skill-tag">
                <i class="devicon-fastapi-plain"></i>
                Fast API
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h3>Ferramentas</h3>
            <div class="skill-tags">
              <span class="skill-tag">
                <i class="devicon-git-plain"></i>
                Git
              </span>
              <span class="skill-tag">
                <i class="devicon-github-original"></i>
                GitHub
              </span>
              <span class="skill-tag">
                <i class="devicon-docker-plain"></i>
                Docker
              </span>
              <span class="skill-tag">Power BI</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="certifications-section">
      <div class="card">
        <h2 class="card-title">Formação Complementar</h2>
        <div class="card-content">
          <ul>
            <li><strong>Curso de Modelagem de Dados</strong> - FB, 2025</li>
            <li><strong>Curso de Auditoria de Sistemas</strong> - UniCV, 2024</li>
            <li><strong>Curso de Excel Avançado</strong> - UniCV, 2024</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.skill-category {
  margin-bottom: 2rem;
}

.skill-category h3 {
  color: #4a9eff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-tag i {
  font-size: 1.2rem;
}

.timeline-description ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.timeline-description li {
  margin-bottom: 0.5rem;
  color: #ccc;
}
</style>

