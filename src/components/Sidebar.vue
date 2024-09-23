<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="loogo">
        <img src="../assets/logo.svg" alt="Vue"/>
        <!-- <img src="/public/foto_perfil_portifolio.png" alt="Foto Rodrigo Fernandes"/> -->
    </div>
    
    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
        <router-link class="button" to="/">
            <span class="material-icons">person</span>
            <span class="text">Home</span>
        </router-link>

        <router-link class="button" to="/about">
            <span class="material-icons">insert_chart</span>
            <span class="text">Habilidades</span>
        </router-link>

        <router-link class="button" to="/experiencia">
            <span class="material-icons">trending_up</span>
            <span class="text">Experiência</span>
        </router-link>

        
        <router-link class="button" to="/projeto">
            <span class="material-icons">code</span>
            <span class="text">Projetos</span>
        </router-link>

        <router-link class="button" to="/educacao">
            <span class="material-icons">school</span>
            <span class="text">Formação Acadêmica</span>
        </router-link>

        <router-link class="button" to="/contact">
            <span class="material-icons">email</span>
            <span class="text">Contato</span>
        </router-link>
    </div>

  </aside>
</template>

<script setup>
import {ref} from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>

aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .flex {
        flex: 1 1 0;
    }

    .logo {
        margin-bottom: 1rem;
        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
            }

            &:hover {
               .material-icons {
                color: var(--primary);
                transform: translate(0.5rem);
               } 
            }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-icons, .text {
                    color: var(--primary);

                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }

        }
    }

    @media (max-width: 768px) {
        position: relative;
        z-index: 99;
    }
}

</style>