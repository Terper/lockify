<template>
    <div class="login">
        <div v-if="!isLoggedIn">
            <form>
                <label for="username">Username:</label>
                <input id="username" type="text" maxlength=10 v-model="username" required>
                <label for="password">Password:</label>
                <input id="password" type="password" v-model="password"><br>
                <button type="submit" class="login-btn" @click.stop="processCredentials">Login</button>
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
            if (this.username) {
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
}
</script>

<style scoped>
[v-cloak] {
    display: none;
}

input {
    margin: 0.1rem;
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