<template>
    <div class="categoryslider">
        <ul>
            <li>熱銷</li>
            <li>新品</li>
            <li>秋冬新款</li>
            <li>耳環</li>
            <li>戒指</li>
            <li>項鍊</li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.categoryslider{
    display: block;
    position: relative;
    padding-top:5vw;
    li{
        padding: 1.5vw 0;
        margin: 0 5vw;
    }
    li:hover{
        border-bottom:1px var(--border-color) solid;
    }
}
</style>
