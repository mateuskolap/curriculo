<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="fade-in-up">
    <header class="page-header">
      <h1 class="page-title">Mateus Kolapouski Serafim</h1>
      <p class="page-subtitle">
        Desenvolvedor Fullstack especializado em PHP e Laravel, com experiência em análise de dados e desenvolvimento de soluções escaláveis.
      </p>
    </header>

    <section class="about-section">
      <div class="card">
        <h2 class="card-title">Sobre Mim</h2>
        <div class="card-content">
          <p>
            Sou um desenvolvedor atualmente trabalhando como Desenvolvedor Fullstack no Centro Universitário Cidade Verde.
            Tenho experiência em desenvolvimento backend com PHP e Laravel, além de conhecimentos em análise de dados e automação de processos.
          </p>
          <p>
            Minha jornada na tecnologia começou com a Engenharia de Dados, onde desenvolvi habilidades em Python, SQL e análise de grandes volumes de dados.
            Atualmente, estou focado no desenvolvimento web, criando soluções robustas e escaláveis que impactam positivamente os usuários.
          </p>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="card">
        <h2 class="card-title">Principais Tecnologias</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <i class="devicon-php-plain skill-icon"></i>
            <h3>PHP</h3>
            <p>Linguagem principal</p>
          </div>
          <div class="skill-item">
            <i class="devicon-laravel-plain skill-icon"></i>
            <h3>Laravel</h3>
            <p>Framework web</p>
          </div>
          <div class="skill-item">
            <i class="devicon-mysql-plain skill-icon"></i>
            <h3>MySQL</h3>
            <p>Banco de dados</p>
          </div>
          <div class="skill-item">
            <i class="devicon-git-plain skill-icon"></i>
            <h3>Git/GitHub</h3>
            <p>Versionamento</p>
          </div>
          <div class="skill-item">
            <i class="devicon-docker-plain skill-icon"></i>
            <h3>Docker</h3>
            <p>Containerização</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="card">
        <h2 class="card-title">Vamos Trabalhar Juntos?</h2>
        <div class="card-content">
          <p>
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Se você tem uma ideia ou precisa de um desenvolvedor experiente, vamos conversar!
          </p>
          <div style="margin-top: 2rem;">
            <RouterLink to="/contact" class="btn">
              Entre em Contato
            </RouterLink>
            <RouterLink to="/resume" class="btn btn-outline" style="margin-left: 1rem;">
              Ver Currículo
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
