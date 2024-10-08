<template>
    <div class="login">
        <div id="loginForm" v-if="visible">
            <form>
                <label for="username">Användarnamn:</label>
                <input id="username" type="text" v-model="username">
                <label for="password">Lösenord:</label>
                <input id="password" type="password" v-model="password">
                <button type="submit" @click.once.prevent="processCredentials">Logga in</button>
            </form>
        </div>
        <button type="submit" id="logout" v-else v-cloak @click.once.prevent="processCredentials">Logga ut</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['username'],
    data() {
        return {
            visible: true,
            username: '',
            password: ''
        }
    }, methods: {
        processCredentials(event) {
            if (this.visible === false) {
                console.log("clearing");
                this.username = '';
                this.password = ''
            }
            this.visible = !this.visible;
            this.$emit('updateLoginStatus', this.username)
        }
    }
}
</script>

<style>
[v-cloak] {
    display: none;
}

button {
    display: block;
    margin: 2px;
    position: relative;
    top: 80%;}

label {
    display: block;
    margin: 2px;
}

.login {
    grid-area: login;
}

</style>
