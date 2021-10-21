<template>
  <div>
    <welcome/>
    <pastor/>
    <ministries/>
    <sermons/>
    <contact/>
    <donations/>
    <footerMenu/>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
import Pastor from '../components/Pastor'
import Ministries from '../components/Ministries'
import Sermons from '../components/Sermons'
import Contact from '../components/Contact'
import Donations from '../components/Donations'
import FooterMenu from '../components/FooterMenu'

export default {
  name: 'Home',
  components: {
    FooterMenu,
    Donations,
    Contact,
    Sermons,
    Ministries,
    Pastor,
    Welcome,
  },
}
</script>
