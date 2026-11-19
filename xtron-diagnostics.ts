/** Runtime diagnostics for the compatibility layer. */
//% color="#666666" weight=60 icon="\uf05a" block="Xtron Diagnostics"
namespace xtronDiagnostics {
    /** Returns a compact diagnostic report as text. */
    //% block="Xtron compatibility diagnostic report"
    //% blockId=xtron_diagnostic_report
    export function report(): string {
        return "Xtron Compat " + xtron.version()
            + "\nTarget: classic MakeCode Arcade"
            + "\nPortable sensors: Arcade input API"
            + "\nAudio: Arcade music API"
            + "\nGraphics: Arcade Image API"
            + "\nXtron board hardware: unavailable in this target"
            + "\nRTC / Wi-Fi / ESP32 / speech / MQTT / UART pins / deep sleep: require original XMaker target and hardware";
    }

    /** Show the report on the game screen. */
    //% block="show Xtron diagnostic report"
    //% blockId=xtron_show_diagnostic_report
    export function showReport(): void {
        game.showLongText(report(), DialogLayout.Full);
    }
}
