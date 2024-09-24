<template>
    <main class="linguagem-page" style="margin-bottom: 10px;">
        <div class="card">
            <div class="card-contend">
                <div class="card-header">
                    <div class="col s12 m10">
                        <a href="https://www.publica.inf.br/" target="_blank">
                            <img alt="Pública Tecnologia" src="/logo_publica.png" class="responsive-img center-block img-table-experiencia">
                        </a>
                        <span>
                            <a href="https://www.publica.inf.br/" target="_blank" class="span-card">Pública Tecnologia</a>
                        </span>
                    </div>
                </div>

                <div class="row text-left div-experiencia">
                    <div class="col-md-12">
                        <div class="col-md-12">
                            <label class="label-experiencia"></label>
                            <span class="span-card-cargo" style="margin-left: 1rem;">Programador de Sistemas (fev/2020 - Até o momento)</span>
                        </div>
                        <div class="col-md-12" style="border-left-style: groove;">
                            <div class="col-md-12" style="margin-left: 1.5rem;">
                                <p>
                                    Inicialmente, atuei na linguagem Delphi a qual fiquei pouco mais de um, atuando na manutenção e melhorias continuas no sistema de Tributação Municipal na plataforma Desktop, utilizando a linguagem Object Pascal na IDE Delphi 7. Realizava integração entre sistemas com Json e XML, implementação de relatórios dentro do sistema através da ferramenta Report Builder, criação de fórmulas de cálculos a quais são utilizadas para o lançamento de IPTU, ITBI, Alvará de Obras/ Habite-se entre outras, conforme lei municipal de cada cliente/município.
                                </p>
                                <p>
                                    Já na parte Web, com sistemas mais legados era utilizado a linguagem Java juntamente com JSP, eram feitas melhorias e implementações dos módulos dos sitemas Webs, tais como E-IPTU, Protocolo, NFS-e entre outros. Integração entre sistemas utilizando Json e XML. Integração com sistemas de terceiros tais como bancos de pagamentos. A qual na parte do front-end era utilizado JavaScript, HTML e CSS e servidores de aplicações tomcat e Jboss7.
                                </p>
                                <p>
                                    Seguidamente, tive a aportunidade de lançar um novo sistema em conjunto com o setor, sendo nosso "primeiro piloto" um case de sucesso no começo do ano de 2023. Onde trabalhamos durante mais de 3 meses para converter a base (banco de dados) do antigo sistema (cujo era em Delphi e PostgreSQL) para uma nova linguagem, um novo banco de dados e uma nova framework. Neste projeto, trabalhamos de formas isoladas o back-end e o front-end, sendo a linguagem Java (8+) para o back-end e o AngularJS para o front-end. Utilizando Spring Framework, Hibernate, JPA, Spring Security e APIs via REST para a comunicação entre os sistemas.
                                </p>
                                <p>
                                    Por fim, atuamente estou atuando no time de migração/implantação a qual é responsável pela conversão de bases de clientes para nossa estrutura. Utilizando diversos bancos de dados como FireBird, MySQL, Oracle, PostgreSQL entre outros para migração das informações, implementações e melhorias no processo de conversão/migração do sistema.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterTableVue text="Blumenau - Santa Catarina - Brasil - Híbrido"></FooterTableVue>
            </div>
        </div>
    </main>
</template>

<script setup>
import FooterTableVue from "../footer/FooterTable.vue";
</script>