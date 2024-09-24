<template>
    <div id="login-form" v-if="visible">
        <form>
            <label for="username">Användarnamn:</label>
            <input id="username" type="text" v-model="username">
            <label for="password">Lösenord:</label>
            <input id="password" type="password" v-model="password">
            <button type="submit" @click.prevent="process">Logga in</button>
        </form>
    </div>
    <div id="logout" v-else v-cloak><p @click="process">Logga ut</p></div>
</template>

<script>
export default {
    data() {
        return {
            visible: true,
            username: '',
            password: ''
        }
    }, methods: {
        process: function (event) {
            this.visible = !this.visible 
        }
    }
}
</script>

<style>
[v-cloak] { display: none; }
</style>