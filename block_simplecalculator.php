<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle. If not, see https://www.gnu.org/licenses/.

/**
 * Main block class for the Simple Calculator.
 *
 * This file defines the Moodle block that displays the calculator.
 *
 * @package    block_simplecalculator
 * @copyright  2025 Ralf Hagemeister
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

class block_simplecalculator extends block_base {
    public function init() {
        $this->title = get_string('pluginname', 'block_simplecalculator');
    }

    public function get_content() {
        global $PAGE;
        if ($this->content !== null) {
            return $this->content;
        }
        $this->content = new stdClass();
        $this->content->text = $this->content_html();
        $this->content->footer = '';
        return $this->content;
    }

    private function content_html() {
        global $OUTPUT, $PAGE;
        $PAGE->requires->css('/blocks/simplecalculator/styles.css');
        return $OUTPUT->render_from_template('block_simplecalculator/calculator', []);
    }

    public function applicable_formats() {
        return ['all' => true];
    }
}
