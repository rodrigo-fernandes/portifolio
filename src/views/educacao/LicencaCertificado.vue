<template>
    <main class="linguagem-page" style="margin-bottom: 10px;">
        <div class="card">
            <div class="card-contend">
                <div class="card-header">
                    <div class="col s12 m10">
                        <span>
                            <a href="" class="span-card">Licenças e Certificados</a>
                        </span>
                    </div>
                </div>

                <div class="row text-left div-experiencia">
                    <JavaIntermediario/>
                    <JDevCrudAPI/>
                    <JDevAWS/>
                    <UdemyScrum/>
                    <CertiProf/>
                    <UniCesumar/>
                    <UdemyJSF/>
                    <UdemyAPIRest/>
                    <Blusoft/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import JavaIntermediario from  './certificados/JavaIntermediario.vue'
import JDevCrudAPI from  './certificados/JDevCrudAPI.vue'
import JDevAWS from  './certificados/JDevAWS.vue'
import UdemyScrum from  './certificados/UdemyScrum.vue'
import CertiProf from  './certificados/CertiProf.vue'
import UniCesumar from  './certificados/UniCesumar.vue'
import UdemyJSF from  './certificados/UdemyJSF.vue'
import UdemyAPIRest from  './certificados/UdemyAPIRest.vue'
import Blusoft from  './certificados/Blusoft.vue'
</script>