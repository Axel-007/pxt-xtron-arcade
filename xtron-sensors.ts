/** Pure sensor-data helpers. Classic Arcade does not expose the Xtron board's sensor drivers. */
//% color="#398C63" weight=90 icon="\uf2c9" block="Xtron Sensor Math"
namespace xtronSensors {
    /** Calculate vector magnitude from three values supplied by a compatible sensor source. */
    //% block="magnitude from X %x Y %y Z %z"
    //% blockId=xtron_accel_magnitude
    export function accelerationMagnitude(x: number, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }

    /** Convert milli-g to metres per second squared. */
    //% block="convert %milliG milli-g to metres per second squared"
    //% blockId=xtron_millig_to_ms2
    export function milliGToMetersPerSecondSquared(milliG: number): number {
        return milliG * 9.80665 / 1000;
    }

    /** The Xtron accelerometer requires the original XMaker target or a separately implemented hardware bridge. */
    //% block="Xtron accelerometer readable in this target"
    //% blockId=xtron_accelerometer_available
    export function accelerometerAvailable(): boolean { return false; }

    /** The Xtron light and temperature sensors require their original target drivers. */
    //% block="Xtron light and temperature sensors readable in this target"
    //% blockId=xtron_extra_sensors_available
    export function onboardSensorsAvailable(): boolean { return false; }
}
