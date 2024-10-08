<?php 
require_once 'includes/variables.php';
/*// HEADER */
$title = "Chrome extensions";
$active='chrome'; 
/*// LAYOUT */
require_once 'includes/header.php';
?>

<body>

    <?php require 'includes/nav.php'; ?>


    <div class="container-fluid">
        <div class="row">
            <?php require 'includes/sidebar.php'; ?>


            <main class="col-md-9 ms-sm col-lg-10 col-xl px-md-4">
                <?php   
                    $arr = $auth->getfile(1);
                    foreach ($arr as &$value) {                    
                ?>
                <div class="px-4 py-5 my-5 text-center">
                    <img class="d-block mx-auto mb-4" src="/assets/img/icon.png" alt="" width="72" height="72">
                    <h1 class="display-5 fw-bold text-primary">LIFT's Chrome extensions</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">The LIFT extension for your browser is easy to use to install. This extension made for the LIFT Creations.</p>
                        <div class="d-grid gap-2 d-inline-flex flex-column">
                            <div>
                            <a href="download?filename=<?=md5($value['upload_version'])?>&f=<?=$value['upload_fname']?>" class="btn btn-primary btn-lg px-4">Download</a>
                            </div>
                            <p class="my-1 text-muted small">v<?=$value['upload_version']?></p>
                        </div>
                    </div>
                </div>
                            <?php
                        }
                    ?>

                <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                        <div class="shadow p-4 p-xxl-5 mb-5 bg-body rounded border">
                            <h5>How to install</h5>
                            <p>To install extension manually you need to unzip the extension first. Follow the steps to load the unpacked extension.</p>
                            <p>
                                <span class="badge bg-info">Step 1</span> On the Address bar go to this URL <code>chrome://extensions</code>
                            </p>
                            <p>
                                <span class="badge bg-info">Step 2</span> Now, Enable developer mode
                            </p>
                            <p>
                                <span class="badge bg-info">Step 3</span> Click on Load Unpacked and select your Unzip folder.
                            </p>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    </div>

    <?php require 'includes/footer.php'; ?>

</body>

</html>