<template>
    <main class="bancodados-page" style="margin-bottom: 10px;">
        <div class="card">
            <div class="card-content">
                <div class="card-header">
                    <span class="span-card">Banco de Dados</span>
                </div>

                <div class="row text-center">
                    <div class="col-md-3">
                        <PostgreSQLSvg/>
                    </div>
                    <div class="col-md-3">
                        <MysqlSvg/>
                    </div>
                    <div class="col-md-3">
                        <OracleSvg/>
                    </div>
                    <div class="col-md-3">
                        <FirebirdSvg/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import PostgreSQLSvg from './svgs/PostgresqlSvg.vue'
import MysqlSvg from './svgs/MysqlSvg.vue'
import OracleSvg from './svgs/OracleSvg.vue'
import FirebirdSvg from './svgs/FirebirdSvg.vue'
</script>