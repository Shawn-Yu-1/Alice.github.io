<template>
    <section class="best-features-area section-padd4">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-xl-8 col-lg-10">
                        <!-- Section Tittle -->
                        <div class="row">
                            <div class="col-lg-10 col-md-10">
                                <div class="section-tittle">
                                    <h2 class="heading">{{ $t('home:feature.title') }}</h2>
                                </div>
                            </div>
                        </div>
                        <!-- Section caption -->
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="single-features mb-70">
                                    <icon name="ni ni-spaceship" class="icon feature-icon-shape bg-gradient-primary text-white" size="lg" type="primary" shadow
                                        rounded></icon>
                                    <div class="features-caption">
                                        <h3>{{ $t('home:feature.class1') }}</h3>
                                        <p>{{ $t('home:feature.content1') }}</p>
                                    </div>
                                </div>
                            </div>
                             <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="single-features mb-70">
                                    <icon name="ni ni-spaceship" class="icon feature-icon-shape bg-gradient-warning text-white" size="lg" type="warning" shadow
                                        rounded></icon>
                                    
                                    <div class="features-caption">
                                        <h3>{{ $t('home:feature.class2') }}</h3>
                                        <p>{{ $t('home:feature.content2') }}</p>
                                    </div>
                                </div>
                            </div> 
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="single-features mb-70">
                                    <icon name="ni ni-spaceship" class="icon feature-icon-shape bg-gradient-danger text-white" size="lg" type="danger" shadow
                                        rounded></icon>
                                    <div class="features-caption">
                                        <h3>{{ $t('home:feature.class3') }}</h3>
                                        <p>{{ $t('home:feature.content3') }}</p>
                                    </div>
                                </div>
                            </div>
                             <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="single-features mb-70">
                                    <icon name="ni ni-spaceship" class="icon feature-icon-shape bg-gradient-success text-white" size="lg" type="success" shadow
                                        rounded></icon>
                                    <div class="features-caption">
                                        <h3>{{ $t('home:feature.class4') }}</h3>
                                        <p>{{ $t('home:feature.content4') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Shpe -->
            
                <div class="features-shpae d-none d-lg-block f-left">
                    <img src="/img/massage/serve.jpg" alt="" style="width: 800px;" class="img-fluid floating">
                </div>
        </section>
</template>
<script>
export default {};
</script>
<style>
</style>
