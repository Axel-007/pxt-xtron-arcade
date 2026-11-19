# XMaker Simulator Web App – prototype 0.1

This folder is a static GitHub Pages launcher for the recovered XMaker simulator.

## Install in the existing repository

Copy the folder contents into:

`xmaker-simulator/web-app/`

Do not replace `pxt.json` or any existing `xtron-*.ts` files.

## GitHub Pages URL

After committing, enable GitHub Pages for the repository using the `main` branch and `/ (root)` as the publishing source. The app will be available at:

`https://axel-007.github.io/pxt-xtron-arcade/xmaker-simulator/web-app/`

The iframe loads the existing `../simulator.html` and its `../assets/` dependencies using same-origin relative paths.

## Important technical limitation

This is a web launcher, not yet an Arcade runtime adapter. The recovered `sim.js` defines `pxsim.Board extends pxsim.BaseBoard`, initializes `pxsim.runtime.board`, and renders through `ScreenState` and `pxsim.visuals.GamePlayer`. Its message listener maps Xtron buttons to `pxsim.Key` values. It therefore expects a PXT host/runtime to start a program and instantiate the board.

A MakeCode Arcade game cannot be started by pasting its compiled JavaScript into this page. The next integration task is to supply a compatible PXT simulator host and adapt the Xtron board/rendering/input layer to Arcade's runtime contracts. Do not claim Arcade compatibility until a real Arcade game has been compiled and run through that bridge.

## Files

- `index.html`: web app shell; embeds the original simulator page.
- `styles.css`: shell styling only; does not alter the recovered simulator artwork.
- `app.js`: reload control and load status only; no `eval`, `new Function`, or CSP bypass.
