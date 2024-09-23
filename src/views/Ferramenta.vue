<template>
    <main class="ferramenta-page" style="margin-bottom: 10px;">
        <div class="card">
            <div class="card-content">
                <div class="card-header">
                    <span class="span-card">Ferramentas</span>
                </div>

                <div class="row text-center">
                    <div class="col-md-3">
                        <JiraSvg/>
                    </div>
                    <div class="col-md-3">
                        <AwsSvg/>
                    </div>
                    <div class="col-md-3">
                        <GitSvg/>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import JiraSvg from './svgs/JiraSvg.vue'
import AwsSvg from './svgs/AwsSvg.vue'
import GitSvg from './svgs/GitSvg.vue'
</script>