<template>
    <main class="">
        <!--<div class="container-fluid" style="background-color: #64998D;">-->
            <div class="container-fluid" style="height: 99%;">
                <div class="col-md-12 div-principal">
                    <h1 class="title">
                        <span>Habilidades</span>
                    </h1> 
                <br/>
                <br/>
                <Linguagem/>
                <Framework/>
                <BancoDados/>
                <Ferramenta/>
            </div>
        </div>
    </main>
</template>

<script setup>
import Linguagem from './Linguagem.vue'
import Framework from './Framework.vue'
import Ferramenta from './Ferramenta.vue'
import BancoDados from './BancoDados.vue';
</script>