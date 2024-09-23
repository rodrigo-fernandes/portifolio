<template>
    <div class="card-footer">
        <div class="col s12 m10">
            <span class="span-card-cargo-localicade">{{text}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: ["value", "text", "Object"],
    model: {
      prop: "value",
      event: "update"
    }
  };
</script>