<template>
    <footer class="">
       <!-- Footer Start-->
      <div class="footer-main">
        <div class="footer-area footer-padding">
            <div class="container">
                <div class="row row-grid align-items-center my-md">
                    <div class="col-lg-6">
                        <h3 class="text-primary font-weight-light mb-2">{{ $t('common:footer.title') }}</h3>
                        <!-- <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4> -->
                    </div>
                    <div class="col-lg-6 text-lg-center btn-wrapper">
                        <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                        class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Follow us">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"
                        class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Like us">
                            <i class="fa fa-facebook-square"></i>
                        </a>
                        <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
                        class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                        data-original-title="Follow us">
                            <i class="fa fa-dribbble"></i>
                        </a>
                        <!-- <a target="_blank" rel="noopener" href="https://github.com/creativetimofficial"
                        class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Star on Github">
                            <i class="fa fa-github"></i>
                        </a> -->
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-4 col-sm-8">
                         <div class="single-footer-caption mb-30">
                              <!-- logo -->
                             <div class="footer-logo">
                                 <a href="index.html"><img src="/img/massage/Alice_logotype_200.png" alt=""></a>
                             </div>
                             <div class="footer-tittle">
                                 <div class="footer-pera">
                                     <p class="info1">{{ $t('common:footer.intro') }}</p>
                                </div>
                             </div>
                         </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>{{ $t('common:footer.quick_links') }}</h4>
                                <ul>
                                    <li><a href="#">{{ $t('common:footer.about') }}</a></li>
                                    <li><a href="#">{{ $t('common:footer.feature') }}</a></li>
                                    <!-- <li><a href="#">Pricing</a></li> -->
                                    <!-- <li><a href="#">Download</a></li> -->
                                    <!-- <li><a href="#">Reviews</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-7">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>{{ $t('common:footer.support') }}</h4>
                                <ul>
                                    <!-- <li><a href="#">Report a bug</a></li> -->
                                    <li><a href="#">{{ $t('common:footer.privacy_policy') }}</a></li>
                                    <!-- <li><a href="#">Terms & Conditions</a></li> -->
                                    <li><a href="#">{{ $t('common:footer.sitemap') }}</a></li>
                                    <!-- <li><a href="#">FAQs</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-8">
                        <mail-chip></mail-chip>
                    </div>
                </div>
                <!-- Copy-Right -->
                <div class="row align-items-center">
                    <div class="col-xl-12 ">
                        <div class="footer-copy-right">
                           <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;{{year}} All rights reserved | This template is made with <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
       <!-- Footer End-->

   </footer>
</template>
// <script>
// import MailChip from "./components/MailChip";
// export default {
//   name: 'app-footer',
//   data() {
//      return {
//           year: Date.UTC.year,      
//         }
//     },
//   components: {
//     MailChip
//   },
// };
// </script>
<style lang="scss">

</style>
