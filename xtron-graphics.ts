/** Small image helpers using classic Arcade's Image API. */
//% color="#3478B8" weight=70 icon="\uf03e" block="Xtron Graphics"
namespace xtronGraphics {
    //% block="create image width %width height %height"
    //% blockId=xtron_create_image
    //% width.min=1 width.max=160 width.defl=16
    //% height.min=1 height.max=120 height.defl=16
    export function createImage(width: number, height: number): Image {
        return image.create(Math.max(1, Math.min(160, width)), Math.max(1, Math.min(120, height)));
    }

    //% block="copy image %source"
    //% blockId=xtron_clone_image
    export function cloneImage(source: Image): Image { return source.clone(); }

    //% block="fill image %target with color %color"
    //% blockId=xtron_fill_image
    export function fillImage(target: Image, color: number): void { target.fill(color); }

    //% block="set pixel in %target at x %x y %y to color %color"
    //% blockId=xtron_set_pixel
    export function setPixel(target: Image, x: number, y: number, color: number): void {
        if (x >= 0 && y >= 0 && x < target.width && y < target.height) target.setPixel(x, y, color);
    }

    //% block="get pixel in %target at x %x y %y"
    //% blockId=xtron_get_pixel
    export function getPixel(target: Image, x: number, y: number): number {
        if (x < 0 || y < 0 || x >= target.width || y >= target.height) return 0;
        return target.getPixel(x, y);
    }
}
