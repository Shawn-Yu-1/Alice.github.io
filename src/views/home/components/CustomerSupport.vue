<template>
    <section class="section">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'/img/massage/machine_2.jpg'" class="card-img-top">
                            <!-- <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                                    the sea-ice then thaws every summer, and that process will continue whatever
                                    happens.</p>
                            </blockquote> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>{{ $t('home:customer.title') }}</h3>
                            <p class="lead">{{ $t('home:customer.lead') }}</p>
                            <p>{{ $t('home:customer.content1') }}</p>
                            <p>{{ $t('home:customer.content2') }}</p>
                            <!-- <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful
                                websites</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {};
</script>
<style>
</style>
