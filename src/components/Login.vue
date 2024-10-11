<template>
    <div class="login">
        <div v-if="isVisible">
            <form>
                <label for="username">Användarnamn:</label>
                <input id="username" type="text" v-model="username">
                <label for="password">Lösenord:</label>
                <input id="password" type="password" v-model="password">
                <button type="submit" class="login-btn" @click.once.prevent="processCredentials">Logga in</button>
            </form>
        </div>
        <button v-else type="submit" class="login-btn" v-cloak @click.once.prevent="processCredentials">Logga ut
        </button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['username'],
    data() {
        return {
            isVisible: true,
            username: '',
            password: ''
        }
    }, methods: {
        processCredentials() {
            if (this.isVisible === false) {
                console.log("clearing");
                this.username = '';
                this.password = ''
            }
            this.isVisible = !this.isVisible;
            this.$emit('toggleLoginStatus', this.username)
        }
    }
}
</script>

<style scoped>
[v-cloak] {
    display: none;
}

button {
    color: white;
    margin-top: auto;
}

label {
    color: white;
    display: block;
}

.login {
    margin-top: auto;
    margin-left: auto;
}
</style>