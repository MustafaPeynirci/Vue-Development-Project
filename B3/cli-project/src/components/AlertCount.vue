<template>
     <div class="alert alert-success">
        hello
        <button @click="count++" class="btn btn-sm btn-primary">{{count}} click</button>    
    </div>
</template>

<script>
    export default {
        data(){
            console.log("data girdi");
            return {
                count: 0,
            }
        }
    }
</script>