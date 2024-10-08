<?php
require_once "Auth.php";
require_once "Util.php";

$auth = new Auth();
$db_handle = new DBController();
$util = new Util();

// Get Current date, time
$current_time = time();
$current_date = date("Y-m-d H:i:s", $current_time);

// Set Cookie expiration for 1 month
$cookie_expiration_time = $current_time + (30 * 24 * 60 * 60);  // for 1 month

$isLoggedIn = false;
$isMemberTypye = 0;

// Check if loggedin session and redirect if session exists
if (!empty($_SESSION["member_id"])) {
    $isLoggedIn = true;
}
// Check if loggedin session exists
else if (!empty($_COOKIE["member_login"]) && !empty($_COOKIE["random_password"]) && !empty($_COOKIE["random_selector"])) {
    // Initiate auth token verification diirective to false
    $isPasswordVerified = false;
    $isSelectorVerified = false;
    $isExpiryDateVerified = false;

    // Get token for username
    $userToken = $auth->getTokenByUsername($_COOKIE["member_login"], 0);

    // Validate random password cookie with database
    if (password_verify($_COOKIE["random_password"], $userToken[0]["auth_password_hash"])) {
        $isPasswordVerified = true;
    }

    // Validate random selector cookie with database
    if (password_verify($_COOKIE["random_selector"], $userToken[0]["auth_selector_hash"])) {
        $isSelectorVerified = true;
    }

    // check cookie expiration by date
    if ($userToken[0]["auth_expiry_date"] >= $current_date) {
        $isExpiryDareVerified = true;
    }

    // Redirect if all cookie based validation retuens true
    // Else, mark the token as expired and clear cookies
    if (!empty($userToken[0]["auth_id"]) && $isPasswordVerified && $isSelectorVerified && $isExpiryDareVerified) {
        $isLoggedIn = true;
        // echo $auth->getMemberByUsername($_COOKIE["member_login"])[0]['member_id'];
        $_SESSION["member_id"] = $auth->getMemberByUsername($_COOKIE["member_login"])[0]['member_id'];
        $_SESSION["member_type"] = $auth->getMemberByUsername($_COOKIE["member_login"])[0]['member_type'];

    } else {
        if (!empty($userToken[0]["auth_id"])) {
            $auth->markAsExpired($userToken[0]["auth_id"]);
        }
        // clear cookies
        // $util->clearAuthCookie();
    }
}

if ($isLoggedIn) {
	$util->redirect("/");
}