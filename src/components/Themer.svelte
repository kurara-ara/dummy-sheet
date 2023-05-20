<script lang="ts">
    // Import stores
    import { theme } from '../stores'
</script>
<section style="--primary: {$theme.primary}; --accent:{$theme.accent}; --secondary:{$theme.secondary}; --shadow:{$theme.textShadow}">
    <slot/>
</section>