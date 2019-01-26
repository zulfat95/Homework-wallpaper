export function calculateWallpaper(long, width, height, wallpaperWidth) {
    let rulon;
    let wallpaperLong = 10;
    let perimetr = (parseInt(long) + parseInt(width)) * 2;
    let polotno = perimetr / wallpaperWidth;
    Math.round(polotno);
    let fullPolosa = wallpaperLong / height;
    Math.round(fullPolosa);
    rulon = perimetr / fullPolosa;

    return Math.ceil(rulon);
}