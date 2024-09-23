<template>
    <main class="linguagem-page" style="margin-bottom: 10px;">
        <div class="card">
            <div class="card-content">
                <div class="card-header">
                    <span class="span-card">Linguagens</span>
                </div>

                <div class="row text-center">
                    <div class="col-md-3">
                        <JavaSvg/>
                    </div>
                    <div class="col-md-3">
                        <DelphiSvg/>
                    </div>
                    <div class="col-md-3">
                        <VueSvg/>
                    </div>
                    <div class="col-md-3">
                        <JavaScriptSvg/>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-3">
                        <HtmlSvg/>
                    </div>
                    <div class="col-md-3">
                        <CssSvg/>
                    </div>
                    <div class="col-md-3">
                        <JspSvg/>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import JavaSvg from './svgs/JavaSvg.vue'
import JavaScriptSvg from './svgs/JavascriptSvg.vue'
import HtmlSvg from './svgs/HtmlSvg.vue'
import CssSvg from './svgs/CssScg.vue'
import VueSvg from './svgs/VueSvg.vue'
import JspSvg from './svgs/JspSvg.vue'
import DelphiSvg from './svgs/Delphi.vue'
</script>