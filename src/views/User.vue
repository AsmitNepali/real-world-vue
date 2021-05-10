<template>
    <div class="user">
        <h1>This is {{ username }}'s file.</h1>
    </div>
</template>

<script>
export default {
    props: ["username"],
}
</script>