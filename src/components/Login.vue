<template>
    <div class="login">
        <div v-if="!isLoggedIn">
            <form>
                <label for="username">Username:</label>
                <input id="username" type="text" v-model="username">
                <label for="password">Password:</label>
                <input id="password" type="password" v-model="password">
                <button type="submit" class="login-btn" @click.once.prevent="processCredentials">Login</button>
            </form>
        </div>
        <button v-else type="submit" class="login-btn" v-cloak @click.once.prevent="processCredentials">Logout</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            isLoggedIn: false,
            username: '',
            password: ''
        }
    }, methods: {
        processCredentials() {
            if (this.isLoggedIn === true) {
                console.log("Clearing credentials");
                this.username = '';
                this.password = ''
            }
            this.isLoggedIn = !this.isLoggedIn;
            this.$emit('toggleLoginStatus', this.username, this.isLoggedIn)
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