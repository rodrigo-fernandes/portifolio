<template>
    <main class="">
        <!--<div class="container-fluid" style="background-color: #64998D;">-->
            <div class="container-fluid" style="height: 99%;">
                <div class="col-md-12 div-principal">
                    <h1 class="title">
                        <span>Formação Acadêmica</span>
                    </h1> 
                <br/>
                <br/>
                <Graduacao/>
                <br/>
                <Tecnico/>
                <br/>
                <LicencaCertificado/>
            </div>
        </div>
    </main>
</template>

<script setup>
import Graduacao from './educacao/Graduacao.vue'
import Tecnico from './educacao/Tecnico.vue'
import LicencaCertificado from './educacao/LicencaCertificado.vue'
</script>