import {calculateWallpaper} from "../lib.js";

test("It should calculate amount of rulons", () => {
    let result = calculateWallpaper(5,6, 2.85,1.06);
    expect(result).toBe(7);
});