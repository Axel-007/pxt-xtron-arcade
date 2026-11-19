/**
 * Xtron compatibility layer.
 * This package targets classic MakeCode Arcade, not the original XMaker target.
 * Only portable Arcade APIs are called here. No fake hardware shims are provided.
 */
//% color="#247C8E" weight=100 icon="\uf108" block="Xtron Compat"
namespace xtron {
    export enum FeatureStatus {
        //% block="available in classic Arcade"
        Available = 0,
        //% block="requires Xtron hardware / XMaker target"
        HardwareRequired = 1,
        //% block="not implemented in this compatibility layer"
        NotImplemented = 2
    }

    /** Returns the compatibility layer version. */
    //% block="Xtron compatibility version"
    //% blockId=xtron_version
    export function version(): string {
        return "1.0.0-classic-arcade";
    }

    /** True because this extension is compiled for classic MakeCode Arcade. */
    //% block="running in classic MakeCode Arcade"
    //% blockId=xtron_is_classic_arcade
    export function isClassicArcade(): boolean {
        return true;
    }

    /** Hardware functions from the original XMaker target are not injected into classic Arcade. */
    //% block="Xtron board hardware available here"
    //% blockId=xtron_hardware_available
    export function hardwareAvailable(): boolean {
        return false;
    }

    /** Returns the documented status for an Xtron-only feature group. */
    //% block="status of Xtron hardware features"
    //% blockId=xtron_hardware_status
    export function hardwareStatus(): FeatureStatus {
        return FeatureStatus.HardwareRequired;
    }
}
