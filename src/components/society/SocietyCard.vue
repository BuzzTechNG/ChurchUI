<template>
  <router-link to="/society/12" style="animation-duration:1000ms" class="col row q-py-md society-card-list">
      <q-list bordere class="rounded-borders" style="width:100%">
      <q-item-label header>Google Inbox style</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="account_tree" color="black" size="28px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">St. Michaels</span>
            <span class="text-grey-8"> - Male society</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @rstoenescu in #3: > Generic type parameter for props
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">View society</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      
    </q-list>
  </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>

.society-card-list{
width: 100%;
margin:0 auto;   
max-width: 900px;
color:black;
/* font-family: 'Maven', cursive; */
font-size: 17px;
}
@media screen and (max-width: 400px) {
    .society-card-list{
        font-size: 14px;
    }
}
</style>