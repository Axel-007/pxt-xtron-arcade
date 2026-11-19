/** Portable controller helpers. */
//% color="#A56A32" weight=85 icon="\uf11b" block="Xtron Controls"
namespace xtronControls {
    //% block="A button is pressed"
    //% blockId=xtron_button_a
    export function aPressed(): boolean { return controller.A.isPressed(); }

    //% block="B button is pressed"
    //% blockId=xtron_button_b
    export function bPressed(): boolean { return controller.B.isPressed(); }


    //% block="current game uptime in milliseconds"
    //% blockId=xtron_uptime
    export function uptime(): number { return control.millis(); }
}
