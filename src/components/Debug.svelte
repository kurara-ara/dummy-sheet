<script lang="ts">
	// Import stores
	import { sheet } from '../stores'
	import { theme } from '../stores'
</script>

<hr style="border:0.05rem dashed rgb({$theme.accent});"/>
<div>
  <h1 style="color:rgba({$theme.accent},1);"> DEBUG </h1>
  <pre style="color:rgba({$theme.primary}, 1);">
    THEME STORE
    {JSON.stringify($theme, null, 2)}
  </pre>
  <pre style="color:rgba({$theme.primary}, 1);">
    SHEET STORE
    {JSON.stringify($sheet, null, 2)}
  </pre>
</div>

<div></div>
<style lang="scss">
	div {
		width: 75%;
		margin: 0 auto;
	}
	pre {
		border: 1px solid #707070;
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>