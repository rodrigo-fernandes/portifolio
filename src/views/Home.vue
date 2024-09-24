<template>
    <main class="">
        <div class="container-fluid" style="height: 100%;">
            <div class="col-md-12 div-principal">
                <br/>
                <div class="div-format-text">
                
                    <h5 class="lead h5-title">Oi, eu sou 
                        <span class="name">Rodrigo Fernandes</span>
                    </h5>

                    <h5 style="color:#fff"> <span class="typing" style="font-weight: 300; color:#004d40"></span></h5>

                    <p1 class="lead">Sou uma pessoa extrovertida, curte um trabalho em equipe e novos desafios.
                        Atualmente atuo na área de programação a qual me apaixonei a alguns anos atrás quando tive meu primeiro contado e sempre busco novos conhecimentos.
                    </p1>
                </div>
                <br/>
                <br/>
                <br/>
            
                <div class="col-12 div-format-text">
                    <button class="icon-btn linkedin" title="Linkedin" alt="Linkedin">
                        <a href="https://www.linkedin.com/in/rodrigo-fernandes-841827114/" target="_blank">
                            <LinkedinSvg/>
                        </a>
                    </button>
                    <button class="icon-btn github" title="Github" alt="Github">
                        <a href="https://github.com/rodrigo-fernandes" target="_blank">
                            <GithubSvg/>
                        </a>
                    </button>
                </div>

                <div class="col-12 div-format-text">
                    <div class="buttons">
                        <RouterLink to="/experiencia" class="readme">Saber mais</RouterLink>
                        <a href="/contato" class="contactme">Entrar em contato</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import LinkedinSvg from './svgs/LinkedinSvg.vue';
import GithubSvg from './svgs/GithubSvg.vue'

</script>