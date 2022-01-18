<script>

import axios from 'axios';


const API_KEY = "31e5eb9290c792961bc23531c8cc8cf0";

export default {


  data() {
    return {
      search : '',
      movie: [],
      errored: false,
      loading: true
    }
  },

  mounted() {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day?api_key="+API_KEY)
      .then(response => (
        this.movie = response.data.results))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() =>
      this.loading = false)
  }
  
}

</script>

<template>

  <input type="text" v-model="search">
    <h1>Search: {{search}}</h1>


    <section id="feature">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-8">
              <div class="row">
                <div class="col-xl-4" v-for="item in movie" :key="item">
                  <div class="card mt-2">
                    <div class="card-header">
                        <h6>{{item.original_title}}</h6>
                    </div>
                    <div class="card-body">
                      {{item.overview}}

                      {{item.vote_count}}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xl-4">
              <div class="card">
                <h1>Spiderman Angers</h1>
                <div class="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi non ea dolor, amet, tempora aliquam facere voluptatibus iusto odit corporis doloremque! Dolorum molestias qui fugit recusandae natus vitae omnis dolor.
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>