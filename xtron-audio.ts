/** Audio helpers backed by the standard Arcade music engine. */
//% color="#8057A5" weight=75 icon="\uf001" block="Xtron Audio"
namespace xtronAudio {
    //% block="play tone %frequency Hz for %duration ms"
    //% blockId=xtron_play_tone
    //% frequency.min=20 frequency.max=12000 frequency.defl=440
    //% duration.min=1 duration.max=10000 duration.defl=250
    export function playTone(frequency: number, duration: number): void {
        music.playTone(frequency, duration);
    }

    //% block="set audio volume %volume"
    //% blockId=xtron_set_volume
    //% volume.min=0 volume.max=255 volume.defl=128
    export function setVolume(volume: number): void {
        music.setVolume(Math.max(0, Math.min(255, volume)));
    }

    //% block="stop all sounds"
    //% blockId=xtron_stop_audio
    export function stopAll(): void { music.stopAllSounds(); }
}
