<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://liftcreations.com
 * @since             1.0.0
 * @package           LIFT_WP_CP
 *
 * @wordpress-plugin
 * Plugin Name:       @LIFT Creations - LIFT Custom Post (___replace___)
 * Plugin URI:        https://liftcreations.com
 * Description:       This plugins add new Custom Post feature into Wordpress site.
 * Version:           null
 * Author:            Nguyen Pham
 * Author URI:        https://baonguyenyam.github.io/cv
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       bn-wp-custompost
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require plugin_dir_path( __FILE__ ) . 'core/posttype.php';


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-bn-wp-activator.php
 */
function activate_bn_wp_cp() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-bn-wp-activator.php';
	LIFT_WP_CP_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-bn-wp-deactivator.php
 */
function deactivate_bn_wp_cp() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-bn-wp-deactivator.php';
	LIFT_WP_CP_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_bn_wp_cp' );
register_deactivation_hook( __FILE__, 'deactivate_bn_wp_cp' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-bn-wp.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_bn_wp_cp() {

	$plugin = new LIFT_WP_CP();
	$plugin->run();

}
run_bn_wp_cp();
