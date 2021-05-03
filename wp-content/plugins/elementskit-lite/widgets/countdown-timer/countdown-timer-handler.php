<?php
namespace Elementor;

class ElementsKit_Widget_Countdown_Timer_Handler extends \ElementsKit_Lite\Core\Handler_Widget{

    static function get_name() {
        return 'elementskit-countdown-timer';
    }

    static function get_title() {
        return esc_html__( 'Countdown Timer', 'elementskit-lite' );
    }

    static function get_icon() {
        return 'ekit  ekit-widget-icon ekit-countdown-timer';
    }

    static function get_categories() {
        return [ 'elementskit-lite' ];
    }

    static function get_dir() {
        return \ElementsKit_Lite::widget_dir() . 'countdown-timer/';
    }

    static function get_url() {
        return \ElementsKit_Lite::widget_url() . 'countdown-timer/';
    }
}