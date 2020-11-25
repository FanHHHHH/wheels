<template>
<div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'GuluRow',
    props: {
        gutter: {
            type: [Number, String]
        }
    }
}
</script>

<style scoped lang="scss">
.row {
    display: flex;
}
</style>
