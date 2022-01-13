<script>
export default {

  data() {
    return {
      search : ''
    }
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
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa ut similique commodi officiis assumenda, omnis a dicta, possimus eligendi ipsum ratione molestias dolorum, porro ipsa minima? Quia, odit ratione?
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa ut similique commodi officiis assumenda, omnis a dicta, possimus eligendi ipsum ratione molestias dolorum, porro ipsa minima? Quia, odit ratione?
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa ut similique commodi officiis assumenda, omnis a dicta, possimus eligendi ipsum ratione molestias dolorum, porro ipsa minima? Quia, odit ratione?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card">
                <h1>Spiderman Anger</h1>
                <div class="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi non ea dolor, amet, tempora aliquam facere voluptatibus iusto odit corporis doloremque! Dolorum molestias qui fugit recusandae natus vitae omnis dolor.
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>