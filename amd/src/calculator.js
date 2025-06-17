/*
 * This file is part of Moodle - https://moodle.org/
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle. If not, see <https://www.gnu.org/licenses/>.
 *
 * @copyright 2025 Ralf Hagemeister
 * @license   https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Calculator logic using modern JavaScript (ES6-style).
 *
 * @package
 * @copyright  2025 Ralf Hagemeister
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define([], () => {
    
const calculateExpression = (expr) => {
    // Allow only safe math characters
    if (!/^[\d+\-*/()., ]+$/.test(expr)) throw "Invalid characters";
    return Function('"use strict"; return (' + expr.replace(',', '.') + ')')();
};


return {
        init: () => {
            let current = '';
            const display = document.getElementById('display');
            const buttons = document.querySelectorAll('.calculator-buttons button');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const val = button.dataset.value;
                    if (val === 'C') {
                        current = '';
                    } else if (val === '=') {
                        try {
                            current = String(Function('"use strict";return (' + current.replace(',', '.') + ')')());
                        } catch {
                            current = 'Error';
                        }
                    } else {
                        current += val;
                    }
                    display.textContent = current || '0';
                });
            });
        }
    };
});
