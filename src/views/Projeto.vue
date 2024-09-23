<template>
    <main class="">
        <!--<div class="container-fluid" style="background-color: #64998D;">-->
            <div class="container-fluid" style="height: 99%;">
                <div class="col-md-12 div-principal">
                    <h1 class="title">
                        <span>Projetos</span>
                    </h1> 
                <br/>
                <br/>
                <div class="col-md-12 row">
                    <ConsultaCep/>
                    <QRCodeGenerator/>
                    <CameraFeed/>
                    <SimplesCrudJavaAPI/>
                    <ArquiteturaHexagonal/>
                    <ValidadorArquivoLambda/>
                    <Portfolio/>
                    <SpinnerHtml/>
                    <SidebarHtml/>
                    <NotaEletronica/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import ConsultaCep from './Projeto/ConsultaCep.vue';
import QRCodeGenerator from './Projeto/QRCodeGenerator.vue';
import CameraFeed from './Projeto/CameraFeed.vue';
import SimplesCrudJavaAPI from './Projeto/SimplesCrudJavaAPI.vue';
import ArquiteturaHexagonal from './Projeto/ArquiteturaHexagonal.vue';
import ValidadorArquivoLambda from './Projeto/ValidadorArquivoLambda.vue';
import Portfolio from './Projeto/Portfolio.vue';
import SpinnerHtml from './Projeto/SpinnerHtml.vue';
import SidebarHtml from './Projeto/SidebarHtml.vue';
import NotaEletronica from './Projeto/NotaEletronica.vue';
</script>