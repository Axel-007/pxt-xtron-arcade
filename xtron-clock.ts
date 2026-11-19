/** Stopwatch and duration formatting. A real calendar clock requires the Xtron RTC driver. */
//% color="#20A6A0" weight=80 icon="\uf017" block="Xtron Clock"
namespace xtronClock {
    let startedAt = 0;
    let running = false;
    let accumulated = 0;

    /** Start or restart the software stopwatch. */
    //% block="start stopwatch"
    //% blockId=xtron_stopwatch_start
    export function start(): void {
        accumulated = 0;
        startedAt = control.millis();
        running = true;
    }

    /** Pause the stopwatch. */
    //% block="pause stopwatch"
    //% blockId=xtron_stopwatch_pause
    export function pause(): void {
        if (running) {
            accumulated += control.millis() - startedAt;
            running = false;
        }
    }

    /** Resume a paused stopwatch. */
    //% block="resume stopwatch"
    //% blockId=xtron_stopwatch_resume
    export function resume(): void {
        if (!running) {
            startedAt = control.millis();
            running = true;
        }
    }

    /** Reset and stop the stopwatch. */
    //% block="reset stopwatch"
    //% blockId=xtron_stopwatch_reset
    export function reset(): void {
        accumulated = 0;
        startedAt = control.millis();
        running = false;
    }

    /** Elapsed stopwatch time in milliseconds. */
    //% block="stopwatch elapsed milliseconds"
    //% blockId=xtron_stopwatch_elapsed
    export function elapsedMilliseconds(): number {
        return accumulated + (running ? control.millis() - startedAt : 0);
    }

    /** The original board's calendar RTC is not exposed by classic Arcade. */
    //% block="Xtron calendar RTC available"
    //% blockId=xtron_rtc_available
    export function rtcAvailable(): boolean { return false; }

    /** Format elapsed time as HH:MM:SS. */
    //% block="format milliseconds %milliseconds as HH:MM:SS"
    //% blockId=xtron_format_duration
    export function formatDuration(milliseconds: number): string {
        let total = Math.max(0, Math.floor(milliseconds / 1000));
        const hours = Math.floor(total / 3600);
        total %= 3600;
        const minutes = Math.floor(total / 60);
        const seconds = total % 60;
        return twoDigits(hours) + ":" + twoDigits(minutes) + ":" + twoDigits(seconds);
    }

    function twoDigits(value: number): string {
        return value < 10 ? "0" + value : "" + value;
    }
}
