<template>
    <main class="framework-page" style="margin-bottom: 10px;">
        <div class="card">
            <div class="card-content">
                <div class="card-header">
                    <span class="span-card">Frameworks</span>
                </div>

                <div class="row text-center">
                    <div class="col-md-3">
                        <SpringSvg/>
                    </div>
                    <div class="col-md-3">
                        <BootstrapSvg/>
                    </div>
                    <div class="col-md-3">
                        <PrimeFacesSvg/>
                    </div>
                    <div class="col-md-3">
                        <NodejsSvg/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import PrimeFacesSvg from './svgs/PrimeFacesSvg.vue'
import SpringSvg from './svgs/SpringSvg.vue'
import BootstrapSvg from './svgs/BootstrapSvg.vue'
import NodejsSvg from './svgs/NodejsSvg.vue'
</script>