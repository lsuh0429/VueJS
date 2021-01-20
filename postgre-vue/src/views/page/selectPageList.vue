<template>
    <div>
        <updatePage />
        <pageList />
    </div>
</template>

<script>
import pageList from '@/components/page/pageList'
import updatePage from '@/components/page/updatePage'

export default {
    components: {
        pageList,
        updatePage
    }
}
</script>