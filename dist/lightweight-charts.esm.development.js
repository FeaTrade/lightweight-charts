/*!
 * @license
 * TradingView Lightweight Charts v4.0.0-dev+202206071405
 * Copyright (c) 2022 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
import { bindToDevicePixelRatio } from 'fancy-canvas/coordinate-space';

/**
 * Represents the possible line types.
 */
var LineType;
(function (LineType) {
    /**
     * A line.
     */
    LineType[LineType["Simple"] = 0] = "Simple";
    /**
     * A stepped line.
     */
    LineType[LineType["WithSteps"] = 1] = "WithSteps";
    /**
     * A curved line.
     */
    LineType[LineType["Curved"] = 2] = "Curved";
})(LineType || (LineType = {}));
/**
 * Represents the possible line styles.
 */
var LineStyle;
(function (LineStyle) {
    /**
     * A solid line.
     */
    LineStyle[LineStyle["Solid"] = 0] = "Solid";
    /**
     * A dotted line.
     */
    LineStyle[LineStyle["Dotted"] = 1] = "Dotted";
    /**
     * A dashed line.
     */
    LineStyle[LineStyle["Dashed"] = 2] = "Dashed";
    /**
     * A dashed line with bigger dashes.
     */
    LineStyle[LineStyle["LargeDashed"] = 3] = "LargeDashed";
    /**
     * A dottled line with more space between dots.
     */
    LineStyle[LineStyle["SparseDotted"] = 4] = "SparseDotted";
})(LineStyle || (LineStyle = {}));
function setLineStyle(ctx, style) {
    const dashPatterns = {
        [0 /* Solid */]: [],
        [1 /* Dotted */]: [ctx.lineWidth, ctx.lineWidth],
        [2 /* Dashed */]: [2 * ctx.lineWidth, 2 * ctx.lineWidth],
        [3 /* LargeDashed */]: [6 * ctx.lineWidth, 6 * ctx.lineWidth],
        [4 /* SparseDotted */]: [ctx.lineWidth, 4 * ctx.lineWidth],
    };
    const dashPattern = dashPatterns[style];
    ctx.setLineDash(dashPattern);
}
function drawHorizontalLine(ctx, y, left, right) {
    ctx.beginPath();
    const correction = (ctx.lineWidth % 2) ? 0.5 : 0;
    ctx.moveTo(left, y + correction);
    ctx.lineTo(right, y + correction);
    ctx.stroke();
}
function drawVerticalLine(ctx, x, top, bottom) {
    ctx.beginPath();
    const correction = (ctx.lineWidth % 2) ? 0.5 : 0;
    ctx.moveTo(x + correction, top);
    ctx.lineTo(x + correction, bottom);
    ctx.stroke();
}
function strokeInPixel(ctx, drawFunction) {
    ctx.save();
    if (ctx.lineWidth % 2) {
        ctx.translate(0.5, 0.5);
    }
    drawFunction();
    ctx.restore();
}

/**
 * Checks an assertion. Throws if the assertion is failed.
 *
 * @param condition - Result of the assertion evaluation
 * @param message - Text to include in the exception message
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error('Assertion failed' + (message ? ': ' + message : ''));
    }
}
function ensureDefined(value) {
    if (value === undefined) {
        throw new Error('Value is undefined');
    }
    return value;
}
function ensureNotNull(value) {
    if (value === null) {
        throw new Error('Value is null');
    }
    return value;
}
function ensure(value) {
    return ensureNotNull(ensureDefined(value));
}
/**
 * Compile time check for never
 */
function ensureNever(value) { }

/**
 * Note this object should be explicitly marked as public so that dts-bundle-generator does not mangle the property names.
 *
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
const namedColorRgbHexStrings = {
    // The order of properties in this Record is not important for the internal logic.
    // It's just GZIPped better when props follows this order.
    // Please add new colors to the end of the record.
    khaki: '#f0e68c',
    azure: '#f0ffff',
    aliceblue: '#f0f8ff',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gainsboro: '#dcdcdc',
    gray: '#808080',
    green: '#008000',
    honeydew: '#f0fff0',
    floralwhite: '#fffaf0',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lemonchiffon: '#fffacd',
    hotpink: '#ff69b4',
    lightyellow: '#ffffe0',
    greenyellow: '#adff2f',
    lightgoldenrodyellow: '#fafad2',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    lightcyan: '#e0ffff',
    magenta: '#f0f',
    maroon: '#800000',
    olive: '#808000',
    orange: '#ffa500',
    oldlace: '#fdf5e6',
    mediumblue: '#0000cd',
    transparent: '#0000',
    lime: '#0f0',
    lightpink: '#ffb6c1',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    midnightblue: '#191970',
    orchid: '#da70d6',
    mediumorchid: '#ba55d3',
    mediumturquoise: '#48d1cc',
    orangered: '#ff4500',
    royalblue: '#4169e1',
    powderblue: '#b0e0e6',
    red: '#f00',
    coral: '#ff7f50',
    turquoise: '#40e0d0',
    white: '#fff',
    whitesmoke: '#f5f5f5',
    wheat: '#f5deb3',
    teal: '#008080',
    steelblue: '#4682b4',
    bisque: '#ffe4c4',
    aquamarine: '#7fffd4',
    aqua: '#0ff',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    springgreen: '#00ff7f',
    antiquewhite: '#faebd7',
    burlywood: '#deb887',
    brown: '#a52a2a',
    beige: '#f5f5dc',
    chocolate: '#d2691e',
    chartreuse: '#7fff00',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cadetblue: '#5f9ea0',
    tomato: '#ff6347',
    fuchsia: '#f0f',
    blue: '#00f',
    salmon: '#fa8072',
    blanchedalmond: '#ffebcd',
    slateblue: '#6a5acd',
    slategray: '#708090',
    thistle: '#d8bfd8',
    tan: '#d2b48c',
    cyan: '#0ff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    blueviolet: '#8a2be2',
    black: '#000',
    darkmagenta: '#8b008b',
    darkslateblue: '#483d8b',
    darkkhaki: '#bdb76b',
    darkorchid: '#9932cc',
    darkorange: '#ff8c00',
    darkgreen: '#006400',
    darkred: '#8b0000',
    dodgerblue: '#1e90ff',
    darkslategray: '#2f4f4f',
    dimgray: '#696969',
    deepskyblue: '#00bfff',
    firebrick: '#b22222',
    forestgreen: '#228b22',
    indigo: '#4b0082',
    ivory: '#fffff0',
    lavenderblush: '#fff0f5',
    feldspar: '#d19275',
    indianred: '#cd5c5c',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightskyblue: '#87cefa',
    lightslategray: '#789',
    lightslateblue: '#8470ff',
    snow: '#fffafa',
    lightseagreen: '#20b2aa',
    lightsalmon: '#ffa07a',
    darksalmon: '#e9967a',
    darkviolet: '#9400d3',
    mediumpurple: '#9370d8',
    mediumaquamarine: '#66cdaa',
    skyblue: '#87ceeb',
    lavender: '#e6e6fa',
    lightsteelblue: '#b0c4de',
    mediumvioletred: '#c71585',
    mintcream: '#f5fffa',
    navajowhite: '#ffdead',
    navy: '#000080',
    olivedrab: '#6b8e23',
    palevioletred: '#d87093',
    violetred: '#d02090',
    yellow: '#ff0',
    yellowgreen: '#9acd32',
    lawngreen: '#7cfc00',
    pink: '#ffc0cb',
    paleturquoise: '#afeeee',
    palegoldenrod: '#eee8aa',
    darkolivegreen: '#556b2f',
    darkseagreen: '#8fbc8f',
    darkturquoise: '#00ced1',
    peachpuff: '#ffdab9',
    deeppink: '#ff1493',
    violet: '#ee82ee',
    palegreen: '#98fb98',
    mediumseagreen: '#3cb371',
    peru: '#cd853f',
    saddlebrown: '#8b4513',
    sandybrown: '#f4a460',
    rosybrown: '#bc8f8f',
    purple: '#800080',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    papayawhip: '#ffefd5',
    mediumslateblue: '#7b68ee',
    plum: '#dda0dd',
    mediumspringgreen: '#00fa9a',
};
function normalizeRgbComponent(component) {
    if (component < 0) {
        return 0;
    }
    if (component > 255) {
        return 255;
    }
    // NaN values are treated as 0
    return (Math.round(component) || 0);
}
function normalizeAlphaComponent(component) {
    return (!(component <= 0) && !(component > 0) ? 0 :
        component < 0 ? 0 :
            component > 1 ? 1 :
                // limit the precision of all numbers to at most 4 digits in fractional part
                Math.round(component * 10000) / 10000);
}
/**
 * @example
 * #fb0
 * @example
 * #f0f
 * @example
 * #f0fa
 */
const shortHexRe = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i;
/**
 * @example
 * #00ff00
 * @example
 * #336699
 * @example
 * #336699FA
 */
const hexRe = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
/**
 * @example
 * rgb(123, 234, 45)
 * @example
 * rgb(255,234,245)
 */
const rgbRe = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/;
/**
 * @example
 * rgba(123, 234, 45, 1)
 * @example
 * rgba(255,234,245,0.1)
 */
const rgbaRe = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
function colorStringToRgba(colorString) {
    colorString = colorString.toLowerCase();
    // eslint-disable-next-line no-restricted-syntax
    if (colorString in namedColorRgbHexStrings) {
        colorString = namedColorRgbHexStrings[colorString];
    }
    {
        const matches = rgbaRe.exec(colorString) || rgbRe.exec(colorString);
        if (matches) {
            return [
                normalizeRgbComponent(parseInt(matches[1], 10)),
                normalizeRgbComponent(parseInt(matches[2], 10)),
                normalizeRgbComponent(parseInt(matches[3], 10)),
                normalizeAlphaComponent((matches.length < 5 ? 1 : parseFloat(matches[4]))),
            ];
        }
    }
    {
        const matches = hexRe.exec(colorString);
        if (matches) {
            return [
                normalizeRgbComponent(parseInt(matches[1], 16)),
                normalizeRgbComponent(parseInt(matches[2], 16)),
                normalizeRgbComponent(parseInt(matches[3], 16)),
                1,
            ];
        }
    }
    {
        const matches = shortHexRe.exec(colorString);
        if (matches) {
            return [
                normalizeRgbComponent(parseInt(matches[1], 16) * 0x11),
                normalizeRgbComponent(parseInt(matches[2], 16) * 0x11),
                normalizeRgbComponent(parseInt(matches[3], 16) * 0x11),
                1,
            ];
        }
    }
    throw new Error(`Cannot parse color: ${colorString}`);
}
function rgbaToGrayscale(rgbValue) {
    // Originally, the NTSC RGB to YUV formula
    // perfected by @eugene-korobko's black magic
    const redComponentGrayscaleWeight = 0.199;
    const greenComponentGrayscaleWeight = 0.687;
    const blueComponentGrayscaleWeight = 0.114;
    return (redComponentGrayscaleWeight * rgbValue[0] +
        greenComponentGrayscaleWeight * rgbValue[1] +
        blueComponentGrayscaleWeight * rgbValue[2]);
}
function applyAlpha(color, alpha) {
    // special case optimization
    if (color === 'transparent') {
        return color;
    }
    const originRgba = colorStringToRgba(color);
    const originAlpha = originRgba[3];
    return `rgba(${originRgba[0]}, ${originRgba[1]}, ${originRgba[2]}, ${alpha * originAlpha})`;
}
function generateContrastColors(backgroundColor) {
    const rgb = colorStringToRgba(backgroundColor);
    return {
        _internal_background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
        _internal_foreground: rgbaToGrayscale(rgb) > 160 ? 'black' : 'white',
    };
}
function gradientColorAtPercent(topColor, bottomColor, percent) {
    const [topR, topG, topB, topA] = colorStringToRgba(topColor);
    const [bottomR, bottomG, bottomB, bottomA] = colorStringToRgba(bottomColor);
    const resultRgba = [
        normalizeRgbComponent(topR + percent * (bottomR - topR)),
        normalizeRgbComponent(topG + percent * (bottomG - topG)),
        normalizeRgbComponent(topB + percent * (bottomB - topB)),
        normalizeAlphaComponent(topA + percent * (bottomA - topA)),
    ];
    return `rgba(${resultRgba[0]}, ${resultRgba[1]}, ${resultRgba[2]}, ${resultRgba[3]})`;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
class Delegate {
    constructor() {
        this._private__listeners = [];
    }
    subscribe(callback, linkedObject, singleshot) {
        const listener = {
            _internal_callback: callback,
            _internal_linkedObject: linkedObject,
            _internal_singleshot: singleshot === true,
        };
        this._private__listeners.push(listener);
    }
    unsubscribe(callback) {
        const index = this._private__listeners.findIndex((listener) => callback === listener._internal_callback);
        if (index > -1) {
            this._private__listeners.splice(index, 1);
        }
    }
    unsubscribeAll(linkedObject) {
        this._private__listeners = this._private__listeners.filter((listener) => listener._internal_linkedObject !== linkedObject);
    }
    _internal_fire(param1, param2) {
        const listenersSnapshot = [...this._private__listeners];
        this._private__listeners = this._private__listeners.filter((listener) => !listener._internal_singleshot);
        listenersSnapshot.forEach((listener) => listener._internal_callback(param1, param2));
    }
    _internal_hasListeners() {
        return this._private__listeners.length > 0;
    }
    _internal_destroy() {
        this._private__listeners = [];
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function merge(dst, ...sources) {
    for (const src of sources) {
        // eslint-disable-next-line no-restricted-syntax
        for (const i in src) {
            if (src[i] === undefined) {
                continue;
            }
            if ('object' !== typeof src[i] || dst[i] === undefined) {
                dst[i] = src[i];
            }
            else {
                merge(dst[i], src[i]);
            }
        }
    }
    return dst;
}
function isNumber(value) {
    return (typeof value === 'number') && (isFinite(value));
}
function isInteger(value) {
    return (typeof value === 'number') && ((value % 1) === 0);
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function clone(object) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const o = object;
    if (!o || 'object' !== typeof o) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return o;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let c;
    if (Array.isArray(o)) {
        c = [];
    }
    else {
        c = {};
    }
    let p;
    let v;
    // eslint-disable-next-line no-restricted-syntax
    for (p in o) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,no-prototype-builtins
        if (o.hasOwnProperty(p)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            v = o[p];
            if (v && 'object' === typeof v) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                c[p] = clone(v);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                c[p] = v;
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return c;
}
function notNull(t) {
    return t !== null;
}
function undefinedIfNull(t) {
    return (t === null) ? undefined : t;
}

/**
 * Default font family.
 * Must be used to generate font string when font is not specified.
 */
const defaultFontFamily = `'Trebuchet MS', Roboto, Ubuntu, sans-serif`;
/**
 * Generates a font string, which can be used to set in canvas' font property.
 * If no family provided, {@link defaultFontFamily} will be used.
 *
 * @param size - Font size in pixels.
 * @param family - Optional font family.
 * @param style - Optional font style.
 * @returns The font string.
 */
function makeFont(size, family, style) {
    if (style !== undefined) {
        style = `${style} `;
    }
    else {
        style = '';
    }
    if (family === undefined) {
        family = defaultFontFamily;
    }
    return `${style}${size}px ${family}`;
}

class PriceAxisRendererOptionsProvider {
    constructor(chartModel) {
        this._private__rendererOptions = {
            borderSize: 1 /* BorderSize */,
            tickLength: 4 /* TickLength */,
            fontSize: NaN,
            font: '',
            fontFamily: '',
            color: '',
            paddingBottom: 0,
            paddingInner: 0,
            paddingOuter: 0,
            paddingTop: 0,
            baselineOffset: 0,
        };
        this._private__chartModel = chartModel;
    }
    options() {
        const rendererOptions = this._private__rendererOptions;
        const currentFontSize = this._private__fontSize();
        const currentFontFamily = this._private__fontFamily();
        if (rendererOptions.fontSize !== currentFontSize || rendererOptions.fontFamily !== currentFontFamily) {
            rendererOptions.fontSize = currentFontSize;
            rendererOptions.fontFamily = currentFontFamily;
            rendererOptions.font = makeFont(currentFontSize, currentFontFamily);
            rendererOptions.paddingTop = Math.floor(currentFontSize / 3.5);
            rendererOptions.paddingBottom = rendererOptions.paddingTop;
            rendererOptions.paddingInner = Math.max(Math.ceil(currentFontSize / 2 - rendererOptions.tickLength / 2), 0);
            rendererOptions.paddingOuter = Math.ceil(currentFontSize / 2 + rendererOptions.tickLength / 2);
            rendererOptions.baselineOffset = Math.round(currentFontSize / 10);
        }
        rendererOptions.color = this._private__textColor();
        return this._private__rendererOptions;
    }
    _private__textColor() {
        return this._private__chartModel.options().layout.textColor;
    }
    _private__fontSize() {
        return this._private__chartModel.options().layout.fontSize;
    }
    _private__fontFamily() {
        return this._private__chartModel.options().layout.fontFamily;
    }
}

class CompositeRenderer {
    constructor() {
        this._private__renderers = [];
    }
    _internal_setRenderers(renderers) {
        this._private__renderers = renderers;
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        this._private__renderers.forEach((r) => {
            ctx.save();
            r.draw(ctx, pixelRatio, isHovered, hitTestData);
            ctx.restore();
        });
    }
}

class ScaledRenderer {
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        ctx.save();
        // actually we must be sure that this scaling applied only once at the same time
        // currently ScaledRenderer could be only nodes renderer (not top-level renderers like CompositeRenderer or something)
        // so this "constraint" is fulfilled for now
        ctx.scale(pixelRatio, pixelRatio);
        this._internal__drawImpl(ctx, isHovered, hitTestData);
        ctx.restore();
    }
    drawBackground(ctx, pixelRatio, isHovered, hitTestData) {
        ctx.save();
        // actually we must be sure that this scaling applied only once at the same time
        // currently ScaledRenderer could be only nodes renderer (not top-level renderers like CompositeRenderer or something)
        // so this "constraint" is fulfilled for now
        ctx.scale(pixelRatio, pixelRatio);
        this._internal__drawBackgroundImpl(ctx, isHovered, hitTestData);
        ctx.restore();
    }
    _internal__drawBackgroundImpl(ctx, isHovered, hitTestData) { }
}

class PaneRendererMarks extends ScaledRenderer {
    constructor() {
        super(...arguments);
        this._internal__data = null;
    }
    _internal_setData(data) {
        this._internal__data = data;
    }
    _internal__drawImpl(ctx) {
        if (this._internal__data === null || this._internal__data._internal_visibleRange === null) {
            return;
        }
        const visibleRange = this._internal__data._internal_visibleRange;
        const data = this._internal__data;
        const draw = (radius) => {
            ctx.beginPath();
            for (let i = visibleRange.to - 1; i >= visibleRange.from; --i) {
                const point = data._internal_items[i];
                ctx.moveTo(point.x, point.y);
                ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
            }
            ctx.fill();
        };
        ctx.fillStyle = data._internal_backColor;
        draw(data._internal_radius + 2);
        ctx.fillStyle = data._internal_lineColor;
        draw(data._internal_radius);
    }
}

function createEmptyMarkerData() {
    return {
        _internal_items: [{
                x: 0,
                y: 0,
                time: 0,
                price: 0,
            }],
        _internal_lineColor: '',
        _internal_backColor: '',
        _internal_radius: 0,
        _internal_visibleRange: null,
    };
}
const rangeForSinglePoint = { from: 0, to: 1 };
class CrosshairMarksPaneView {
    constructor(chartModel, crosshair) {
        this._private__compositeRenderer = new CompositeRenderer();
        this._private__markersRenderers = [];
        this._private__markersData = [];
        this._private__invalidated = true;
        this._private__chartModel = chartModel;
        this._private__crosshair = crosshair;
        this._private__compositeRenderer._internal_setRenderers(this._private__markersRenderers);
    }
    update(updateType) {
        const serieses = this._private__chartModel.serieses();
        if (serieses.length !== this._private__markersRenderers.length) {
            this._private__markersData = serieses.map(createEmptyMarkerData);
            this._private__markersRenderers = this._private__markersData.map((data) => {
                const res = new PaneRendererMarks();
                res._internal_setData(data);
                return res;
            });
            this._private__compositeRenderer._internal_setRenderers(this._private__markersRenderers);
        }
        this._private__invalidated = true;
    }
    renderer(height, width, addAnchors) {
        if (this._private__invalidated) {
            this._private__updateImpl(height);
            this._private__invalidated = false;
        }
        return this._private__compositeRenderer;
    }
    _private__updateImpl(height) {
        const serieses = this._private__chartModel.serieses();
        const timePointIndex = this._private__crosshair.appliedIndex();
        const timeScale = this._private__chartModel.timeScale();
        serieses.forEach((s, index) => {
            var _a;
            const data = this._private__markersData[index];
            const seriesData = s.markerDataAtIndex(timePointIndex);
            if (seriesData === null || !s.visible()) {
                data._internal_visibleRange = null;
                return;
            }
            const firstValue = ensureNotNull(s.firstValue());
            data._internal_lineColor = seriesData.backgroundColor;
            data._internal_radius = seriesData.radius;
            data._internal_items[0].price = seriesData.price;
            data._internal_items[0].y = s.priceScale().priceToCoordinate(seriesData.price, firstValue.value);
            data._internal_backColor = (_a = seriesData.borderColor) !== null && _a !== void 0 ? _a : this._private__chartModel.backgroundColorAtYPercentFromTop(data._internal_items[0].y / height);
            data._internal_items[0].time = timePointIndex;
            data._internal_items[0].x = timeScale.indexToCoordinate(timePointIndex);
            data._internal_visibleRange = rangeForSinglePoint;
        });
    }
}

class CrosshairRenderer {
    constructor(data) {
        this._private__data = data;
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        if (this._private__data === null) {
            return;
        }
        const vertLinesVisible = this._private__data._internal_vertLine._internal_visible;
        const horzLinesVisible = this._private__data._internal_horzLine._internal_visible;
        if (!vertLinesVisible && !horzLinesVisible) {
            return;
        }
        ctx.save();
        const x = Math.round(this._private__data._internal_x * pixelRatio);
        const y = Math.round(this._private__data._internal_y * pixelRatio);
        const w = Math.ceil(this._private__data._internal_w * pixelRatio);
        const h = Math.ceil(this._private__data._internal_h * pixelRatio);
        ctx.lineCap = 'butt';
        if (vertLinesVisible && x >= 0) {
            ctx.lineWidth = Math.floor(this._private__data._internal_vertLine._internal_lineWidth * pixelRatio);
            ctx.strokeStyle = this._private__data._internal_vertLine._internal_color;
            ctx.fillStyle = this._private__data._internal_vertLine._internal_color;
            setLineStyle(ctx, this._private__data._internal_vertLine._internal_lineStyle);
            drawVerticalLine(ctx, x, 0, h);
        }
        if (horzLinesVisible && y >= 0) {
            ctx.lineWidth = Math.floor(this._private__data._internal_horzLine._internal_lineWidth * pixelRatio);
            ctx.strokeStyle = this._private__data._internal_horzLine._internal_color;
            ctx.fillStyle = this._private__data._internal_horzLine._internal_color;
            setLineStyle(ctx, this._private__data._internal_horzLine._internal_lineStyle);
            drawHorizontalLine(ctx, y, 0, w);
        }
        ctx.restore();
    }
}

class CrosshairPaneView {
    constructor(source) {
        this._private__invalidated = true;
        this._private__rendererData = {
            _internal_vertLine: {
                _internal_lineWidth: 1,
                _internal_lineStyle: 0,
                _internal_color: '',
                _internal_visible: false,
            },
            _internal_horzLine: {
                _internal_lineWidth: 1,
                _internal_lineStyle: 0,
                _internal_color: '',
                _internal_visible: false,
            },
            _internal_w: 0,
            _internal_h: 0,
            _internal_x: 0,
            _internal_y: 0,
        };
        this._private__renderer = new CrosshairRenderer(this._private__rendererData);
        this._private__source = source;
    }
    _internal_update() {
        this._private__invalidated = true;
    }
    renderer(height, width) {
        if (this._private__invalidated) {
            this._private__updateImpl();
            this._private__invalidated = false;
        }
        return this._private__renderer;
    }
    _private__updateImpl() {
        const visible = this._private__source.visible();
        const pane = ensureNotNull(this._private__source.pane());
        const crosshairOptions = pane.model().options().crosshair;
        const data = this._private__rendererData;
        data._internal_horzLine._internal_visible = visible && this._private__source.horzLineVisible(pane);
        data._internal_vertLine._internal_visible = visible && this._private__source.vertLineVisible();
        data._internal_horzLine._internal_lineWidth = crosshairOptions.horzLine.width;
        data._internal_horzLine._internal_lineStyle = crosshairOptions.horzLine.style;
        data._internal_horzLine._internal_color = crosshairOptions.horzLine.color;
        data._internal_vertLine._internal_lineWidth = crosshairOptions.vertLine.width;
        data._internal_vertLine._internal_lineStyle = crosshairOptions.vertLine.style;
        data._internal_vertLine._internal_color = crosshairOptions.vertLine.color;
        data._internal_w = pane.width();
        data._internal_h = pane.height();
        data._internal_x = this._private__source.appliedX();
        data._internal_y = this._private__source.appliedY();
    }
}

/**
 * Fills rectangle's inner border (so, all the filled area is limited by the [x, x + width]*[y, y + height] region)
 * ```
 * (x, y)
 * O***********************|*****
 * |        border         |  ^
 * |   *****************   |  |
 * |   |               |   |  |
 * | b |               | b |  h
 * | o |               | o |  e
 * | r |               | r |  i
 * | d |               | d |  g
 * | e |               | e |  h
 * | r |               | r |  t
 * |   |               |   |  |
 * |   *****************   |  |
 * |        border         |  v
 * |***********************|*****
 * |                       |
 * |<------- width ------->|
 * ```
 *
 * @param ctx - Context to draw on
 * @param x - Left side of the target rectangle
 * @param y - Top side of the target rectangle
 * @param width - Width of the target rectangle
 * @param height - Height of the target rectangle
 * @param borderWidth - Width of border to fill, must be less than width and height of the target rectangle
 */
function fillRectInnerBorder(ctx, x, y, width, height, borderWidth) {
    // horizontal (top and bottom) edges
    ctx.fillRect(x + borderWidth, y, width - borderWidth * 2, borderWidth);
    ctx.fillRect(x + borderWidth, y + height - borderWidth, width - borderWidth * 2, borderWidth);
    // vertical (left and right) edges
    ctx.fillRect(x, y, borderWidth, height);
    ctx.fillRect(x + width - borderWidth, y, borderWidth, height);
}
function drawScaled(ctx, ratio, func) {
    ctx.save();
    ctx.scale(ratio, ratio);
    func();
    ctx.restore();
}
function clearRect(ctx, x, y, w, h, clearColor) {
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = clearColor;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}
// eslint-disable-next-line max-params
function clearRectWithGradient(ctx, x, y, w, h, topColor, bottomColor) {
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, topColor);
    gradient.addColorStop(1, bottomColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}

class PriceAxisViewRenderer {
    constructor(data, commonData) {
        this.setData(data, commonData);
    }
    setData(data, commonData) {
        this._private__data = data;
        this._private__commonData = commonData;
    }
    draw(ctx, rendererOptions, textWidthCache, width, align, pixelRatio) {
        if (!this._private__data.visible) {
            return;
        }
        ctx.font = rendererOptions.font;
        const tickSize = (this._private__data.tickVisible || !this._private__data.moveTextToInvisibleTick) ? rendererOptions.tickLength : 0;
        const horzBorder = rendererOptions.borderSize;
        const paddingTop = rendererOptions.paddingTop;
        const paddingBottom = rendererOptions.paddingBottom;
        const paddingInner = rendererOptions.paddingInner;
        const paddingOuter = rendererOptions.paddingOuter;
        const text = this._private__data.text;
        const textWidth = Math.ceil(textWidthCache.measureText(ctx, text));
        const baselineOffset = rendererOptions.baselineOffset;
        const totalHeight = rendererOptions.fontSize + paddingTop + paddingBottom;
        const halfHeigth = Math.ceil(totalHeight * 0.5);
        const totalWidth = horzBorder + textWidth + paddingInner + paddingOuter + tickSize;
        let yMid = this._private__commonData.coordinate;
        if (this._private__commonData.fixedCoordinate) {
            yMid = this._private__commonData.fixedCoordinate;
        }
        yMid = Math.round(yMid);
        const yTop = yMid - halfHeigth;
        const yBottom = yTop + totalHeight;
        const alignRight = align === 'right';
        const xInside = alignRight ? width : 0;
        const rightScaled = Math.ceil(width * pixelRatio);
        let xOutside = xInside;
        let xTick;
        let xText;
        ctx.fillStyle = this._private__commonData.background;
        ctx.lineWidth = 1;
        ctx.lineCap = 'butt';
        if (text) {
            if (alignRight) {
                // 2               1
                //
                //              6  5
                //
                // 3               4
                xOutside = xInside - totalWidth;
                xTick = xInside - tickSize;
                xText = xOutside + paddingOuter;
            }
            else {
                // 1               2
                //
                // 6  5
                //
                // 4               3
                xOutside = xInside + totalWidth;
                xTick = xInside + tickSize;
                xText = xInside + horzBorder + tickSize + paddingInner;
            }
            const tickHeight = Math.max(1, Math.floor(pixelRatio));
            const horzBorderScaled = Math.max(1, Math.floor(horzBorder * pixelRatio));
            const xInsideScaled = alignRight ? rightScaled : 0;
            const yTopScaled = Math.round(yTop * pixelRatio);
            const xOutsideScaled = Math.round(xOutside * pixelRatio);
            const yMidScaled = Math.round(yMid * pixelRatio) - Math.floor(pixelRatio * 0.5);
            const yBottomScaled = yMidScaled + tickHeight + (yMidScaled - yTopScaled);
            const xTickScaled = Math.round(xTick * pixelRatio);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(xInsideScaled, yTopScaled);
            ctx.lineTo(xOutsideScaled, yTopScaled);
            ctx.lineTo(xOutsideScaled, yBottomScaled);
            ctx.lineTo(xInsideScaled, yBottomScaled);
            ctx.fill();
            // draw border
            ctx.fillStyle = this._private__data.borderColor;
            ctx.fillRect(alignRight ? rightScaled - horzBorderScaled : 0, yTopScaled, horzBorderScaled, yBottomScaled - yTopScaled);
            if (this._private__data.tickVisible) {
                ctx.fillStyle = this._private__commonData.color;
                ctx.fillRect(xInsideScaled, yMidScaled, xTickScaled - xInsideScaled, tickHeight);
            }
            ctx.textAlign = 'left';
            ctx.fillStyle = this._private__commonData.color;
            drawScaled(ctx, pixelRatio, () => {
                ctx.fillText(text, xText, yBottom - paddingBottom - baselineOffset);
            });
            ctx.restore();
        }
    }
    height(rendererOptions, useSecondLine) {
        if (!this._private__data.visible) {
            return 0;
        }
        return rendererOptions.fontSize + rendererOptions.paddingTop + rendererOptions.paddingBottom;
    }
}

class PriceAxisView {
    constructor(ctor) {
        this._private__commonRendererData = {
            coordinate: 0,
            color: '#FFF',
            background: '#000',
        };
        this._private__axisRendererData = {
            text: '',
            visible: false,
            tickVisible: true,
            moveTextToInvisibleTick: false,
            borderColor: '',
        };
        this._private__paneRendererData = {
            text: '',
            visible: false,
            tickVisible: false,
            moveTextToInvisibleTick: true,
            borderColor: '',
        };
        this._private__invalidated = true;
        this._private__axisRenderer = new (ctor || PriceAxisViewRenderer)(this._private__axisRendererData, this._private__commonRendererData);
        this._private__paneRenderer = new (ctor || PriceAxisViewRenderer)(this._private__paneRendererData, this._private__commonRendererData);
    }
    text() {
        this._private__updateRendererDataIfNeeded();
        return this._private__axisRendererData.text;
    }
    coordinate() {
        this._private__updateRendererDataIfNeeded();
        return this._private__commonRendererData.coordinate;
    }
    update() {
        this._private__invalidated = true;
    }
    height(rendererOptions, useSecondLine = false) {
        return Math.max(this._private__axisRenderer.height(rendererOptions, useSecondLine), this._private__paneRenderer.height(rendererOptions, useSecondLine));
    }
    getFixedCoordinate() {
        return this._private__commonRendererData.fixedCoordinate || 0;
    }
    setFixedCoordinate(value) {
        this._private__commonRendererData.fixedCoordinate = value;
    }
    isVisible() {
        this._private__updateRendererDataIfNeeded();
        return this._private__axisRendererData.visible || this._private__paneRendererData.visible;
    }
    isAxisLabelVisible() {
        this._private__updateRendererDataIfNeeded();
        return this._private__axisRendererData.visible;
    }
    renderer(priceScale) {
        this._private__updateRendererDataIfNeeded();
        // force update tickVisible state from price scale options
        // because we don't have and we can't have price axis in other methods
        // (like paneRenderer or any other who call _updateRendererDataIfNeeded)
        this._private__axisRendererData.tickVisible = this._private__axisRendererData.tickVisible && priceScale.options().ticksVisible;
        this._private__paneRendererData.tickVisible = this._private__paneRendererData.tickVisible && priceScale.options().ticksVisible;
        this._private__axisRenderer.setData(this._private__axisRendererData, this._private__commonRendererData);
        this._private__paneRenderer.setData(this._private__paneRendererData, this._private__commonRendererData);
        return this._private__axisRenderer;
    }
    paneRenderer() {
        this._private__updateRendererDataIfNeeded();
        this._private__axisRenderer.setData(this._private__axisRendererData, this._private__commonRendererData);
        this._private__paneRenderer.setData(this._private__paneRendererData, this._private__commonRendererData);
        return this._private__paneRenderer;
    }
    _private__updateRendererDataIfNeeded() {
        if (this._private__invalidated) {
            this._private__axisRendererData.tickVisible = true;
            this._private__paneRendererData.tickVisible = false;
            this._internal__updateRendererData(this._private__axisRendererData, this._private__paneRendererData, this._private__commonRendererData);
        }
    }
}

class CrosshairPriceAxisView extends PriceAxisView {
    constructor(source, priceScale, valueProvider) {
        super();
        this._private__source = source;
        this._private__priceScale = priceScale;
        this._private__valueProvider = valueProvider;
    }
    _internal__updateRendererData(axisRendererData, paneRendererData, commonRendererData) {
        axisRendererData.visible = false;
        const options = this._private__source.options().horzLine;
        if (!options.labelVisible) {
            return;
        }
        const firstValue = this._private__priceScale.firstValue();
        if (!this._private__source.visible() || this._private__priceScale.isEmpty() || (firstValue === null)) {
            return;
        }
        const colors = generateContrastColors(options.labelBackgroundColor);
        commonRendererData.background = colors._internal_background;
        commonRendererData.color = colors._internal_foreground;
        const value = this._private__valueProvider(this._private__priceScale);
        commonRendererData.coordinate = value._internal_coordinate;
        axisRendererData.text = this._private__priceScale.formatPrice(value._internal_price, firstValue);
        axisRendererData.visible = true;
    }
}

const optimizationReplacementRe = /[1-9]/g;
class TimeAxisViewRenderer {
    constructor() {
        this._private__data = null;
    }
    setData(data) {
        this._private__data = data;
    }
    draw(ctx, rendererOptions, pixelRatio) {
        if (this._private__data === null || this._private__data.visible === false || this._private__data.text.length === 0) {
            return;
        }
        ctx.font = rendererOptions.font;
        const textWidth = Math.round(rendererOptions.widthCache.measureText(ctx, this._private__data.text, optimizationReplacementRe));
        if (textWidth <= 0) {
            return;
        }
        ctx.save();
        const horzMargin = rendererOptions.paddingHorizontal;
        const labelWidth = textWidth + 2 * horzMargin;
        const labelWidthHalf = labelWidth / 2;
        const timeScaleWidth = this._private__data.width;
        let coordinate = this._private__data.coordinate;
        let x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
        if (x1 < 0) {
            coordinate = coordinate + Math.abs(0 - x1);
            x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
        }
        else if (x1 + labelWidth > timeScaleWidth) {
            coordinate = coordinate - Math.abs(timeScaleWidth - (x1 + labelWidth));
            x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
        }
        const x2 = x1 + labelWidth;
        const y1 = 0;
        const y2 = (y1 +
            rendererOptions.borderSize +
            rendererOptions.paddingTop +
            rendererOptions.fontSize +
            rendererOptions.paddingBottom);
        ctx.fillStyle = this._private__data.background;
        const x1scaled = Math.round(x1 * pixelRatio);
        const y1scaled = Math.round(y1 * pixelRatio);
        const x2scaled = Math.round(x2 * pixelRatio);
        const y2scaled = Math.round(y2 * pixelRatio);
        ctx.fillRect(x1scaled, y1scaled, x2scaled - x1scaled, y2scaled - y1scaled);
        if (this._private__data.tickVisible) {
            const tickX = Math.round(this._private__data.coordinate * pixelRatio);
            const tickTop = y1scaled;
            const tickBottom = Math.round((tickTop + rendererOptions.borderSize + rendererOptions.tickLength) * pixelRatio);
            ctx.fillStyle = this._private__data.color;
            const tickWidth = Math.max(1, Math.floor(pixelRatio));
            const tickOffset = Math.floor(pixelRatio * 0.5);
            ctx.fillRect(tickX - tickOffset, tickTop, tickWidth, tickBottom - tickTop);
        }
        const yText = y2 - rendererOptions.baselineOffset - rendererOptions.paddingBottom;
        ctx.textAlign = 'left';
        ctx.fillStyle = this._private__data.color;
        drawScaled(ctx, pixelRatio, () => {
            ctx.fillText(ensureNotNull(this._private__data).text, x1 + horzMargin, yText);
        });
        ctx.restore();
    }
}

class CrosshairTimeAxisView {
    constructor(crosshair, model, valueProvider) {
        this._private__invalidated = true;
        this._private__renderer = new TimeAxisViewRenderer();
        this._private__rendererData = {
            visible: false,
            background: '#4c525e',
            color: 'white',
            text: '',
            width: 0,
            coordinate: NaN,
            tickVisible: true,
        };
        this._private__crosshair = crosshair;
        this._private__model = model;
        this._private__valueProvider = valueProvider;
    }
    _internal_update() {
        this._private__invalidated = true;
    }
    renderer() {
        if (this._private__invalidated) {
            this._private__updateImpl();
            this._private__invalidated = false;
        }
        this._private__renderer.setData(this._private__rendererData);
        return this._private__renderer;
    }
    _private__updateImpl() {
        const data = this._private__rendererData;
        data.visible = false;
        const options = this._private__crosshair.options().vertLine;
        if (!options.labelVisible) {
            return;
        }
        const timeScale = this._private__model.timeScale();
        if (timeScale.isEmpty()) {
            return;
        }
        data.width = timeScale.width();
        const value = this._private__valueProvider();
        if (!value._internal_time) {
            return;
        }
        data.coordinate = value._internal_coordinate;
        const currentTime = timeScale.indexToTimeScalePoint(this._private__crosshair.appliedIndex());
        data.text = timeScale.formatDateTime(ensureNotNull(currentTime));
        data.visible = true;
        const colors = generateContrastColors(options.labelBackgroundColor);
        data.background = colors._internal_background;
        data.color = colors._internal_foreground;
        data.tickVisible = timeScale.options().ticksVisible;
    }
}

class DataSource {
    constructor() {
        this._priceScale = null;
        this._private__zorder = 0;
    }
    zorder() {
        return this._private__zorder;
    }
    setZorder(zorder) {
        this._private__zorder = zorder;
    }
    priceScale() {
        return this._priceScale;
    }
    setPriceScale(priceScale) {
        this._priceScale = priceScale;
    }
    labelPaneViews(pane) {
        return [];
    }
    timeAxisViews() {
        return [];
    }
    visible() {
        return true;
    }
}

/**
 * Represents the crosshair mode.
 */
var CrosshairMode;
(function (CrosshairMode) {
    /**
     * This mode allows crosshair to move freely on the chart.
     */
    CrosshairMode[CrosshairMode["Normal"] = 0] = "Normal";
    /**
     * This mode sticks crosshair's horizontal line to the price value of a single-value series or to the close price of OHLC-based series.
     */
    CrosshairMode[CrosshairMode["Magnet"] = 1] = "Magnet";
})(CrosshairMode || (CrosshairMode = {}));
class Crosshair extends DataSource {
    constructor(model, options) {
        super();
        this._private__pane = null;
        this._private__price = NaN;
        this._private__index = 0;
        this._private__visible = true;
        this._private__priceAxisViews = new Map();
        this._private__subscribed = false;
        this._private__x = NaN;
        this._private__y = NaN;
        this._private__originX = NaN;
        this._private__originY = NaN;
        this._private__model = model;
        this._private__options = options;
        this._private__markersPaneView = new CrosshairMarksPaneView(model, this);
        const valuePriceProvider = (rawPriceProvider, rawCoordinateProvider) => {
            return (priceScale) => {
                const coordinate = rawCoordinateProvider();
                const rawPrice = rawPriceProvider();
                if (priceScale === ensureNotNull(this._private__pane).defaultPriceScale()) {
                    // price must be defined
                    return { _internal_price: rawPrice, _internal_coordinate: coordinate };
                }
                else {
                    // always convert from coordinate
                    const firstValue = ensureNotNull(priceScale.firstValue());
                    const price = priceScale.coordinateToPrice(coordinate, firstValue);
                    return { _internal_price: price, _internal_coordinate: coordinate };
                }
            };
        };
        const valueTimeProvider = (rawIndexProvider, rawCoordinateProvider) => {
            return () => {
                return {
                    _internal_time: this._private__model.timeScale().indexToTime(rawIndexProvider()),
                    _internal_coordinate: rawCoordinateProvider(),
                };
            };
        };
        // for current position always return both price and coordinate
        this._private__currentPosPriceProvider = valuePriceProvider(() => this._private__price, () => this._private__y);
        const currentPosTimeProvider = valueTimeProvider(() => this._private__index, () => this.appliedX());
        this._private__timeAxisView = new CrosshairTimeAxisView(this, model, currentPosTimeProvider);
        this._private__paneView = new CrosshairPaneView(this);
    }
    options() {
        return this._private__options;
    }
    saveOriginCoord(x, y) {
        this._private__originX = x;
        this._private__originY = y;
    }
    clearOriginCoord() {
        this._private__originX = NaN;
        this._private__originY = NaN;
    }
    originCoordX() {
        return this._private__originX;
    }
    originCoordY() {
        return this._private__originY;
    }
    setPosition(index, price, pane) {
        if (!this._private__subscribed) {
            this._private__subscribed = true;
        }
        this._private__visible = true;
        this._private__tryToUpdateViews(index, price, pane);
    }
    appliedIndex() {
        return this._private__index;
    }
    appliedX() {
        return this._private__x;
    }
    appliedY() {
        return this._private__y;
    }
    visible() {
        return this._private__visible;
    }
    clearPosition() {
        this._private__visible = false;
        this._private__setIndexToLastSeriesBarIndex();
        this._private__price = NaN;
        this._private__x = NaN;
        this._private__y = NaN;
        this._private__pane = null;
        this.clearOriginCoord();
    }
    paneViews(pane) {
        return this._private__pane !== null ? [this._private__paneView, this._private__markersPaneView] : [];
    }
    horzLineVisible(pane) {
        return pane === this._private__pane && this._private__options.horzLine.visible;
    }
    vertLineVisible() {
        return this._private__options.vertLine.visible;
    }
    priceAxisViews(pane, priceScale) {
        if (!this._private__visible || this._private__pane !== pane) {
            this._private__priceAxisViews.clear();
        }
        const views = [];
        if (this._private__pane === pane) {
            views.push(this._private__createPriceAxisViewOnDemand(this._private__priceAxisViews, priceScale, this._private__currentPosPriceProvider));
        }
        return views;
    }
    timeAxisViews() {
        return this._private__visible ? [this._private__timeAxisView] : [];
    }
    pane() {
        return this._private__pane;
    }
    updateAllViews() {
        this._private__paneView._internal_update();
        this._private__priceAxisViews.forEach((value) => value.update());
        this._private__timeAxisView._internal_update();
        this._private__markersPaneView.update();
    }
    _private__priceScaleByPane(pane) {
        if (pane && !pane.defaultPriceScale().isEmpty()) {
            return pane.defaultPriceScale();
        }
        return null;
    }
    _private__tryToUpdateViews(index, price, pane) {
        if (this._private__tryToUpdateData(index, price, pane)) {
            this.updateAllViews();
        }
    }
    _private__tryToUpdateData(newIndex, newPrice, newPane) {
        const oldX = this._private__x;
        const oldY = this._private__y;
        const oldPrice = this._private__price;
        const oldIndex = this._private__index;
        const oldPane = this._private__pane;
        const priceScale = this._private__priceScaleByPane(newPane);
        this._private__index = newIndex;
        this._private__x = isNaN(newIndex) ? NaN : this._private__model.timeScale().indexToCoordinate(newIndex);
        this._private__pane = newPane;
        const firstValue = priceScale !== null ? priceScale.firstValue() : null;
        if (priceScale !== null && firstValue !== null) {
            this._private__price = newPrice;
            this._private__y = priceScale.priceToCoordinate(newPrice, firstValue);
        }
        else {
            this._private__price = NaN;
            this._private__y = NaN;
        }
        return (oldX !== this._private__x || oldY !== this._private__y || oldIndex !== this._private__index ||
            oldPrice !== this._private__price || oldPane !== this._private__pane);
    }
    _private__setIndexToLastSeriesBarIndex() {
        const lastIndexes = this._private__model.serieses()
            .map((s) => s.bars().lastIndex())
            .filter(notNull);
        const lastBarIndex = (lastIndexes.length === 0) ? null : Math.max(...lastIndexes);
        this._private__index = lastBarIndex !== null ? lastBarIndex : NaN;
    }
    _private__createPriceAxisViewOnDemand(map, priceScale, valueProvider) {
        let view = map.get(priceScale);
        if (view === undefined) {
            view = new CrosshairPriceAxisView(this, priceScale, valueProvider);
            map.set(priceScale, view);
        }
        return view;
    }
}

function isDefaultPriceScale(priceScaleId) {
    return priceScaleId === "left" /* Left */ || priceScaleId === "right" /* Right */;
}

function mergePaneInvalidation(beforeValue, newValue) {
    if (beforeValue === undefined) {
        return newValue;
    }
    const level = Math.max(beforeValue.level, newValue.level);
    const autoScale = beforeValue.autoScale || newValue.autoScale;
    return { level, autoScale };
}
class InvalidateMask {
    constructor(globalLevel) {
        this._private__invalidatedPanes = new Map();
        this._private__timeScaleInvalidations = [];
        this._private__globalLevel = globalLevel;
    }
    invalidatePane(paneIndex, invalidation) {
        const prevValue = this._private__invalidatedPanes.get(paneIndex);
        const newValue = mergePaneInvalidation(prevValue, invalidation);
        this._private__invalidatedPanes.set(paneIndex, newValue);
    }
    fullInvalidation() {
        return this._private__globalLevel;
    }
    invalidateForPane(paneIndex) {
        const paneInvalidation = this._private__invalidatedPanes.get(paneIndex);
        if (paneInvalidation === undefined) {
            return {
                level: this._private__globalLevel,
            };
        }
        return {
            level: Math.max(this._private__globalLevel, paneInvalidation.level),
            autoScale: paneInvalidation.autoScale,
        };
    }
    setFitContent() {
        // modifies both bar spacing and right offset
        this._private__timeScaleInvalidations = [{ type: 0 /* FitContent */ }];
    }
    applyRange(range) {
        // modifies both bar spacing and right offset
        this._private__timeScaleInvalidations = [{ type: 1 /* ApplyRange */, value: range }];
    }
    resetTimeScale() {
        // modifies both bar spacing and right offset
        this._private__timeScaleInvalidations = [{ type: 4 /* Reset */ }];
    }
    setBarSpacing(barSpacing) {
        this._private__timeScaleInvalidations.push({ type: 2 /* ApplyBarSpacing */, value: barSpacing });
    }
    setRightOffset(offset) {
        this._private__timeScaleInvalidations.push({ type: 3 /* ApplyRightOffset */, value: offset });
    }
    timeScaleInvalidations() {
        return this._private__timeScaleInvalidations;
    }
    merge(other) {
        for (const tsInvalidation of other._private__timeScaleInvalidations) {
            this._private__applyTimeScaleInvalidation(tsInvalidation);
        }
        this._private__globalLevel = Math.max(this._private__globalLevel, other._private__globalLevel);
        other._private__invalidatedPanes.forEach((invalidation, index) => {
            this.invalidatePane(index, invalidation);
        });
    }
    _private__applyTimeScaleInvalidation(invalidation) {
        switch (invalidation.type) {
            case 0 /* FitContent */:
                this.setFitContent();
                break;
            case 1 /* ApplyRange */:
                this.applyRange(invalidation.value);
                break;
            case 2 /* ApplyBarSpacing */:
                this.setBarSpacing(invalidation.value);
                break;
            case 3 /* ApplyRightOffset */:
                this.setRightOffset(invalidation.value);
                break;
            case 4 /* Reset */:
                this.resetTimeScale();
                break;
        }
    }
}

const formatterOptions = {
    _internal_decimalSign: '.',
    _internal_decimalSignFractional: '\'',
};
/**
 * @param value - The number of convert.
 * @param length - The length. Must be between 0 and 16 inclusive.
 */
function numberToStringWithLeadingZero(value, length) {
    if (!isNumber(value)) {
        return 'n/a';
    }
    if (!isInteger(length)) {
        throw new TypeError('invalid length');
    }
    if (length < 0 || length > 16) {
        throw new TypeError('invalid length');
    }
    if (length === 0) {
        return value.toString();
    }
    const dummyString = '0000000000000000';
    return (dummyString + value.toString()).slice(-length);
}
class PriceFormatter {
    constructor(priceScale, minMove) {
        if (!minMove) {
            minMove = 1;
        }
        if (!isNumber(priceScale) || !isInteger(priceScale)) {
            priceScale = 100;
        }
        if (priceScale < 0) {
            throw new TypeError('invalid base');
        }
        this._private__priceScale = priceScale;
        this._private__minMove = minMove;
        this._private__calculateDecimal();
    }
    format(price) {
        // \u2212 is unicode's minus sign https://www.fileformat.info/info/unicode/char/2212/index.htm
        // we should use it because it has the same width as plus sign +
        const sign = price < 0 ? '\u2212' : '';
        price = Math.abs(price);
        return sign + this._private__formatAsDecimal(price);
    }
    _private__calculateDecimal() {
        // check if this._base is power of 10
        // for double fractional _fractionalLength if for the main fractional only
        this._internal__fractionalLength = 0;
        if (this._private__priceScale > 0 && this._private__minMove > 0) {
            let base = this._private__priceScale;
            while (base > 1) {
                base /= 10;
                this._internal__fractionalLength++;
            }
        }
    }
    _private__formatAsDecimal(price) {
        const base = this._private__priceScale / this._private__minMove;
        let intPart = Math.floor(price);
        let fracString = '';
        const fracLength = this._internal__fractionalLength !== undefined ? this._internal__fractionalLength : NaN;
        if (base > 1) {
            let fracPart = +(Math.round(price * base) - intPart * base).toFixed(this._internal__fractionalLength);
            if (fracPart >= base) {
                fracPart -= base;
                intPart += 1;
            }
            fracString = formatterOptions._internal_decimalSign + numberToStringWithLeadingZero(+fracPart.toFixed(this._internal__fractionalLength) * this._private__minMove, fracLength);
        }
        else {
            // should round int part to min move
            intPart = Math.round(intPart * base) / base;
            // if min move > 1, fractional part is always = 0
            if (fracLength > 0) {
                fracString = formatterOptions._internal_decimalSign + numberToStringWithLeadingZero(0, fracLength);
            }
        }
        return intPart.toFixed(0) + fracString;
    }
}

class PercentageFormatter extends PriceFormatter {
    constructor(priceScale = 100) {
        super(priceScale);
    }
    format(price) {
        return `${super.format(price)}%`;
    }
}

class VolumeFormatter {
    constructor(precision) {
        this._private__precision = precision;
    }
    format(vol) {
        let sign = '';
        if (vol < 0) {
            sign = '-';
            vol = -vol;
        }
        if (vol < 995) {
            return sign + this._private__formatNumber(vol);
        }
        else if (vol < 999995) {
            return sign + this._private__formatNumber(vol / 1000) + 'K';
        }
        else if (vol < 999999995) {
            vol = 1000 * Math.round(vol / 1000);
            return sign + this._private__formatNumber(vol / 1000000) + 'M';
        }
        else {
            vol = 1000000 * Math.round(vol / 1000000);
            return sign + this._private__formatNumber(vol / 1000000000) + 'B';
        }
    }
    _private__formatNumber(value) {
        let res;
        const priceScale = Math.pow(10, this._private__precision);
        value = Math.round(value * priceScale) / priceScale;
        if (value >= 1e-15 && value < 1) {
            res = value.toFixed(this._private__precision).replace(/\.?0+$/, ''); // regex removes trailing zeroes
        }
        else {
            res = String(value);
        }
        return res.replace(/(\.[1-9]*)0+$/, (e, p1) => p1);
    }
}

/**
 * BEWARE: The method must be called after beginPath and before stroke/fill/closePath/etc
 */
function walkLine(ctx, points, lineType, visibleRange) {
    if (points.length === 0) {
        return;
    }
    const x = points[visibleRange.from]._internal_x;
    const y = points[visibleRange.from]._internal_y;
    ctx.moveTo(x, y);
    for (let i = visibleRange.from + 1; i < visibleRange.to; ++i) {
        const currItem = points[i];
        switch (lineType) {
            case 0 /* Simple */:
                ctx.lineTo(currItem._internal_x, currItem._internal_y);
                break;
            case 1 /* WithSteps */: {
                ctx.lineTo(currItem._internal_x, points[i - 1]._internal_y);
                ctx.lineTo(currItem._internal_x, currItem._internal_y);
                break;
            }
            case 2 /* Curved */: {
                const [cp1, cp2] = getControlPoints(points, i - 1, i);
                ctx.bezierCurveTo(cp1._internal_x, cp1._internal_y, cp2._internal_x, cp2._internal_y, currItem._internal_x, currItem._internal_y);
                break;
            }
        }
    }
}
const curveTension = 6;
function subtract(p1, p2) {
    return { _internal_x: p1._internal_x - p2._internal_x, _internal_y: p1._internal_y - p2._internal_y };
}
function add(p1, p2) {
    return { _internal_x: p1._internal_x + p2._internal_x, _internal_y: p1._internal_y + p2._internal_y };
}
function divide(p1, n) {
    return { _internal_x: p1._internal_x / n, _internal_y: p1._internal_y / n };
}
/**
 * @returns Two control points that can be used as arguments to {@link CanvasRenderingContext2D.bezierCurveTo} to draw a curved line between `points[fromPointIndex]` and `points[toPointIndex]`.
 */
function getControlPoints(points, fromPointIndex, toPointIndex) {
    const beforeFromPointIndex = Math.max(0, fromPointIndex - 1);
    const afterToPointIndex = Math.min(points.length - 1, toPointIndex + 1);
    const cp1 = add(points[fromPointIndex], divide(subtract(points[toPointIndex], points[beforeFromPointIndex]), curveTension));
    const cp2 = subtract(points[toPointIndex], divide(subtract(points[afterToPointIndex], points[fromPointIndex]), curveTension));
    return [cp1, cp2];
}

class PaneRendererAreaBase extends ScaledRenderer {
    constructor() {
        super(...arguments);
        this._internal__data = null;
    }
    _internal_setData(data) {
        this._internal__data = data;
    }
    _internal__drawImpl(ctx) {
        if (this._internal__data === null || this._internal__data._internal_items.length === 0 || this._internal__data._internal_visibleRange === null) {
            return;
        }
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'round';
        ctx.lineWidth = this._internal__data._internal_lineWidth;
        setLineStyle(ctx, this._internal__data._internal_lineStyle);
        // walk lines with width=1 to have more accurate gradient's filling
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (this._internal__data._internal_items.length === 1) {
            const point = this._internal__data._internal_items[0];
            const halfBarWidth = this._internal__data._internal_barWidth / 2;
            ctx.moveTo(point.x - halfBarWidth, this._internal__data._internal_baseLevelCoordinate);
            ctx.lineTo(point.x - halfBarWidth, point.y);
            ctx.lineTo(point.x + halfBarWidth, point.y);
            ctx.lineTo(point.x + halfBarWidth, this._internal__data._internal_baseLevelCoordinate);
        }
        else {
            ctx.moveTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].x, this._internal__data._internal_baseLevelCoordinate);
            ctx.lineTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].x, this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].y);
            walkLine(ctx, this._internal__data._internal_items, this._internal__data._internal_lineType, this._internal__data._internal_visibleRange);
            if (this._internal__data._internal_visibleRange.to > this._internal__data._internal_visibleRange.from) {
                ctx.lineTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.to - 1].x, this._internal__data._internal_baseLevelCoordinate);
                ctx.lineTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].x, this._internal__data._internal_baseLevelCoordinate);
            }
        }
        ctx.closePath();
        ctx.fillStyle = this._internal__fillStyle(ctx);
        ctx.fill();
    }
}
class PaneRendererArea extends PaneRendererAreaBase {
    _internal__fillStyle(ctx) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const data = this._internal__data;
        const gradient = ctx.createLinearGradient(0, 0, 0, data._internal_bottom);
        gradient.addColorStop(0, data._internal_topColor);
        gradient.addColorStop(1, data._internal_bottomColor);
        return gradient;
    }
}

class PaneRendererLineBase extends ScaledRenderer {
    constructor() {
        super(...arguments);
        this._internal__data = null;
    }
    _internal_setData(data) {
        this._internal__data = data;
    }
    _internal__drawImpl(ctx) {
        if (this._internal__data === null || this._internal__data._internal_items.length === 0 || this._internal__data._internal_visibleRange === null) {
            return;
        }
        ctx.lineCap = 'butt';
        ctx.lineWidth = this._internal__data._internal_lineWidth;
        setLineStyle(ctx, this._internal__data._internal_lineStyle);
        ctx.strokeStyle = this._internal__strokeStyle(ctx);
        ctx.lineJoin = 'round';
        if (this._internal__data._internal_items.length === 1) {
            ctx.beginPath();
            const point = this._internal__data._internal_items[0];
            ctx.moveTo(point.x - this._internal__data._internal_barWidth / 2, point.y);
            ctx.lineTo(point.x + this._internal__data._internal_barWidth / 2, point.y);
            if (point._internal_color !== undefined) {
                ctx.strokeStyle = point._internal_color;
            }
            ctx.stroke();
        }
        else {
            this._internal__drawLine(ctx, this._internal__data);
        }
    }
    _internal__drawLine(ctx, data) {
        ctx.beginPath();
        walkLine(ctx, data._internal_items, data._internal_lineType, data._internal_visibleRange);
        ctx.stroke();
    }
}
class PaneRendererLine extends PaneRendererLineBase {
    /**
     * Similar to {@link walkLine}, but supports color changes
     */
    _internal__drawLine(ctx, data) {
        var _a, _b;
        const { _internal_items: items, _internal_visibleRange: visibleRange, _internal_lineType: lineType, _internal_lineColor: lineColor } = data;
        if (items.length === 0 || visibleRange === null) {
            return;
        }
        ctx.beginPath();
        const firstItem = items[visibleRange.from];
        ctx.moveTo(firstItem.x, firstItem.y);
        let prevStrokeStyle = (_a = firstItem._internal_color) !== null && _a !== void 0 ? _a : lineColor;
        ctx.strokeStyle = prevStrokeStyle;
        const changeColor = (color) => {
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = color;
            prevStrokeStyle = color;
        };
        for (let i = visibleRange.from + 1; i < visibleRange.to; ++i) {
            const currItem = items[i];
            const currentStrokeStyle = (_b = currItem._internal_color) !== null && _b !== void 0 ? _b : lineColor;
            switch (lineType) {
                case 0 /* Simple */:
                    ctx.lineTo(currItem.x, currItem.y);
                    break;
                case 1 /* WithSteps */:
                    ctx.lineTo(currItem.x, items[i - 1].y);
                    if (currentStrokeStyle !== prevStrokeStyle) {
                        changeColor(currentStrokeStyle);
                        ctx.lineTo(currItem.x, items[i - 1].y);
                    }
                    ctx.lineTo(currItem.x, currItem.y);
                    break;
                case 2 /* Curved */: {
                    const [cp1, cp2] = getControlPoints(items, i - 1, i);
                    ctx.bezierCurveTo(cp1._internal_x, cp1._internal_y, cp2._internal_x, cp2._internal_y, currItem.x, currItem.y);
                    break;
                }
            }
            if (lineType !== 1 /* WithSteps */ && currentStrokeStyle !== prevStrokeStyle) {
                changeColor(currentStrokeStyle);
                ctx.moveTo(currItem.x, currItem.y);
            }
        }
        ctx.stroke();
    }
    _internal__strokeStyle() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._internal__data._internal_lineColor;
    }
}

/**
 * Binary function that accepts two arguments (the first of the type of array elements, and the second is always val), and returns a value convertible to bool.
 * The value returned indicates whether the first argument is considered to go before the second.
 * The function shall not modify any of its arguments.
 */
function lowerbound(arr, value, compare, start = 0, to = arr.length) {
    let count = to - start;
    while (0 < count) {
        const count2 = (count >> 1);
        const mid = start + count2;
        if (compare(arr[mid], value)) {
            start = mid + 1;
            count -= count2 + 1;
        }
        else {
            count = count2;
        }
    }
    return start;
}
function upperbound(arr, value, compare, start = 0, to = arr.length) {
    let count = to - start;
    while (0 < count) {
        const count2 = (count >> 1);
        const mid = start + count2;
        if (!(compare(value, arr[mid]))) {
            start = mid + 1;
            count -= count2 + 1;
        }
        else {
            count = count2;
        }
    }
    return start;
}

function lowerBoundItemsCompare(item, time) {
    return item.time < time;
}
function upperBoundItemsCompare(time, item) {
    return time < item.time;
}
function visibleTimedValues(items, range, extendedRange) {
    const firstBar = range.left();
    const lastBar = range.right();
    const from = lowerbound(items, firstBar, lowerBoundItemsCompare);
    const to = upperbound(items, lastBar, upperBoundItemsCompare);
    if (!extendedRange) {
        return { from, to };
    }
    let extendedFrom = from;
    let extendedTo = to;
    if (from > 0 && from < items.length && items[from].time >= firstBar) {
        extendedFrom = from - 1;
    }
    if (to > 0 && to < items.length && items[to - 1].time <= lastBar) {
        extendedTo = to + 1;
    }
    return { from: extendedFrom, to: extendedTo };
}

class SeriesPaneViewBase {
    constructor(series, model, extendedVisibleRange) {
        this._internal__invalidated = true;
        this._internal__dataInvalidated = true;
        this._internal__optionsInvalidated = true;
        this._internal__items = [];
        this._internal__itemsVisibleRange = null;
        this._internal__series = series;
        this._internal__model = model;
        this._private__extendedVisibleRange = extendedVisibleRange;
    }
    update(updateType) {
        this._internal__invalidated = true;
        if (updateType === 'data') {
            this._internal__dataInvalidated = true;
        }
        if (updateType === 'options') {
            this._internal__optionsInvalidated = true;
        }
    }
    _internal__makeValid() {
        if (this._internal__dataInvalidated) {
            this._internal__fillRawPoints();
            this._internal__dataInvalidated = false;
        }
        if (this._internal__invalidated) {
            this._internal__updatePoints();
            this._internal__invalidated = false;
        }
        if (this._internal__optionsInvalidated) {
            this._internal__updateOptions();
            this._internal__optionsInvalidated = false;
        }
    }
    _internal__clearVisibleRange() {
        this._internal__itemsVisibleRange = null;
    }
    _internal__updatePoints() {
        const priceScale = this._internal__series.priceScale();
        const timeScale = this._internal__model.timeScale();
        this._internal__clearVisibleRange();
        if (timeScale.isEmpty() || priceScale.isEmpty()) {
            return;
        }
        const visibleBars = timeScale.visibleStrictRange();
        if (visibleBars === null) {
            return;
        }
        if (this._internal__series.bars().size() === 0) {
            return;
        }
        const firstValue = this._internal__series.firstValue();
        if (firstValue === null) {
            return;
        }
        this._internal__itemsVisibleRange = visibleTimedValues(this._internal__items, visibleBars, this._private__extendedVisibleRange);
        this._internal__convertToCoordinates(priceScale, timeScale, firstValue.value);
    }
}

class LinePaneViewBase extends SeriesPaneViewBase {
    constructor(series, model) {
        super(series, model, true);
    }
    _internal__convertToCoordinates(priceScale, timeScale, firstValue) {
        timeScale.indexesToCoordinates(this._internal__items, undefinedIfNull(this._internal__itemsVisibleRange));
        priceScale.pointsArrayToCoordinates(this._internal__items, firstValue, undefinedIfNull(this._internal__itemsVisibleRange));
    }
    _internal__createRawItemBase(time, price) {
        return {
            time: time,
            price: price,
            x: NaN,
            y: NaN,
        };
    }
    _internal__updateOptions() { }
    _internal__fillRawPoints() {
        const colorer = this._internal__series.barColorer();
        this._internal__items = this._internal__series.bars().rows().map((row) => {
            const value = row.value[3 /* Close */];
            return this._internal__createRawItem(row.index, value, colorer);
        });
    }
}

class SeriesAreaPaneView extends LinePaneViewBase {
    constructor(series, model) {
        super(series, model);
        this._private__renderer = new CompositeRenderer();
        this._private__areaRenderer = new PaneRendererArea();
        this._private__lineRenderer = new PaneRendererLine();
        this._private__renderer._internal_setRenderers([this._private__areaRenderer, this._private__lineRenderer]);
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        const areaStyleProperties = this._internal__series.options();
        this._internal__makeValid();
        this._private__areaRenderer._internal_setData({
            _internal_lineType: areaStyleProperties.lineType,
            _internal_items: this._internal__items,
            _internal_lineStyle: areaStyleProperties.lineStyle,
            _internal_lineWidth: areaStyleProperties.lineWidth,
            _internal_topColor: areaStyleProperties.topColor,
            _internal_bottomColor: areaStyleProperties.bottomColor,
            _internal_baseLevelCoordinate: height,
            _internal_bottom: height,
            _internal_visibleRange: this._internal__itemsVisibleRange,
            _internal_barWidth: this._internal__model.timeScale().barSpacing(),
        });
        this._private__lineRenderer._internal_setData({
            _internal_lineType: areaStyleProperties.lineType,
            _internal_items: this._internal__items,
            _internal_lineColor: areaStyleProperties.lineColor,
            _internal_lineStyle: areaStyleProperties.lineStyle,
            _internal_lineWidth: areaStyleProperties.lineWidth,
            _internal_visibleRange: this._internal__itemsVisibleRange,
            _internal_barWidth: this._internal__model.timeScale().barSpacing(),
        });
        return this._private__renderer;
    }
    _internal__createRawItem(time, price) {
        return this._internal__createRawItemBase(time, price);
    }
}

function optimalBarWidth(barSpacing, pixelRatio) {
    return Math.floor(barSpacing * 0.3 * pixelRatio);
}
function optimalCandlestickWidth(barSpacing, pixelRatio) {
    const barSpacingSpecialCaseFrom = 2.5;
    const barSpacingSpecialCaseTo = 4;
    const barSpacingSpecialCaseCoeff = 3;
    if (barSpacing >= barSpacingSpecialCaseFrom && barSpacing <= barSpacingSpecialCaseTo) {
        return Math.floor(barSpacingSpecialCaseCoeff * pixelRatio);
    }
    // coeff should be 1 on small barspacing and go to 0.8 while groing bar spacing
    const barSpacingReducingCoeff = 0.2;
    const coeff = 1 - barSpacingReducingCoeff * Math.atan(Math.max(barSpacingSpecialCaseTo, barSpacing) - barSpacingSpecialCaseTo) / (Math.PI * 0.5);
    const res = Math.floor(barSpacing * coeff * pixelRatio);
    const scaledBarSpacing = Math.floor(barSpacing * pixelRatio);
    const optimal = Math.min(res, scaledBarSpacing);
    return Math.max(Math.floor(pixelRatio), optimal);
}

class PaneRendererBars {
    constructor() {
        this._private__data = null;
        this._private__barWidth = 0;
        this._private__barLineWidth = 0;
    }
    _internal_setData(data) {
        this._private__data = data;
    }
    // eslint-disable-next-line complexity
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        if (this._private__data === null || this._private__data._internal_bars.length === 0 || this._private__data._internal_visibleRange === null) {
            return;
        }
        this._private__barWidth = this._private__calcBarWidth(pixelRatio);
        // grid and crosshair have line width = Math.floor(pixelRatio)
        // if this value is odd, we have to make bars' width odd
        // if this value is even, we have to make bars' width even
        // in order of keeping crosshair-over-bar drawing symmetric
        if (this._private__barWidth >= 2) {
            const lineWidth = Math.max(1, Math.floor(pixelRatio));
            if ((lineWidth % 2) !== (this._private__barWidth % 2)) {
                this._private__barWidth--;
            }
        }
        // if scale is compressed, bar could become less than 1 CSS pixel
        this._private__barLineWidth = this._private__data._internal_thinBars ? Math.min(this._private__barWidth, Math.floor(pixelRatio)) : this._private__barWidth;
        let prevColor = null;
        const drawOpenClose = this._private__barLineWidth <= this._private__barWidth && this._private__data._internal_barSpacing >= Math.floor(1.5 * pixelRatio);
        for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; ++i) {
            const bar = this._private__data._internal_bars[i];
            if (prevColor !== bar._internal_color) {
                ctx.fillStyle = bar._internal_color;
                prevColor = bar._internal_color;
            }
            const bodyWidthHalf = Math.floor(this._private__barLineWidth * 0.5);
            const bodyCenter = Math.round(bar.x * pixelRatio);
            const bodyLeft = bodyCenter - bodyWidthHalf;
            const bodyWidth = this._private__barLineWidth;
            const bodyRight = bodyLeft + bodyWidth - 1;
            const high = Math.min(bar.highY, bar.lowY);
            const low = Math.max(bar.highY, bar.lowY);
            const bodyTop = Math.round(high * pixelRatio) - bodyWidthHalf;
            const bodyBottom = Math.round(low * pixelRatio) + bodyWidthHalf;
            const bodyHeight = Math.max((bodyBottom - bodyTop), this._private__barLineWidth);
            ctx.fillRect(bodyLeft, bodyTop, bodyWidth, bodyHeight);
            const sideWidth = Math.ceil(this._private__barWidth * 1.5);
            if (drawOpenClose) {
                if (this._private__data._internal_openVisible) {
                    const openLeft = bodyCenter - sideWidth;
                    let openTop = Math.max(bodyTop, Math.round(bar.openY * pixelRatio) - bodyWidthHalf);
                    let openBottom = openTop + bodyWidth - 1;
                    if (openBottom > bodyTop + bodyHeight - 1) {
                        openBottom = bodyTop + bodyHeight - 1;
                        openTop = openBottom - bodyWidth + 1;
                    }
                    ctx.fillRect(openLeft, openTop, bodyLeft - openLeft, openBottom - openTop + 1);
                }
                const closeRight = bodyCenter + sideWidth;
                let closeTop = Math.max(bodyTop, Math.round(bar.closeY * pixelRatio) - bodyWidthHalf);
                let closeBottom = closeTop + bodyWidth - 1;
                if (closeBottom > bodyTop + bodyHeight - 1) {
                    closeBottom = bodyTop + bodyHeight - 1;
                    closeTop = closeBottom - bodyWidth + 1;
                }
                ctx.fillRect(bodyRight + 1, closeTop, closeRight - bodyRight, closeBottom - closeTop + 1);
            }
        }
    }
    _private__calcBarWidth(pixelRatio) {
        const limit = Math.floor(pixelRatio);
        return Math.max(limit, Math.floor(optimalBarWidth(ensureNotNull(this._private__data)._internal_barSpacing, pixelRatio)));
    }
}

class BarsPaneViewBase extends SeriesPaneViewBase {
    constructor(series, model) {
        super(series, model, false);
    }
    _internal__convertToCoordinates(priceScale, timeScale, firstValue) {
        timeScale.indexesToCoordinates(this._internal__items, undefinedIfNull(this._internal__itemsVisibleRange));
        priceScale.barPricesToCoordinates(this._internal__items, firstValue, undefinedIfNull(this._internal__itemsVisibleRange));
    }
    _internal__createDefaultItem(time, bar, colorer) {
        return {
            time: time,
            open: bar.value[0 /* Open */],
            high: bar.value[1 /* High */],
            low: bar.value[2 /* Low */],
            close: bar.value[3 /* Close */],
            x: NaN,
            openY: NaN,
            highY: NaN,
            lowY: NaN,
            closeY: NaN,
        };
    }
    _internal__fillRawPoints() {
        const colorer = this._internal__series.barColorer();
        this._internal__items = this._internal__series.bars().rows().map((row) => this._internal__createRawItem(row.index, row, colorer));
    }
}

class SeriesBarsPaneView extends BarsPaneViewBase {
    constructor() {
        super(...arguments);
        this._private__renderer = new PaneRendererBars();
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        const barStyleProps = this._internal__series.options();
        this._internal__makeValid();
        const data = {
            _internal_bars: this._internal__items,
            _internal_barSpacing: this._internal__model.timeScale().barSpacing(),
            _internal_openVisible: barStyleProps.openVisible,
            _internal_thinBars: barStyleProps.thinBars,
            _internal_visibleRange: this._internal__itemsVisibleRange,
        };
        this._private__renderer._internal_setData(data);
        return this._private__renderer;
    }
    _internal__updateOptions() {
        this._internal__items.forEach((item) => {
            item._internal_color = this._internal__series.barColorer().barStyle(item.time).barColor;
        });
    }
    _internal__createRawItem(time, bar, colorer) {
        return Object.assign(Object.assign({}, this._internal__createDefaultItem(time, bar, colorer)), { _internal_color: colorer.barStyle(time).barColor });
    }
}

function clamp(value, minVal, maxVal) {
    return Math.min(Math.max(value, minVal), maxVal);
}
function isBaseDecimal(value) {
    if (value < 0) {
        return false;
    }
    for (let current = value; current > 1; current /= 10) {
        if ((current % 10) !== 0) {
            return false;
        }
    }
    return true;
}
function greaterOrEqual(x1, x2, epsilon) {
    return (x2 - x1) <= epsilon;
}
function equal(x1, x2, epsilon) {
    return Math.abs(x1 - x2) < epsilon;
}
function log10(x) {
    if (x <= 0) {
        return NaN;
    }
    return Math.log(x) / Math.log(10);
}
function min(arr) {
    if (arr.length < 1) {
        throw Error('array is empty');
    }
    let minVal = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}
function ceiledEven(x) {
    const ceiled = Math.ceil(x);
    return (ceiled % 2 !== 0) ? ceiled - 1 : ceiled;
}
function ceiledOdd(x) {
    const ceiled = Math.ceil(x);
    return (ceiled % 2 === 0) ? ceiled - 1 : ceiled;
}

class PaneRendererBaselineArea extends PaneRendererAreaBase {
    _internal__fillStyle(ctx) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const data = this._internal__data;
        const gradient = ctx.createLinearGradient(0, 0, 0, data._internal_bottom);
        const baselinePercent = clamp(data._internal_baseLevelCoordinate / data._internal_bottom, 0, 1);
        gradient.addColorStop(0, data._internal_topFillColor1);
        gradient.addColorStop(baselinePercent, data._internal_topFillColor2);
        gradient.addColorStop(baselinePercent, data._internal_bottomFillColor1);
        gradient.addColorStop(1, data._internal_bottomFillColor2);
        return gradient;
    }
}
class PaneRendererBaselineLine extends PaneRendererLineBase {
    _internal__strokeStyle(ctx) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const data = this._internal__data;
        const gradient = ctx.createLinearGradient(0, 0, 0, data._internal_bottom);
        const baselinePercent = clamp(data._internal_baseLevelCoordinate / data._internal_bottom, 0, 1);
        gradient.addColorStop(0, data._internal_topColor);
        gradient.addColorStop(baselinePercent, data._internal_topColor);
        gradient.addColorStop(baselinePercent, data._internal_bottomColor);
        gradient.addColorStop(1, data._internal_bottomColor);
        return gradient;
    }
}

class SeriesBaselinePaneView extends LinePaneViewBase {
    constructor(series, model) {
        super(series, model);
        this._private__baselineAreaRenderer = new PaneRendererBaselineArea();
        this._private__baselineLineRenderer = new PaneRendererBaselineLine();
        this._private__compositeRenderer = new CompositeRenderer();
        this._private__compositeRenderer._internal_setRenderers([this._private__baselineAreaRenderer, this._private__baselineLineRenderer]);
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        const firstValue = this._internal__series.firstValue();
        if (firstValue === null) {
            return null;
        }
        const baselineProps = this._internal__series.options();
        this._internal__makeValid();
        const baseLevelCoordinate = this._internal__series.priceScale().priceToCoordinate(baselineProps.baseValue.price, firstValue.value);
        const barWidth = this._internal__model.timeScale().barSpacing();
        this._private__baselineAreaRenderer._internal_setData({
            _internal_items: this._internal__items,
            _internal_topFillColor1: baselineProps.topFillColor1,
            _internal_topFillColor2: baselineProps.topFillColor2,
            _internal_bottomFillColor1: baselineProps.bottomFillColor1,
            _internal_bottomFillColor2: baselineProps.bottomFillColor2,
            _internal_lineWidth: baselineProps.lineWidth,
            _internal_lineStyle: baselineProps.lineStyle,
            _internal_lineType: baselineProps.lineType,
            _internal_baseLevelCoordinate: baseLevelCoordinate,
            _internal_bottom: height,
            _internal_visibleRange: this._internal__itemsVisibleRange,
            _internal_barWidth: barWidth,
        });
        this._private__baselineLineRenderer._internal_setData({
            _internal_items: this._internal__items,
            _internal_topColor: baselineProps.topLineColor,
            _internal_bottomColor: baselineProps.bottomLineColor,
            _internal_lineWidth: baselineProps.lineWidth,
            _internal_lineStyle: baselineProps.lineStyle,
            _internal_lineType: baselineProps.lineType,
            _internal_baseLevelCoordinate: baseLevelCoordinate,
            _internal_bottom: height,
            _internal_visibleRange: this._internal__itemsVisibleRange,
            _internal_barWidth: barWidth,
        });
        return this._private__compositeRenderer;
    }
    _internal__createRawItem(time, price) {
        return this._internal__createRawItemBase(time, price);
    }
}

class PaneRendererCandlesticks {
    constructor() {
        this._private__data = null;
        // scaled with pixelRatio
        this._private__barWidth = 0;
    }
    _internal_setData(data) {
        this._private__data = data;
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        if (this._private__data === null || this._private__data._internal_bars.length === 0 || this._private__data._internal_visibleRange === null) {
            return;
        }
        // now we know pixelRatio and we could calculate barWidth effectively
        this._private__barWidth = optimalCandlestickWidth(this._private__data._internal_barSpacing, pixelRatio);
        // grid and crosshair have line width = Math.floor(pixelRatio)
        // if this value is odd, we have to make candlesticks' width odd
        // if this value is even, we have to make candlesticks' width even
        // in order of keeping crosshair-over-candlesticks drawing symmetric
        if (this._private__barWidth >= 2) {
            const wickWidth = Math.floor(pixelRatio);
            if ((wickWidth % 2) !== (this._private__barWidth % 2)) {
                this._private__barWidth--;
            }
        }
        const bars = this._private__data._internal_bars;
        if (this._private__data._internal_wickVisible) {
            this._private__drawWicks(ctx, bars, this._private__data._internal_visibleRange, pixelRatio);
        }
        if (this._private__data._internal_borderVisible) {
            this._private__drawBorder(ctx, bars, this._private__data._internal_visibleRange, this._private__data._internal_barSpacing, pixelRatio);
        }
        const borderWidth = this._private__calculateBorderWidth(pixelRatio);
        if (!this._private__data._internal_borderVisible || this._private__barWidth > borderWidth * 2) {
            this._private__drawCandles(ctx, bars, this._private__data._internal_visibleRange, pixelRatio);
        }
    }
    _private__drawWicks(ctx, bars, visibleRange, pixelRatio) {
        if (this._private__data === null) {
            return;
        }
        let prevWickColor = '';
        let wickWidth = Math.min(Math.floor(pixelRatio), Math.floor(this._private__data._internal_barSpacing * pixelRatio));
        wickWidth = Math.max(Math.floor(pixelRatio), Math.min(wickWidth, this._private__barWidth));
        const wickOffset = Math.floor(wickWidth * 0.5);
        let prevEdge = null;
        for (let i = visibleRange.from; i < visibleRange.to; i++) {
            const bar = bars[i];
            if (bar._internal_wickColor !== prevWickColor) {
                ctx.fillStyle = bar._internal_wickColor;
                prevWickColor = bar._internal_wickColor;
            }
            const top = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
            const bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
            const high = Math.round(bar.highY * pixelRatio);
            const low = Math.round(bar.lowY * pixelRatio);
            const scaledX = Math.round(pixelRatio * bar.x);
            let left = scaledX - wickOffset;
            const right = left + wickWidth - 1;
            if (prevEdge !== null) {
                left = Math.max(prevEdge + 1, left);
                left = Math.min(left, right);
            }
            const width = right - left + 1;
            ctx.fillRect(left, high, width, top - high);
            ctx.fillRect(left, bottom + 1, width, low - bottom);
            prevEdge = right;
        }
    }
    _private__calculateBorderWidth(pixelRatio) {
        let borderWidth = Math.floor(1 /* BarBorderWidth */ * pixelRatio);
        if (this._private__barWidth <= 2 * borderWidth) {
            borderWidth = Math.floor((this._private__barWidth - 1) * 0.5);
        }
        const res = Math.max(Math.floor(pixelRatio), borderWidth);
        if (this._private__barWidth <= res * 2) {
            // do not draw bodies, restore original value
            return Math.max(Math.floor(pixelRatio), Math.floor(1 /* BarBorderWidth */ * pixelRatio));
        }
        return res;
    }
    _private__drawBorder(ctx, bars, visibleRange, barSpacing, pixelRatio) {
        if (this._private__data === null) {
            return;
        }
        let prevBorderColor = '';
        const borderWidth = this._private__calculateBorderWidth(pixelRatio);
        let prevEdge = null;
        for (let i = visibleRange.from; i < visibleRange.to; i++) {
            const bar = bars[i];
            if (bar._internal_borderColor !== prevBorderColor) {
                ctx.fillStyle = bar._internal_borderColor;
                prevBorderColor = bar._internal_borderColor;
            }
            let left = Math.round(bar.x * pixelRatio) - Math.floor(this._private__barWidth * 0.5);
            // this is important to calculate right before patching left
            const right = left + this._private__barWidth - 1;
            const top = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
            const bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
            if (prevEdge !== null) {
                left = Math.max(prevEdge + 1, left);
                left = Math.min(left, right);
            }
            if (this._private__data._internal_barSpacing * pixelRatio > 2 * borderWidth) {
                fillRectInnerBorder(ctx, left, top, right - left + 1, bottom - top + 1, borderWidth);
            }
            else {
                const width = right - left + 1;
                ctx.fillRect(left, top, width, bottom - top + 1);
            }
            prevEdge = right;
        }
    }
    _private__drawCandles(ctx, bars, visibleRange, pixelRatio) {
        if (this._private__data === null) {
            return;
        }
        let prevBarColor = '';
        const borderWidth = this._private__calculateBorderWidth(pixelRatio);
        for (let i = visibleRange.from; i < visibleRange.to; i++) {
            const bar = bars[i];
            let top = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
            let bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
            let left = Math.round(bar.x * pixelRatio) - Math.floor(this._private__barWidth * 0.5);
            let right = left + this._private__barWidth - 1;
            if (bar._internal_color !== prevBarColor) {
                const barColor = bar._internal_color;
                ctx.fillStyle = barColor;
                prevBarColor = barColor;
            }
            if (this._private__data._internal_borderVisible) {
                left += borderWidth;
                top += borderWidth;
                right -= borderWidth;
                bottom -= borderWidth;
            }
            if (top > bottom) {
                continue;
            }
            ctx.fillRect(left, top, right - left + 1, bottom - top + 1);
        }
    }
}

class SeriesCandlesticksPaneView extends BarsPaneViewBase {
    constructor() {
        super(...arguments);
        this._private__renderer = new PaneRendererCandlesticks();
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        const candlestickStyleProps = this._internal__series.options();
        this._internal__makeValid();
        const data = {
            _internal_bars: this._internal__items,
            _internal_barSpacing: this._internal__model.timeScale().barSpacing(),
            _internal_wickVisible: candlestickStyleProps.wickVisible,
            _internal_borderVisible: candlestickStyleProps.borderVisible,
            _internal_visibleRange: this._internal__itemsVisibleRange,
        };
        this._private__renderer._internal_setData(data);
        return this._private__renderer;
    }
    _internal__updateOptions() {
        this._internal__items.forEach((item) => {
            const style = this._internal__series.barColorer().barStyle(item.time);
            item._internal_color = style.barColor;
            item._internal_wickColor = style.barWickColor;
            item._internal_borderColor = style.barBorderColor;
        });
    }
    _internal__createRawItem(time, bar, colorer) {
        const style = colorer.barStyle(time);
        return Object.assign(Object.assign({}, this._internal__createDefaultItem(time, bar, colorer)), { _internal_color: style.barColor, _internal_wickColor: style.barWickColor, _internal_borderColor: style.barBorderColor });
    }
}

const showSpacingMinimalBarWidth = 1;
const alignToMinimalWidthLimit = 4;
class PaneRendererHistogram {
    constructor() {
        this._private__data = null;
        this._private__precalculatedCache = [];
    }
    _internal_setData(data) {
        this._private__data = data;
        this._private__precalculatedCache = [];
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        if (this._private__data === null || this._private__data._internal_items.length === 0 || this._private__data._internal_visibleRange === null) {
            return;
        }
        if (!this._private__precalculatedCache.length) {
            this._private__fillPrecalculatedCache(pixelRatio);
        }
        const tickWidth = Math.max(1, Math.floor(pixelRatio));
        const histogramBase = Math.round((this._private__data._internal_histogramBase) * pixelRatio);
        const topHistogramBase = histogramBase - Math.floor(tickWidth / 2);
        const bottomHistogramBase = topHistogramBase + tickWidth;
        for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
            const item = this._private__data._internal_items[i];
            const current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
            const y = Math.round(item.y * pixelRatio);
            ctx.fillStyle = item._internal_color;
            let top;
            let bottom;
            if (y <= topHistogramBase) {
                top = y;
                bottom = bottomHistogramBase;
            }
            else {
                top = topHistogramBase;
                bottom = y - Math.floor(tickWidth / 2) + tickWidth;
            }
            ctx.fillRect(current._internal_left, top, current._internal_right - current._internal_left + 1, bottom - top);
        }
    }
    // eslint-disable-next-line complexity
    _private__fillPrecalculatedCache(pixelRatio) {
        if (this._private__data === null || this._private__data._internal_items.length === 0 || this._private__data._internal_visibleRange === null) {
            this._private__precalculatedCache = [];
            return;
        }
        const spacing = Math.ceil(this._private__data._internal_barSpacing * pixelRatio) <= showSpacingMinimalBarWidth ? 0 : Math.max(1, Math.floor(pixelRatio));
        const columnWidth = Math.round(this._private__data._internal_barSpacing * pixelRatio) - spacing;
        this._private__precalculatedCache = new Array(this._private__data._internal_visibleRange.to - this._private__data._internal_visibleRange.from);
        for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
            const item = this._private__data._internal_items[i];
            // force cast to avoid ensureDefined call
            const x = Math.round(item.x * pixelRatio);
            let left;
            let right;
            if (columnWidth % 2) {
                const halfWidth = (columnWidth - 1) / 2;
                left = x - halfWidth;
                right = x + halfWidth;
            }
            else {
                // shift pixel to left
                const halfWidth = columnWidth / 2;
                left = x - halfWidth;
                right = x + halfWidth - 1;
            }
            this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from] = {
                _internal_left: left,
                _internal_right: right,
                _internal_roundedCenter: x,
                _internal_center: (item.x * pixelRatio),
                _internal_time: item.time,
            };
        }
        // correct positions
        for (let i = this._private__data._internal_visibleRange.from + 1; i < this._private__data._internal_visibleRange.to; i++) {
            const current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
            const prev = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from - 1];
            if (current._internal_time !== prev._internal_time + 1) {
                continue;
            }
            if (current._internal_left - prev._internal_right !== (spacing + 1)) {
                // have to align
                if (prev._internal_roundedCenter > prev._internal_center) {
                    // prev wasshifted to left, so add pixel to right
                    prev._internal_right = current._internal_left - spacing - 1;
                }
                else {
                    // extend current to left
                    current._internal_left = prev._internal_right + spacing + 1;
                }
            }
        }
        let minWidth = Math.ceil(this._private__data._internal_barSpacing * pixelRatio);
        for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
            const current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
            // this could happen if barspacing < 1
            if (current._internal_right < current._internal_left) {
                current._internal_right = current._internal_left;
            }
            const width = current._internal_right - current._internal_left + 1;
            minWidth = Math.min(width, minWidth);
        }
        if (spacing > 0 && minWidth < alignToMinimalWidthLimit) {
            for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                const current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
                const width = current._internal_right - current._internal_left + 1;
                if (width > minWidth) {
                    if (current._internal_roundedCenter > current._internal_center) {
                        current._internal_right -= 1;
                    }
                    else {
                        current._internal_left += 1;
                    }
                }
            }
        }
    }
}

function createEmptyHistogramData(barSpacing) {
    return {
        _internal_items: [],
        _internal_barSpacing: barSpacing,
        _internal_histogramBase: NaN,
        _internal_visibleRange: null,
    };
}
function createRawItem(time, price, color) {
    return {
        time: time,
        price: price,
        x: NaN,
        y: NaN,
        _internal_color: color,
    };
}
class SeriesHistogramPaneView extends SeriesPaneViewBase {
    constructor(series, model) {
        super(series, model, false);
        this._private__compositeRenderer = new CompositeRenderer();
        this._private__histogramData = createEmptyHistogramData(0);
        this._private__renderer = new PaneRendererHistogram();
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        this._internal__makeValid();
        return this._private__compositeRenderer;
    }
    _internal__fillRawPoints() {
        const barSpacing = this._internal__model.timeScale().barSpacing();
        this._private__histogramData = createEmptyHistogramData(barSpacing);
        let targetIndex = 0;
        let itemIndex = 0;
        const defaultColor = this._internal__series.options().color;
        for (const row of this._internal__series.bars().rows()) {
            const value = row.value[3 /* Close */];
            const color = row.color !== undefined ? row.color : defaultColor;
            const item = createRawItem(row.index, value, color);
            targetIndex++;
            if (targetIndex < this._private__histogramData._internal_items.length) {
                this._private__histogramData._internal_items[targetIndex] = item;
            }
            else {
                this._private__histogramData._internal_items.push(item);
            }
            this._internal__items[itemIndex++] = { time: row.index, x: 0 };
        }
        this._private__renderer._internal_setData(this._private__histogramData);
        this._private__compositeRenderer._internal_setRenderers([this._private__renderer]);
    }
    _internal__updateOptions() { }
    _internal__clearVisibleRange() {
        super._internal__clearVisibleRange();
        this._private__histogramData._internal_visibleRange = null;
    }
    _internal__convertToCoordinates(priceScale, timeScale, firstValue) {
        if (this._internal__itemsVisibleRange === null) {
            return;
        }
        const barSpacing = timeScale.barSpacing();
        const visibleBars = ensureNotNull(timeScale.visibleStrictRange());
        const histogramBase = priceScale.priceToCoordinate(this._internal__series.options().base, firstValue);
        timeScale.indexesToCoordinates(this._private__histogramData._internal_items);
        priceScale.pointsArrayToCoordinates(this._private__histogramData._internal_items, firstValue);
        this._private__histogramData._internal_histogramBase = histogramBase;
        this._private__histogramData._internal_visibleRange = visibleTimedValues(this._private__histogramData._internal_items, visibleBars, false);
        this._private__histogramData._internal_barSpacing = barSpacing;
        // need this to update cache
        this._private__renderer._internal_setData(this._private__histogramData);
    }
}

class SeriesLinePaneView extends LinePaneViewBase {
    // eslint-disable-next-line no-useless-constructor
    constructor(series, model) {
        super(series, model);
        this._private__lineRenderer = new PaneRendererLine();
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        const lineStyleProps = this._internal__series.options();
        this._internal__makeValid();
        const data = {
            _internal_items: this._internal__items,
            _internal_lineColor: lineStyleProps.color,
            _internal_lineStyle: lineStyleProps.lineStyle,
            _internal_lineType: lineStyleProps.lineType,
            _internal_lineWidth: lineStyleProps.lineWidth,
            _internal_visibleRange: this._internal__itemsVisibleRange,
            _internal_barWidth: this._internal__model.timeScale().barSpacing(),
        };
        this._private__lineRenderer._internal_setData(data);
        return this._private__lineRenderer;
    }
    _internal__updateOptions() {
        this._internal__items.forEach((item) => {
            item._internal_color = this._internal__series.barColorer().barStyle(item.time).barColor;
        });
    }
    _internal__createRawItem(time, price, colorer) {
        const item = this._internal__createRawItemBase(time, price);
        item._internal_color = colorer.barStyle(time).barColor;
        return item;
    }
}

const defaultReplacementRe = /[2-9]/g;
class TextWidthCache {
    constructor(size = 50) {
        this._private__cache = new Map();
        /** Current index in the "cyclic buffer" */
        this._private__keysIndex = 0;
        // A trick to keep array PACKED_ELEMENTS
        this._private__keys = Array.from(new Array(size));
    }
    reset() {
        this._private__cache.clear();
        this._private__keys.fill(undefined);
        // We don't care where exactly the _keysIndex points,
        // so there's no point in resetting it
    }
    measureText(ctx, text, optimizationReplacementRe) {
        const re = optimizationReplacementRe || defaultReplacementRe;
        const cacheString = String(text).replace(re, '0');
        let width = this._private__cache.get(cacheString);
        if (width === undefined) {
            width = ctx.measureText(cacheString).width;
            if (width === 0 && text.length !== 0) {
                // measureText can return 0 in FF depending on a canvas size, don't cache it
                return 0;
            }
            // A cyclic buffer is used to keep track of the cache keys and to delete
            // the oldest one before a new one is inserted.
            // ├──────┬──────┬──────┬──────┤
            // │ foo  │ bar  │      │      │
            // ├──────┴──────┴──────┴──────┤
            //                 ↑ index
            // Eventually, the index reach the end of an array and roll-over to 0.
            // ├──────┬──────┬──────┬──────┤
            // │ foo  │ bar  │ baz  │ quux │
            // ├──────┴──────┴──────┴──────┤
            //   ↑ index = 0
            // After that the oldest value will be overwritten.
            // ├──────┬──────┬──────┬──────┤
            // │ WOOT │ bar  │ baz  │ quux │
            // ├──────┴──────┴──────┴──────┤
            //          ↑ index = 1
            const oldestKey = this._private__keys[this._private__keysIndex];
            if (oldestKey !== undefined) {
                this._private__cache.delete(oldestKey);
            }
            // Set a newest key in place of the just deleted one
            this._private__keys[this._private__keysIndex] = cacheString;
            // Advance the index so it always points the oldest value
            this._private__keysIndex = (this._private__keysIndex + 1) % this._private__keys.length;
            this._private__cache.set(cacheString, width);
        }
        return width;
    }
}

class PanePriceAxisViewRenderer {
    constructor(textWidthCache) {
        this._private__priceAxisViewRenderer = null;
        this._private__rendererOptions = null;
        this._private__align = 'right';
        this._private__width = 0;
        this._private__textWidthCache = textWidthCache;
    }
    _internal_setParams(priceAxisViewRenderer, rendererOptions, width, align) {
        this._private__priceAxisViewRenderer = priceAxisViewRenderer;
        this._private__rendererOptions = rendererOptions;
        this._private__width = width;
        this._private__align = align;
    }
    draw(ctx, pixelRatio) {
        if (this._private__rendererOptions === null || this._private__priceAxisViewRenderer === null) {
            return;
        }
        this._private__priceAxisViewRenderer.draw(ctx, this._private__rendererOptions, this._private__textWidthCache, this._private__width, this._private__align, pixelRatio);
    }
}
class PanePriceAxisView {
    constructor(priceAxisView, dataSource, chartModel) {
        this._private__priceAxisView = priceAxisView;
        this._private__textWidthCache = new TextWidthCache(50); // when should we clear cache?
        this._private__dataSource = dataSource;
        this._private__chartModel = chartModel;
        this._private__fontSize = -1;
        this._private__renderer = new PanePriceAxisViewRenderer(this._private__textWidthCache);
    }
    renderer(height, width) {
        const pane = this._private__chartModel.paneForSource(this._private__dataSource);
        if (pane === null) {
            return null;
        }
        // this price scale will be used to find label placement only (left, right, none)
        const priceScale = pane.isOverlay(this._private__dataSource) ? pane.defaultVisiblePriceScale() : this._private__dataSource.priceScale();
        if (priceScale === null) {
            return null;
        }
        const position = pane.priceScalePosition(priceScale);
        if (position === 'overlay') {
            return null;
        }
        const options = this._private__chartModel.priceAxisRendererOptions();
        if (options.fontSize !== this._private__fontSize) {
            this._private__fontSize = options.fontSize;
            this._private__textWidthCache.reset();
        }
        this._private__renderer._internal_setParams(this._private__priceAxisView.paneRenderer(), options, width, position);
        return this._private__renderer;
    }
}

class SeriesDrawingRenderer extends ScaledRenderer {
    constructor() {
        super(...arguments);
        this._private__textWidthCache = new TextWidthCache();
        this._private__fontSize = -1;
        this._private__fontFamily = '';
        this._private__font = '';
    }
    _internal_setParams(fontSize, fontFamily) {
        if (this._private__fontSize !== fontSize || this._private__fontFamily !== fontFamily) {
            this._private__fontSize = fontSize;
            this._private__fontFamily = fontFamily;
            this._private__font = makeFont(fontSize, fontFamily);
            this._private__textWidthCache.reset();
        }
    }
    hitTest(x, y) {
        return null;
    }
    _internal__drawImpl(ctx, isHovered, hitTestData) {
        ctx.textBaseline = 'middle';
        ctx.font = this._private__font;
        this._internal_renderFunction && this._internal_renderFunction(ctx);
    }
}

// eslint-disable-next-line max-params
class SeriesDrawingPaneView {
    constructor(series, model) {
        this._private__renderer = new SeriesDrawingRenderer();
        this._private__series = series;
        this._private__model = model;
    }
    update(updateType) {
    }
    renderer(height, width, addAnchors) {
        if (!this._private__series.visible()) {
            return null;
        }
        const layout = this._private__model.options().layout;
        this._private__renderer._internal_setParams(layout.fontSize, layout.fontFamily);
        return this._private__renderer;
    }
    _internal_setDrawingPane(drawingPane) {
        drawingPane.init(this._private__series, this._private__model);
        this._private__renderer._internal_renderFunction = ctx => drawingPane.render(ctx);
    }
}

class HorizontalLineRenderer {
    constructor() {
        this._private__data = null;
    }
    _internal_setData(data) {
        this._private__data = data;
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        if (this._private__data === null) {
            return;
        }
        if (this._private__data._internal_visible === false) {
            return;
        }
        const y = Math.round(this._private__data._internal_y * pixelRatio);
        if (y < 0 || y > Math.ceil(this._private__data._internal_height * pixelRatio)) {
            return;
        }
        const width = Math.ceil(this._private__data._internal_width * pixelRatio);
        ctx.lineCap = 'butt';
        ctx.strokeStyle = this._private__data._internal_color;
        ctx.lineWidth = Math.floor(this._private__data._internal_lineWidth * pixelRatio);
        setLineStyle(ctx, this._private__data._internal_lineStyle);
        drawHorizontalLine(ctx, y, 0, width);
    }
}

class SeriesHorizontalLinePaneView {
    constructor(series) {
        this._internal__lineRendererData = {
            _internal_width: 0,
            _internal_height: 0,
            _internal_y: 0,
            _internal_color: 'rgba(0, 0, 0, 0)',
            _internal_lineWidth: 1,
            _internal_lineStyle: 0 /* Solid */,
            _internal_visible: false,
        };
        this._internal__lineRenderer = new HorizontalLineRenderer();
        this._private__invalidated = true;
        this._internal__series = series;
        this._internal__model = series.model();
        this._internal__lineRenderer._internal_setData(this._internal__lineRendererData);
    }
    _internal_update() {
        this._private__invalidated = true;
    }
    renderer(height, width) {
        if (!this._internal__series.visible()) {
            return null;
        }
        if (this._private__invalidated) {
            this._internal__updateImpl(height, width);
            this._private__invalidated = false;
        }
        return this._internal__lineRenderer;
    }
}

class SeriesHorizontalBaseLinePaneView extends SeriesHorizontalLinePaneView {
    // eslint-disable-next-line no-useless-constructor
    constructor(series) {
        super(series);
    }
    _internal__updateImpl(height, width) {
        this._internal__lineRendererData._internal_visible = false;
        const priceScale = this._internal__series.priceScale();
        const mode = priceScale.mode().mode;
        if (mode !== 2 /* Percentage */ && mode !== 3 /* IndexedTo100 */) {
            return;
        }
        const seriesOptions = this._internal__series.options();
        if (!seriesOptions.baseLineVisible || !this._internal__series.visible()) {
            return;
        }
        const firstValue = this._internal__series.firstValue();
        if (firstValue === null) {
            return;
        }
        this._internal__lineRendererData._internal_visible = true;
        this._internal__lineRendererData._internal_y = priceScale.priceToCoordinate(firstValue.value, firstValue.value);
        this._internal__lineRendererData._internal_width = width;
        this._internal__lineRendererData._internal_height = height;
        this._internal__lineRendererData._internal_color = seriesOptions.baseLineColor;
        this._internal__lineRendererData._internal_lineWidth = seriesOptions.baseLineWidth;
        this._internal__lineRendererData._internal_lineStyle = seriesOptions.baseLineStyle;
    }
}

class SeriesLastPriceAnimationRenderer {
    constructor() {
        this._private__data = null;
    }
    _internal_setData(data) {
        this._private__data = data;
    }
    _internal_data() {
        return this._private__data;
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        const data = this._private__data;
        if (data === null) {
            return;
        }
        ctx.save();
        const tickWidth = Math.max(1, Math.floor(pixelRatio));
        const correction = (tickWidth % 2) / 2;
        const centerX = Math.round(data._internal_center.x * pixelRatio) + correction; // correct x coordinate only
        const centerY = data._internal_center.y * pixelRatio;
        ctx.fillStyle = data._internal_seriesLineColor;
        ctx.beginPath();
        const centerPointRadius = Math.max(2, data._internal_seriesLineWidth * 1.5) * pixelRatio;
        ctx.arc(centerX, centerY, centerPointRadius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = data._internal_fillColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, data._internal_radius * pixelRatio, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.lineWidth = tickWidth;
        ctx.strokeStyle = data._internal_strokeColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, data._internal_radius * pixelRatio + tickWidth / 2, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.restore();
    }
}

const animationStagesData = [
    {
        _internal_start: 0,
        _internal_end: 0.25 /* Stage1Period */,
        _internal_startRadius: 4 /* Stage1StartCircleRadius */,
        _internal_endRadius: 10 /* Stage1EndCircleRadius */,
        _internal_startFillAlpha: 0.25 /* Stage1StartFillAlpha */,
        _internal_endFillAlpha: 0 /* Stage1EndFillAlpha */,
        _internal_startStrokeAlpha: 0.4 /* Stage1StartStrokeAlpha */,
        _internal_endStrokeAlpha: 0.8 /* Stage1EndStrokeAlpha */,
    },
    {
        _internal_start: 0.25 /* Stage1Period */,
        _internal_end: 0.25 /* Stage1Period */ + 0.275 /* Stage2Period */,
        _internal_startRadius: 10 /* Stage2StartCircleRadius */,
        _internal_endRadius: 14 /* Stage2EndCircleRadius */,
        _internal_startFillAlpha: 0 /* Stage2StartFillAlpha */,
        _internal_endFillAlpha: 0 /* Stage2EndFillAlpha */,
        _internal_startStrokeAlpha: 0.8 /* Stage2StartStrokeAlpha */,
        _internal_endStrokeAlpha: 0 /* Stage2EndStrokeAlpha */,
    },
    {
        _internal_start: 0.25 /* Stage1Period */ + 0.275 /* Stage2Period */,
        _internal_end: 0.25 /* Stage1Period */ + 0.275 /* Stage2Period */ + 0.475 /* Stage3Period */,
        _internal_startRadius: 14 /* Stage3StartCircleRadius */,
        _internal_endRadius: 14 /* Stage3EndCircleRadius */,
        _internal_startFillAlpha: 0 /* Stage3StartFillAlpha */,
        _internal_endFillAlpha: 0 /* Stage3EndFillAlpha */,
        _internal_startStrokeAlpha: 0 /* Stage3StartStrokeAlpha */,
        _internal_endStrokeAlpha: 0 /* Stage3EndStrokeAlpha */,
    },
];
function color(seriesLineColor, stage, startAlpha, endAlpha) {
    const alpha = startAlpha + (endAlpha - startAlpha) * stage;
    return applyAlpha(seriesLineColor, alpha);
}
function radius(stage, startRadius, endRadius) {
    return startRadius + (endRadius - startRadius) * stage;
}
function animationData(durationSinceStart, lineColor) {
    const globalStage = (durationSinceStart % 2600 /* AnimationPeriod */) / 2600 /* AnimationPeriod */;
    let currentStageData;
    for (const stageData of animationStagesData) {
        if (globalStage >= stageData._internal_start && globalStage <= stageData._internal_end) {
            currentStageData = stageData;
            break;
        }
    }
    assert(currentStageData !== undefined, 'Last price animation internal logic error');
    const subStage = (globalStage - currentStageData._internal_start) / (currentStageData._internal_end - currentStageData._internal_start);
    return {
        _internal_fillColor: color(lineColor, subStage, currentStageData._internal_startFillAlpha, currentStageData._internal_endFillAlpha),
        _internal_strokeColor: color(lineColor, subStage, currentStageData._internal_startStrokeAlpha, currentStageData._internal_endStrokeAlpha),
        _internal_radius: radius(subStage, currentStageData._internal_startRadius, currentStageData._internal_endRadius),
    };
}
class SeriesLastPriceAnimationPaneView {
    constructor(series) {
        this._private__renderer = new SeriesLastPriceAnimationRenderer();
        this._private__invalidated = true;
        this._private__stageInvalidated = true;
        this._private__startTime = performance.now();
        this._private__endTime = this._private__startTime - 1;
        this._private__series = series;
    }
    _internal_onDataCleared() {
        this._private__endTime = this._private__startTime - 1;
        this.update();
    }
    _internal_onNewRealtimeDataReceived() {
        this.update();
        if (this._private__series.options().lastPriceAnimation === 2 /* OnDataUpdate */) {
            const now = performance.now();
            const timeToAnimationEnd = this._private__endTime - now;
            if (timeToAnimationEnd > 0) {
                if (timeToAnimationEnd < 2600 /* AnimationPeriod */ / 4) {
                    this._private__endTime += 2600 /* AnimationPeriod */;
                }
                return;
            }
            this._private__startTime = now;
            this._private__endTime = now + 2600 /* AnimationPeriod */;
        }
    }
    update() {
        this._private__invalidated = true;
    }
    _internal_invalidateStage() {
        this._private__stageInvalidated = true;
    }
    _internal_visible() {
        // center point is always visible if lastPriceAnimation is not LastPriceAnimationMode.Disabled
        return this._private__series.options().lastPriceAnimation !== 0 /* Disabled */;
    }
    _internal_animationActive() {
        switch (this._private__series.options().lastPriceAnimation) {
            case 0 /* Disabled */:
                return false;
            case 1 /* Continuous */:
                return true;
            case 2 /* OnDataUpdate */:
                return performance.now() <= this._private__endTime;
        }
    }
    renderer(height, width) {
        if (this._private__invalidated) {
            this._private__updateImpl(height, width);
            this._private__invalidated = false;
            this._private__stageInvalidated = false;
        }
        else if (this._private__stageInvalidated) {
            this._private__updateRendererDataStage();
            this._private__stageInvalidated = false;
        }
        return this._private__renderer;
    }
    _private__updateImpl(height, width) {
        this._private__renderer._internal_setData(null);
        const timeScale = this._private__series.model().timeScale();
        const visibleRange = timeScale.visibleStrictRange();
        const firstValue = this._private__series.firstValue();
        if (visibleRange === null || firstValue === null) {
            return;
        }
        const lastValue = this._private__series.lastValueData(true);
        if (lastValue.noData || !visibleRange.contains(lastValue.index)) {
            return;
        }
        const lastValuePoint = {
            x: timeScale.indexToCoordinate(lastValue.index),
            y: this._private__series.priceScale().priceToCoordinate(lastValue.price, firstValue.value),
        };
        const seriesLineColor = lastValue.color;
        const seriesLineWidth = this._private__series.options().lineWidth;
        const data = animationData(this._private__duration(), seriesLineColor);
        this._private__renderer._internal_setData({
            _internal_seriesLineColor: seriesLineColor,
            _internal_seriesLineWidth: seriesLineWidth,
            _internal_fillColor: data._internal_fillColor,
            _internal_strokeColor: data._internal_strokeColor,
            _internal_radius: data._internal_radius,
            _internal_center: lastValuePoint,
        });
    }
    _private__updateRendererDataStage() {
        const rendererData = this._private__renderer._internal_data();
        if (rendererData !== null) {
            const data = animationData(this._private__duration(), rendererData._internal_seriesLineColor);
            rendererData._internal_fillColor = data._internal_fillColor;
            rendererData._internal_strokeColor = data._internal_strokeColor;
            rendererData._internal_radius = data._internal_radius;
        }
    }
    _private__duration() {
        return this._internal_animationActive() ? performance.now() - this._private__startTime : 2600 /* AnimationPeriod */ - 1;
    }
}

function size(barSpacing, coeff) {
    const result = Math.min(Math.max(barSpacing, 12 /* MinShapeSize */), 30 /* MaxShapeSize */) * coeff;
    return ceiledOdd(result);
}
function shapeSize(shape, originalSize) {
    switch (shape) {
        case 'arrowDown':
        case 'arrowUp':
            return size(originalSize, 1);
        case 'circle':
            return size(originalSize, 0.8);
        case 'square':
            return size(originalSize, 0.7);
    }
}
function calculateShapeHeight(barSpacing) {
    return ceiledEven(size(barSpacing, 1));
}
function shapeMargin(barSpacing) {
    return Math.max(size(barSpacing, 0.1), 3 /* MinShapeMargin */);
}

function drawSquare(ctx, centerX, centerY, size) {
    const squareSize = shapeSize('square', size);
    const halfSize = (squareSize - 1) / 2;
    const left = centerX - halfSize;
    const top = centerY - halfSize;
    ctx.fillRect(left, top, squareSize, squareSize);
}
function hitTestSquare(centerX, centerY, size, x, y) {
    const squareSize = shapeSize('square', size);
    const halfSize = (squareSize - 1) / 2;
    const left = centerX - halfSize;
    const top = centerY - halfSize;
    return x >= left && x <= left + squareSize &&
        y >= top && y <= top + squareSize;
}

function drawArrow(up, ctx, centerX, centerY, size) {
    const arrowSize = shapeSize('arrowUp', size);
    const halfArrowSize = (arrowSize - 1) / 2;
    const baseSize = ceiledOdd(size / 2);
    const halfBaseSize = (baseSize - 1) / 2;
    ctx.beginPath();
    if (up) {
        ctx.moveTo(centerX - halfArrowSize, centerY);
        ctx.lineTo(centerX, centerY - halfArrowSize);
        ctx.lineTo(centerX + halfArrowSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY + halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY + halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY);
    }
    else {
        ctx.moveTo(centerX - halfArrowSize, centerY);
        ctx.lineTo(centerX, centerY + halfArrowSize);
        ctx.lineTo(centerX + halfArrowSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY);
        ctx.lineTo(centerX + halfBaseSize, centerY - halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY - halfArrowSize);
        ctx.lineTo(centerX - halfBaseSize, centerY);
    }
    ctx.fill();
}
function hitTestArrow(up, centerX, centerY, size, x, y) {
    // TODO: implement arrow hit test
    return hitTestSquare(centerX, centerY, size, x, y);
}

function drawCircle(ctx, centerX, centerY, size) {
    const circleSize = shapeSize('circle', size);
    const halfSize = (circleSize - 1) / 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, halfSize, 0, 2 * Math.PI, false);
    ctx.fill();
}
function hitTestCircle(centerX, centerY, size, x, y) {
    const circleSize = shapeSize('circle', size);
    const tolerance = 2 + circleSize / 2;
    const xOffset = centerX - x;
    const yOffset = centerY - y;
    const dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
    return dist <= tolerance;
}

function drawText(ctx, text, x, y) {
    ctx.fillText(text, x, y);
}
function hitTestText(textX, textY, textWidth, textHeight, x, y) {
    const halfHeight = textHeight / 2;
    return x >= textX && x <= textX + textWidth &&
        y >= textY - halfHeight && y <= textY + halfHeight;
}

class SeriesMarkersRenderer extends ScaledRenderer {
    constructor() {
        super(...arguments);
        this._private__data = null;
        this._private__textWidthCache = new TextWidthCache();
        this._private__fontSize = -1;
        this._private__fontFamily = '';
        this._private__font = '';
    }
    _internal_setData(data) {
        this._private__data = data;
    }
    _internal_setParams(fontSize, fontFamily) {
        if (this._private__fontSize !== fontSize || this._private__fontFamily !== fontFamily) {
            this._private__fontSize = fontSize;
            this._private__fontFamily = fontFamily;
            this._private__font = makeFont(fontSize, fontFamily);
            this._private__textWidthCache.reset();
        }
    }
    hitTest(x, y) {
        if (this._private__data === null || this._private__data._internal_visibleRange === null) {
            return null;
        }
        for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
            const item = this._private__data._internal_items[i];
            if (hitTestItem(item, x, y)) {
                return {
                    hitTestData: item._internal_internalId,
                    externalId: item._internal_externalId,
                };
            }
        }
        return null;
    }
    _internal__drawImpl(ctx, isHovered, hitTestData) {
        if (this._private__data === null || this._private__data._internal_visibleRange === null) {
            return;
        }
        ctx.textBaseline = 'middle';
        ctx.font = this._private__font;
        for (let i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
            const item = this._private__data._internal_items[i];
            if (item._internal_text !== undefined) {
                item._internal_text._internal_width = this._private__textWidthCache.measureText(ctx, item._internal_text._internal_content);
                item._internal_text._internal_height = this._private__fontSize;
            }
            drawItem(item, ctx);
        }
    }
}
function drawItem(item, ctx) {
    ctx.fillStyle = item._internal_color;
    if (item._internal_text !== undefined) {
        drawText(ctx, item._internal_text._internal_content, item.x - item._internal_text._internal_width / 2, item._internal_text._internal_y);
    }
    drawShape(item, ctx);
}
function drawShape(item, ctx) {
    if (item._internal_size === 0) {
        return;
    }
    switch (item._internal_shape) {
        case 'arrowDown':
            drawArrow(false, ctx, item.x, item._internal_y, item._internal_size);
            return;
        case 'arrowUp':
            drawArrow(true, ctx, item.x, item._internal_y, item._internal_size);
            return;
        case 'circle':
            drawCircle(ctx, item.x, item._internal_y, item._internal_size);
            return;
        case 'square':
            drawSquare(ctx, item.x, item._internal_y, item._internal_size);
            return;
    }
    ensureNever(item._internal_shape);
}
function hitTestItem(item, x, y) {
    if (item._internal_text !== undefined && hitTestText(item.x, item._internal_text._internal_y, item._internal_text._internal_width, item._internal_text._internal_height, x, y)) {
        return true;
    }
    return hitTestShape(item, x, y);
}
function hitTestShape(item, x, y) {
    if (item._internal_size === 0) {
        return false;
    }
    switch (item._internal_shape) {
        case 'arrowDown':
            return hitTestArrow(true, item.x, item._internal_y, item._internal_size, x, y);
        case 'arrowUp':
            return hitTestArrow(false, item.x, item._internal_y, item._internal_size, x, y);
        case 'circle':
            return hitTestCircle(item.x, item._internal_y, item._internal_size, x, y);
        case 'square':
            return hitTestSquare(item.x, item._internal_y, item._internal_size, x, y);
    }
}

// eslint-disable-next-line max-params
function fillSizeAndY(rendererItem, marker, seriesData, offsets, textHeight, shapeMargin, priceScale, timeScale, firstValue) {
    const inBarPrice = isNumber(seriesData) ? seriesData : seriesData.close;
    const highPrice = isNumber(seriesData) ? seriesData : seriesData.high;
    const lowPrice = isNumber(seriesData) ? seriesData : seriesData.low;
    const sizeMultiplier = isNumber(marker.size) ? Math.max(marker.size, 0) : 1;
    const shapeSize = calculateShapeHeight(timeScale.barSpacing()) * sizeMultiplier;
    const halfSize = shapeSize / 2;
    rendererItem._internal_size = shapeSize;
    switch (marker.position) {
        case 'inBar': {
            rendererItem._internal_y = priceScale.priceToCoordinate(inBarPrice, firstValue);
            if (rendererItem._internal_text !== undefined) {
                rendererItem._internal_text._internal_y = rendererItem._internal_y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* TextMargin */);
            }
            return;
        }
        case 'aboveBar': {
            rendererItem._internal_y = (priceScale.priceToCoordinate(highPrice, firstValue) - halfSize - offsets._internal_aboveBar);
            if (rendererItem._internal_text !== undefined) {
                rendererItem._internal_text._internal_y = rendererItem._internal_y - halfSize - textHeight * (0.5 + 0.1 /* TextMargin */);
                offsets._internal_aboveBar += textHeight * (1 + 2 * 0.1 /* TextMargin */);
            }
            offsets._internal_aboveBar += shapeSize + shapeMargin;
            return;
        }
        case 'belowBar': {
            rendererItem._internal_y = (priceScale.priceToCoordinate(lowPrice, firstValue) + halfSize + offsets._internal_belowBar);
            if (rendererItem._internal_text !== undefined) {
                rendererItem._internal_text._internal_y = rendererItem._internal_y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* TextMargin */);
                offsets._internal_belowBar += textHeight * (1 + 2 * 0.1 /* TextMargin */);
            }
            offsets._internal_belowBar += shapeSize + shapeMargin;
            return;
        }
    }
    ensureNever(marker.position);
}
class SeriesMarkersPaneView {
    constructor(series, model) {
        this._private__invalidated = true;
        this._private__dataInvalidated = true;
        this._private__autoScaleMarginsInvalidated = true;
        this._private__autoScaleMargins = null;
        this._private__renderer = new SeriesMarkersRenderer();
        this._private__series = series;
        this._private__model = model;
        this._private__data = {
            _internal_items: [],
            _internal_visibleRange: null,
        };
    }
    update(updateType) {
        this._private__invalidated = true;
        this._private__autoScaleMarginsInvalidated = true;
        if (updateType === 'data') {
            this._private__dataInvalidated = true;
        }
    }
    renderer(height, width, addAnchors) {
        if (!this._private__series.visible()) {
            return null;
        }
        if (this._private__invalidated) {
            this._internal__makeValid();
        }
        const layout = this._private__model.options().layout;
        this._private__renderer._internal_setParams(layout.fontSize, layout.fontFamily);
        this._private__renderer._internal_setData(this._private__data);
        return this._private__renderer;
    }
    _internal_autoScaleMargins() {
        if (this._private__autoScaleMarginsInvalidated) {
            if (this._private__series.indexedMarkers().length > 0) {
                const barSpacing = this._private__model.timeScale().barSpacing();
                const shapeMargin$1 = shapeMargin(barSpacing);
                const marginsAboveAndBelow = calculateShapeHeight(barSpacing) * 1.5 + shapeMargin$1 * 2;
                this._private__autoScaleMargins = {
                    above: marginsAboveAndBelow,
                    below: marginsAboveAndBelow,
                };
            }
            else {
                this._private__autoScaleMargins = null;
            }
            this._private__autoScaleMarginsInvalidated = false;
        }
        return this._private__autoScaleMargins;
    }
    _internal__makeValid() {
        const priceScale = this._private__series.priceScale();
        const timeScale = this._private__model.timeScale();
        const seriesMarkers = this._private__series.indexedMarkers();
        if (this._private__dataInvalidated) {
            this._private__data._internal_items = seriesMarkers.map((marker) => ({
                time: marker.time,
                x: 0,
                _internal_y: 0,
                _internal_size: 0,
                _internal_shape: marker.shape,
                _internal_color: marker.color,
                _internal_internalId: marker.internalId,
                _internal_externalId: marker.id,
                _internal_text: undefined,
            }));
            this._private__dataInvalidated = false;
        }
        const layoutOptions = this._private__model.options().layout;
        this._private__data._internal_visibleRange = null;
        const visibleBars = timeScale.visibleStrictRange();
        if (visibleBars === null) {
            return;
        }
        const firstValue = this._private__series.firstValue();
        if (firstValue === null) {
            return;
        }
        if (this._private__data._internal_items.length === 0) {
            return;
        }
        let prevTimeIndex = NaN;
        const shapeMargin$1 = shapeMargin(timeScale.barSpacing());
        const offsets = {
            _internal_aboveBar: shapeMargin$1,
            _internal_belowBar: shapeMargin$1,
        };
        this._private__data._internal_visibleRange = visibleTimedValues(this._private__data._internal_items, visibleBars, true);
        for (let index = this._private__data._internal_visibleRange.from; index < this._private__data._internal_visibleRange.to; index++) {
            const marker = seriesMarkers[index];
            if (marker.time !== prevTimeIndex) {
                // new bar, reset stack counter
                offsets._internal_aboveBar = shapeMargin$1;
                offsets._internal_belowBar = shapeMargin$1;
                prevTimeIndex = marker.time;
            }
            const rendererItem = this._private__data._internal_items[index];
            rendererItem.x = timeScale.indexToCoordinate(marker.time);
            if (marker.text !== undefined && marker.text.length > 0) {
                rendererItem._internal_text = {
                    _internal_content: marker.text,
                    _internal_y: 0,
                    _internal_width: 0,
                    _internal_height: 0,
                };
            }
            const dataAt = this._private__series.dataAt(marker.time);
            if (dataAt === null) {
                continue;
            }
            fillSizeAndY(rendererItem, marker, dataAt, offsets, layoutOptions.fontSize, shapeMargin$1, priceScale, timeScale, firstValue.value);
        }
        this._private__invalidated = false;
    }
}

class SeriesPriceLinePaneView extends SeriesHorizontalLinePaneView {
    // eslint-disable-next-line no-useless-constructor
    constructor(series) {
        super(series);
    }
    _internal__updateImpl(height, width) {
        const data = this._internal__lineRendererData;
        data._internal_visible = false;
        const seriesOptions = this._internal__series.options();
        if (!seriesOptions.priceLineVisible || !this._internal__series.visible()) {
            return;
        }
        const lastValueData = this._internal__series.lastValueData(seriesOptions.priceLineSource === 0 /* LastBar */);
        if (lastValueData.noData) {
            return;
        }
        data._internal_visible = true;
        data._internal_y = lastValueData.coordinate;
        data._internal_color = this._internal__series.priceLineColor(lastValueData.color);
        data._internal_width = width;
        data._internal_height = height;
        data._internal_lineWidth = seriesOptions.priceLineWidth;
        data._internal_lineStyle = seriesOptions.priceLineStyle;
    }
}

class SeriesPriceAxisView extends PriceAxisView {
    constructor(source) {
        super();
        this._private__source = source;
    }
    _internal__updateRendererData(axisRendererData, paneRendererData, commonRendererData) {
        axisRendererData.visible = false;
        paneRendererData.visible = false;
        const source = this._private__source;
        if (!source.visible()) {
            return;
        }
        const seriesOptions = source.options();
        const showSeriesLastValue = seriesOptions.lastValueVisible;
        const showSymbolLabel = source.title() !== '';
        const showPriceAndPercentage = seriesOptions.seriesLastValueMode === 0 /* LastPriceAndPercentageValue */;
        const lastValueData = source.lastValueData(false);
        if (lastValueData.noData) {
            return;
        }
        if (showSeriesLastValue) {
            axisRendererData.text = this._internal__axisText(lastValueData, showSeriesLastValue, showPriceAndPercentage);
            axisRendererData.visible = axisRendererData.text.length !== 0;
        }
        if (showSymbolLabel || showPriceAndPercentage) {
            paneRendererData.text = this._internal__paneText(lastValueData, showSeriesLastValue, showSymbolLabel, showPriceAndPercentage);
            paneRendererData.visible = paneRendererData.text.length > 0;
        }
        const lastValueColor = source.priceLineColor(lastValueData.color);
        const colors = generateContrastColors(lastValueColor);
        commonRendererData.background = colors._internal_background;
        commonRendererData.color = colors._internal_foreground;
        commonRendererData.coordinate = lastValueData.coordinate;
        paneRendererData.borderColor = source.model().backgroundColorAtYPercentFromTop(lastValueData.coordinate / source.priceScale().height());
        axisRendererData.borderColor = lastValueColor;
    }
    _internal__paneText(lastValue, showSeriesLastValue, showSymbolLabel, showPriceAndPercentage) {
        let result = '';
        const title = this._private__source.title();
        if (showSymbolLabel && title.length !== 0) {
            result += `${title} `;
        }
        if (showSeriesLastValue && showPriceAndPercentage) {
            result += this._private__source.priceScale().isPercentage() ?
                lastValue.formattedPriceAbsolute : lastValue.formattedPricePercentage;
        }
        return result.trim();
    }
    _internal__axisText(lastValueData, showSeriesLastValue, showPriceAndPercentage) {
        if (!showSeriesLastValue) {
            return '';
        }
        if (!showPriceAndPercentage) {
            return lastValueData.text;
        }
        return this._private__source.priceScale().isPercentage() ?
            lastValueData.formattedPricePercentage : lastValueData.formattedPriceAbsolute;
    }
}

class PriceRangeImpl {
    constructor(minValue, maxValue) {
        this._private__minValue = minValue;
        this._private__maxValue = maxValue;
    }
    equals(pr) {
        if (pr === null) {
            return false;
        }
        return this._private__minValue === pr._private__minValue && this._private__maxValue === pr._private__maxValue;
    }
    clone() {
        return new PriceRangeImpl(this._private__minValue, this._private__maxValue);
    }
    minValue() {
        return this._private__minValue;
    }
    maxValue() {
        return this._private__maxValue;
    }
    length() {
        return this._private__maxValue - this._private__minValue;
    }
    isEmpty() {
        return this._private__maxValue === this._private__minValue || Number.isNaN(this._private__maxValue) || Number.isNaN(this._private__minValue);
    }
    merge(anotherRange) {
        if (anotherRange === null) {
            return this;
        }
        return new PriceRangeImpl(Math.min(this.minValue(), anotherRange.minValue()), Math.max(this.maxValue(), anotherRange.maxValue()));
    }
    scaleAroundCenter(coeff) {
        if (!isNumber(coeff)) {
            return;
        }
        const delta = this._private__maxValue - this._private__minValue;
        if (delta === 0) {
            return;
        }
        const center = (this._private__maxValue + this._private__minValue) * 0.5;
        let maxDelta = this._private__maxValue - center;
        let minDelta = this._private__minValue - center;
        maxDelta *= coeff;
        minDelta *= coeff;
        this._private__maxValue = center + maxDelta;
        this._private__minValue = center + minDelta;
    }
    shift(delta) {
        if (!isNumber(delta)) {
            return;
        }
        this._private__maxValue += delta;
        this._private__minValue += delta;
    }
    toRaw() {
        return {
            minValue: this._private__minValue,
            maxValue: this._private__maxValue,
        };
    }
    static fromRaw(raw) {
        return (raw === null) ? null : new PriceRangeImpl(raw.minValue, raw.maxValue);
    }
}

class AutoscaleInfoImpl {
    constructor(priceRange, margins) {
        this._private__priceRange = priceRange;
        this._private__margins = margins || null;
    }
    priceRange() {
        return this._private__priceRange;
    }
    margins() {
        return this._private__margins;
    }
    toRaw() {
        if (this._private__priceRange === null) {
            return null;
        }
        return {
            priceRange: this._private__priceRange.toRaw(),
            margins: this._private__margins || undefined,
        };
    }
    static fromRaw(raw) {
        return (raw === null) ? null : new AutoscaleInfoImpl(PriceRangeImpl.fromRaw(raw.priceRange), raw.margins);
    }
}

class CustomPriceLinePaneView extends SeriesHorizontalLinePaneView {
    constructor(series, priceLine) {
        super(series);
        this._private__priceLine = priceLine;
    }
    _internal__updateImpl(height, width) {
        const data = this._internal__lineRendererData;
        data._internal_visible = false;
        const lineOptions = this._private__priceLine.options();
        if (!this._internal__series.visible() || !lineOptions.lineVisible) {
            return;
        }
        const y = this._private__priceLine.yCoord();
        if (y === null) {
            return;
        }
        data._internal_visible = true;
        data._internal_y = y;
        data._internal_color = lineOptions.color;
        data._internal_width = width;
        data._internal_height = height;
        data._internal_lineWidth = lineOptions.lineWidth;
        data._internal_lineStyle = lineOptions.lineStyle;
    }
}

class CustomPriceLinePriceAxisView extends PriceAxisView {
    constructor(series, priceLine) {
        super();
        this._private__series = series;
        this._private__priceLine = priceLine;
    }
    _internal__updateRendererData(axisRendererData, paneRendererData, commonData) {
        axisRendererData.visible = false;
        paneRendererData.visible = false;
        const options = this._private__priceLine.options();
        const labelVisible = options.axisLabelVisible;
        const showPaneLabel = options.title !== '';
        const series = this._private__series;
        if (!labelVisible || !series.visible()) {
            return;
        }
        const y = this._private__priceLine.yCoord();
        if (y === null) {
            return;
        }
        if (showPaneLabel) {
            paneRendererData.text = options.title;
            paneRendererData.visible = true;
        }
        paneRendererData.borderColor = series.model().backgroundColorAtYPercentFromTop(y / series.priceScale().height());
        axisRendererData.text = this._private__formatPrice(options.price);
        axisRendererData.visible = true;
        const colors = generateContrastColors(options.color);
        commonData.background = colors._internal_background;
        commonData.color = colors._internal_foreground;
        commonData.coordinate = y;
    }
    _private__formatPrice(price) {
        const firstValue = this._private__series.firstValue();
        if (firstValue === null) {
            return '';
        }
        return this._private__series.priceScale().formatPrice(price, firstValue.value);
    }
}

class CustomPriceLine {
    constructor(series, options) {
        this._private__series = series;
        this._private__options = options;
        this._private__priceLineView = new CustomPriceLinePaneView(series, this);
        this._private__priceAxisView = new CustomPriceLinePriceAxisView(series, this);
        this._private__panePriceAxisView = new PanePriceAxisView(this._private__priceAxisView, series, series.model());
    }
    applyOptions(options) {
        merge(this._private__options, options);
        this.update();
        this._private__series.model().lightUpdate();
    }
    options() {
        return this._private__options;
    }
    paneView() {
        return this._private__priceLineView;
    }
    labelPaneView() {
        return this._private__panePriceAxisView;
    }
    priceAxisView() {
        return this._private__priceAxisView;
    }
    update() {
        this._private__priceLineView._internal_update();
        this._private__priceAxisView.update();
    }
    yCoord() {
        const series = this._private__series;
        const priceScale = series.priceScale();
        const timeScale = series.model().timeScale();
        if (timeScale.isEmpty() || priceScale.isEmpty()) {
            return null;
        }
        const firstValue = series.firstValue();
        if (firstValue === null) {
            return null;
        }
        return priceScale.priceToCoordinate(this._private__options.price, firstValue.value);
    }
}

class PriceDataSource extends DataSource {
    constructor(model) {
        super();
        this._private__model = model;
    }
    model() {
        return this._private__model;
    }
}

const emptyResult = {
    barColor: '',
    barBorderColor: '',
    barWickColor: '',
};
class SeriesBarColorer {
    constructor(series) {
        this._private__series = series;
    }
    barStyle(barIndex, precomputedBars) {
        // precomputedBars: {value: [Array BarValues], previousValue: [Array BarValues] | undefined}
        // Used to avoid binary search if bars are already known
        const targetType = this._private__series.seriesType();
        const seriesOptions = this._private__series.options();
        switch (targetType) {
            case 'Line':
                return this._private__lineStyle(seriesOptions, barIndex, precomputedBars);
            case 'Area':
                return this._private__areaStyle(seriesOptions);
            case 'Baseline':
                return this._private__baselineStyle(seriesOptions, barIndex, precomputedBars);
            case 'Bar':
                return this._private__barStyle(seriesOptions, barIndex, precomputedBars);
            case 'Candlestick':
                return this._private__candleStyle(seriesOptions, barIndex, precomputedBars);
            case 'Histogram':
                return this._private__histogramStyle(seriesOptions, barIndex, precomputedBars);
        }
        throw new Error('Unknown chart style');
    }
    _private__barStyle(barStyle, barIndex, precomputedBars) {
        const result = Object.assign({}, emptyResult);
        const upColor = barStyle.upColor;
        const downColor = barStyle.downColor;
        const borderUpColor = upColor;
        const borderDownColor = downColor;
        const currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
        const isUp = ensure(currentBar.value[0 /* Open */]) <= ensure(currentBar.value[3 /* Close */]);
        if (currentBar.color !== undefined) {
            result.barColor = currentBar.color;
            result.barBorderColor = currentBar.color;
        }
        else {
            result.barColor = isUp ? upColor : downColor;
            result.barBorderColor = isUp ? borderUpColor : borderDownColor;
        }
        return result;
    }
    _private__candleStyle(candlestickStyle, barIndex, precomputedBars) {
        var _a, _b, _c;
        const result = Object.assign({}, emptyResult);
        const upColor = candlestickStyle.upColor;
        const downColor = candlestickStyle.downColor;
        const borderUpColor = candlestickStyle.borderUpColor;
        const borderDownColor = candlestickStyle.borderDownColor;
        const wickUpColor = candlestickStyle.wickUpColor;
        const wickDownColor = candlestickStyle.wickDownColor;
        const currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
        const isUp = ensure(currentBar.value[0 /* Open */]) <= ensure(currentBar.value[3 /* Close */]);
        result.barColor = (_a = currentBar.color) !== null && _a !== void 0 ? _a : (isUp ? upColor : downColor);
        result.barBorderColor = (_b = currentBar.borderColor) !== null && _b !== void 0 ? _b : (isUp ? borderUpColor : borderDownColor);
        result.barWickColor = (_c = currentBar.wickColor) !== null && _c !== void 0 ? _c : (isUp ? wickUpColor : wickDownColor);
        return result;
    }
    _private__areaStyle(areaStyle) {
        return Object.assign(Object.assign({}, emptyResult), { barColor: areaStyle.lineColor });
    }
    _private__baselineStyle(baselineStyle, barIndex, precomputedBars) {
        const currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
        const isAboveBaseline = currentBar.value[3 /* Close */] >= baselineStyle.baseValue.price;
        return Object.assign(Object.assign({}, emptyResult), { barColor: isAboveBaseline ? baselineStyle.topLineColor : baselineStyle.bottomLineColor });
    }
    _private__lineStyle(lineStyle, barIndex, precomputedBars) {
        var _a;
        const currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
        return Object.assign(Object.assign({}, emptyResult), { barColor: (_a = currentBar.color) !== null && _a !== void 0 ? _a : lineStyle.color });
    }
    _private__histogramStyle(histogramStyle, barIndex, precomputedBars) {
        const result = Object.assign({}, emptyResult);
        const currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
        result.barColor = currentBar.color !== undefined ? currentBar.color : histogramStyle.color;
        return result;
    }
    _private__findBar(barIndex, precomputedBars) {
        if (precomputedBars !== undefined) {
            return precomputedBars.value;
        }
        return this._private__series.bars().valueAt(barIndex);
    }
}

/**
 * Search direction if no data found at provided index
 */
var MismatchDirection;
(function (MismatchDirection) {
    /**
     * Search the nearest left item
     */
    MismatchDirection[MismatchDirection["NearestLeft"] = -1] = "NearestLeft";
    /**
     * Do not search
     */
    MismatchDirection[MismatchDirection["None"] = 0] = "None";
    /**
     * Search the nearest right item
     */
    MismatchDirection[MismatchDirection["NearestRight"] = 1] = "NearestRight";
})(MismatchDirection || (MismatchDirection = {}));
// TODO: think about changing it dynamically
const CHUNK_SIZE = 30;
/**
 * PlotList is an array of plot rows
 * each plot row consists of key (index in timescale) and plot value map
 */
class PlotList {
    constructor() {
        this._private__items = [];
        this._private__minMaxCache = new Map();
        this._private__rowSearchCache = new Map();
    }
    // @returns Last row
    last() {
        return this.size() > 0 ? this._private__items[this._private__items.length - 1] : null;
    }
    firstIndex() {
        return this.size() > 0 ? this._private__indexAt(0) : null;
    }
    lastIndex() {
        return this.size() > 0 ? this._private__indexAt((this._private__items.length - 1)) : null;
    }
    size() {
        return this._private__items.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    contains(index) {
        return this._private__search(index, 0 /* None */) !== null;
    }
    valueAt(index) {
        return this.search(index);
    }
    search(index, searchMode = 0 /* None */) {
        const pos = this._private__search(index, searchMode);
        if (pos === null) {
            return null;
        }
        return Object.assign(Object.assign({}, this._private__valueAt(pos)), { index: this._private__indexAt(pos) });
    }
    rows() {
        return this._private__items;
    }
    minMaxOnRangeCached(start, end, plots) {
        // this code works for single series only
        // could fail after whitespaces implementation
        if (this.isEmpty()) {
            return null;
        }
        let result = null;
        for (const plot of plots) {
            const plotMinMax = this._private__minMaxOnRangeCachedImpl(start, end, plot);
            result = mergeMinMax(result, plotMinMax);
        }
        return result;
    }
    setData(plotRows) {
        this._private__rowSearchCache.clear();
        this._private__minMaxCache.clear();
        this._private__items = plotRows;
    }
    _private__indexAt(offset) {
        return this._private__items[offset].index;
    }
    _private__valueAt(offset) {
        return this._private__items[offset];
    }
    _private__search(index, searchMode) {
        const exactPos = this._private__bsearch(index);
        if (exactPos === null && searchMode !== 0 /* None */) {
            switch (searchMode) {
                case -1 /* NearestLeft */:
                    return this._private__searchNearestLeft(index);
                case 1 /* NearestRight */:
                    return this._private__searchNearestRight(index);
                default:
                    throw new TypeError('Unknown search mode');
            }
        }
        return exactPos;
    }
    _private__searchNearestLeft(index) {
        let nearestLeftPos = this._private__lowerbound(index);
        if (nearestLeftPos > 0) {
            nearestLeftPos = nearestLeftPos - 1;
        }
        return (nearestLeftPos !== this._private__items.length && this._private__indexAt(nearestLeftPos) < index) ? nearestLeftPos : null;
    }
    _private__searchNearestRight(index) {
        const nearestRightPos = this._private__upperbound(index);
        return (nearestRightPos !== this._private__items.length && index < this._private__indexAt(nearestRightPos)) ? nearestRightPos : null;
    }
    _private__bsearch(index) {
        const start = this._private__lowerbound(index);
        if (start !== this._private__items.length && !(index < this._private__items[start].index)) {
            return start;
        }
        return null;
    }
    _private__lowerbound(index) {
        return lowerbound(this._private__items, index, (a, b) => a.index < b);
    }
    _private__upperbound(index) {
        return upperbound(this._private__items, index, (a, b) => b.index > a);
    }
    _private__plotMinMax(startIndex, endIndexExclusive, plotIndex) {
        let result = null;
        for (let i = startIndex; i < endIndexExclusive; i++) {
            const values = this._private__items[i].value;
            const v = values[plotIndex];
            if (Number.isNaN(v)) {
                continue;
            }
            if (result === null) {
                result = { min: v, max: v };
            }
            else {
                if (v < result.min) {
                    result.min = v;
                }
                if (v > result.max) {
                    result.max = v;
                }
            }
        }
        return result;
    }
    _private__minMaxOnRangeCachedImpl(start, end, plotIndex) {
        // this code works for single series only
        // could fail after whitespaces implementation
        if (this.isEmpty()) {
            return null;
        }
        let result = null;
        // assume that bar indexes only increase
        const firstIndex = ensureNotNull(this.firstIndex());
        const lastIndex = ensureNotNull(this.lastIndex());
        const s = Math.max(start, firstIndex);
        const e = Math.min(end, lastIndex);
        const cachedLow = Math.ceil(s / CHUNK_SIZE) * CHUNK_SIZE;
        const cachedHigh = Math.max(cachedLow, Math.floor(e / CHUNK_SIZE) * CHUNK_SIZE);
        {
            const startIndex = this._private__lowerbound(s);
            const endIndex = this._private__upperbound(Math.min(e, cachedLow, end)); // non-inclusive end
            const plotMinMax = this._private__plotMinMax(startIndex, endIndex, plotIndex);
            result = mergeMinMax(result, plotMinMax);
        }
        let minMaxCache = this._private__minMaxCache.get(plotIndex);
        if (minMaxCache === undefined) {
            minMaxCache = new Map();
            this._private__minMaxCache.set(plotIndex, minMaxCache);
        }
        // now go cached
        for (let c = Math.max(cachedLow + 1, s); c < cachedHigh; c += CHUNK_SIZE) {
            const chunkIndex = Math.floor(c / CHUNK_SIZE);
            let chunkMinMax = minMaxCache.get(chunkIndex);
            if (chunkMinMax === undefined) {
                const chunkStart = this._private__lowerbound(chunkIndex * CHUNK_SIZE);
                const chunkEnd = this._private__upperbound((chunkIndex + 1) * CHUNK_SIZE - 1);
                chunkMinMax = this._private__plotMinMax(chunkStart, chunkEnd, plotIndex);
                minMaxCache.set(chunkIndex, chunkMinMax);
            }
            result = mergeMinMax(result, chunkMinMax);
        }
        // tail
        {
            const startIndex = this._private__lowerbound(cachedHigh);
            const endIndex = this._private__upperbound(e); // non-inclusive end
            const plotMinMax = this._private__plotMinMax(startIndex, endIndex, plotIndex);
            result = mergeMinMax(result, plotMinMax);
        }
        return result;
    }
}
function mergeMinMax(first, second) {
    if (first === null) {
        return second;
    }
    else {
        if (second === null) {
            return first;
        }
        else {
            // merge MinMax values
            const min = Math.min(first.min, second.min);
            const max = Math.max(first.max, second.max);
            return { min: min, max: max };
        }
    }
}

function createSeriesPlotList() {
    return new PlotList();
}

class Series extends PriceDataSource {
    constructor(model, options, seriesType) {
        super(model);
        this._private__data = createSeriesPlotList();
        this._private__priceLineView = new SeriesPriceLinePaneView(this);
        this._private__customPriceLines = [];
        this._private__baseHorizontalLineView = new SeriesHorizontalBaseLinePaneView(this);
        this._private__lastPriceAnimationPaneView = null;
        this._private__barColorerCache = null;
        this._private__markers = [];
        this._private__indexedMarkers = [];
        this._private__animationTimeoutId = null;
        this._private__options = options;
        this._private__seriesType = seriesType;
        const priceAxisView = new SeriesPriceAxisView(this);
        this._private__priceAxisViews = [priceAxisView];
        this._private__panePriceAxisView = new PanePriceAxisView(priceAxisView, this, model);
        if (seriesType === 'Area' || seriesType === 'Line' || seriesType === 'Baseline') {
            this._private__lastPriceAnimationPaneView = new SeriesLastPriceAnimationPaneView(this);
        }
        this._private__recreateFormatter();
        this._private__recreatePaneViews();
    }
    setDrawingPane(pane) {
        this._private__drawingPaneView._internal_setDrawingPane(pane);
    }
    destroy() {
        if (this._private__animationTimeoutId !== null) {
            clearTimeout(this._private__animationTimeoutId);
        }
    }
    priceLineColor(lastBarColor) {
        return this._private__options.priceLineColor || lastBarColor;
    }
    lastValueData(globalLast) {
        const noDataRes = { noData: true };
        const priceScale = this.priceScale();
        if (this.model().timeScale().isEmpty() || priceScale.isEmpty() || this._private__data.isEmpty()) {
            return noDataRes;
        }
        const visibleBars = this.model().timeScale().visibleStrictRange();
        const firstValue = this.firstValue();
        if (visibleBars === null || firstValue === null) {
            return noDataRes;
        }
        // find range of bars inside range
        // TODO: make it more optimal
        let bar;
        let lastIndex;
        if (globalLast) {
            const lastBar = this._private__data.last();
            if (lastBar === null) {
                return noDataRes;
            }
            bar = lastBar;
            lastIndex = lastBar.index;
        }
        else {
            const endBar = this._private__data.search(visibleBars.right(), -1 /* NearestLeft */);
            if (endBar === null) {
                return noDataRes;
            }
            bar = this._private__data.valueAt(endBar.index);
            if (bar === null) {
                return noDataRes;
            }
            lastIndex = endBar.index;
        }
        const price = bar.value[3 /* Close */];
        const barColorer = this.barColorer();
        const style = barColorer.barStyle(lastIndex, { value: bar });
        const coordinate = priceScale.priceToCoordinate(price, firstValue.value);
        return {
            noData: false,
            price,
            text: priceScale.formatPrice(price, firstValue.value),
            formattedPriceAbsolute: priceScale.formatPriceAbsolute(price),
            formattedPricePercentage: priceScale.formatPricePercentage(price, firstValue.value),
            color: style.barColor,
            coordinate: coordinate,
            index: lastIndex,
        };
    }
    barColorer() {
        if (this._private__barColorerCache !== null) {
            return this._private__barColorerCache;
        }
        this._private__barColorerCache = new SeriesBarColorer(this);
        return this._private__barColorerCache;
    }
    options() {
        return this._private__options;
    }
    applyOptions(options) {
        const targetPriceScaleId = options.priceScaleId;
        if (targetPriceScaleId !== undefined && targetPriceScaleId !== this._private__options.priceScaleId) {
            // series cannot do it itself, ask model
            this.model().moveSeriesToScale(this, targetPriceScaleId);
        }
        merge(this._private__options, options);
        if (options.priceFormat !== undefined) {
            this._private__recreateFormatter();
            // updated formatter might affect rendering  and as a consequence of this the width of price axis might be changed
            // thus we need to force the chart to do a full update to apply changes correctly
            // full update is quite heavy operation in terms of performance
            // but updating formatter looks like quite rare so forcing a full update here shouldn't affect the performance a lot
            this.model().fullUpdate();
        }
        this.model().updateSource(this);
        // a series might affect crosshair by some options (like crosshair markers)
        // that's why we need to update crosshair as well
        this.model().updateCrosshair();
        this._private__paneView.update('options');
    }
    setData(data, updateInfo) {
        this._private__data.setData(data);
        this._private__recalculateMarkers();
        this._private__paneView.update('data');
        this._private__markersPaneView.update('data');
        if (this._private__lastPriceAnimationPaneView !== null) {
            if (updateInfo && updateInfo.lastBarUpdatedOrNewBarsAddedToTheRight) {
                this._private__lastPriceAnimationPaneView._internal_onNewRealtimeDataReceived();
            }
            else if (data.length === 0) {
                this._private__lastPriceAnimationPaneView._internal_onDataCleared();
            }
        }
        const sourcePane = this.model().paneForSource(this);
        this.model().recalculatePane(sourcePane);
        this.model().updateSource(this);
        this.model().updateCrosshair();
        this.model().lightUpdate();
    }
    setMarkers(data) {
        this._private__markers = data;
        this._private__recalculateMarkers();
        const sourcePane = this.model().paneForSource(this);
        this._private__markersPaneView.update('data');
        this.model().recalculatePane(sourcePane);
        this.model().updateSource(this);
        this.model().updateCrosshair();
        this.model().lightUpdate();
    }
    markers() {
        return this._private__markers;
    }
    indexedMarkers() {
        return this._private__indexedMarkers;
    }
    createPriceLine(options) {
        const result = new CustomPriceLine(this, options);
        this._private__customPriceLines.push(result);
        this.model().updateSource(this);
        return result;
    }
    removePriceLine(line) {
        const index = this._private__customPriceLines.indexOf(line);
        if (index !== -1) {
            this._private__customPriceLines.splice(index, 1);
        }
        this.model().updateSource(this);
    }
    seriesType() {
        return this._private__seriesType;
    }
    firstValue() {
        const bar = this.firstBar();
        if (bar === null) {
            return null;
        }
        return {
            value: bar.value[3 /* Close */],
            timePoint: bar.time,
        };
    }
    firstBar() {
        const visibleBars = this.model().timeScale().visibleStrictRange();
        if (visibleBars === null) {
            return null;
        }
        const startTimePoint = visibleBars.left();
        return this._private__data.search(startTimePoint, 1 /* NearestRight */);
    }
    bars() {
        return this._private__data;
    }
    dataAt(time) {
        const prices = this._private__data.valueAt(time);
        if (prices === null) {
            return null;
        }
        if (this._private__seriesType === 'Bar' || this._private__seriesType === 'Candlestick') {
            return {
                open: prices.value[0 /* Open */],
                high: prices.value[1 /* High */],
                low: prices.value[2 /* Low */],
                close: prices.value[3 /* Close */],
            };
        }
        else {
            return prices.value[3 /* Close */];
        }
    }
    topPaneViews(pane) {
        const animationPaneView = this._private__lastPriceAnimationPaneView;
        if (animationPaneView === null || !animationPaneView._internal_visible()) {
            return [];
        }
        if (this._private__animationTimeoutId === null && animationPaneView._internal_animationActive()) {
            this._private__animationTimeoutId = setTimeout(() => {
                this._private__animationTimeoutId = null;
                this.model().cursorUpdate();
            }, 0);
        }
        animationPaneView._internal_invalidateStage();
        return [animationPaneView];
    }
    paneViews() {
        const res = [];
        if (!this._private__isOverlay()) {
            res.push(this._private__baseHorizontalLineView);
        }
        res.push(this._private__paneView, this._private__priceLineView, this._private__markersPaneView, this._private__drawingPaneView);
        const priceLineViews = this._private__customPriceLines.map((line) => line.paneView());
        res.push(...priceLineViews);
        return res;
    }
    labelPaneViews(pane) {
        return [
            this._private__panePriceAxisView,
            ...this._private__customPriceLines.map((line) => line.labelPaneView()),
        ];
    }
    priceAxisViews(pane, priceScale) {
        if (priceScale !== this._priceScale && !this._private__isOverlay()) {
            return [];
        }
        const result = [...this._private__priceAxisViews];
        for (const customPriceLine of this._private__customPriceLines) {
            result.push(customPriceLine.priceAxisView());
        }
        return result;
    }
    autoscaleInfo(startTimePoint, endTimePoint) {
        if (this._private__options.autoscaleInfoProvider !== undefined) {
            const autoscaleInfo = this._private__options.autoscaleInfoProvider(() => {
                const res = this._private__autoscaleInfoImpl(startTimePoint, endTimePoint);
                return (res === null) ? null : res.toRaw();
            });
            return AutoscaleInfoImpl.fromRaw(autoscaleInfo);
        }
        return this._private__autoscaleInfoImpl(startTimePoint, endTimePoint);
    }
    minMove() {
        return this._private__options.priceFormat.minMove;
    }
    formatter() {
        return this._private__formatter;
    }
    updateAllViews() {
        var _a;
        this._private__paneView.update();
        this._private__markersPaneView.update();
        this._private__drawingPaneView.update();
        for (const priceAxisView of this._private__priceAxisViews) {
            priceAxisView.update();
        }
        for (const customPriceLine of this._private__customPriceLines) {
            customPriceLine.update();
        }
        this._private__priceLineView._internal_update();
        this._private__baseHorizontalLineView._internal_update();
        (_a = this._private__lastPriceAnimationPaneView) === null || _a === void 0 ? void 0 : _a.update();
    }
    priceScale() {
        return ensureNotNull(super.priceScale());
    }
    markerDataAtIndex(index) {
        const getValue = (this._private__seriesType === 'Line' || this._private__seriesType === 'Area' || this._private__seriesType === 'Baseline') &&
            this._private__options.crosshairMarkerVisible;
        if (!getValue) {
            return null;
        }
        const bar = this._private__data.valueAt(index);
        if (bar === null) {
            return null;
        }
        const price = bar.value[3 /* Close */];
        const radius = this._private__markerRadius();
        const borderColor = this._private__markerBorderColor();
        const backgroundColor = this._private__markerBackgroundColor(index);
        return { price, radius, borderColor, backgroundColor };
    }
    title() {
        return this._private__options.title;
    }
    visible() {
        return this._private__options.visible;
    }
    _private__isOverlay() {
        const priceScale = this.priceScale();
        return !isDefaultPriceScale(priceScale.id());
    }
    _private__autoscaleInfoImpl(startTimePoint, endTimePoint) {
        if (!isInteger(startTimePoint) || !isInteger(endTimePoint) || this._private__data.isEmpty()) {
            return null;
        }
        // TODO: refactor this
        // series data is strongly hardcoded to keep bars
        const plots = this._private__seriesType === 'Line' || this._private__seriesType === 'Area' || this._private__seriesType === 'Baseline' || this._private__seriesType === 'Histogram'
            ? [3 /* Close */]
            : [2 /* Low */, 1 /* High */];
        const barsMinMax = this._private__data.minMaxOnRangeCached(startTimePoint, endTimePoint, plots);
        let range = barsMinMax !== null ? new PriceRangeImpl(barsMinMax.min, barsMinMax.max) : null;
        if (this.seriesType() === 'Histogram') {
            const base = this._private__options.base;
            const rangeWithBase = new PriceRangeImpl(base, base);
            range = range !== null ? range.merge(rangeWithBase) : rangeWithBase;
        }
        return new AutoscaleInfoImpl(range, this._private__markersPaneView._internal_autoScaleMargins());
    }
    _private__markerRadius() {
        switch (this._private__seriesType) {
            case 'Line':
            case 'Area':
            case 'Baseline':
                return this._private__options.crosshairMarkerRadius;
        }
        return 0;
    }
    _private__markerBorderColor() {
        switch (this._private__seriesType) {
            case 'Line':
            case 'Area':
            case 'Baseline': {
                const crosshairMarkerBorderColor = this._private__options.crosshairMarkerBorderColor;
                if (crosshairMarkerBorderColor.length !== 0) {
                    return crosshairMarkerBorderColor;
                }
            }
        }
        return null;
    }
    _private__markerBackgroundColor(index) {
        switch (this._private__seriesType) {
            case 'Line':
            case 'Area':
            case 'Baseline': {
                const crosshairMarkerBackgroundColor = this._private__options.crosshairMarkerBackgroundColor;
                if (crosshairMarkerBackgroundColor.length !== 0) {
                    return crosshairMarkerBackgroundColor;
                }
            }
        }
        return this.barColorer().barStyle(index).barColor;
    }
    _private__recreateFormatter() {
        switch (this._private__options.priceFormat.type) {
            case 'custom': {
                this._private__formatter = { format: this._private__options.priceFormat.formatter };
                break;
            }
            case 'volume': {
                this._private__formatter = new VolumeFormatter(this._private__options.priceFormat.precision);
                break;
            }
            case 'percent': {
                this._private__formatter = new PercentageFormatter(this._private__options.priceFormat.precision);
                break;
            }
            default: {
                const priceScale = Math.pow(10, this._private__options.priceFormat.precision);
                this._private__formatter = new PriceFormatter(priceScale, this._private__options.priceFormat.minMove * priceScale);
            }
        }
        if (this._priceScale !== null) {
            this._priceScale.updateFormatter();
        }
    }
    _private__recalculateMarkers() {
        const timeScale = this.model().timeScale();
        if (timeScale.isEmpty() || this._private__data.size() === 0) {
            this._private__indexedMarkers = [];
            return;
        }
        const firstDataIndex = ensureNotNull(this._private__data.firstIndex());
        this._private__indexedMarkers = this._private__markers.map((marker, index) => {
            // the first find index on the time scale (across all series)
            const timePointIndex = ensureNotNull(timeScale.timeToIndex(marker.time, true));
            // and then search that index inside the series data
            const searchMode = timePointIndex < firstDataIndex ? 1 /* NearestRight */ : -1 /* NearestLeft */;
            const seriesDataIndex = ensureNotNull(this._private__data.search(timePointIndex, searchMode)).index;
            return {
                time: seriesDataIndex,
                position: marker.position,
                shape: marker.shape,
                color: marker.color,
                id: marker.id,
                internalId: index,
                text: marker.text,
                size: marker.size,
            };
        });
    }
    _private__recreatePaneViews() {
        this._private__markersPaneView = new SeriesMarkersPaneView(this, this.model());
        this._private__drawingPaneView = new SeriesDrawingPaneView(this, this.model());
        switch (this._private__seriesType) {
            case 'Bar': {
                this._private__paneView = new SeriesBarsPaneView(this, this.model());
                break;
            }
            case 'Candlestick': {
                this._private__paneView = new SeriesCandlesticksPaneView(this, this.model());
                break;
            }
            case 'Line': {
                this._private__paneView = new SeriesLinePaneView(this, this.model());
                break;
            }
            case 'Area': {
                this._private__paneView = new SeriesAreaPaneView(this, this.model());
                break;
            }
            case 'Baseline': {
                this._private__paneView = new SeriesBaselinePaneView(this, this.model());
                break;
            }
            case 'Histogram': {
                this._private__paneView = new SeriesHistogramPaneView(this, this.model());
                break;
            }
            default: throw Error('Unknown chart style assigned: ' + this._private__seriesType);
        }
    }
}

class Magnet {
    constructor(options) {
        this._private__options = options;
    }
    _internal_align(price, index, pane) {
        let res = price;
        if (this._private__options.mode === 0 /* Normal */) {
            return res;
        }
        const defaultPriceScale = pane.defaultPriceScale();
        const firstValue = defaultPriceScale.firstValue();
        if (firstValue === null) {
            return res;
        }
        const y = defaultPriceScale.priceToCoordinate(price, firstValue);
        // get all serieses from the pane
        const serieses = pane.dataSources().filter(((ds) => (ds instanceof Series)));
        const candidates = serieses.reduce((acc, series) => {
            if (pane.isOverlay(series) || !series.visible()) {
                return acc;
            }
            const ps = series.priceScale();
            const bars = series.bars();
            if (ps.isEmpty() || !bars.contains(index)) {
                return acc;
            }
            const bar = bars.valueAt(index);
            if (bar === null) {
                return acc;
            }
            // convert bar to pixels
            const firstPrice = ensure(series.firstValue());
            return acc.concat([ps.priceToCoordinate(bar.value[3 /* Close */], firstPrice.value)]);
        }, []);
        if (candidates.length === 0) {
            return res;
        }
        candidates.sort((y1, y2) => Math.abs(y1 - y) - Math.abs(y2 - y));
        const nearest = candidates[0];
        res = defaultPriceScale.coordinateToPrice(nearest, firstValue);
        return res;
    }
}

class GridRenderer {
    constructor() {
        this._private__data = null;
    }
    _internal_setData(data) {
        this._private__data = data;
    }
    draw(ctx, pixelRatio, isHovered, hitTestData) {
        if (this._private__data === null) {
            return;
        }
        const lineWidth = Math.max(1, Math.floor(pixelRatio));
        ctx.lineWidth = lineWidth;
        const height = Math.ceil(this._private__data._internal_h * pixelRatio);
        const width = Math.ceil(this._private__data._internal_w * pixelRatio);
        strokeInPixel(ctx, () => {
            const data = ensureNotNull(this._private__data);
            if (data._internal_vertLinesVisible) {
                ctx.strokeStyle = data._internal_vertLinesColor;
                setLineStyle(ctx, data._internal_vertLineStyle);
                ctx.beginPath();
                for (const timeMark of data._internal_timeMarks) {
                    const x = Math.round(timeMark._internal_coord * pixelRatio);
                    ctx.moveTo(x, -lineWidth);
                    ctx.lineTo(x, height + lineWidth);
                }
                ctx.stroke();
            }
            if (data._internal_horzLinesVisible) {
                ctx.strokeStyle = data._internal_horzLinesColor;
                setLineStyle(ctx, data._internal_horzLineStyle);
                ctx.beginPath();
                for (const priceMark of data._internal_priceMarks) {
                    const y = Math.round(priceMark.coord * pixelRatio);
                    ctx.moveTo(-lineWidth, y);
                    ctx.lineTo(width + lineWidth, y);
                }
                ctx.stroke();
            }
        });
    }
}

class GridPaneView {
    constructor(pane) {
        this._private__renderer = new GridRenderer();
        this._private__invalidated = true;
        this._private__pane = pane;
    }
    update() {
        this._private__invalidated = true;
    }
    renderer(height, width) {
        if (this._private__invalidated) {
            const gridOptions = this._private__pane.model().options().grid;
            const data = {
                _internal_h: height,
                _internal_w: width,
                _internal_horzLinesVisible: gridOptions.horzLines.visible,
                _internal_vertLinesVisible: gridOptions.vertLines.visible,
                _internal_horzLinesColor: gridOptions.horzLines.color,
                _internal_vertLinesColor: gridOptions.vertLines.color,
                _internal_horzLineStyle: gridOptions.horzLines.style,
                _internal_vertLineStyle: gridOptions.vertLines.style,
                _internal_priceMarks: this._private__pane.defaultPriceScale().marks(),
                _internal_timeMarks: this._private__pane.model().timeScale().marks() || [],
            };
            this._private__renderer._internal_setData(data);
            this._private__invalidated = false;
        }
        return this._private__renderer;
    }
}

class Grid {
    constructor(pane) {
        this._private__paneView = new GridPaneView(pane);
    }
    paneView() {
        return this._private__paneView;
    }
}

const defLogFormula = {
    _internal_logicalOffset: 4,
    _internal_coordOffset: 0.0001,
};
function fromPercent(value, baseValue) {
    if (baseValue < 0) {
        value = -value;
    }
    return (value / 100) * baseValue + baseValue;
}
function toPercent(value, baseValue) {
    const result = 100 * (value - baseValue) / baseValue;
    return (baseValue < 0 ? -result : result);
}
function toPercentRange(priceRange, baseValue) {
    const minPercent = toPercent(priceRange.minValue(), baseValue);
    const maxPercent = toPercent(priceRange.maxValue(), baseValue);
    return new PriceRangeImpl(minPercent, maxPercent);
}
function fromIndexedTo100(value, baseValue) {
    value -= 100;
    if (baseValue < 0) {
        value = -value;
    }
    return (value / 100) * baseValue + baseValue;
}
function toIndexedTo100(value, baseValue) {
    const result = 100 * (value - baseValue) / baseValue + 100;
    return (baseValue < 0 ? -result : result);
}
function toIndexedTo100Range(priceRange, baseValue) {
    const minPercent = toIndexedTo100(priceRange.minValue(), baseValue);
    const maxPercent = toIndexedTo100(priceRange.maxValue(), baseValue);
    return new PriceRangeImpl(minPercent, maxPercent);
}
function toLog(price, logFormula) {
    const m = Math.abs(price);
    if (m < 1e-15) {
        return 0;
    }
    const res = log10(m + logFormula._internal_coordOffset) + logFormula._internal_logicalOffset;
    return ((price < 0) ? -res : res);
}
function fromLog(logical, logFormula) {
    const m = Math.abs(logical);
    if (m < 1e-15) {
        return 0;
    }
    const res = Math.pow(10, m - logFormula._internal_logicalOffset) - logFormula._internal_coordOffset;
    return (logical < 0) ? -res : res;
}
function convertPriceRangeToLog(priceRange, logFormula) {
    if (priceRange === null) {
        return null;
    }
    const min = toLog(priceRange.minValue(), logFormula);
    const max = toLog(priceRange.maxValue(), logFormula);
    return new PriceRangeImpl(min, max);
}
function canConvertPriceRangeFromLog(priceRange, logFormula) {
    if (priceRange === null) {
        return false;
    }
    const min = fromLog(priceRange.minValue(), logFormula);
    const max = fromLog(priceRange.maxValue(), logFormula);
    return isFinite(min) && isFinite(max);
}
function convertPriceRangeFromLog(priceRange, logFormula) {
    if (priceRange === null) {
        return null;
    }
    const min = fromLog(priceRange.minValue(), logFormula);
    const max = fromLog(priceRange.maxValue(), logFormula);
    return new PriceRangeImpl(min, max);
}
function logFormulaForPriceRange(range) {
    if (range === null) {
        return defLogFormula;
    }
    const diff = Math.abs(range.maxValue() - range.minValue());
    if (diff >= 1 || diff < 1e-15) {
        return defLogFormula;
    }
    const digits = Math.ceil(Math.abs(Math.log10(diff)));
    const logicalOffset = defLogFormula._internal_logicalOffset + digits;
    const coordOffset = 1 / Math.pow(10, logicalOffset);
    return {
        _internal_logicalOffset: logicalOffset,
        _internal_coordOffset: coordOffset,
    };
}
function logFormulasAreSame(f1, f2) {
    return f1._internal_logicalOffset === f2._internal_logicalOffset && f1._internal_coordOffset === f2._internal_coordOffset;
}

class PriceTickSpanCalculator {
    constructor(base, integralDividers) {
        this._private__base = base;
        this._private__integralDividers = integralDividers;
        if (isBaseDecimal(this._private__base)) {
            this._private__fractionalDividers = [2, 2.5, 2];
        }
        else {
            this._private__fractionalDividers = [];
            for (let baseRest = this._private__base; baseRest !== 1;) {
                if ((baseRest % 2) === 0) {
                    this._private__fractionalDividers.push(2);
                    baseRest /= 2;
                }
                else if ((baseRest % 5) === 0) {
                    this._private__fractionalDividers.push(2, 2.5);
                    baseRest /= 5;
                }
                else {
                    throw new Error('unexpected base');
                }
                if (this._private__fractionalDividers.length > 100) {
                    throw new Error('something wrong with base');
                }
            }
        }
    }
    _internal_tickSpan(high, low, maxTickSpan) {
        const minMovement = (this._private__base === 0) ? (0) : (1 / this._private__base);
        let resultTickSpan = Math.pow(10, Math.max(0, Math.ceil(log10(high - low))));
        let index = 0;
        let c = this._private__integralDividers[0];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // the second part is actual for small with very small values like 1e-10
            // greaterOrEqual fails for such values
            const resultTickSpanLargerMinMovement = greaterOrEqual(resultTickSpan, minMovement, 1e-14 /* TickSpanEpsilon */) && resultTickSpan > (minMovement + 1e-14 /* TickSpanEpsilon */);
            const resultTickSpanLargerMaxTickSpan = greaterOrEqual(resultTickSpan, maxTickSpan * c, 1e-14 /* TickSpanEpsilon */);
            const resultTickSpanLarger1 = greaterOrEqual(resultTickSpan, 1, 1e-14 /* TickSpanEpsilon */);
            const haveToContinue = resultTickSpanLargerMinMovement && resultTickSpanLargerMaxTickSpan && resultTickSpanLarger1;
            if (!haveToContinue) {
                break;
            }
            resultTickSpan /= c;
            c = this._private__integralDividers[++index % this._private__integralDividers.length];
        }
        if (resultTickSpan <= (minMovement + 1e-14 /* TickSpanEpsilon */)) {
            resultTickSpan = minMovement;
        }
        resultTickSpan = Math.max(1, resultTickSpan);
        if ((this._private__fractionalDividers.length > 0) && equal(resultTickSpan, 1, 1e-14 /* TickSpanEpsilon */)) {
            index = 0;
            c = this._private__fractionalDividers[0];
            while (greaterOrEqual(resultTickSpan, maxTickSpan * c, 1e-14 /* TickSpanEpsilon */) && resultTickSpan > (minMovement + 1e-14 /* TickSpanEpsilon */)) {
                resultTickSpan /= c;
                c = this._private__fractionalDividers[++index % this._private__fractionalDividers.length];
            }
        }
        return resultTickSpan;
    }
}

const TICK_DENSITY = 2.5;
class PriceTickMarkBuilder {
    constructor(priceScale, base, coordinateToLogicalFunc, logicalToCoordinateFunc) {
        this._private__marks = [];
        this._private__priceScale = priceScale;
        this._private__base = base;
        this._private__coordinateToLogicalFunc = coordinateToLogicalFunc;
        this._private__logicalToCoordinateFunc = logicalToCoordinateFunc;
    }
    _internal_tickSpan(high, low) {
        if (high < low) {
            throw new Error('high < low');
        }
        const scaleHeight = this._private__priceScale.height();
        const markHeight = this._private__tickMarkHeight();
        const maxTickSpan = (high - low) * markHeight / scaleHeight;
        const spanCalculator1 = new PriceTickSpanCalculator(this._private__base, [2, 2.5, 2]);
        const spanCalculator2 = new PriceTickSpanCalculator(this._private__base, [2, 2, 2.5]);
        const spanCalculator3 = new PriceTickSpanCalculator(this._private__base, [2.5, 2, 2]);
        const spans = [];
        spans.push(spanCalculator1._internal_tickSpan(high, low, maxTickSpan), spanCalculator2._internal_tickSpan(high, low, maxTickSpan), spanCalculator3._internal_tickSpan(high, low, maxTickSpan));
        return min(spans);
    }
    _internal_rebuildTickMarks() {
        const priceScale = this._private__priceScale;
        const firstValue = priceScale.firstValue();
        if (firstValue === null) {
            this._private__marks = [];
            return;
        }
        const scaleHeight = priceScale.height();
        const bottom = this._private__coordinateToLogicalFunc(scaleHeight - 1, firstValue);
        const top = this._private__coordinateToLogicalFunc(0, firstValue);
        const extraTopBottomMargin = this._private__priceScale.options().entireTextOnly ? this._private__fontHeight() / 2 : 0;
        const minCoord = extraTopBottomMargin;
        const maxCoord = scaleHeight - 1 - extraTopBottomMargin;
        const high = Math.max(bottom, top);
        const low = Math.min(bottom, top);
        if (high === low) {
            this._private__marks = [];
            return;
        }
        let span = this._internal_tickSpan(high, low);
        let mod = high % span;
        mod += mod < 0 ? span : 0;
        const sign = (high >= low) ? 1 : -1;
        let prevCoord = null;
        let targetIndex = 0;
        for (let logical = high - mod; logical > low; logical -= span) {
            const coord = this._private__logicalToCoordinateFunc(logical, firstValue, true);
            // check if there is place for it
            // this is required for log scale
            if (prevCoord !== null && Math.abs(coord - prevCoord) < this._private__tickMarkHeight()) {
                continue;
            }
            // check if a tick mark is partially visible and skip it if entireTextOnly is true
            if (coord < minCoord || coord > maxCoord) {
                continue;
            }
            if (targetIndex < this._private__marks.length) {
                this._private__marks[targetIndex].coord = coord;
                this._private__marks[targetIndex].label = priceScale.formatLogical(logical);
            }
            else {
                this._private__marks.push({
                    coord: coord,
                    label: priceScale.formatLogical(logical),
                });
            }
            targetIndex++;
            prevCoord = coord;
            if (priceScale.isLog()) {
                // recalc span
                span = this._internal_tickSpan(logical * sign, low);
            }
        }
        this._private__marks.length = targetIndex;
    }
    _internal_marks() {
        return this._private__marks;
    }
    _private__fontHeight() {
        return this._private__priceScale.fontSize();
    }
    _private__tickMarkHeight() {
        return Math.ceil(this._private__fontHeight() * TICK_DENSITY);
    }
}

function sortSources(sources) {
    return sources.slice().sort((s1, s2) => {
        return (ensureNotNull(s1.zorder()) - ensureNotNull(s2.zorder()));
    });
}

/**
 * Represents the price scale mode.
 */
var PriceScaleMode;
(function (PriceScaleMode) {
    /**
     * Price scale shows prices. Price range changes linearly.
     */
    PriceScaleMode[PriceScaleMode["Normal"] = 0] = "Normal";
    /**
     * Price scale shows prices. Price range changes logarithmically.
     */
    PriceScaleMode[PriceScaleMode["Logarithmic"] = 1] = "Logarithmic";
    /**
     * Price scale shows percentage values according the first visible value of the price scale.
     * The first visible value is 0% in this mode.
     */
    PriceScaleMode[PriceScaleMode["Percentage"] = 2] = "Percentage";
    /**
     * The same as percentage mode, but the first value is moved to 100.
     */
    PriceScaleMode[PriceScaleMode["IndexedTo100"] = 3] = "IndexedTo100";
})(PriceScaleMode || (PriceScaleMode = {}));
const percentageFormatter = new PercentageFormatter();
const defaultPriceFormatter = new PriceFormatter(100, 1);
class PriceScale {
    constructor(id, options, layoutOptions, localizationOptions) {
        this._private__height = 0;
        this._private__internalHeightCache = null;
        this._private__priceRange = null;
        this._private__priceRangeSnapshot = null;
        this._private__invalidatedForRange = { _internal_isValid: false, _internal_visibleBars: null };
        this._private__marginAbove = 0;
        this._private__marginBelow = 0;
        this._private__onMarksChanged = new Delegate();
        this._private__modeChanged = new Delegate();
        this._private__dataSources = [];
        this._private__cachedOrderedSources = null;
        this._private__marksCache = null;
        this._private__scaleStartPoint = null;
        this._private__scrollStartPoint = null;
        this._private__formatter = defaultPriceFormatter;
        this._private__logFormula = logFormulaForPriceRange(null);
        this._private__id = id;
        this._private__options = options;
        this._private__layoutOptions = layoutOptions;
        this._private__localizationOptions = localizationOptions;
        this._private__markBuilder = new PriceTickMarkBuilder(this, 100, this._private__coordinateToLogical.bind(this), this._private__logicalToCoordinate.bind(this));
    }
    id() {
        return this._private__id;
    }
    options() {
        return this._private__options;
    }
    applyOptions(options) {
        merge(this._private__options, options);
        this.updateFormatter();
        if (options.mode !== undefined) {
            this.setMode({ mode: options.mode });
        }
        if (options.scaleMargins !== undefined) {
            const top = ensureDefined(options.scaleMargins.top);
            const bottom = ensureDefined(options.scaleMargins.bottom);
            if (top < 0 || top > 1) {
                throw new Error(`Invalid top margin - expect value between 0 and 1, given=${top}`);
            }
            if (bottom < 0 || bottom > 1 || top + bottom > 1) {
                throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${bottom}`);
            }
            if (top + bottom > 1) {
                throw new Error(`Invalid margins - sum of margins must be less than 1, given=${top + bottom}`);
            }
            this._private__invalidateInternalHeightCache();
            this._private__marksCache = null;
        }
    }
    isAutoScale() {
        return this._private__options.autoScale;
    }
    isLog() {
        return this._private__options.mode === 1 /* Logarithmic */;
    }
    isPercentage() {
        return this._private__options.mode === 2 /* Percentage */;
    }
    isIndexedTo100() {
        return this._private__options.mode === 3 /* IndexedTo100 */;
    }
    mode() {
        return {
            autoScale: this._private__options.autoScale,
            isInverted: this._private__options.invertScale,
            mode: this._private__options.mode,
        };
    }
    // eslint-disable-next-line complexity
    setMode(newMode) {
        const oldMode = this.mode();
        let priceRange = null;
        if (newMode.autoScale !== undefined) {
            this._private__options.autoScale = newMode.autoScale;
        }
        if (newMode.mode !== undefined) {
            this._private__options.mode = newMode.mode;
            if (newMode.mode === 2 /* Percentage */ || newMode.mode === 3 /* IndexedTo100 */) {
                this._private__options.autoScale = true;
            }
            // TODO: Remove after making rebuildTickMarks lazy
            this._private__invalidatedForRange._internal_isValid = false;
        }
        // define which scale converted from
        if (oldMode.mode === 1 /* Logarithmic */ && newMode.mode !== oldMode.mode) {
            if (canConvertPriceRangeFromLog(this._private__priceRange, this._private__logFormula)) {
                priceRange = convertPriceRangeFromLog(this._private__priceRange, this._private__logFormula);
                if (priceRange !== null) {
                    this.setPriceRange(priceRange);
                }
            }
            else {
                this._private__options.autoScale = true;
            }
        }
        // define which scale converted to
        if (newMode.mode === 1 /* Logarithmic */ && newMode.mode !== oldMode.mode) {
            priceRange = convertPriceRangeToLog(this._private__priceRange, this._private__logFormula);
            if (priceRange !== null) {
                this.setPriceRange(priceRange);
            }
        }
        const modeChanged = oldMode.mode !== this._private__options.mode;
        if (modeChanged && (oldMode.mode === 2 /* Percentage */ || this.isPercentage())) {
            this.updateFormatter();
        }
        if (modeChanged && (oldMode.mode === 3 /* IndexedTo100 */ || this.isIndexedTo100())) {
            this.updateFormatter();
        }
        if (newMode.isInverted !== undefined && oldMode.isInverted !== newMode.isInverted) {
            this._private__options.invertScale = newMode.isInverted;
            this._private__onIsInvertedChanged();
        }
        this._private__modeChanged._internal_fire(oldMode, this.mode());
    }
    modeChanged() {
        return this._private__modeChanged;
    }
    fontSize() {
        return this._private__layoutOptions.fontSize;
    }
    height() {
        return this._private__height;
    }
    setHeight(value) {
        if (this._private__height === value) {
            return;
        }
        this._private__height = value;
        this._private__invalidateInternalHeightCache();
        this._private__marksCache = null;
    }
    internalHeight() {
        if (this._private__internalHeightCache) {
            return this._private__internalHeightCache;
        }
        const res = this.height() - this._private__topMarginPx() - this._private__bottomMarginPx();
        this._private__internalHeightCache = res;
        return res;
    }
    priceRange() {
        this._private__makeSureItIsValid();
        return this._private__priceRange;
    }
    setPriceRange(newPriceRange, isForceSetValue) {
        const oldPriceRange = this._private__priceRange;
        if (!isForceSetValue &&
            !(oldPriceRange === null && newPriceRange !== null) &&
            (oldPriceRange === null || oldPriceRange.equals(newPriceRange))) {
            return;
        }
        this._private__marksCache = null;
        this._private__priceRange = newPriceRange;
    }
    isEmpty() {
        this._private__makeSureItIsValid();
        return this._private__height === 0 || !this._private__priceRange || this._private__priceRange.isEmpty();
    }
    invertedCoordinate(coordinate) {
        return this.isInverted() ? coordinate : this.height() - 1 - coordinate;
    }
    priceToCoordinate(price, baseValue) {
        if (this.isPercentage()) {
            price = toPercent(price, baseValue);
        }
        else if (this.isIndexedTo100()) {
            price = toIndexedTo100(price, baseValue);
        }
        return this._private__logicalToCoordinate(price, baseValue);
    }
    pointsArrayToCoordinates(points, baseValue, visibleRange) {
        this._private__makeSureItIsValid();
        const bh = this._private__bottomMarginPx();
        const range = ensureNotNull(this.priceRange());
        const min = range.minValue();
        const max = range.maxValue();
        const ih = (this.internalHeight() - 1);
        const isInverted = this.isInverted();
        const hmm = ih / (max - min);
        const fromIndex = (visibleRange === undefined) ? 0 : visibleRange.from;
        const toIndex = (visibleRange === undefined) ? points.length : visibleRange.to;
        const transformFn = this._private__getCoordinateTransformer();
        for (let i = fromIndex; i < toIndex; i++) {
            const point = points[i];
            const price = point.price;
            if (isNaN(price)) {
                continue;
            }
            let logical = price;
            if (transformFn !== null) {
                logical = transformFn(point.price, baseValue);
            }
            const invCoordinate = bh + hmm * (logical - min);
            const coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
            point.y = coordinate;
        }
    }
    barPricesToCoordinates(pricesList, baseValue, visibleRange) {
        this._private__makeSureItIsValid();
        const bh = this._private__bottomMarginPx();
        const range = ensureNotNull(this.priceRange());
        const min = range.minValue();
        const max = range.maxValue();
        const ih = (this.internalHeight() - 1);
        const isInverted = this.isInverted();
        const hmm = ih / (max - min);
        const fromIndex = (visibleRange === undefined) ? 0 : visibleRange.from;
        const toIndex = (visibleRange === undefined) ? pricesList.length : visibleRange.to;
        const transformFn = this._private__getCoordinateTransformer();
        for (let i = fromIndex; i < toIndex; i++) {
            const bar = pricesList[i];
            let openLogical = bar.open;
            let highLogical = bar.high;
            let lowLogical = bar.low;
            let closeLogical = bar.close;
            if (transformFn !== null) {
                openLogical = transformFn(bar.open, baseValue);
                highLogical = transformFn(bar.high, baseValue);
                lowLogical = transformFn(bar.low, baseValue);
                closeLogical = transformFn(bar.close, baseValue);
            }
            let invCoordinate = bh + hmm * (openLogical - min);
            let coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
            bar.openY = coordinate;
            invCoordinate = bh + hmm * (highLogical - min);
            coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
            bar.highY = coordinate;
            invCoordinate = bh + hmm * (lowLogical - min);
            coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
            bar.lowY = coordinate;
            invCoordinate = bh + hmm * (closeLogical - min);
            coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
            bar.closeY = coordinate;
        }
    }
    coordinateToPrice(coordinate, baseValue) {
        const logical = this._private__coordinateToLogical(coordinate, baseValue);
        return this.logicalToPrice(logical, baseValue);
    }
    logicalToPrice(logical, baseValue) {
        let value = logical;
        if (this.isPercentage()) {
            value = fromPercent(value, baseValue);
        }
        else if (this.isIndexedTo100()) {
            value = fromIndexedTo100(value, baseValue);
        }
        return value;
    }
    dataSources() {
        return this._private__dataSources;
    }
    orderedSources() {
        if (this._private__cachedOrderedSources) {
            return this._private__cachedOrderedSources;
        }
        let sources = [];
        for (let i = 0; i < this._private__dataSources.length; i++) {
            const ds = this._private__dataSources[i];
            if (ds.zorder() === null) {
                ds.setZorder(i + 1);
            }
            sources.push(ds);
        }
        sources = sortSources(sources);
        this._private__cachedOrderedSources = sources;
        return this._private__cachedOrderedSources;
    }
    addDataSource(source) {
        if (this._private__dataSources.indexOf(source) !== -1) {
            return;
        }
        this._private__dataSources.push(source);
        this.updateFormatter();
        this.invalidateSourcesCache();
    }
    removeDataSource(source) {
        const index = this._private__dataSources.indexOf(source);
        if (index === -1) {
            throw new Error('source is not attached to scale');
        }
        this._private__dataSources.splice(index, 1);
        if (this._private__dataSources.length === 0) {
            this.setMode({
                autoScale: true,
            });
            // if no sources on price scale let's clear price range cache as well as enabling auto scale
            this.setPriceRange(null);
        }
        this.updateFormatter();
        this.invalidateSourcesCache();
    }
    firstValue() {
        // TODO: cache the result
        let result = null;
        for (const source of this._private__dataSources) {
            const firstValue = source.firstValue();
            if (firstValue === null) {
                continue;
            }
            if (result === null || firstValue.timePoint < result.timePoint) {
                result = firstValue;
            }
        }
        return result === null ? null : result.value;
    }
    isInverted() {
        return this._private__options.invertScale;
    }
    marks() {
        const firstValueIsNull = this.firstValue() === null;
        // do not recalculate marks if firstValueIsNull is true because in this case we'll always get empty result
        // this could happen in case when a series had some data and then you set empty data to it (in a simplified case)
        // we could display an empty price scale, but this is not good from UX
        // so in this case we need to keep an previous marks to display them on the scale
        // as one of possible examples for this situation could be the following:
        // let's say you have a study/indicator attached to a price scale and then you decide to stop it, i.e. remove its data because of its visibility
        // a user will see the previous marks on the scale until you turn on your study back or remove it from the chart completely
        if (this._private__marksCache !== null && (firstValueIsNull || this._private__marksCache._internal_firstValueIsNull === firstValueIsNull)) {
            return this._private__marksCache._internal_marks;
        }
        this._private__markBuilder._internal_rebuildTickMarks();
        const marks = this._private__markBuilder._internal_marks();
        this._private__marksCache = { _internal_marks: marks, _internal_firstValueIsNull: firstValueIsNull };
        this._private__onMarksChanged._internal_fire();
        return marks;
    }
    onMarksChanged() {
        return this._private__onMarksChanged;
    }
    startScale(x) {
        if (this.isPercentage() || this.isIndexedTo100()) {
            return;
        }
        if (this._private__scaleStartPoint !== null || this._private__priceRangeSnapshot !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        // invert x
        this._private__scaleStartPoint = this._private__height - x;
        this._private__priceRangeSnapshot = ensureNotNull(this.priceRange()).clone();
    }
    scaleTo(x) {
        if (this.isPercentage() || this.isIndexedTo100()) {
            return;
        }
        if (this._private__scaleStartPoint === null) {
            return;
        }
        this.setMode({
            autoScale: false,
        });
        // invert x
        x = this._private__height - x;
        if (x < 0) {
            x = 0;
        }
        let scaleCoeff = (this._private__scaleStartPoint + (this._private__height - 1) * 0.2) / (x + (this._private__height - 1) * 0.2);
        const newPriceRange = ensureNotNull(this._private__priceRangeSnapshot).clone();
        scaleCoeff = Math.max(scaleCoeff, 0.1);
        newPriceRange.scaleAroundCenter(scaleCoeff);
        this.setPriceRange(newPriceRange);
    }
    endScale() {
        if (this.isPercentage() || this.isIndexedTo100()) {
            return;
        }
        this._private__scaleStartPoint = null;
        this._private__priceRangeSnapshot = null;
    }
    startScroll(x) {
        if (this.isAutoScale()) {
            return;
        }
        if (this._private__scrollStartPoint !== null || this._private__priceRangeSnapshot !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        this._private__scrollStartPoint = x;
        this._private__priceRangeSnapshot = ensureNotNull(this.priceRange()).clone();
    }
    scrollTo(x) {
        if (this.isAutoScale()) {
            return;
        }
        if (this._private__scrollStartPoint === null) {
            return;
        }
        const priceUnitsPerPixel = ensureNotNull(this.priceRange()).length() / (this.internalHeight() - 1);
        let pixelDelta = x - this._private__scrollStartPoint;
        if (this.isInverted()) {
            pixelDelta *= -1;
        }
        const priceDelta = pixelDelta * priceUnitsPerPixel;
        const newPriceRange = ensureNotNull(this._private__priceRangeSnapshot).clone();
        newPriceRange.shift(priceDelta);
        this.setPriceRange(newPriceRange, true);
        this._private__marksCache = null;
    }
    endScroll() {
        if (this.isAutoScale()) {
            return;
        }
        if (this._private__scrollStartPoint === null) {
            return;
        }
        this._private__scrollStartPoint = null;
        this._private__priceRangeSnapshot = null;
    }
    formatter() {
        if (!this._private__formatter) {
            this.updateFormatter();
        }
        return this._private__formatter;
    }
    formatPrice(price, firstValue) {
        switch (this._private__options.mode) {
            case 2 /* Percentage */:
                return this.formatter().format(toPercent(price, firstValue));
            case 3 /* IndexedTo100 */:
                return this.formatter().format(toIndexedTo100(price, firstValue));
            default:
                return this._private__formatPrice(price);
        }
    }
    formatLogical(logical) {
        switch (this._private__options.mode) {
            case 2 /* Percentage */:
            case 3 /* IndexedTo100 */:
                return this.formatter().format(logical);
            default:
                return this._private__formatPrice(logical);
        }
    }
    formatPriceAbsolute(price) {
        return this._private__formatPrice(price, ensureNotNull(this._private__formatterSource()).formatter());
    }
    formatPricePercentage(price, baseValue) {
        price = toPercent(price, baseValue);
        return percentageFormatter.format(price);
    }
    sourcesForAutoScale() {
        return this._private__dataSources;
    }
    recalculatePriceRange(visibleBars) {
        this._private__invalidatedForRange = {
            _internal_visibleBars: visibleBars,
            _internal_isValid: false,
        };
    }
    updateAllViews() {
        this._private__dataSources.forEach((s) => s.updateAllViews());
    }
    updateFormatter() {
        this._private__marksCache = null;
        const formatterSource = this._private__formatterSource();
        let base = 100;
        if (formatterSource !== null) {
            base = Math.round(1 / formatterSource.minMove());
        }
        this._private__formatter = defaultPriceFormatter;
        if (this.isPercentage()) {
            this._private__formatter = percentageFormatter;
            base = 100;
        }
        else if (this.isIndexedTo100()) {
            this._private__formatter = new PriceFormatter(100, 1);
            base = 100;
        }
        else {
            if (formatterSource !== null) {
                // user
                this._private__formatter = formatterSource.formatter();
            }
        }
        this._private__markBuilder = new PriceTickMarkBuilder(this, base, this._private__coordinateToLogical.bind(this), this._private__logicalToCoordinate.bind(this));
        this._private__markBuilder._internal_rebuildTickMarks();
    }
    invalidateSourcesCache() {
        this._private__cachedOrderedSources = null;
    }
    /**
     * @returns The {@link IPriceDataSource} that will be used as the "formatter source" (take minMove for formatter).
     */
    _private__formatterSource() {
        return this._private__dataSources[0] || null;
    }
    _private__topMarginPx() {
        return this.isInverted()
            ? this._private__options.scaleMargins.bottom * this.height() + this._private__marginBelow
            : this._private__options.scaleMargins.top * this.height() + this._private__marginAbove;
    }
    _private__bottomMarginPx() {
        return this.isInverted()
            ? this._private__options.scaleMargins.top * this.height() + this._private__marginAbove
            : this._private__options.scaleMargins.bottom * this.height() + this._private__marginBelow;
    }
    _private__makeSureItIsValid() {
        if (!this._private__invalidatedForRange._internal_isValid) {
            this._private__invalidatedForRange._internal_isValid = true;
            this._private__recalculatePriceRangeImpl();
        }
    }
    _private__invalidateInternalHeightCache() {
        this._private__internalHeightCache = null;
    }
    _private__logicalToCoordinate(logical, baseValue) {
        this._private__makeSureItIsValid();
        if (this.isEmpty()) {
            return 0;
        }
        logical = this.isLog() && logical ? toLog(logical, this._private__logFormula) : logical;
        const range = ensureNotNull(this.priceRange());
        const invCoordinate = this._private__bottomMarginPx() +
            (this.internalHeight() - 1) * (logical - range.minValue()) / range.length();
        const coordinate = this.invertedCoordinate(invCoordinate);
        return coordinate;
    }
    _private__coordinateToLogical(coordinate, baseValue) {
        this._private__makeSureItIsValid();
        if (this.isEmpty()) {
            return 0;
        }
        const invCoordinate = this.invertedCoordinate(coordinate);
        const range = ensureNotNull(this.priceRange());
        const logical = range.minValue() + range.length() *
            ((invCoordinate - this._private__bottomMarginPx()) / (this.internalHeight() - 1));
        return this.isLog() ? fromLog(logical, this._private__logFormula) : logical;
    }
    _private__onIsInvertedChanged() {
        this._private__marksCache = null;
        this._private__markBuilder._internal_rebuildTickMarks();
    }
    // eslint-disable-next-line complexity
    _private__recalculatePriceRangeImpl() {
        const visibleBars = this._private__invalidatedForRange._internal_visibleBars;
        if (visibleBars === null) {
            return;
        }
        let priceRange = null;
        const sources = this.sourcesForAutoScale();
        let marginAbove = 0;
        let marginBelow = 0;
        for (const source of sources) {
            if (!source.visible()) {
                continue;
            }
            const firstValue = source.firstValue();
            if (firstValue === null) {
                continue;
            }
            const autoScaleInfo = source.autoscaleInfo(visibleBars.left(), visibleBars.right());
            let sourceRange = autoScaleInfo && autoScaleInfo.priceRange();
            if (sourceRange !== null) {
                switch (this._private__options.mode) {
                    case 1 /* Logarithmic */:
                        sourceRange = convertPriceRangeToLog(sourceRange, this._private__logFormula);
                        break;
                    case 2 /* Percentage */:
                        sourceRange = toPercentRange(sourceRange, firstValue.value);
                        break;
                    case 3 /* IndexedTo100 */:
                        sourceRange = toIndexedTo100Range(sourceRange, firstValue.value);
                        break;
                }
                if (priceRange === null) {
                    priceRange = sourceRange;
                }
                else {
                    priceRange = priceRange.merge(ensureNotNull(sourceRange));
                }
                if (autoScaleInfo !== null) {
                    const margins = autoScaleInfo.margins();
                    if (margins !== null) {
                        marginAbove = Math.max(marginAbove, margins.above);
                        marginBelow = Math.max(marginAbove, margins.below);
                    }
                }
            }
        }
        if (marginAbove !== this._private__marginAbove || marginBelow !== this._private__marginBelow) {
            this._private__marginAbove = marginAbove;
            this._private__marginBelow = marginBelow;
            this._private__marksCache = null;
            this._private__invalidateInternalHeightCache();
        }
        if (priceRange !== null) {
            // keep current range is new is empty
            if (priceRange.minValue() === priceRange.maxValue()) {
                const formatterSource = this._private__formatterSource();
                const minMove = formatterSource === null || this.isPercentage() || this.isIndexedTo100() ? 1 : formatterSource.minMove();
                // if price range is degenerated to 1 point let's extend it by 10 min move values
                // to avoid incorrect range and empty (blank) scale (in case of min tick much greater than 1)
                const extendValue = 5 * minMove;
                if (this.isLog()) {
                    priceRange = convertPriceRangeFromLog(priceRange, this._private__logFormula);
                }
                priceRange = new PriceRangeImpl(priceRange.minValue() - extendValue, priceRange.maxValue() + extendValue);
                if (this.isLog()) {
                    priceRange = convertPriceRangeToLog(priceRange, this._private__logFormula);
                }
            }
            if (this.isLog()) {
                const rawRange = convertPriceRangeFromLog(priceRange, this._private__logFormula);
                const newLogFormula = logFormulaForPriceRange(rawRange);
                if (!logFormulasAreSame(newLogFormula, this._private__logFormula)) {
                    const rawSnapshot = this._private__priceRangeSnapshot !== null ? convertPriceRangeFromLog(this._private__priceRangeSnapshot, this._private__logFormula) : null;
                    this._private__logFormula = newLogFormula;
                    priceRange = convertPriceRangeToLog(rawRange, newLogFormula);
                    if (rawSnapshot !== null) {
                        this._private__priceRangeSnapshot = convertPriceRangeToLog(rawSnapshot, newLogFormula);
                    }
                }
            }
            this.setPriceRange(priceRange);
        }
        else {
            // reset empty to default
            if (this._private__priceRange === null) {
                this.setPriceRange(new PriceRangeImpl(-0.5, 0.5));
                this._private__logFormula = logFormulaForPriceRange(null);
            }
        }
        this._private__invalidatedForRange._internal_isValid = true;
    }
    _private__getCoordinateTransformer() {
        if (this.isPercentage()) {
            return toPercent;
        }
        else if (this.isIndexedTo100()) {
            return toIndexedTo100;
        }
        else if (this.isLog()) {
            return (price) => toLog(price, this._private__logFormula);
        }
        return null;
    }
    _private__formatPrice(price, fallbackFormatter) {
        if (this._private__localizationOptions.priceFormatter === undefined) {
            if (fallbackFormatter === undefined) {
                fallbackFormatter = this.formatter();
            }
            return fallbackFormatter.format(price);
        }
        return this._private__localizationOptions.priceFormatter(price);
    }
}

const DEFAULT_STRETCH_FACTOR = 1000;
class Pane {
    constructor(timeScale, model) {
        this._private__dataSources = [];
        this._private__overlaySourcesByScaleId = new Map();
        this._private__height = 0;
        this._private__width = 0;
        this._private__stretchFactor = DEFAULT_STRETCH_FACTOR;
        this._private__cachedOrderedSources = null;
        this._private__destroyed = new Delegate();
        this._private__timeScale = timeScale;
        this._private__model = model;
        this._private__grid = new Grid(this);
        const options = model.options();
        this._private__leftPriceScale = this._private__createPriceScale("left" /* Left */, options.leftPriceScale);
        this._private__rightPriceScale = this._private__createPriceScale("right" /* Right */, options.rightPriceScale);
        this._private__leftPriceScale.modeChanged().subscribe(this._private__onPriceScaleModeChanged.bind(this, this._private__leftPriceScale), this);
        this._private__rightPriceScale.modeChanged().subscribe(this._private__onPriceScaleModeChanged.bind(this, this._private__rightPriceScale), this);
        this.applyScaleOptions(options);
    }
    applyScaleOptions(options) {
        if (options.leftPriceScale) {
            this._private__leftPriceScale.applyOptions(options.leftPriceScale);
        }
        if (options.rightPriceScale) {
            this._private__rightPriceScale.applyOptions(options.rightPriceScale);
        }
        if (options.localization) {
            this._private__leftPriceScale.updateFormatter();
            this._private__rightPriceScale.updateFormatter();
        }
        if (options.overlayPriceScales) {
            const sourceArrays = Array.from(this._private__overlaySourcesByScaleId.values());
            for (const arr of sourceArrays) {
                const priceScale = ensureNotNull(arr[0].priceScale());
                priceScale.applyOptions(options.overlayPriceScales);
                if (options.localization) {
                    priceScale.updateFormatter();
                }
            }
        }
    }
    priceScaleById(id) {
        switch (id) {
            case "left" /* Left */: {
                return this._private__leftPriceScale;
            }
            case "right" /* Right */: {
                return this._private__rightPriceScale;
            }
        }
        if (this._private__overlaySourcesByScaleId.has(id)) {
            return ensureDefined(this._private__overlaySourcesByScaleId.get(id))[0].priceScale();
        }
        return null;
    }
    destroy() {
        this.model().priceScalesOptionsChanged().unsubscribeAll(this);
        this._private__leftPriceScale.modeChanged().unsubscribeAll(this);
        this._private__rightPriceScale.modeChanged().unsubscribeAll(this);
        this._private__dataSources.forEach((source) => {
            if (source.destroy) {
                source.destroy();
            }
        });
        this._private__destroyed._internal_fire();
    }
    stretchFactor() {
        return this._private__stretchFactor;
    }
    setStretchFactor(factor) {
        this._private__stretchFactor = factor;
    }
    model() {
        return this._private__model;
    }
    width() {
        return this._private__width;
    }
    height() {
        return this._private__height;
    }
    setWidth(width) {
        this._private__width = width;
        this.updateAllSources();
    }
    setHeight(height) {
        this._private__height = height;
        this._private__leftPriceScale.setHeight(height);
        this._private__rightPriceScale.setHeight(height);
        // process overlays
        this._private__dataSources.forEach((ds) => {
            if (this.isOverlay(ds)) {
                const priceScale = ds.priceScale();
                if (priceScale !== null) {
                    priceScale.setHeight(height);
                }
            }
        });
        this.updateAllSources();
    }
    dataSources() {
        return this._private__dataSources;
    }
    isOverlay(source) {
        const priceScale = source.priceScale();
        if (priceScale === null) {
            return true;
        }
        return this._private__leftPriceScale !== priceScale && this._private__rightPriceScale !== priceScale;
    }
    addDataSource(source, targetScaleId, zOrder) {
        const targetZOrder = (zOrder !== undefined) ? zOrder : this._private__getZOrderMinMax()._internal_maxZOrder + 1;
        this._private__insertDataSource(source, targetScaleId, targetZOrder);
    }
    removeDataSource(source) {
        const index = this._private__dataSources.indexOf(source);
        assert(index !== -1, 'removeDataSource: invalid data source');
        this._private__dataSources.splice(index, 1);
        const priceScaleId = ensureNotNull(source.priceScale()).id();
        if (this._private__overlaySourcesByScaleId.has(priceScaleId)) {
            const overlaySources = ensureDefined(this._private__overlaySourcesByScaleId.get(priceScaleId));
            const overlayIndex = overlaySources.indexOf(source);
            if (overlayIndex !== -1) {
                overlaySources.splice(overlayIndex, 1);
                if (overlaySources.length === 0) {
                    this._private__overlaySourcesByScaleId.delete(priceScaleId);
                }
            }
        }
        const priceScale = source.priceScale();
        // if source has owner, it returns owner's price scale
        // and it does not have source in their list
        if (priceScale && priceScale.dataSources().indexOf(source) >= 0) {
            priceScale.removeDataSource(source);
        }
        if (priceScale !== null) {
            priceScale.invalidateSourcesCache();
            this.recalculatePriceScale(priceScale);
        }
        this._private__cachedOrderedSources = null;
    }
    priceScalePosition(priceScale) {
        if (priceScale === this._private__leftPriceScale) {
            return 'left';
        }
        if (priceScale === this._private__rightPriceScale) {
            return 'right';
        }
        return 'overlay';
    }
    leftPriceScale() {
        return this._private__leftPriceScale;
    }
    rightPriceScale() {
        return this._private__rightPriceScale;
    }
    startScalePrice(priceScale, x) {
        priceScale.startScale(x);
    }
    scalePriceTo(priceScale, x) {
        priceScale.scaleTo(x);
        // TODO: be more smart and update only affected views
        this.updateAllSources();
    }
    endScalePrice(priceScale) {
        priceScale.endScale();
    }
    startScrollPrice(priceScale, x) {
        priceScale.startScroll(x);
    }
    scrollPriceTo(priceScale, x) {
        priceScale.scrollTo(x);
        this.updateAllSources();
    }
    endScrollPrice(priceScale) {
        priceScale.endScroll();
    }
    updateAllSources() {
        this._private__dataSources.forEach((source) => {
            source.updateAllViews();
        });
    }
    defaultPriceScale() {
        let priceScale = null;
        if (this._private__model.options().rightPriceScale.visible && this._private__rightPriceScale.dataSources().length !== 0) {
            priceScale = this._private__rightPriceScale;
        }
        else if (this._private__model.options().leftPriceScale.visible && this._private__leftPriceScale.dataSources().length !== 0) {
            priceScale = this._private__leftPriceScale;
        }
        else if (this._private__dataSources.length !== 0) {
            priceScale = this._private__dataSources[0].priceScale();
        }
        if (priceScale === null) {
            priceScale = this._private__rightPriceScale;
        }
        return priceScale;
    }
    defaultVisiblePriceScale() {
        let priceScale = null;
        if (this._private__model.options().rightPriceScale.visible) {
            priceScale = this._private__rightPriceScale;
        }
        else if (this._private__model.options().leftPriceScale.visible) {
            priceScale = this._private__leftPriceScale;
        }
        return priceScale;
    }
    recalculatePriceScale(priceScale) {
        if (priceScale === null || !priceScale.isAutoScale()) {
            return;
        }
        this._private__recalculatePriceScaleImpl(priceScale);
    }
    resetPriceScale(priceScale) {
        const visibleBars = this._private__timeScale.visibleStrictRange();
        priceScale.setMode({ autoScale: true });
        if (visibleBars !== null) {
            priceScale.recalculatePriceRange(visibleBars);
        }
        this.updateAllSources();
    }
    momentaryAutoScale() {
        this._private__recalculatePriceScaleImpl(this._private__leftPriceScale);
        this._private__recalculatePriceScaleImpl(this._private__rightPriceScale);
    }
    recalculate() {
        this.recalculatePriceScale(this._private__leftPriceScale);
        this.recalculatePriceScale(this._private__rightPriceScale);
        this._private__dataSources.forEach((ds) => {
            if (this.isOverlay(ds)) {
                this.recalculatePriceScale(ds.priceScale());
            }
        });
        this.updateAllSources();
        this._private__model.lightUpdate();
    }
    orderedSources() {
        if (this._private__cachedOrderedSources === null) {
            this._private__cachedOrderedSources = sortSources(this._private__dataSources);
        }
        return this._private__cachedOrderedSources;
    }
    onDestroyed() {
        return this._private__destroyed;
    }
    grid() {
        return this._private__grid;
    }
    _private__recalculatePriceScaleImpl(priceScale) {
        // TODO: can use this checks
        const sourceForAutoScale = priceScale.sourcesForAutoScale();
        if (sourceForAutoScale && sourceForAutoScale.length > 0 && !this._private__timeScale.isEmpty()) {
            const visibleBars = this._private__timeScale.visibleStrictRange();
            if (visibleBars !== null) {
                priceScale.recalculatePriceRange(visibleBars);
            }
        }
        priceScale.updateAllViews();
    }
    _private__getZOrderMinMax() {
        const sources = this.orderedSources();
        if (sources.length === 0) {
            return { _internal_minZOrder: 0, _internal_maxZOrder: 0 };
        }
        let minZOrder = 0;
        let maxZOrder = 0;
        for (let j = 0; j < sources.length; j++) {
            const ds = sources[j];
            const zOrder = ds.zorder();
            if (zOrder !== null) {
                if (zOrder < minZOrder) {
                    minZOrder = zOrder;
                }
                if (zOrder > maxZOrder) {
                    maxZOrder = zOrder;
                }
            }
        }
        return { _internal_minZOrder: minZOrder, _internal_maxZOrder: maxZOrder };
    }
    _private__insertDataSource(source, priceScaleId, zOrder) {
        let priceScale = this.priceScaleById(priceScaleId);
        if (priceScale === null) {
            priceScale = this._private__createPriceScale(priceScaleId, this._private__model.options().overlayPriceScales);
        }
        this._private__dataSources.push(source);
        if (!isDefaultPriceScale(priceScaleId)) {
            const overlaySources = this._private__overlaySourcesByScaleId.get(priceScaleId) || [];
            overlaySources.push(source);
            this._private__overlaySourcesByScaleId.set(priceScaleId, overlaySources);
        }
        priceScale.addDataSource(source);
        source.setPriceScale(priceScale);
        source.setZorder(zOrder);
        this.recalculatePriceScale(priceScale);
        this._private__cachedOrderedSources = null;
    }
    _private__onPriceScaleModeChanged(priceScale, oldMode, newMode) {
        if (oldMode.mode === newMode.mode) {
            return;
        }
        // momentary auto scale if we toggle percentage/indexedTo100 mode
        this._private__recalculatePriceScaleImpl(priceScale);
    }
    _private__createPriceScale(id, options) {
        const actualOptions = Object.assign({ visible: true, autoScale: true }, clone(options));
        const priceScale = new PriceScale(id, actualOptions, this._private__model.options().layout, this._private__model.options().localization);
        priceScale.setHeight(this.height());
        return priceScale;
    }
}

const getMonth = (date) => date.getUTCMonth() + 1;
const getDay = (date) => date.getUTCDate();
const getYear = (date) => date.getUTCFullYear();
const dd = (date) => numberToStringWithLeadingZero(getDay(date), 2);
const MMMM = (date, locale) => new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
    .toLocaleString(locale, { month: 'long' });
const MMM = (date, locale) => new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
    .toLocaleString(locale, { month: 'short' });
const MM = (date) => numberToStringWithLeadingZero(getMonth(date), 2);
const yy = (date) => numberToStringWithLeadingZero(getYear(date) % 100, 2);
const yyyy = (date) => numberToStringWithLeadingZero(getYear(date), 4);
function formatDate(date, format, locale) {
    return format
        .replace(/yyyy/g, yyyy(date))
        .replace(/yy/g, yy(date))
        .replace(/MMMM/g, MMMM(date, locale))
        .replace(/MMM/g, MMM(date, locale))
        .replace(/MM/g, MM(date))
        .replace(/dd/g, dd(date));
}

class DateFormatter {
    constructor(dateFormat = 'yyyy-MM-dd', locale = 'default') {
        this._private__dateFormat = dateFormat;
        this._private__locale = locale;
    }
    _internal_format(date) {
        return formatDate(date, this._private__dateFormat, this._private__locale);
    }
}

class TimeFormatter {
    constructor(format) {
        this._private__formatStr = format || '%h:%m:%s';
    }
    _internal_format(date) {
        return this._private__formatStr.replace('%h', numberToStringWithLeadingZero(date.getUTCHours(), 2)).
            replace('%m', numberToStringWithLeadingZero(date.getUTCMinutes(), 2)).
            replace('%s', numberToStringWithLeadingZero(date.getUTCSeconds(), 2));
    }
}

const defaultParams = {
    _internal_dateFormat: 'yyyy-MM-dd',
    _internal_timeFormat: '%h:%m:%s',
    _internal_dateTimeSeparator: ' ',
    _internal_locale: 'default',
};
class DateTimeFormatter {
    constructor(params = {}) {
        const formatterParams = Object.assign(Object.assign({}, defaultParams), params);
        this._private__dateFormatter = new DateFormatter(formatterParams._internal_dateFormat, formatterParams._internal_locale);
        this._private__timeFormatter = new TimeFormatter(formatterParams._internal_timeFormat);
        this._private__separator = formatterParams._internal_dateTimeSeparator;
    }
    _internal_format(dateTime) {
        return `${this._private__dateFormatter._internal_format(dateTime)}${this._private__separator}${this._private__timeFormatter._internal_format(dateTime)}`;
    }
}

function defaultTickMarkFormatter(timePoint, tickMarkType, locale) {
    const formatOptions = {};
    switch (tickMarkType) {
        case 0 /* Year */:
            formatOptions.year = 'numeric';
            break;
        case 1 /* Month */:
            formatOptions.month = 'short';
            break;
        case 2 /* DayOfMonth */:
            formatOptions.day = 'numeric';
            break;
        case 3 /* Time */:
            formatOptions.hour12 = false;
            formatOptions.hour = '2-digit';
            formatOptions.minute = '2-digit';
            break;
        case 4 /* TimeWithSeconds */:
            formatOptions.hour12 = false;
            formatOptions.hour = '2-digit';
            formatOptions.minute = '2-digit';
            formatOptions.second = '2-digit';
            break;
    }
    const date = timePoint.businessDay === undefined
        ? new Date(timePoint.timestamp * 1000)
        : new Date(Date.UTC(timePoint.businessDay.year, timePoint.businessDay.month - 1, timePoint.businessDay.day));
    // from given date we should use only as UTC date or timestamp
    // but to format as locale date we can convert UTC date to local date
    const localDateFromUtc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return localDateFromUtc.toLocaleString(locale, formatOptions);
}

class FormattedLabelsCache {
    constructor(format, size = 50) {
        this._private__actualSize = 0;
        this._private__usageTick = 1;
        this._private__oldestTick = 1;
        this._private__cache = new Map();
        this._private__tick2Labels = new Map();
        this._private__format = format;
        this._private__maxSize = size;
    }
    _internal_format(tickMark) {
        const time = tickMark._internal_time;
        const cacheKey = time.businessDay === undefined
            ? new Date(time.timestamp * 1000).getTime()
            : new Date(Date.UTC(time.businessDay.year, time.businessDay.month - 1, time.businessDay.day)).getTime();
        const tick = this._private__cache.get(cacheKey);
        if (tick !== undefined) {
            return tick._internal_string;
        }
        if (this._private__actualSize === this._private__maxSize) {
            const oldestValue = this._private__tick2Labels.get(this._private__oldestTick);
            this._private__tick2Labels.delete(this._private__oldestTick);
            this._private__cache.delete(ensureDefined(oldestValue));
            this._private__oldestTick++;
            this._private__actualSize--;
        }
        const str = this._private__format(tickMark);
        this._private__cache.set(cacheKey, { _internal_string: str, _internal_tick: this._private__usageTick });
        this._private__tick2Labels.set(this._private__usageTick, cacheKey);
        this._private__actualSize++;
        this._private__usageTick++;
        return str;
    }
}

class RangeImpl {
    constructor(left, right) {
        assert(left <= right, 'right should be >= left');
        this._private__left = left;
        this._private__right = right;
    }
    left() {
        return this._private__left;
    }
    right() {
        return this._private__right;
    }
    count() {
        return this._private__right - this._private__left + 1;
    }
    contains(index) {
        return this._private__left <= index && index <= this._private__right;
    }
    equals(other) {
        return this._private__left === other.left() && this._private__right === other.right();
    }
}
function areRangesEqual(first, second) {
    if (first === null || second === null) {
        return first === second;
    }
    return first.equals(second);
}

class TickMarks {
    constructor() {
        this._private__marksByWeight = new Map();
        this._private__cache = null;
    }
    _internal_setTimeScalePoints(newPoints, firstChangedPointIndex) {
        this._private__removeMarksSinceIndex(firstChangedPointIndex);
        this._private__cache = null;
        for (let index = firstChangedPointIndex; index < newPoints.length; ++index) {
            const point = newPoints[index];
            let marksForWeight = this._private__marksByWeight.get(point.timeWeight);
            if (marksForWeight === undefined) {
                marksForWeight = [];
                this._private__marksByWeight.set(point.timeWeight, marksForWeight);
            }
            marksForWeight.push({
                _internal_index: index,
                _internal_time: point.time,
                _internal_weight: point.timeWeight,
                _internal_originalTime: point.originalTime,
            });
        }
    }
    _internal_build(spacing, maxWidth) {
        const maxIndexesPerMark = Math.ceil(maxWidth / spacing);
        if (this._private__cache === null || this._private__cache._internal_maxIndexesPerMark !== maxIndexesPerMark) {
            this._private__cache = {
                _internal_marks: this._private__buildMarksImpl(maxIndexesPerMark),
                _internal_maxIndexesPerMark: maxIndexesPerMark,
            };
        }
        return this._private__cache._internal_marks;
    }
    _private__removeMarksSinceIndex(sinceIndex) {
        if (sinceIndex === 0) {
            this._private__marksByWeight.clear();
            return;
        }
        const weightsToClear = [];
        this._private__marksByWeight.forEach((marks, timeWeight) => {
            if (sinceIndex <= marks[0]._internal_index) {
                weightsToClear.push(timeWeight);
            }
            else {
                marks.splice(lowerbound(marks, sinceIndex, (tm) => tm._internal_index < sinceIndex), Infinity);
            }
        });
        for (const weight of weightsToClear) {
            this._private__marksByWeight.delete(weight);
        }
    }
    _private__buildMarksImpl(maxIndexesPerMark) {
        let marks = [];
        for (const weight of Array.from(this._private__marksByWeight.keys()).sort((a, b) => b - a)) {
            if (!this._private__marksByWeight.get(weight)) {
                continue;
            }
            // Built tickMarks are now prevMarks, and marks it as new array
            const prevMarks = marks;
            marks = [];
            const prevMarksLength = prevMarks.length;
            let prevMarksPointer = 0;
            const currentWeight = ensureDefined(this._private__marksByWeight.get(weight));
            const currentWeightLength = currentWeight.length;
            let rightIndex = Infinity;
            let leftIndex = -Infinity;
            for (let i = 0; i < currentWeightLength; i++) {
                const mark = currentWeight[i];
                const currentIndex = mark._internal_index;
                // Determine indexes with which current index will be compared
                // All marks to the right is moved to new array
                while (prevMarksPointer < prevMarksLength) {
                    const lastMark = prevMarks[prevMarksPointer];
                    const lastIndex = lastMark._internal_index;
                    if (lastIndex < currentIndex) {
                        prevMarksPointer++;
                        marks.push(lastMark);
                        leftIndex = lastIndex;
                        rightIndex = Infinity;
                    }
                    else {
                        rightIndex = lastIndex;
                        break;
                    }
                }
                if (rightIndex - currentIndex >= maxIndexesPerMark && currentIndex - leftIndex >= maxIndexesPerMark) {
                    // TickMark fits. Place it into new array
                    marks.push(mark);
                    leftIndex = currentIndex;
                }
            }
            // Place all unused tickMarks into new array;
            for (; prevMarksPointer < prevMarksLength; prevMarksPointer++) {
                marks.push(prevMarks[prevMarksPointer]);
            }
        }
        return marks;
    }
}

class TimeScaleVisibleRange {
    constructor(logicalRange) {
        this._private__logicalRange = logicalRange;
    }
    _internal_strictRange() {
        if (this._private__logicalRange === null) {
            return null;
        }
        return new RangeImpl(Math.floor(this._private__logicalRange.left()), Math.ceil(this._private__logicalRange.right()));
    }
    _internal_logicalRange() {
        return this._private__logicalRange;
    }
    static _internal_invalid() {
        return new TimeScaleVisibleRange(null);
    }
}

/**
 * Represents the type of a tick mark on the time axis.
 */
var TickMarkType;
(function (TickMarkType) {
    /**
     * The start of the year (e.g. it's the first tick mark in a year).
     */
    TickMarkType[TickMarkType["Year"] = 0] = "Year";
    /**
     * The start of the month (e.g. it's the first tick mark in a month).
     */
    TickMarkType[TickMarkType["Month"] = 1] = "Month";
    /**
     * A day of the month.
     */
    TickMarkType[TickMarkType["DayOfMonth"] = 2] = "DayOfMonth";
    /**
     * A time without seconds.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow
    TickMarkType[TickMarkType["Time"] = 3] = "Time";
    /**
     * A time with seconds.
     */
    TickMarkType[TickMarkType["TimeWithSeconds"] = 4] = "TimeWithSeconds";
})(TickMarkType || (TickMarkType = {}));
class TimeScale {
    constructor(model, options, localizationOptions) {
        this._private__width = 0;
        this._private__baseIndexOrNull = null;
        this._private__points = [];
        this._private__scrollStartPoint = null;
        this._private__scaleStartPoint = null;
        this._private__tickMarks = new TickMarks();
        this._private__formattedByWeight = new Map();
        this._private__visibleRange = TimeScaleVisibleRange._internal_invalid();
        this._private__visibleRangeInvalidated = true;
        this._private__visibleBarsChanged = new Delegate();
        this._private__logicalRangeChanged = new Delegate();
        this._private__optionsApplied = new Delegate();
        this._private__commonTransitionStartState = null;
        this._private__timeMarksCache = null;
        this._private__labels = [];
        this._private__options = options;
        this._private__localizationOptions = localizationOptions;
        this._private__rightOffset = options.rightOffset;
        this._private__barSpacing = options.barSpacing;
        this._private__model = model;
        this._private__updateDateTimeFormatter();
    }
    options() {
        return this._private__options;
    }
    applyLocalizationOptions(localizationOptions) {
        merge(this._private__localizationOptions, localizationOptions);
        this._private__invalidateTickMarks();
        this._private__updateDateTimeFormatter();
    }
    applyOptions(options, localizationOptions) {
        var _a;
        merge(this._private__options, options);
        if (this._private__options.fixLeftEdge) {
            this._private__doFixLeftEdge();
        }
        if (this._private__options.fixRightEdge) {
            this._private__doFixRightEdge();
        }
        // note that bar spacing should be applied before right offset
        // because right offset depends on bar spacing
        if (options.barSpacing !== undefined) {
            this._private__model.setBarSpacing(options.barSpacing);
        }
        if (options.rightOffset !== undefined) {
            this._private__model.setRightOffset(options.rightOffset);
        }
        if (options.minBarSpacing !== undefined) {
            // yes, if we apply min bar spacing then we need to correct bar spacing
            // the easiest way is to apply it once again
            this._private__model.setBarSpacing((_a = options.barSpacing) !== null && _a !== void 0 ? _a : this._private__barSpacing);
        }
        this._private__invalidateTickMarks();
        this._private__updateDateTimeFormatter();
        this._private__optionsApplied._internal_fire();
    }
    indexToTime(index) {
        var _a, _b;
        return (_b = (_a = this._private__points[index]) === null || _a === void 0 ? void 0 : _a.time) !== null && _b !== void 0 ? _b : null;
    }
    indexToTimeScalePoint(index) {
        var _a;
        return (_a = this._private__points[index]) !== null && _a !== void 0 ? _a : null;
    }
    timeToIndex(time, findNearest) {
        if (this._private__points.length < 1) {
            // no time points available
            return null;
        }
        if (time.timestamp > this._private__points[this._private__points.length - 1].time.timestamp) {
            // special case
            return findNearest ? this._private__points.length - 1 : null;
        }
        const index = lowerbound(this._private__points, time.timestamp, (a, b) => a.time.timestamp < b);
        if (time.timestamp < this._private__points[index].time.timestamp) {
            return findNearest ? index : null;
        }
        return index;
    }
    isEmpty() {
        return this._private__width === 0 || this._private__points.length === 0 || this._private__baseIndexOrNull === null;
    }
    // strict range: integer indices of the bars in the visible range rounded in more wide direction
    visibleStrictRange() {
        this._private__updateVisibleRange();
        return this._private__visibleRange._internal_strictRange();
    }
    visibleLogicalRange() {
        this._private__updateVisibleRange();
        return this._private__visibleRange._internal_logicalRange();
    }
    visibleTimeRange() {
        const visibleBars = this.visibleStrictRange();
        if (visibleBars === null) {
            return null;
        }
        const range = {
            from: visibleBars.left(),
            to: visibleBars.right(),
        };
        return this.timeRangeForLogicalRange(range);
    }
    timeRangeForLogicalRange(range) {
        const from = Math.round(range.from);
        const to = Math.round(range.to);
        const firstIndex = ensureNotNull(this._private__firstIndex());
        const lastIndex = ensureNotNull(this._private__lastIndex());
        return {
            from: ensureNotNull(this.indexToTime(Math.max(firstIndex, from))),
            to: ensureNotNull(this.indexToTime(Math.min(lastIndex, to))),
        };
    }
    logicalRangeForTimeRange(range) {
        return {
            from: ensureNotNull(this.timeToIndex(range.from, true)),
            to: ensureNotNull(this.timeToIndex(range.to, true)),
        };
    }
    width() {
        return this._private__width;
    }
    setWidth(newWidth) {
        if (!isFinite(newWidth) || newWidth <= 0) {
            return;
        }
        if (this._private__width === newWidth) {
            return;
        }
        // when we change the width and we need to correct visible range because of fixing left edge
        // we need to check the previous visible range rather than the new one
        // because it might be updated by changing width, bar spacing, etc
        // but we need to try to keep the same range
        const previousVisibleRange = this.visibleLogicalRange();
        const oldWidth = this._private__width;
        this._private__width = newWidth;
        this._private__visibleRangeInvalidated = true;
        if (this._private__options.lockVisibleTimeRangeOnResize && oldWidth !== 0) {
            // recalculate bar spacing
            const newBarSpacing = this._private__barSpacing * newWidth / oldWidth;
            this._private__barSpacing = newBarSpacing;
        }
        // if time scale is scrolled to the end of data and we have fixed right edge
        // keep left edge instead of right
        // we need it to avoid "shaking" if the last bar visibility affects time scale width
        if (this._private__options.fixLeftEdge) {
            // note that logical left range means not the middle of a bar (it's the left border)
            if (previousVisibleRange !== null && previousVisibleRange.left() <= 0) {
                const delta = oldWidth - newWidth;
                // reduce  _rightOffset means move right
                // we could move more than required - this will be fixed by _correctOffset()
                this._private__rightOffset -= Math.round(delta / this._private__barSpacing) + 1;
                this._private__visibleRangeInvalidated = true;
            }
        }
        // updating bar spacing should be first because right offset depends on it
        this._private__correctBarSpacing();
        this._private__correctOffset();
    }
    indexToCoordinate(index) {
        if (this.isEmpty() || !isInteger(index)) {
            return 0;
        }
        const baseIndex = this.baseIndex();
        const deltaFromRight = baseIndex + this._private__rightOffset - index;
        const coordinate = this._private__width - (deltaFromRight + 0.5) * this._private__barSpacing - 1;
        return coordinate;
    }
    indexesToCoordinates(points, visibleRange) {
        const baseIndex = this.baseIndex();
        const indexFrom = (visibleRange === undefined) ? 0 : visibleRange.from;
        const indexTo = (visibleRange === undefined) ? points.length : visibleRange.to;
        for (let i = indexFrom; i < indexTo; i++) {
            const index = points[i].time;
            const deltaFromRight = baseIndex + this._private__rightOffset - index;
            const coordinate = this._private__width - (deltaFromRight + 0.5) * this._private__barSpacing - 1;
            points[i].x = coordinate;
        }
    }
    coordinateToIndex(x) {
        return Math.ceil(this._private__coordinateToFloatIndex(x));
    }
    setRightOffset(offset) {
        this._private__visibleRangeInvalidated = true;
        this._private__rightOffset = offset;
        this._private__correctOffset();
        this._private__model.recalculateAllPanes();
        this._private__model.lightUpdate();
    }
    barSpacing() {
        return this._private__barSpacing;
    }
    setBarSpacing(newBarSpacing) {
        this._private__setBarSpacing(newBarSpacing);
        // do not allow scroll out of visible bars
        this._private__correctOffset();
        this._private__model.recalculateAllPanes();
        this._private__model.lightUpdate();
    }
    rightOffset() {
        return this._private__rightOffset;
    }
    // eslint-disable-next-line complexity
    marks() {
        if (this.isEmpty()) {
            return null;
        }
        if (this._private__timeMarksCache !== null) {
            return this._private__timeMarksCache;
        }
        const spacing = this._private__barSpacing;
        const fontSize = this._private__model.options().layout.fontSize;
        const maxLabelWidth = (fontSize + 4) * 5;
        const indexPerLabel = Math.round(maxLabelWidth / spacing);
        const visibleBars = ensureNotNull(this.visibleStrictRange());
        const firstBar = Math.max(visibleBars.left(), visibleBars.left() - indexPerLabel);
        const lastBar = Math.max(visibleBars.right(), visibleBars.right() - indexPerLabel);
        const items = this._private__tickMarks._internal_build(spacing, maxLabelWidth);
        // according to indexPerLabel value this value means "earliest index which _might be_ used as the second label on time scale"
        const earliestIndexOfSecondLabel = this._private__firstIndex() + indexPerLabel;
        // according to indexPerLabel value this value means "earliest index which _might be_ used as the second last label on time scale"
        const indexOfSecondLastLabel = this._private__lastIndex() - indexPerLabel;
        const isAllScalingAndScrollingDisabled = this._private__isAllScalingAndScrollingDisabled();
        const isLeftEdgeFixed = this._private__options.fixLeftEdge || isAllScalingAndScrollingDisabled;
        const isRightEdgeFixed = this._private__options.fixRightEdge || isAllScalingAndScrollingDisabled;
        let targetIndex = 0;
        for (const tm of items) {
            if (!(firstBar <= tm._internal_index && tm._internal_index <= lastBar)) {
                continue;
            }
            let label;
            if (targetIndex < this._private__labels.length) {
                label = this._private__labels[targetIndex];
                label.coord = this.indexToCoordinate(tm._internal_index);
                label.label = this._private__formatLabel(tm);
                label.weight = tm._internal_weight;
            }
            else {
                label = {
                    needAlignCoordinate: false,
                    coord: this.indexToCoordinate(tm._internal_index),
                    label: this._private__formatLabel(tm),
                    weight: tm._internal_weight,
                };
                this._private__labels.push(label);
            }
            if (this._private__barSpacing > (maxLabelWidth / 2) && !isAllScalingAndScrollingDisabled) {
                // if there is enough space then let's show all tick marks as usual
                label.needAlignCoordinate = false;
            }
            else {
                // if a user is able to scroll after a tick mark then show it as usual, otherwise the coordinate might be aligned
                // if the index is for the second (last) label or later (earlier) then most likely this label might be displayed without correcting the coordinate
                label.needAlignCoordinate = (isLeftEdgeFixed && tm._internal_index <= earliestIndexOfSecondLabel) || (isRightEdgeFixed && tm._internal_index >= indexOfSecondLastLabel);
            }
            targetIndex++;
        }
        this._private__labels.length = targetIndex;
        this._private__timeMarksCache = this._private__labels;
        return this._private__labels;
    }
    restoreDefault() {
        this._private__visibleRangeInvalidated = true;
        this.setBarSpacing(this._private__options.barSpacing);
        this.setRightOffset(this._private__options.rightOffset);
    }
    setBaseIndex(baseIndex) {
        this._private__visibleRangeInvalidated = true;
        this._private__baseIndexOrNull = baseIndex;
        this._private__correctOffset();
        this._private__doFixLeftEdge();
    }
    /**
     * Zoom in/out the scale around a `zoomPoint` on `scale` value.
     *
     * @param zoomPoint - X coordinate of the point to apply the zoom.
     * If `rightBarStaysOnScroll` option is disabled, then will be used to restore right offset.
     * @param scale - Zoom value (in 1/10 parts of current bar spacing).
     * Negative value means zoom out, positive - zoom in.
     */
    zoom(zoomPoint, scale) {
        const floatIndexAtZoomPoint = this._private__coordinateToFloatIndex(zoomPoint);
        const barSpacing = this.barSpacing();
        const newBarSpacing = barSpacing + scale * (barSpacing / 10);
        // zoom in/out bar spacing
        this.setBarSpacing(newBarSpacing);
        if (!this._private__options.rightBarStaysOnScroll) {
            // and then correct right offset to move index under zoomPoint back to its coordinate
            this.setRightOffset(this.rightOffset() + (floatIndexAtZoomPoint - this._private__coordinateToFloatIndex(zoomPoint)));
        }
    }
    startScale(x) {
        if (this._private__scrollStartPoint) {
            this.endScroll();
        }
        if (this._private__scaleStartPoint !== null || this._private__commonTransitionStartState !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        this._private__scaleStartPoint = x;
        this._private__saveCommonTransitionsStartState();
    }
    scaleTo(x) {
        if (this._private__commonTransitionStartState === null) {
            return;
        }
        const startLengthFromRight = clamp(this._private__width - x, 0, this._private__width);
        const currentLengthFromRight = clamp(this._private__width - ensureNotNull(this._private__scaleStartPoint), 0, this._private__width);
        if (startLengthFromRight === 0 || currentLengthFromRight === 0) {
            return;
        }
        this.setBarSpacing(this._private__commonTransitionStartState._internal_barSpacing * startLengthFromRight / currentLengthFromRight);
    }
    endScale() {
        if (this._private__scaleStartPoint === null) {
            return;
        }
        this._private__scaleStartPoint = null;
        this._private__clearCommonTransitionsStartState();
    }
    startScroll(x) {
        if (this._private__scrollStartPoint !== null || this._private__commonTransitionStartState !== null) {
            return;
        }
        if (this.isEmpty()) {
            return;
        }
        this._private__scrollStartPoint = x;
        this._private__saveCommonTransitionsStartState();
    }
    scrollTo(x) {
        if (this._private__scrollStartPoint === null) {
            return;
        }
        const shiftInLogical = (this._private__scrollStartPoint - x) / this.barSpacing();
        this._private__rightOffset = ensureNotNull(this._private__commonTransitionStartState)._internal_rightOffset + shiftInLogical;
        this._private__visibleRangeInvalidated = true;
        // do not allow scroll out of visible bars
        this._private__correctOffset();
    }
    endScroll() {
        if (this._private__scrollStartPoint === null) {
            return;
        }
        this._private__scrollStartPoint = null;
        this._private__clearCommonTransitionsStartState();
    }
    scrollToRealTime() {
        this.scrollToOffsetAnimated(this._private__options.rightOffset);
    }
    scrollToOffsetAnimated(offset, animationDuration = 400 /* DefaultAnimationDuration */) {
        if (!isFinite(offset)) {
            throw new RangeError('offset is required and must be finite number');
        }
        if (!isFinite(animationDuration) || animationDuration <= 0) {
            throw new RangeError('animationDuration (optional) must be finite positive number');
        }
        const source = this._private__rightOffset;
        const animationStart = performance.now();
        const animationFn = () => {
            const animationProgress = (performance.now() - animationStart) / animationDuration;
            const finishAnimation = animationProgress >= 1;
            const rightOffset = finishAnimation ? offset : source + (offset - source) * animationProgress;
            this.setRightOffset(rightOffset);
            if (!finishAnimation) {
                setTimeout(animationFn, 20);
            }
        };
        animationFn();
    }
    update(newPoints, firstChangedPointIndex) {
        this._private__visibleRangeInvalidated = true;
        this._private__points = newPoints;
        this._private__tickMarks._internal_setTimeScalePoints(newPoints, firstChangedPointIndex);
        this._private__correctOffset();
    }
    visibleBarsChanged() {
        return this._private__visibleBarsChanged;
    }
    logicalRangeChanged() {
        return this._private__logicalRangeChanged;
    }
    optionsApplied() {
        return this._private__optionsApplied;
    }
    baseIndex() {
        // null is used to known that baseIndex is not set yet
        // so in methods which should known whether it is set or not
        // we should check field `_baseIndexOrNull` instead of getter `baseIndex()`
        // see minRightOffset for example
        return this._private__baseIndexOrNull || 0;
    }
    setVisibleRange(range) {
        const length = range.count();
        this._private__setBarSpacing(this._private__width / length);
        this._private__rightOffset = range.right() - this.baseIndex();
        this._private__correctOffset();
        this._private__visibleRangeInvalidated = true;
        this._private__model.recalculateAllPanes();
        this._private__model.lightUpdate();
    }
    fitContent() {
        const first = this._private__firstIndex();
        const last = this._private__lastIndex();
        if (first === null || last === null) {
            return;
        }
        this.setVisibleRange(new RangeImpl(first, last + this._private__options.rightOffset));
    }
    setLogicalRange(range) {
        const barRange = new RangeImpl(range.from, range.to);
        this.setVisibleRange(barRange);
    }
    formatDateTime(timeScalePoint) {
        if (this._private__localizationOptions.timeFormatter !== undefined) {
            return this._private__localizationOptions.timeFormatter(timeScalePoint.originalTime);
        }
        return this._private__dateTimeFormatter._internal_format(new Date(timeScalePoint.time.timestamp * 1000));
    }
    _private__isAllScalingAndScrollingDisabled() {
        const { handleScroll, handleScale } = this._private__model.options();
        return !handleScroll.horzTouchDrag
            && !handleScroll.mouseWheel
            && !handleScroll.pressedMouseMove
            && !handleScroll.vertTouchDrag
            && !handleScale.axisDoubleClickReset
            && !handleScale.axisPressedMouseMove.time
            && !handleScale.mouseWheel
            && !handleScale.pinch;
    }
    _private__firstIndex() {
        return this._private__points.length === 0 ? null : 0;
    }
    _private__lastIndex() {
        return this._private__points.length === 0 ? null : (this._private__points.length - 1);
    }
    _private__rightOffsetForCoordinate(x) {
        return (this._private__width - 1 - x) / this._private__barSpacing;
    }
    _private__coordinateToFloatIndex(x) {
        const deltaFromRight = this._private__rightOffsetForCoordinate(x);
        const baseIndex = this.baseIndex();
        const index = baseIndex + this._private__rightOffset - deltaFromRight;
        // JavaScript uses very strange rounding
        // we need rounding to avoid problems with calculation errors
        return Math.round(index * 1000000) / 1000000;
    }
    _private__setBarSpacing(newBarSpacing) {
        const oldBarSpacing = this._private__barSpacing;
        this._private__barSpacing = newBarSpacing;
        this._private__correctBarSpacing();
        // this._barSpacing might be changed in _correctBarSpacing
        if (oldBarSpacing !== this._private__barSpacing) {
            this._private__visibleRangeInvalidated = true;
            this._private__resetTimeMarksCache();
        }
    }
    _private__updateVisibleRange() {
        if (!this._private__visibleRangeInvalidated) {
            return;
        }
        this._private__visibleRangeInvalidated = false;
        if (this.isEmpty()) {
            this._private__setVisibleRange(TimeScaleVisibleRange._internal_invalid());
            return;
        }
        const baseIndex = this.baseIndex();
        const newBarsLength = this._private__width / this._private__barSpacing;
        const rightBorder = this._private__rightOffset + baseIndex;
        const leftBorder = rightBorder - newBarsLength + 1;
        const logicalRange = new RangeImpl(leftBorder, rightBorder);
        this._private__setVisibleRange(new TimeScaleVisibleRange(logicalRange));
    }
    _private__correctBarSpacing() {
        const minBarSpacing = this._private__minBarSpacing();
        if (this._private__barSpacing < minBarSpacing) {
            this._private__barSpacing = minBarSpacing;
            this._private__visibleRangeInvalidated = true;
        }
        if (this._private__width !== 0) {
            // make sure that this (1 / Constants.MinVisibleBarsCount) >= coeff in max bar spacing (it's 0.5 here)
            const maxBarSpacing = this._private__width * 0.5;
            if (this._private__barSpacing > maxBarSpacing) {
                this._private__barSpacing = maxBarSpacing;
                this._private__visibleRangeInvalidated = true;
            }
        }
    }
    _private__minBarSpacing() {
        // if both options are enabled then limit bar spacing so that zooming-out is not possible
        // if it would cause either the first or last points to move too far from an edge
        if (this._private__options.fixLeftEdge && this._private__options.fixRightEdge && this._private__points.length !== 0) {
            return this._private__width / this._private__points.length;
        }
        return this._private__options.minBarSpacing;
    }
    _private__correctOffset() {
        // block scrolling of to future
        const maxRightOffset = this._private__maxRightOffset();
        if (this._private__rightOffset > maxRightOffset) {
            this._private__rightOffset = maxRightOffset;
            this._private__visibleRangeInvalidated = true;
        }
        // block scrolling of to past
        const minRightOffset = this._private__minRightOffset();
        if (minRightOffset !== null && this._private__rightOffset < minRightOffset) {
            this._private__rightOffset = minRightOffset;
            this._private__visibleRangeInvalidated = true;
        }
    }
    _private__minRightOffset() {
        const firstIndex = this._private__firstIndex();
        const baseIndex = this._private__baseIndexOrNull;
        if (firstIndex === null || baseIndex === null) {
            return null;
        }
        const barsEstimation = this._private__options.fixLeftEdge
            ? this._private__width / this._private__barSpacing
            : Math.min(2 /* MinVisibleBarsCount */, this._private__points.length);
        return firstIndex - baseIndex - 1 + barsEstimation;
    }
    _private__maxRightOffset() {
        return this._private__options.fixRightEdge
            ? 0
            : (this._private__width / this._private__barSpacing) - Math.min(2 /* MinVisibleBarsCount */, this._private__points.length);
    }
    _private__saveCommonTransitionsStartState() {
        this._private__commonTransitionStartState = {
            _internal_barSpacing: this.barSpacing(),
            _internal_rightOffset: this.rightOffset(),
        };
    }
    _private__clearCommonTransitionsStartState() {
        this._private__commonTransitionStartState = null;
    }
    _private__formatLabel(tickMark) {
        let formatter = this._private__formattedByWeight.get(tickMark._internal_weight);
        if (formatter === undefined) {
            formatter = new FormattedLabelsCache((mark) => {
                return this._private__formatLabelImpl(mark);
            });
            this._private__formattedByWeight.set(tickMark._internal_weight, formatter);
        }
        return formatter._internal_format(tickMark);
    }
    _private__formatLabelImpl(tickMark) {
        const tickMarkType = weightToTickMarkType(tickMark._internal_weight, this._private__options.timeVisible, this._private__options.secondsVisible);
        if (this._private__options.tickMarkFormatter !== undefined) {
            return this._private__options.tickMarkFormatter(tickMark._internal_originalTime, tickMarkType, this._private__localizationOptions.locale);
        }
        return defaultTickMarkFormatter(tickMark._internal_time, tickMarkType, this._private__localizationOptions.locale);
    }
    _private__setVisibleRange(newVisibleRange) {
        const oldVisibleRange = this._private__visibleRange;
        this._private__visibleRange = newVisibleRange;
        if (!areRangesEqual(oldVisibleRange._internal_strictRange(), this._private__visibleRange._internal_strictRange())) {
            this._private__visibleBarsChanged._internal_fire();
        }
        if (!areRangesEqual(oldVisibleRange._internal_logicalRange(), this._private__visibleRange._internal_logicalRange())) {
            this._private__logicalRangeChanged._internal_fire();
        }
        // TODO: reset only coords in case when this._visibleBars has not been changed
        this._private__resetTimeMarksCache();
    }
    _private__resetTimeMarksCache() {
        this._private__timeMarksCache = null;
    }
    _private__invalidateTickMarks() {
        this._private__resetTimeMarksCache();
        this._private__formattedByWeight.clear();
    }
    _private__updateDateTimeFormatter() {
        const dateFormat = this._private__localizationOptions.dateFormat;
        if (this._private__options.timeVisible) {
            this._private__dateTimeFormatter = new DateTimeFormatter({
                _internal_dateFormat: dateFormat,
                _internal_timeFormat: this._private__options.secondsVisible ? '%h:%m:%s' : '%h:%m',
                _internal_dateTimeSeparator: '   ',
                _internal_locale: this._private__localizationOptions.locale,
            });
        }
        else {
            this._private__dateTimeFormatter = new DateFormatter(dateFormat, this._private__localizationOptions.locale);
        }
    }
    _private__doFixLeftEdge() {
        if (!this._private__options.fixLeftEdge) {
            return;
        }
        const firstIndex = this._private__firstIndex();
        if (firstIndex === null) {
            return;
        }
        const visibleRange = this.visibleStrictRange();
        if (visibleRange === null) {
            return;
        }
        const delta = visibleRange.left() - firstIndex;
        if (delta < 0) {
            const leftEdgeOffset = this._private__rightOffset - delta - 1;
            this.setRightOffset(leftEdgeOffset);
        }
        this._private__correctBarSpacing();
    }
    _private__doFixRightEdge() {
        this._private__correctOffset();
        this._private__correctBarSpacing();
    }
}
// eslint-disable-next-line complexity
function weightToTickMarkType(weight, timeVisible, secondsVisible) {
    switch (weight) {
        case 0 /* LessThanSecond */:
        case 10 /* Second */:
            return timeVisible
                ? (secondsVisible ? 4 /* TimeWithSeconds */ : 3 /* Time */)
                : 2 /* DayOfMonth */;
        case 20 /* Minute1 */:
        case 21 /* Minute5 */:
        case 22 /* Minute30 */:
        case 30 /* Hour1 */:
        case 31 /* Hour3 */:
        case 32 /* Hour6 */:
        case 33 /* Hour12 */:
            return timeVisible ? 3 /* Time */ : 2 /* DayOfMonth */;
        case 50 /* Day */:
            return 2 /* DayOfMonth */;
        case 60 /* Month */:
            return 1 /* Month */;
        case 70 /* Year */:
            return 0 /* Year */;
    }
}

class WatermarkRenderer extends ScaledRenderer {
    constructor(data) {
        super();
        this._private__metricsCache = new Map();
        this._private__data = data;
    }
    _internal__drawImpl(ctx) { }
    _internal__drawBackgroundImpl(ctx) {
        if (!this._private__data._internal_visible) {
            return;
        }
        ctx.save();
        let textHeight = 0;
        for (const line of this._private__data._internal_lines) {
            if (line._internal_text.length === 0) {
                continue;
            }
            ctx.font = line._internal_font;
            const textWidth = this._private__metrics(ctx, line._internal_text);
            if (textWidth > this._private__data._internal_width) {
                line._internal_zoom = this._private__data._internal_width / textWidth;
            }
            else {
                line._internal_zoom = 1;
            }
            textHeight += line._internal_lineHeight * line._internal_zoom;
        }
        let vertOffset = 0;
        switch (this._private__data._internal_vertAlign) {
            case 'top':
                vertOffset = 0;
                break;
            case 'center':
                vertOffset = Math.max((this._private__data._internal_height - textHeight) / 2, 0);
                break;
            case 'bottom':
                vertOffset = Math.max((this._private__data._internal_height - textHeight), 0);
                break;
        }
        ctx.fillStyle = this._private__data._internal_color;
        for (const line of this._private__data._internal_lines) {
            ctx.save();
            let horzOffset = 0;
            switch (this._private__data._internal_horzAlign) {
                case 'left':
                    ctx.textAlign = 'left';
                    horzOffset = line._internal_lineHeight / 2;
                    break;
                case 'center':
                    ctx.textAlign = 'center';
                    horzOffset = this._private__data._internal_width / 2;
                    break;
                case 'right':
                    ctx.textAlign = 'right';
                    horzOffset = this._private__data._internal_width - 1 - line._internal_lineHeight / 2;
                    break;
            }
            ctx.translate(horzOffset, vertOffset);
            ctx.textBaseline = 'top';
            ctx.font = line._internal_font;
            ctx.scale(line._internal_zoom, line._internal_zoom);
            ctx.fillText(line._internal_text, 0, line._internal_vertOffset);
            ctx.restore();
            vertOffset += line._internal_lineHeight * line._internal_zoom;
        }
        ctx.restore();
    }
    _private__metrics(ctx, text) {
        const fontCache = this._private__fontCache(ctx.font);
        let result = fontCache.get(text);
        if (result === undefined) {
            result = ctx.measureText(text).width;
            fontCache.set(text, result);
        }
        return result;
    }
    _private__fontCache(font) {
        let fontCache = this._private__metricsCache.get(font);
        if (fontCache === undefined) {
            fontCache = new Map();
            this._private__metricsCache.set(font, fontCache);
        }
        return fontCache;
    }
}

class WatermarkPaneView {
    constructor(source) {
        this._private__invalidated = true;
        this._private__rendererData = {
            _internal_visible: false,
            _internal_color: '',
            _internal_height: 0,
            _internal_width: 0,
            _internal_lines: [],
            _internal_vertAlign: 'center',
            _internal_horzAlign: 'center',
        };
        this._private__renderer = new WatermarkRenderer(this._private__rendererData);
        this._private__source = source;
    }
    update() {
        this._private__invalidated = true;
    }
    renderer(height, width) {
        if (this._private__invalidated) {
            this._private__updateImpl(height, width);
            this._private__invalidated = false;
        }
        return this._private__renderer;
    }
    _private__updateImpl(height, width) {
        const options = this._private__source.options();
        const data = this._private__rendererData;
        data._internal_visible = options.visible;
        if (!data._internal_visible) {
            return;
        }
        data._internal_color = options.color;
        data._internal_width = width;
        data._internal_height = height;
        data._internal_horzAlign = options.horzAlign;
        data._internal_vertAlign = options.vertAlign;
        data._internal_lines = [
            {
                _internal_text: options.text,
                _internal_font: makeFont(options.fontSize, options.fontFamily, options.fontStyle),
                _internal_lineHeight: options.fontSize * 1.2,
                _internal_vertOffset: 0,
                _internal_zoom: 0,
            },
        ];
    }
}

class Watermark extends DataSource {
    constructor(model, options) {
        super();
        this._private__options = options;
        this._private__paneView = new WatermarkPaneView(this);
    }
    priceAxisViews() {
        return [];
    }
    paneViews() {
        return [this._private__paneView];
    }
    options() {
        return this._private__options;
    }
    updateAllViews() {
        this._private__paneView.update();
    }
}

/// <reference types="_build-time-constants" />
/**
 * Determine how to exit the tracking mode.
 *
 * By default, mobile users will long press to deactivate the scroll and have the ability to check values and dates.
 * Another press is required to activate the scroll, be able to move left/right, zoom, etc.
 */
var TrackingModeExitMode;
(function (TrackingModeExitMode) {
    /**
     * Tracking Mode will be deactivated on touch end event.
     */
    TrackingModeExitMode[TrackingModeExitMode["OnTouchEnd"] = 0] = "OnTouchEnd";
    /**
     * Tracking Mode will be deactivated on the next tap event.
     */
    TrackingModeExitMode[TrackingModeExitMode["OnNextTap"] = 1] = "OnNextTap";
})(TrackingModeExitMode || (TrackingModeExitMode = {}));
class ChartModel {
    constructor(invalidateHandler, options) {
        this._private__panes = [];
        this._private__serieses = [];
        this._private__width = 0;
        this._private__initialTimeScrollPos = null;
        this._private__hoveredSource = null;
        this._private__priceScalesOptionsChanged = new Delegate();
        this._private__crosshairMoved = new Delegate();
        this._private__gradientColorsCache = null;
        this._private__invalidateHandler = invalidateHandler;
        this._private__options = options;
        this._private__rendererOptionsProvider = new PriceAxisRendererOptionsProvider(this);
        this._private__timeScale = new TimeScale(this, options.timeScale, this._private__options.localization);
        this._private__crosshair = new Crosshair(this, options.crosshair);
        this._private__magnet = new Magnet(options.crosshair);
        this._private__watermark = new Watermark(this, options.watermark);
        this.createPane();
        this._private__panes[0].setStretchFactor(DEFAULT_STRETCH_FACTOR * 2);
        this._private__backgroundTopColor = this._private__getBackgroundColor(0 /* Top */);
        this._private__backgroundBottomColor = this._private__getBackgroundColor(1 /* Bottom */);
    }
    fullUpdate() {
        this._private__invalidate(new InvalidateMask(3 /* Full */));
    }
    lightUpdate() {
        this._private__invalidate(new InvalidateMask(2 /* Light */));
    }
    cursorUpdate() {
        this._private__invalidate(new InvalidateMask(1 /* Cursor */));
    }
    updateSource(source) {
        const inv = this._private__invalidationMaskForSource(source);
        this._private__invalidate(inv);
    }
    hoveredSource() {
        return this._private__hoveredSource;
    }
    setHoveredSource(source) {
        const prevSource = this._private__hoveredSource;
        this._private__hoveredSource = source;
        if (prevSource !== null) {
            this.updateSource(prevSource.source);
        }
        if (source !== null) {
            this.updateSource(source.source);
        }
    }
    options() {
        return this._private__options;
    }
    applyOptions(options) {
        merge(this._private__options, options);
        this._private__panes.forEach((p) => p.applyScaleOptions(options));
        if (options.timeScale !== undefined) {
            this._private__timeScale.applyOptions(options.timeScale);
        }
        if (options.localization !== undefined) {
            this._private__timeScale.applyLocalizationOptions(options.localization);
        }
        if (options.leftPriceScale || options.rightPriceScale) {
            this._private__priceScalesOptionsChanged._internal_fire();
        }
        this._private__backgroundTopColor = this._private__getBackgroundColor(0 /* Top */);
        this._private__backgroundBottomColor = this._private__getBackgroundColor(1 /* Bottom */);
        this.fullUpdate();
    }
    applyPriceScaleOptions(priceScaleId, options) {
        if (priceScaleId === "left" /* Left */) {
            this.applyOptions({
                leftPriceScale: options,
            });
            return;
        }
        else if (priceScaleId === "right" /* Right */) {
            this.applyOptions({
                rightPriceScale: options,
            });
            return;
        }
        const res = this.findPriceScale(priceScaleId);
        if (res === null) {
            {
                throw new Error(`Trying to apply price scale options with incorrect ID: ${priceScaleId}`);
            }
        }
        res.priceScale.applyOptions(options);
        this._private__priceScalesOptionsChanged._internal_fire();
    }
    findPriceScale(priceScaleId) {
        for (const pane of this._private__panes) {
            const priceScale = pane.priceScaleById(priceScaleId);
            if (priceScale !== null) {
                return {
                    pane,
                    priceScale,
                };
            }
        }
        return null;
    }
    timeScale() {
        return this._private__timeScale;
    }
    panes() {
        return this._private__panes;
    }
    watermarkSource() {
        return this._private__watermark;
    }
    crosshairSource() {
        return this._private__crosshair;
    }
    crosshairMoved() {
        return this._private__crosshairMoved;
    }
    setPaneHeight(pane, height) {
        pane.setHeight(height);
        this.recalculateAllPanes();
    }
    setWidth(width) {
        this._private__width = width;
        this._private__timeScale.setWidth(this._private__width);
        this._private__panes.forEach((pane) => pane.setWidth(width));
        this.recalculateAllPanes();
    }
    createPane(index) {
        const pane = new Pane(this._private__timeScale, this);
        if (index !== undefined) {
            this._private__panes.splice(index, 0, pane);
        }
        else {
            // adding to the end - common case
            this._private__panes.push(pane);
        }
        const actualIndex = (index === undefined) ? this._private__panes.length - 1 : index;
        // we always do autoscaling on the creation
        // if autoscale option is true, it is ok, just recalculate by invalidation mask
        // if autoscale option is false, autoscale anyway on the first draw
        // also there is a scenario when autoscale is true in constructor and false later on applyOptions
        const mask = new InvalidateMask(3 /* Full */);
        mask.invalidatePane(actualIndex, {
            level: 0 /* None */,
            autoScale: true,
        });
        this._private__invalidate(mask);
        return pane;
    }
    startScalePrice(pane, priceScale, x) {
        pane.startScalePrice(priceScale, x);
    }
    scalePriceTo(pane, priceScale, x) {
        pane.scalePriceTo(priceScale, x);
        this.updateCrosshair();
        this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
    }
    endScalePrice(pane, priceScale) {
        pane.endScalePrice(priceScale);
        this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
    }
    startScrollPrice(pane, priceScale, x) {
        if (priceScale.isAutoScale()) {
            return;
        }
        pane.startScrollPrice(priceScale, x);
    }
    scrollPriceTo(pane, priceScale, x) {
        if (priceScale.isAutoScale()) {
            return;
        }
        pane.scrollPriceTo(priceScale, x);
        this.updateCrosshair();
        this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
    }
    endScrollPrice(pane, priceScale) {
        if (priceScale.isAutoScale()) {
            return;
        }
        pane.endScrollPrice(priceScale);
        this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
    }
    resetPriceScale(pane, priceScale) {
        pane.resetPriceScale(priceScale);
        this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
    }
    startScaleTime(position) {
        this._private__timeScale.startScale(position);
    }
    /**
     * Zoom in/out the chart (depends on scale value).
     *
     * @param pointX - X coordinate of the point to apply the zoom (the point which should stay on its place)
     * @param scale - Zoom value. Negative value means zoom out, positive - zoom in.
     */
    zoomTime(pointX, scale) {
        const timeScale = this.timeScale();
        if (timeScale.isEmpty() || scale === 0) {
            return;
        }
        const timeScaleWidth = timeScale.width();
        pointX = Math.max(1, Math.min(pointX, timeScaleWidth));
        timeScale.zoom(pointX, scale);
        this.recalculateAllPanes();
    }
    scrollChart(x) {
        this.startScrollTime(0);
        this.scrollTimeTo(x);
        this.endScrollTime();
    }
    scaleTimeTo(x) {
        this._private__timeScale.scaleTo(x);
        this.recalculateAllPanes();
    }
    endScaleTime() {
        this._private__timeScale.endScale();
        this.lightUpdate();
    }
    startScrollTime(x) {
        this._private__initialTimeScrollPos = x;
        this._private__timeScale.startScroll(x);
    }
    scrollTimeTo(x) {
        let res = false;
        if (this._private__initialTimeScrollPos !== null && Math.abs(x - this._private__initialTimeScrollPos) > 20) {
            this._private__initialTimeScrollPos = null;
            res = true;
        }
        this._private__timeScale.scrollTo(x);
        this.recalculateAllPanes();
        return res;
    }
    endScrollTime() {
        this._private__timeScale.endScroll();
        this.lightUpdate();
        this._private__initialTimeScrollPos = null;
    }
    serieses() {
        return this._private__serieses;
    }
    setAndSaveCurrentPosition(x, y, pane) {
        this._private__crosshair.saveOriginCoord(x, y);
        let price = NaN;
        let index = this._private__timeScale.coordinateToIndex(x);
        const visibleBars = this._private__timeScale.visibleStrictRange();
        if (visibleBars !== null) {
            index = Math.min(Math.max(visibleBars.left(), index), visibleBars.right());
        }
        const priceScale = pane.defaultPriceScale();
        const firstValue = priceScale.firstValue();
        if (firstValue !== null) {
            price = priceScale.coordinateToPrice(y, firstValue);
        }
        price = this._private__magnet._internal_align(price, index, pane);
        this._private__crosshair.setPosition(index, price, pane);
        this.cursorUpdate();
        this._private__crosshairMoved._internal_fire(this._private__crosshair.appliedIndex(), { x, y });
    }
    clearCurrentPosition() {
        const crosshair = this.crosshairSource();
        crosshair.clearPosition();
        this.cursorUpdate();
        this._private__crosshairMoved._internal_fire(null, null);
    }
    updateCrosshair() {
        // apply magnet
        const pane = this._private__crosshair.pane();
        if (pane !== null) {
            const x = this._private__crosshair.originCoordX();
            const y = this._private__crosshair.originCoordY();
            this.setAndSaveCurrentPosition(x, y, pane);
        }
        this._private__crosshair.updateAllViews();
    }
    updateTimeScale(newBaseIndex, newPoints, firstChangedPointIndex) {
        const oldFirstTime = this._private__timeScale.indexToTime(0);
        if (newPoints !== undefined && firstChangedPointIndex !== undefined) {
            this._private__timeScale.update(newPoints, firstChangedPointIndex);
        }
        const newFirstTime = this._private__timeScale.indexToTime(0);
        const currentBaseIndex = this._private__timeScale.baseIndex();
        const visibleBars = this._private__timeScale.visibleStrictRange();
        // if time scale cannot return current visible bars range (e.g. time scale has zero-width)
        // then we do not need to update right offset to shift visible bars range to have the same right offset as we have before new bar
        // (and actually we cannot)
        if (visibleBars !== null && oldFirstTime !== null && newFirstTime !== null) {
            const isLastSeriesBarVisible = visibleBars.contains(currentBaseIndex);
            const isLeftBarShiftToLeft = oldFirstTime.timestamp > newFirstTime.timestamp;
            const isSeriesPointsAdded = newBaseIndex !== null && newBaseIndex > currentBaseIndex;
            const isSeriesPointsAddedToRight = isSeriesPointsAdded && !isLeftBarShiftToLeft;
            const needShiftVisibleRangeOnNewBar = isLastSeriesBarVisible && this._private__timeScale.options().shiftVisibleRangeOnNewBar;
            if (isSeriesPointsAddedToRight && !needShiftVisibleRangeOnNewBar) {
                const compensationShift = newBaseIndex - currentBaseIndex;
                this._private__timeScale.setRightOffset(this._private__timeScale.rightOffset() - compensationShift);
            }
        }
        this._private__timeScale.setBaseIndex(newBaseIndex);
    }
    recalculatePane(pane) {
        if (pane !== null) {
            pane.recalculate();
        }
    }
    paneForSource(source) {
        const pane = this._private__panes.find((p) => p.orderedSources().includes(source));
        return pane === undefined ? null : pane;
    }
    recalculateAllPanes() {
        this._private__watermark.updateAllViews();
        this._private__panes.forEach((p) => p.recalculate());
        this.updateCrosshair();
    }
    destroy() {
        this._private__panes.forEach((p) => p.destroy());
        this._private__panes.length = 0;
        // to avoid memleaks
        this._private__options.localization.priceFormatter = undefined;
        this._private__options.localization.timeFormatter = undefined;
    }
    rendererOptionsProvider() {
        return this._private__rendererOptionsProvider;
    }
    priceAxisRendererOptions() {
        return this._private__rendererOptionsProvider.options();
    }
    priceScalesOptionsChanged() {
        return this._private__priceScalesOptionsChanged;
    }
    createSeries(seriesType, options) {
        const pane = this._private__panes[0];
        const series = this._private__createSeries(options, seriesType, pane);
        this._private__serieses.push(series);
        if (this._private__serieses.length === 1) {
            // call fullUpdate to recalculate chart's parts geometry
            this.fullUpdate();
        }
        else {
            this.lightUpdate();
        }
        return series;
    }
    removeSeries(series) {
        const pane = this.paneForSource(series);
        const seriesIndex = this._private__serieses.indexOf(series);
        assert(seriesIndex !== -1, 'Series not found');
        this._private__serieses.splice(seriesIndex, 1);
        ensureNotNull(pane).removeDataSource(series);
        if (series.destroy) {
            series.destroy();
        }
    }
    moveSeriesToScale(series, targetScaleId) {
        const pane = ensureNotNull(this.paneForSource(series));
        pane.removeDataSource(series);
        // check if targetScaleId exists
        const target = this.findPriceScale(targetScaleId);
        if (target === null) {
            // new scale on the same pane
            const zOrder = series.zorder();
            pane.addDataSource(series, targetScaleId, zOrder);
        }
        else {
            // if move to the new scale of the same pane, keep zorder
            // if move to new pane
            const zOrder = (target.pane === pane) ? series.zorder() : undefined;
            target.pane.addDataSource(series, targetScaleId, zOrder);
        }
    }
    fitContent() {
        const mask = new InvalidateMask(2 /* Light */);
        mask.setFitContent();
        this._private__invalidate(mask);
    }
    setTargetLogicalRange(range) {
        const mask = new InvalidateMask(2 /* Light */);
        mask.applyRange(range);
        this._private__invalidate(mask);
    }
    resetTimeScale() {
        const mask = new InvalidateMask(2 /* Light */);
        mask.resetTimeScale();
        this._private__invalidate(mask);
    }
    setBarSpacing(spacing) {
        const mask = new InvalidateMask(2 /* Light */);
        mask.setBarSpacing(spacing);
        this._private__invalidate(mask);
    }
    setRightOffset(offset) {
        const mask = new InvalidateMask(2 /* Light */);
        mask.setRightOffset(offset);
        this._private__invalidate(mask);
    }
    defaultVisiblePriceScaleId() {
        return this._private__options.rightPriceScale.visible ? "right" /* Right */ : "left" /* Left */;
    }
    backgroundBottomColor() {
        return this._private__backgroundBottomColor;
    }
    backgroundTopColor() {
        return this._private__backgroundTopColor;
    }
    backgroundColorAtYPercentFromTop(percent) {
        const bottomColor = this._private__backgroundBottomColor;
        const topColor = this._private__backgroundTopColor;
        if (bottomColor === topColor) {
            // solid background
            return bottomColor;
        }
        // gradient background
        // percent should be from 0 to 100 (we're using only integer values to make cache more efficient)
        percent = Math.max(0, Math.min(100, Math.round(percent * 100)));
        if (this._private__gradientColorsCache === null ||
            this._private__gradientColorsCache._internal_topColor !== topColor || this._private__gradientColorsCache._internal_bottomColor !== bottomColor) {
            this._private__gradientColorsCache = {
                _internal_topColor: topColor,
                _internal_bottomColor: bottomColor,
                _internal_colors: new Map(),
            };
        }
        else {
            const cachedValue = this._private__gradientColorsCache._internal_colors.get(percent);
            if (cachedValue !== undefined) {
                return cachedValue;
            }
        }
        const result = gradientColorAtPercent(topColor, bottomColor, percent / 100);
        this._private__gradientColorsCache._internal_colors.set(percent, result);
        return result;
    }
    _private__paneInvalidationMask(pane, level) {
        const inv = new InvalidateMask(level);
        if (pane !== null) {
            const index = this._private__panes.indexOf(pane);
            inv.invalidatePane(index, {
                level,
            });
        }
        return inv;
    }
    _private__invalidationMaskForSource(source, invalidateType) {
        if (invalidateType === undefined) {
            invalidateType = 2 /* Light */;
        }
        return this._private__paneInvalidationMask(this.paneForSource(source), invalidateType);
    }
    _private__invalidate(mask) {
        if (this._private__invalidateHandler) {
            this._private__invalidateHandler(mask);
        }
        this._private__panes.forEach((pane) => pane.grid().paneView().update());
    }
    _private__createSeries(options, seriesType, pane) {
        const series = new Series(this, options, seriesType);
        const targetScaleId = options.priceScaleId !== undefined ? options.priceScaleId : this.defaultVisiblePriceScaleId();
        pane.addDataSource(series, targetScaleId);
        if (!isDefaultPriceScale(targetScaleId)) {
            // let's apply that options again to apply margins
            series.applyOptions(options);
        }
        return series;
    }
    _private__getBackgroundColor(side) {
        const layoutOptions = this._private__options.layout;
        if (layoutOptions.background.type === "gradient" /* VerticalGradient */) {
            return side === 0 /* Top */ ?
                layoutOptions.background.topColor :
                layoutOptions.background.bottomColor;
        }
        return layoutOptions.background.color;
    }
}

function fillUpDownCandlesticksColors(options) {
    if (options.borderColor !== undefined) {
        options.borderUpColor = options.borderColor;
        options.borderDownColor = options.borderColor;
    }
    if (options.wickColor !== undefined) {
        options.wickUpColor = options.wickColor;
        options.wickDownColor = options.wickColor;
    }
}
/**
 * Represents the type of the last price animation for series such as area or line.
 */
var LastPriceAnimationMode;
(function (LastPriceAnimationMode) {
    /**
     * Animation is always disabled
     */
    LastPriceAnimationMode[LastPriceAnimationMode["Disabled"] = 0] = "Disabled";
    /**
     * Animation is always enabled.
     */
    LastPriceAnimationMode[LastPriceAnimationMode["Continuous"] = 1] = "Continuous";
    /**
     * Animation is active after new data.
     */
    LastPriceAnimationMode[LastPriceAnimationMode["OnDataUpdate"] = 2] = "OnDataUpdate";
})(LastPriceAnimationMode || (LastPriceAnimationMode = {}));
function precisionByMinMove(minMove) {
    if (minMove >= 1) {
        return 0;
    }
    let i = 0;
    for (; i < 8; i++) {
        const intPart = Math.round(minMove);
        const fractPart = Math.abs(intPart - minMove);
        if (fractPart < 1e-8) {
            return i;
        }
        minMove = minMove * 10;
    }
    return i;
}
/**
 * Represents the source of data to be used for the horizontal price line.
 */
var PriceLineSource;
(function (PriceLineSource) {
    /**
     * Use the last bar data.
     */
    PriceLineSource[PriceLineSource["LastBar"] = 0] = "LastBar";
    /**
     * Use the last visible data of the chart viewport.
     */
    PriceLineSource[PriceLineSource["LastVisible"] = 1] = "LastVisible";
})(PriceLineSource || (PriceLineSource = {}));

/**
 * Represents a type of color.
 */
var ColorType;
(function (ColorType) {
    /** Solid color */
    ColorType["Solid"] = "solid";
    /** Vertical gradient color */
    ColorType["VerticalGradient"] = "gradient";
})(ColorType || (ColorType = {}));

/**
 * Check if a time value is a business day object.
 *
 * @param time - The time to check.
 * @returns `true` if `time` is a {@link BusinessDay} object, false otherwise.
 */
function isBusinessDay(time) {
    return !isNumber(time) && !isString(time);
}
/**
 * Check if a time value is a UTC timestamp number.
 *
 * @param time - The time to check.
 * @returns `true` if `time` is a {@link UTCTimestamp} number, false otherwise.
 */
function isUTCTimestamp(time) {
    return isNumber(time);
}
function isWhitespaceData(data) {
    return data.open === undefined && data.value === undefined;
}
function isFulfilledData(data) {
    return data.open !== undefined || data.value !== undefined;
}

class Size {
    constructor(w, h) {
        this._internal_w = w;
        this._internal_h = h;
    }
    _internal_equals(size) {
        return (this._internal_w === size._internal_w) && (this._internal_h === size._internal_h);
    }
}
function getCanvasDevicePixelRatio(canvas) {
    return canvas.ownerDocument &&
        canvas.ownerDocument.defaultView &&
        canvas.ownerDocument.defaultView.devicePixelRatio
        || 1;
}
function getContext2D(canvas) {
    const ctx = ensureNotNull(canvas.getContext('2d'));
    // sometimes (very often) ctx getContext returns the same context every time
    // and there might be previous transformation
    // so let's reset it to be sure that everything is ok
    // do no use resetTransform to respect Edge
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return ctx;
}
function createPreconfiguredCanvas(doc, size) {
    const canvas = doc.createElement('canvas');
    const pixelRatio = getCanvasDevicePixelRatio(canvas);
    // we should keep the layout size...
    canvas.style.width = `${size._internal_w}px`;
    canvas.style.height = `${size._internal_h}px`;
    // ...but multiply coordinate space dimensions to device pixel ratio
    canvas.width = size._internal_w * pixelRatio;
    canvas.height = size._internal_h * pixelRatio;
    return canvas;
}
function createBoundCanvas(parentElement, size) {
    const doc = ensureNotNull(parentElement.ownerDocument);
    const canvas = doc.createElement('canvas');
    parentElement.appendChild(canvas);
    const binding = bindToDevicePixelRatio(canvas, { allowDownsampling: false });
    binding.resizeCanvas({
        width: size._internal_w,
        height: size._internal_h,
    });
    return binding;
}

function distanceBetweenPoints(pos1, pos2) {
    return pos1._internal_position - pos2._internal_position;
}
function speedPxPerMSec(pos1, pos2, maxSpeed) {
    const speed = (pos1._internal_position - pos2._internal_position) / (pos1._internal_time - pos2._internal_time);
    return Math.sign(speed) * Math.min(Math.abs(speed), maxSpeed);
}
function durationMSec(speed, dumpingCoeff) {
    const lnDumpingCoeff = Math.log(dumpingCoeff);
    return Math.log((1 /* EpsilonDistance */ * lnDumpingCoeff) / -speed) / (lnDumpingCoeff);
}
class KineticAnimation {
    constructor(minSpeed, maxSpeed, dumpingCoeff, minMove) {
        this._private__position1 = null;
        this._private__position2 = null;
        this._private__position3 = null;
        this._private__position4 = null;
        this._private__animationStartPosition = null;
        this._private__durationMsecs = 0;
        this._private__speedPxPerMsec = 0;
        this._private__terminated = false;
        this._private__minSpeed = minSpeed;
        this._private__maxSpeed = maxSpeed;
        this._private__dumpingCoeff = dumpingCoeff;
        this._private__minMove = minMove;
    }
    _internal_addPosition(position, time) {
        if (this._private__position1 !== null) {
            if (this._private__position1._internal_time === time) {
                this._private__position1._internal_position = position;
                return;
            }
            if (Math.abs(this._private__position1._internal_position - position) < this._private__minMove) {
                return;
            }
        }
        this._private__position4 = this._private__position3;
        this._private__position3 = this._private__position2;
        this._private__position2 = this._private__position1;
        this._private__position1 = { _internal_time: time, _internal_position: position };
    }
    _internal_start(position, time) {
        if (this._private__position1 === null || this._private__position2 === null) {
            return;
        }
        if (time - this._private__position1._internal_time > 50 /* MaxStartDelay */) {
            return;
        }
        // To calculate all the rest parameters we should calculate the speed af first
        let totalDistance = 0;
        const speed1 = speedPxPerMSec(this._private__position1, this._private__position2, this._private__maxSpeed);
        const distance1 = distanceBetweenPoints(this._private__position1, this._private__position2);
        // We're calculating weighted average speed
        // Than more distance for a segment, than more its weight
        const speedItems = [speed1];
        const distanceItems = [distance1];
        totalDistance += distance1;
        if (this._private__position3 !== null) {
            const speed2 = speedPxPerMSec(this._private__position2, this._private__position3, this._private__maxSpeed);
            // stop at this moment if direction of the segment is opposite
            if (Math.sign(speed2) === Math.sign(speed1)) {
                const distance2 = distanceBetweenPoints(this._private__position2, this._private__position3);
                speedItems.push(speed2);
                distanceItems.push(distance2);
                totalDistance += distance2;
                if (this._private__position4 !== null) {
                    const speed3 = speedPxPerMSec(this._private__position3, this._private__position4, this._private__maxSpeed);
                    if (Math.sign(speed3) === Math.sign(speed1)) {
                        const distance3 = distanceBetweenPoints(this._private__position3, this._private__position4);
                        speedItems.push(speed3);
                        distanceItems.push(distance3);
                        totalDistance += distance3;
                    }
                }
            }
        }
        let resultSpeed = 0;
        for (let i = 0; i < speedItems.length; ++i) {
            resultSpeed += distanceItems[i] / totalDistance * speedItems[i];
        }
        if (Math.abs(resultSpeed) < this._private__minSpeed) {
            return;
        }
        this._private__animationStartPosition = { _internal_position: position, _internal_time: time };
        this._private__speedPxPerMsec = resultSpeed;
        this._private__durationMsecs = durationMSec(Math.abs(resultSpeed), this._private__dumpingCoeff);
    }
    _internal_getPosition(time) {
        const startPosition = ensureNotNull(this._private__animationStartPosition);
        const durationMsecs = time - startPosition._internal_time;
        return startPosition._internal_position + this._private__speedPxPerMsec * (Math.pow(this._private__dumpingCoeff, durationMsecs) - 1) / (Math.log(this._private__dumpingCoeff));
    }
    _internal_finished(time) {
        return this._private__animationStartPosition === null || this._private__progressDuration(time) === this._private__durationMsecs;
    }
    _internal_terminated() {
        return this._private__terminated;
    }
    _internal_terminate() {
        this._private__terminated = true;
    }
    _private__progressDuration(time) {
        const startPosition = ensureNotNull(this._private__animationStartPosition);
        const progress = time - startPosition._internal_time;
        return Math.min(progress, this._private__durationMsecs);
    }
}

/**
 * When you're trying to use the library in server-side context (for instance in SSR)
 * you don't have some browser-specific variables like navigator or window
 * and if the library will use them on the top level of the library
 * the import will fail due ReferenceError
 * thus, this allows use the navigator on the top level and being imported in server-side context as well
 * See issue #446
 */
// eslint-disable-next-line @typescript-eslint/tslint/config
const isRunningOnClientSide = typeof window !== 'undefined';

function isFF() {
    if (!isRunningOnClientSide) {
        return false;
    }
    return window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}
function isIOS() {
    if (!isRunningOnClientSide) {
        return false;
    }
    // eslint-disable-next-line deprecation/deprecation
    return /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function isChrome() {
    if (!isRunningOnClientSide) {
        return false;
    }
    return window.chrome !== undefined;
}

function preventScrollByWheelClick(el) {
    if (!isChrome()) {
        return;
    }
    el.addEventListener('mousedown', (e) => {
        if (e.button === 1 /* Middle */) {
            // prevent incorrect scrolling event
            e.preventDefault();
            return false;
        }
        return undefined;
    });
}

// TODO: get rid of a lot of boolean flags, probably we should replace it with some enum
class MouseEventHandler {
    constructor(target, handler, options) {
        this._private__clickCount = 0;
        this._private__clickTimeoutId = null;
        this._private__clickPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
        this._private__tapCount = 0;
        this._private__tapTimeoutId = null;
        this._private__tapPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
        this._private__longTapTimeoutId = null;
        this._private__longTapActive = false;
        this._private__mouseMoveStartPosition = null;
        this._private__touchMoveStartPosition = null;
        this._private__touchMoveExceededManhattanDistance = false;
        this._private__cancelClick = false;
        this._private__cancelTap = false;
        this._private__unsubscribeOutsideMouseEvents = null;
        this._private__unsubscribeOutsideTouchEvents = null;
        this._private__unsubscribeMobileSafariEvents = null;
        this._private__unsubscribeMousemove = null;
        this._private__unsubscribeRootMouseEvents = null;
        this._private__unsubscribeRootTouchEvents = null;
        this._private__startPinchMiddlePoint = null;
        this._private__startPinchDistance = 0;
        this._private__pinchPrevented = false;
        this._private__preventTouchDragProcess = false;
        this._private__mousePressed = false;
        this._private__lastTouchEventTimeStamp = 0;
        // for touchstart/touchmove/touchend events we handle only first touch
        // i.e. we don't support several active touches at the same time (except pinch event)
        this._private__activeTouchId = null;
        // accept all mouse leave events if it's not an iOS device
        // see _mouseEnterHandler, _mouseMoveHandler, _mouseLeaveHandler
        this._private__acceptMouseLeave = !isIOS();
        /**
         * In Firefox mouse events dont't fire if the mouse position is outside of the browser's border.
         * To prevent the mouse from hanging while pressed we're subscribing on the mouseleave event of the document element.
         * We're subscribing on mouseleave, but this event is actually fired on mouseup outside of the browser's border.
         */
        this._private__onFirefoxOutsideMouseUp = (mouseUpEvent) => {
            this._private__mouseUpHandler(mouseUpEvent);
        };
        /**
         * Safari doesn't fire touchstart/mousedown events on double tap since iOS 13.
         * There are two possible solutions:
         * 1) Call preventDefault in touchEnd handler. But it also prevents click event from firing.
         * 2) Add listener on dblclick event that fires with the preceding mousedown/mouseup.
         * https://developer.apple.com/forums/thread/125073
         */
        this._private__onMobileSafariDoubleClick = (dblClickEvent) => {
            if (this._private__firesTouchEvents(dblClickEvent)) {
                const compatEvent = this._private__makeCompatEvent(dblClickEvent);
                ++this._private__tapCount;
                if (this._private__tapTimeoutId && this._private__tapCount > 1) {
                    const { _internal_manhattanDistance: manhattanDistance } = this._private__touchMouseMoveWithDownInfo(getPosition(dblClickEvent), this._private__tapPosition);
                    if (manhattanDistance < 30 /* DoubleTapManhattanDistance */ && !this._private__cancelTap) {
                        this._private__processTouchEvent(compatEvent, this._private__handler._internal_doubleTapEvent);
                    }
                    this._private__resetTapTimeout();
                }
            }
            else {
                const compatEvent = this._private__makeCompatEvent(dblClickEvent);
                ++this._private__clickCount;
                if (this._private__clickTimeoutId && this._private__clickCount > 1) {
                    const { _internal_manhattanDistance: manhattanDistance } = this._private__touchMouseMoveWithDownInfo(getPosition(dblClickEvent), this._private__clickPosition);
                    if (manhattanDistance < 5 /* DoubleClickManhattanDistance */ && !this._private__cancelClick) {
                        this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseDoubleClickEvent);
                    }
                    this._private__resetClickTimeout();
                }
            }
        };
        this._private__target = target;
        this._private__handler = handler;
        this._private__options = options;
        this._private__init();
    }
    destroy() {
        if (this._private__unsubscribeOutsideMouseEvents !== null) {
            this._private__unsubscribeOutsideMouseEvents();
            this._private__unsubscribeOutsideMouseEvents = null;
        }
        if (this._private__unsubscribeOutsideTouchEvents !== null) {
            this._private__unsubscribeOutsideTouchEvents();
            this._private__unsubscribeOutsideTouchEvents = null;
        }
        if (this._private__unsubscribeMousemove !== null) {
            this._private__unsubscribeMousemove();
            this._private__unsubscribeMousemove = null;
        }
        if (this._private__unsubscribeRootMouseEvents !== null) {
            this._private__unsubscribeRootMouseEvents();
            this._private__unsubscribeRootMouseEvents = null;
        }
        if (this._private__unsubscribeRootTouchEvents !== null) {
            this._private__unsubscribeRootTouchEvents();
            this._private__unsubscribeRootTouchEvents = null;
        }
        if (this._private__unsubscribeMobileSafariEvents !== null) {
            this._private__unsubscribeMobileSafariEvents();
            this._private__unsubscribeMobileSafariEvents = null;
        }
        this._private__clearLongTapTimeout();
        this._private__resetClickTimeout();
    }
    _private__mouseEnterHandler(enterEvent) {
        if (this._private__unsubscribeMousemove) {
            this._private__unsubscribeMousemove();
        }
        const boundMouseMoveHandler = this._private__mouseMoveHandler.bind(this);
        this._private__unsubscribeMousemove = () => {
            this._private__target.removeEventListener('mousemove', boundMouseMoveHandler);
        };
        this._private__target.addEventListener('mousemove', boundMouseMoveHandler);
        if (this._private__firesTouchEvents(enterEvent)) {
            return;
        }
        const compatEvent = this._private__makeCompatEvent(enterEvent);
        this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseEnterEvent);
        this._private__acceptMouseLeave = true;
    }
    _private__resetClickTimeout() {
        if (this._private__clickTimeoutId !== null) {
            clearTimeout(this._private__clickTimeoutId);
        }
        this._private__clickCount = 0;
        this._private__clickTimeoutId = null;
        this._private__clickPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
    }
    _private__resetTapTimeout() {
        if (this._private__tapTimeoutId !== null) {
            clearTimeout(this._private__tapTimeoutId);
        }
        this._private__tapCount = 0;
        this._private__tapTimeoutId = null;
        this._private__tapPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
    }
    _private__mouseMoveHandler(moveEvent) {
        if (this._private__mousePressed || this._private__touchMoveStartPosition !== null) {
            return;
        }
        if (this._private__firesTouchEvents(moveEvent)) {
            return;
        }
        const compatEvent = this._private__makeCompatEvent(moveEvent);
        this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseMoveEvent);
        this._private__acceptMouseLeave = true;
    }
    _private__touchMoveHandler(moveEvent) {
        const touch = touchWithId(moveEvent.changedTouches, ensureNotNull(this._private__activeTouchId));
        if (touch === null) {
            return;
        }
        this._private__lastTouchEventTimeStamp = eventTimeStamp(moveEvent);
        if (this._private__startPinchMiddlePoint !== null) {
            return;
        }
        if (this._private__preventTouchDragProcess) {
            return;
        }
        // prevent pinch if move event comes faster than the second touch
        this._private__pinchPrevented = true;
        const moveInfo = this._private__touchMouseMoveWithDownInfo(getPosition(touch), ensureNotNull(this._private__touchMoveStartPosition));
        const { _internal_xOffset: xOffset, _internal_yOffset: yOffset, _internal_manhattanDistance: manhattanDistance } = moveInfo;
        if (!this._private__touchMoveExceededManhattanDistance && manhattanDistance < 5 /* CancelTapManhattanDistance */) {
            return;
        }
        if (!this._private__touchMoveExceededManhattanDistance) {
            // first time when current position exceeded manhattan distance
            // vertical drag is more important than horizontal drag
            // because we scroll the page vertically often than horizontally
            const correctedXOffset = xOffset * 0.5;
            // a drag can be only if touch page scroll isn't allowed
            const isVertDrag = yOffset >= correctedXOffset && !this._private__options._internal_treatVertTouchDragAsPageScroll();
            const isHorzDrag = correctedXOffset > yOffset && !this._private__options._internal_treatHorzTouchDragAsPageScroll();
            // if drag event happened then we should revert preventDefault state to original one
            // and try to process the drag event
            // else we shouldn't prevent default of the event and ignore processing the drag event
            if (!isVertDrag && !isHorzDrag) {
                this._private__preventTouchDragProcess = true;
            }
            this._private__touchMoveExceededManhattanDistance = true;
            // if manhattan distance is more that 5 - we should cancel tap event
            this._private__cancelTap = true;
            this._private__clearLongTapTimeout();
            this._private__resetTapTimeout();
        }
        if (!this._private__preventTouchDragProcess) {
            const compatEvent = this._private__makeCompatEvent(moveEvent, touch);
            this._private__processTouchEvent(compatEvent, this._private__handler._internal_touchMoveEvent);
            // we should prevent default in case of touch only
            // to prevent scroll of the page
            preventDefault(moveEvent);
        }
    }
    _private__mouseMoveWithDownHandler(moveEvent) {
        if (moveEvent.button !== 0 /* Left */) {
            return;
        }
        const moveInfo = this._private__touchMouseMoveWithDownInfo(getPosition(moveEvent), ensureNotNull(this._private__mouseMoveStartPosition));
        const { _internal_manhattanDistance: manhattanDistance } = moveInfo;
        if (manhattanDistance >= 5 /* CancelClickManhattanDistance */) {
            // if manhattan distance is more that 5 - we should cancel click event
            this._private__cancelClick = true;
            this._private__resetClickTimeout();
        }
        if (this._private__cancelClick) {
            // if this._cancelClick is true, that means that minimum manhattan distance is already exceeded
            const compatEvent = this._private__makeCompatEvent(moveEvent);
            this._private__processMouseEvent(compatEvent, this._private__handler._internal_pressedMouseMoveEvent);
        }
    }
    _private__touchMouseMoveWithDownInfo(currentPosition, startPosition) {
        const xOffset = Math.abs(startPosition._internal_x - currentPosition._internal_x);
        const yOffset = Math.abs(startPosition._internal_y - currentPosition._internal_y);
        const manhattanDistance = xOffset + yOffset;
        return {
            _internal_xOffset: xOffset,
            _internal_yOffset: yOffset,
            _internal_manhattanDistance: manhattanDistance,
        };
    }
    // eslint-disable-next-line complexity
    _private__touchEndHandler(touchEndEvent) {
        let touch = touchWithId(touchEndEvent.changedTouches, ensureNotNull(this._private__activeTouchId));
        if (touch === null && touchEndEvent.touches.length === 0) {
            // something went wrong, somehow we missed the required touchend event
            // probably the browser has not sent this event
            touch = touchEndEvent.changedTouches[0];
        }
        if (touch === null) {
            return;
        }
        this._private__activeTouchId = null;
        this._private__lastTouchEventTimeStamp = eventTimeStamp(touchEndEvent);
        this._private__clearLongTapTimeout();
        this._private__touchMoveStartPosition = null;
        if (this._private__unsubscribeRootTouchEvents) {
            this._private__unsubscribeRootTouchEvents();
            this._private__unsubscribeRootTouchEvents = null;
        }
        const compatEvent = this._private__makeCompatEvent(touchEndEvent, touch);
        this._private__processTouchEvent(compatEvent, this._private__handler._internal_touchEndEvent);
        ++this._private__tapCount;
        if (this._private__tapTimeoutId && this._private__tapCount > 1) {
            // check that both clicks are near enough
            const { _internal_manhattanDistance: manhattanDistance } = this._private__touchMouseMoveWithDownInfo(getPosition(touch), this._private__tapPosition);
            if (manhattanDistance < 30 /* DoubleTapManhattanDistance */ && !this._private__cancelTap) {
                this._private__processTouchEvent(compatEvent, this._private__handler._internal_doubleTapEvent);
            }
            this._private__resetTapTimeout();
        }
        else {
            if (!this._private__cancelTap) {
                this._private__processTouchEvent(compatEvent, this._private__handler._internal_tapEvent);
                // do not fire mouse events if tap handler was executed
                // prevent click event on new dom element (who appeared after tap)
                if (this._private__handler._internal_tapEvent) {
                    preventDefault(touchEndEvent);
                }
            }
        }
        // prevent, for example, safari's dblclick-to-zoom or fast-click after long-tap
        // we handle mouseDoubleClickEvent here ourselves
        if (this._private__tapCount === 0) {
            preventDefault(touchEndEvent);
        }
        if (touchEndEvent.touches.length === 0) {
            if (this._private__longTapActive) {
                this._private__longTapActive = false;
                // prevent native click event
                preventDefault(touchEndEvent);
            }
        }
    }
    _private__mouseUpHandler(mouseUpEvent) {
        if (mouseUpEvent.button !== 0 /* Left */) {
            return;
        }
        const compatEvent = this._private__makeCompatEvent(mouseUpEvent);
        this._private__mouseMoveStartPosition = null;
        this._private__mousePressed = false;
        if (this._private__unsubscribeRootMouseEvents) {
            this._private__unsubscribeRootMouseEvents();
            this._private__unsubscribeRootMouseEvents = null;
        }
        if (isFF()) {
            const rootElement = this._private__target.ownerDocument.documentElement;
            rootElement.removeEventListener('mouseleave', this._private__onFirefoxOutsideMouseUp);
        }
        if (this._private__firesTouchEvents(mouseUpEvent)) {
            return;
        }
        this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseUpEvent);
        ++this._private__clickCount;
        if (this._private__clickTimeoutId && this._private__clickCount > 1) {
            // check that both clicks are near enough
            const { _internal_manhattanDistance: manhattanDistance } = this._private__touchMouseMoveWithDownInfo(getPosition(mouseUpEvent), this._private__clickPosition);
            if (manhattanDistance < 5 /* DoubleClickManhattanDistance */ && !this._private__cancelClick) {
                this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseDoubleClickEvent);
            }
            this._private__resetClickTimeout();
        }
        else {
            if (!this._private__cancelClick) {
                this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseClickEvent);
            }
        }
    }
    _private__clearLongTapTimeout() {
        if (this._private__longTapTimeoutId === null) {
            return;
        }
        clearTimeout(this._private__longTapTimeoutId);
        this._private__longTapTimeoutId = null;
    }
    _private__touchStartHandler(downEvent) {
        if (this._private__activeTouchId !== null) {
            return;
        }
        const touch = downEvent.changedTouches[0];
        this._private__activeTouchId = touch.identifier;
        this._private__lastTouchEventTimeStamp = eventTimeStamp(downEvent);
        const rootElement = this._private__target.ownerDocument.documentElement;
        this._private__cancelTap = false;
        this._private__touchMoveExceededManhattanDistance = false;
        this._private__preventTouchDragProcess = false;
        this._private__touchMoveStartPosition = getPosition(touch);
        if (this._private__unsubscribeRootTouchEvents) {
            this._private__unsubscribeRootTouchEvents();
            this._private__unsubscribeRootTouchEvents = null;
        }
        {
            const boundTouchMoveWithDownHandler = this._private__touchMoveHandler.bind(this);
            const boundTouchEndHandler = this._private__touchEndHandler.bind(this);
            this._private__unsubscribeRootTouchEvents = () => {
                rootElement.removeEventListener('touchmove', boundTouchMoveWithDownHandler);
                rootElement.removeEventListener('touchend', boundTouchEndHandler);
            };
            rootElement.addEventListener('touchmove', boundTouchMoveWithDownHandler, { passive: false });
            rootElement.addEventListener('touchend', boundTouchEndHandler, { passive: false });
            this._private__clearLongTapTimeout();
            this._private__longTapTimeoutId = setTimeout(this._private__longTapHandler.bind(this, downEvent), 240 /* LongTap */);
        }
        const compatEvent = this._private__makeCompatEvent(downEvent, touch);
        this._private__processTouchEvent(compatEvent, this._private__handler._internal_touchStartEvent);
        if (!this._private__tapTimeoutId) {
            this._private__tapCount = 0;
            this._private__tapTimeoutId = setTimeout(this._private__resetTapTimeout.bind(this), 500 /* ResetClick */);
            this._private__tapPosition = getPosition(touch);
        }
    }
    _private__mouseDownHandler(downEvent) {
        if (downEvent.button !== 0 /* Left */) {
            return;
        }
        const rootElement = this._private__target.ownerDocument.documentElement;
        if (isFF()) {
            rootElement.addEventListener('mouseleave', this._private__onFirefoxOutsideMouseUp);
        }
        this._private__cancelClick = false;
        this._private__mouseMoveStartPosition = getPosition(downEvent);
        if (this._private__unsubscribeRootMouseEvents) {
            this._private__unsubscribeRootMouseEvents();
            this._private__unsubscribeRootMouseEvents = null;
        }
        {
            const boundMouseMoveWithDownHandler = this._private__mouseMoveWithDownHandler.bind(this);
            const boundMouseUpHandler = this._private__mouseUpHandler.bind(this);
            this._private__unsubscribeRootMouseEvents = () => {
                rootElement.removeEventListener('mousemove', boundMouseMoveWithDownHandler);
                rootElement.removeEventListener('mouseup', boundMouseUpHandler);
            };
            rootElement.addEventListener('mousemove', boundMouseMoveWithDownHandler);
            rootElement.addEventListener('mouseup', boundMouseUpHandler);
        }
        this._private__mousePressed = true;
        if (this._private__firesTouchEvents(downEvent)) {
            return;
        }
        const compatEvent = this._private__makeCompatEvent(downEvent);
        this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseDownEvent);
        if (!this._private__clickTimeoutId) {
            this._private__clickCount = 0;
            this._private__clickTimeoutId = setTimeout(this._private__resetClickTimeout.bind(this), 500 /* ResetClick */);
            this._private__clickPosition = getPosition(downEvent);
        }
    }
    _private__init() {
        this._private__target.addEventListener('mouseenter', this._private__mouseEnterHandler.bind(this));
        // Do not show context menu when something went wrong
        this._private__target.addEventListener('touchcancel', this._private__clearLongTapTimeout.bind(this));
        {
            const doc = this._private__target.ownerDocument;
            const outsideHandler = (event) => {
                if (!this._private__handler._internal_mouseDownOutsideEvent) {
                    return;
                }
                if (event.composed && this._private__target.contains(event.composedPath()[0])) {
                    return;
                }
                if (event.target && this._private__target.contains(event.target)) {
                    return;
                }
                this._private__handler._internal_mouseDownOutsideEvent();
            };
            this._private__unsubscribeOutsideTouchEvents = () => {
                doc.removeEventListener('touchstart', outsideHandler);
            };
            this._private__unsubscribeOutsideMouseEvents = () => {
                doc.removeEventListener('mousedown', outsideHandler);
            };
            doc.addEventListener('mousedown', outsideHandler);
            doc.addEventListener('touchstart', outsideHandler, { passive: true });
        }
        if (isIOS()) {
            this._private__unsubscribeMobileSafariEvents = () => {
                this._private__target.removeEventListener('dblclick', this._private__onMobileSafariDoubleClick);
            };
            this._private__target.addEventListener('dblclick', this._private__onMobileSafariDoubleClick);
        }
        this._private__target.addEventListener('mouseleave', this._private__mouseLeaveHandler.bind(this));
        this._private__target.addEventListener('touchstart', this._private__touchStartHandler.bind(this), { passive: true });
        preventScrollByWheelClick(this._private__target);
        this._private__target.addEventListener('mousedown', this._private__mouseDownHandler.bind(this));
        this._private__initPinch();
        // Hey mobile Safari, what's up?
        // If mobile Safari doesn't have any touchmove handler with passive=false
        // it treats a touchstart and the following touchmove events as cancelable=false,
        // so we can't prevent them (as soon we subscribe on touchmove inside touchstart's handler).
        // And we'll get scroll of the page along with chart's one instead of only chart's scroll.
        this._private__target.addEventListener('touchmove', () => { }, { passive: false });
    }
    _private__initPinch() {
        if (this._private__handler._internal_pinchStartEvent === undefined &&
            this._private__handler._internal_pinchEvent === undefined &&
            this._private__handler._internal_pinchEndEvent === undefined) {
            return;
        }
        this._private__target.addEventListener('touchstart', (event) => this._private__checkPinchState(event.touches), { passive: true });
        this._private__target.addEventListener('touchmove', (event) => {
            if (event.touches.length !== 2 || this._private__startPinchMiddlePoint === null) {
                return;
            }
            if (this._private__handler._internal_pinchEvent !== undefined) {
                const currentDistance = getDistance(event.touches[0], event.touches[1]);
                const scale = currentDistance / this._private__startPinchDistance;
                this._private__handler._internal_pinchEvent(this._private__startPinchMiddlePoint, scale);
                preventDefault(event);
            }
        }, { passive: false });
        this._private__target.addEventListener('touchend', (event) => {
            this._private__checkPinchState(event.touches);
        });
    }
    _private__checkPinchState(touches) {
        if (touches.length === 1) {
            this._private__pinchPrevented = false;
        }
        if (touches.length !== 2 || this._private__pinchPrevented || this._private__longTapActive) {
            this._private__stopPinch();
        }
        else {
            this._private__startPinch(touches);
        }
    }
    _private__startPinch(touches) {
        const box = getBoundingClientRect(this._private__target);
        this._private__startPinchMiddlePoint = {
            _internal_x: ((touches[0].clientX - box.left) + (touches[1].clientX - box.left)) / 2,
            _internal_y: ((touches[0].clientY - box.top) + (touches[1].clientY - box.top)) / 2,
        };
        this._private__startPinchDistance = getDistance(touches[0], touches[1]);
        if (this._private__handler._internal_pinchStartEvent !== undefined) {
            this._private__handler._internal_pinchStartEvent();
        }
        this._private__clearLongTapTimeout();
    }
    _private__stopPinch() {
        if (this._private__startPinchMiddlePoint === null) {
            return;
        }
        this._private__startPinchMiddlePoint = null;
        if (this._private__handler._internal_pinchEndEvent !== undefined) {
            this._private__handler._internal_pinchEndEvent();
        }
    }
    _private__mouseLeaveHandler(event) {
        if (this._private__unsubscribeMousemove) {
            this._private__unsubscribeMousemove();
        }
        if (this._private__firesTouchEvents(event)) {
            return;
        }
        if (!this._private__acceptMouseLeave) {
            // mobile Safari sometimes emits mouse leave event for no reason, there is no way to handle it in other way
            // just ignore this event if there was no mouse move or mouse enter events
            return;
        }
        const compatEvent = this._private__makeCompatEvent(event);
        this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseLeaveEvent);
        // accept all mouse leave events if it's not an iOS device
        this._private__acceptMouseLeave = !isIOS();
    }
    _private__longTapHandler(event) {
        const touch = touchWithId(event.touches, ensureNotNull(this._private__activeTouchId));
        if (touch === null) {
            return;
        }
        const compatEvent = this._private__makeCompatEvent(event, touch);
        this._private__processTouchEvent(compatEvent, this._private__handler._internal_longTapEvent);
        this._private__cancelTap = true;
        // long tap is active until touchend event with 0 touches occurred
        this._private__longTapActive = true;
    }
    _private__firesTouchEvents(e) {
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents !== undefined) {
            return e.sourceCapabilities.firesTouchEvents;
        }
        return eventTimeStamp(e) < this._private__lastTouchEventTimeStamp + 500 /* PreventFiresTouchEvents */;
    }
    _private__processTouchEvent(event, callback) {
        if (callback) {
            callback.call(this._private__handler, event);
        }
    }
    _private__processMouseEvent(event, callback) {
        if (!callback) {
            return;
        }
        callback.call(this._private__handler, event);
    }
    _private__makeCompatEvent(event, touch) {
        // TouchEvent has no clientX/Y coordinates:
        // We have to use the last Touch instead
        const eventLike = touch || event;
        const box = this._private__target.getBoundingClientRect() || { left: 0, top: 0 };
        return {
            _internal_clientX: eventLike.clientX,
            _internal_clientY: eventLike.clientY,
            _internal_pageX: eventLike.pageX,
            _internal_pageY: eventLike.pageY,
            _internal_screenX: eventLike.screenX,
            _internal_screenY: eventLike.screenY,
            _internal_localX: (eventLike.clientX - box.left),
            _internal_localY: (eventLike.clientY - box.top),
            _internal_ctrlKey: event.ctrlKey,
            _internal_altKey: event.altKey,
            _internal_shiftKey: event.shiftKey,
            _internal_metaKey: event.metaKey,
            _internal_isTouch: !event.type.startsWith('mouse') && event.type !== 'contextmenu' && event.type !== 'click',
            _internal_srcType: event.type,
            _internal_target: eventLike.target,
            _internal_view: event.view,
            _internal_preventDefault: () => {
                if (event.type !== 'touchstart') {
                    // touchstart is passive and cannot be prevented
                    preventDefault(event);
                }
            },
        };
    }
}
function getBoundingClientRect(element) {
    return element.getBoundingClientRect() || { left: 0, top: 0 };
}
function getDistance(p1, p2) {
    const xDiff = p1.clientX - p2.clientX;
    const yDiff = p1.clientY - p2.clientY;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
function preventDefault(event) {
    if (event.cancelable) {
        event.preventDefault();
    }
}
function getPosition(eventLike) {
    return {
        _internal_x: eventLike.pageX,
        _internal_y: eventLike.pageY,
    };
}
function eventTimeStamp(e) {
    // for some reason e.timestamp is always 0 on iPad with magic mouse, so we use performance.now() as a fallback
    return e.timeStamp || performance.now();
}
function touchWithId(touches, id) {
    for (let i = 0; i < touches.length; ++i) {
        if (touches[i].identifier === id) {
            return touches[i];
        }
    }
    return null;
}

const MAX_COUNT = 200;
class LabelsImageCache {
    constructor(fontSize, color, fontFamily, fontStyle) {
        this._private__textWidthCache = new TextWidthCache(MAX_COUNT);
        this._private__fontSize = 0;
        this._private__color = '';
        this._private__font = '';
        this._private__keys = [];
        this._private__hash = new Map();
        this._private__fontSize = fontSize;
        this._private__color = color;
        this._private__font = makeFont(fontSize, fontFamily, fontStyle);
    }
    destroy() {
        this._private__textWidthCache.reset();
        this._private__keys = [];
        this._private__hash.clear();
    }
    _internal_paintTo(ctx, text, x, y, align) {
        const label = this._private__getLabelImage(ctx, text);
        if (align !== 'left') {
            const pixelRatio = getCanvasDevicePixelRatio(ctx.canvas);
            x -= Math.floor(label._internal_textWidth * pixelRatio);
        }
        y -= Math.floor(label._internal_height / 2);
        ctx.drawImage(label._internal_canvas, x, y, label._internal_width, label._internal_height);
    }
    _private__getLabelImage(ctx, text) {
        let item;
        if (this._private__hash.has(text)) {
            // Cache hit!
            item = ensureDefined(this._private__hash.get(text));
        }
        else {
            if (this._private__keys.length >= MAX_COUNT) {
                const key = ensureDefined(this._private__keys.shift());
                this._private__hash.delete(key);
            }
            const pixelRatio = getCanvasDevicePixelRatio(ctx.canvas);
            const margin = Math.ceil(this._private__fontSize / 4.5);
            const baselineOffset = Math.round(this._private__fontSize / 10);
            const textWidth = Math.ceil(this._private__textWidthCache.measureText(ctx, text));
            const width = ceiledEven(Math.round(textWidth + margin * 2));
            const height = ceiledEven(this._private__fontSize + margin * 2);
            const canvas = createPreconfiguredCanvas(document, new Size(width, height));
            // Allocate new
            item = {
                _internal_text: text,
                _internal_textWidth: Math.round(Math.max(1, textWidth)),
                _internal_width: Math.ceil(width * pixelRatio),
                _internal_height: Math.ceil(height * pixelRatio),
                _internal_canvas: canvas,
            };
            if (textWidth !== 0) {
                this._private__keys.push(item._internal_text);
                this._private__hash.set(item._internal_text, item);
            }
            ctx = getContext2D(item._internal_canvas);
            drawScaled(ctx, pixelRatio, () => {
                ctx.font = this._private__font;
                ctx.fillStyle = this._private__color;
                ctx.fillText(text, 0, height - margin - baselineOffset);
            });
        }
        return item;
    }
}

class PriceAxisWidget {
    constructor(pane, options, rendererOptionsProvider, side) {
        this._private__priceScale = null;
        this._private__size = null;
        this._private__mousedown = false;
        this._private__widthCache = new TextWidthCache(50);
        this._private__tickMarksCache = new LabelsImageCache(11, '#000');
        this._private__color = null;
        this._private__font = null;
        this._private__prevOptimalWidth = 0;
        this._private__isSettingSize = false;
        this._private__canvasConfiguredHandler = () => {
            this._private__recreateTickMarksCache(this._private__rendererOptionsProvider.options());
            if (!this._private__isSettingSize) {
                this._private__pane._internal_chart()._internal_model().lightUpdate();
            }
        };
        this._private__topCanvasConfiguredHandler = () => {
            if (this._private__isSettingSize) {
                return;
            }
            this._private__pane._internal_chart()._internal_model().lightUpdate();
        };
        this._private__pane = pane;
        this._private__options = options;
        this._private__rendererOptionsProvider = rendererOptionsProvider;
        this._private__isLeft = side === 'left';
        this._private__cell = document.createElement('div');
        this._private__cell.style.height = '100%';
        this._private__cell.style.overflow = 'hidden';
        this._private__cell.style.width = '25px';
        this._private__cell.style.left = '0';
        this._private__cell.style.position = 'relative';
        this._private__canvasBinding = createBoundCanvas(this._private__cell, new Size(16, 16));
        this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        const canvas = this._private__canvasBinding.canvas;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '1';
        canvas.style.left = '0';
        canvas.style.top = '0';
        this._private__topCanvasBinding = createBoundCanvas(this._private__cell, new Size(16, 16));
        this._private__topCanvasBinding.subscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
        const topCanvas = this._private__topCanvasBinding.canvas;
        topCanvas.style.position = 'absolute';
        topCanvas.style.zIndex = '2';
        topCanvas.style.left = '0';
        topCanvas.style.top = '0';
        const handler = {
            _internal_mouseDownEvent: this._private__mouseDownEvent.bind(this),
            _internal_touchStartEvent: this._private__mouseDownEvent.bind(this),
            _internal_pressedMouseMoveEvent: this._private__pressedMouseMoveEvent.bind(this),
            _internal_touchMoveEvent: this._private__pressedMouseMoveEvent.bind(this),
            _internal_mouseDownOutsideEvent: this._private__mouseDownOutsideEvent.bind(this),
            _internal_mouseUpEvent: this._private__mouseUpEvent.bind(this),
            _internal_touchEndEvent: this._private__mouseUpEvent.bind(this),
            _internal_mouseDoubleClickEvent: this._private__mouseDoubleClickEvent.bind(this),
            _internal_doubleTapEvent: this._private__mouseDoubleClickEvent.bind(this),
            _internal_mouseEnterEvent: this._private__mouseEnterEvent.bind(this),
            _internal_mouseLeaveEvent: this._private__mouseLeaveEvent.bind(this),
        };
        this._private__mouseEventHandler = new MouseEventHandler(this._private__topCanvasBinding.canvas, handler, {
            _internal_treatVertTouchDragAsPageScroll: () => false,
            _internal_treatHorzTouchDragAsPageScroll: () => true,
        });
    }
    destroy() {
        this._private__mouseEventHandler.destroy();
        this._private__topCanvasBinding.unsubscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
        this._private__topCanvasBinding.destroy();
        this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        this._private__canvasBinding.destroy();
        if (this._private__priceScale !== null) {
            this._private__priceScale.onMarksChanged().unsubscribeAll(this);
        }
        this._private__priceScale = null;
        this._private__tickMarksCache.destroy();
    }
    _internal_getElement() {
        return this._private__cell;
    }
    _internal_lineColor() {
        return ensureNotNull(this._private__priceScale).options().borderColor;
    }
    _internal_textColor() {
        return this._private__options.textColor;
    }
    _internal_fontSize() {
        return this._private__options.fontSize;
    }
    _internal_baseFont() {
        return makeFont(this._internal_fontSize(), this._private__options.fontFamily);
    }
    _internal_rendererOptions() {
        const options = this._private__rendererOptionsProvider.options();
        const isColorChanged = this._private__color !== options.color;
        const isFontChanged = this._private__font !== options.font;
        if (isColorChanged || isFontChanged) {
            this._private__recreateTickMarksCache(options);
            this._private__color = options.color;
        }
        if (isFontChanged) {
            this._private__widthCache.reset();
            this._private__font = options.font;
        }
        return options;
    }
    _internal_optimalWidth() {
        if (this._private__priceScale === null) {
            return 0;
        }
        let tickMarkMaxWidth = 0;
        const rendererOptions = this._internal_rendererOptions();
        const ctx = getContext2D(this._private__canvasBinding.canvas);
        const tickMarks = this._private__priceScale.marks();
        ctx.font = this._internal_baseFont();
        if (tickMarks.length > 0) {
            tickMarkMaxWidth = Math.max(this._private__widthCache.measureText(ctx, tickMarks[0].label), this._private__widthCache.measureText(ctx, tickMarks[tickMarks.length - 1].label));
        }
        const views = this._private__backLabels();
        for (let j = views.length; j--;) {
            const width = this._private__widthCache.measureText(ctx, views[j].text());
            if (width > tickMarkMaxWidth) {
                tickMarkMaxWidth = width;
            }
        }
        const firstValue = this._private__priceScale.firstValue();
        if (firstValue !== null && this._private__size !== null) {
            const topValue = this._private__priceScale.coordinateToPrice(1, firstValue);
            const bottomValue = this._private__priceScale.coordinateToPrice(this._private__size._internal_h - 2, firstValue);
            tickMarkMaxWidth = Math.max(tickMarkMaxWidth, this._private__widthCache.measureText(ctx, this._private__priceScale.formatPrice(Math.floor(Math.min(topValue, bottomValue)) + 0.11111111111111, firstValue)), this._private__widthCache.measureText(ctx, this._private__priceScale.formatPrice(Math.ceil(Math.max(topValue, bottomValue)) - 0.11111111111111, firstValue)));
        }
        const resultTickMarksMaxWidth = tickMarkMaxWidth || 34 /* DefaultOptimalWidth */;
        let res = Math.ceil(rendererOptions.borderSize +
            rendererOptions.tickLength +
            rendererOptions.paddingInner +
            rendererOptions.paddingOuter +
            resultTickMarksMaxWidth);
        // make it even
        res += res % 2;
        return res;
    }
    _internal_setSize(size) {
        if (size._internal_w < 0 || size._internal_h < 0) {
            throw new Error('Try to set invalid size to PriceAxisWidget ' + JSON.stringify(size));
        }
        if (this._private__size === null || !this._private__size._internal_equals(size)) {
            this._private__size = size;
            this._private__isSettingSize = true;
            this._private__canvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
            this._private__topCanvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
            this._private__isSettingSize = false;
            this._private__cell.style.width = size._internal_w + 'px';
            // need this for IE11
            this._private__cell.style.height = size._internal_h + 'px';
            this._private__cell.style.minWidth = size._internal_w + 'px'; // for right calculate position of .pane-legend
        }
    }
    _internal_getWidth() {
        return ensureNotNull(this._private__size)._internal_w;
    }
    _internal_setPriceScale(priceScale) {
        if (this._private__priceScale === priceScale) {
            return;
        }
        if (this._private__priceScale !== null) {
            this._private__priceScale.onMarksChanged().unsubscribeAll(this);
        }
        this._private__priceScale = priceScale;
        priceScale.onMarksChanged().subscribe(this._private__onMarksChanged.bind(this), this);
    }
    _internal_priceScale() {
        return this._private__priceScale;
    }
    _internal_reset() {
        const pane = this._private__pane._internal_state();
        const model = this._private__pane._internal_chart()._internal_model();
        model.resetPriceScale(pane, ensureNotNull(this._internal_priceScale()));
    }
    _internal_paint(type) {
        if (this._private__size === null) {
            return;
        }
        if (type !== 1 /* Cursor */) {
            const ctx = getContext2D(this._private__canvasBinding.canvas);
            this._private__alignLabels();
            this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
            this._private__drawBorder(ctx, this._private__canvasBinding.pixelRatio);
            this._private__drawTickMarks(ctx, this._private__canvasBinding.pixelRatio);
            this._private__drawBackLabels(ctx, this._private__canvasBinding.pixelRatio);
        }
        const topCtx = getContext2D(this._private__topCanvasBinding.canvas);
        const width = this._private__size._internal_w;
        const height = this._private__size._internal_h;
        drawScaled(topCtx, this._private__topCanvasBinding.pixelRatio, () => {
            topCtx.clearRect(0, 0, width, height);
        });
        this._private__drawCrosshairLabel(topCtx, this._private__topCanvasBinding.pixelRatio);
    }
    _internal_getImage() {
        return this._private__canvasBinding.canvas;
    }
    _internal_update() {
        var _a;
        // this call has side-effect - it regenerates marks on the price scale
        (_a = this._private__priceScale) === null || _a === void 0 ? void 0 : _a.marks();
    }
    _private__mouseDownEvent(e) {
        if (this._private__priceScale === null || this._private__priceScale.isEmpty() || !this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        const model = this._private__pane._internal_chart()._internal_model();
        const pane = this._private__pane._internal_state();
        this._private__mousedown = true;
        model.startScalePrice(pane, this._private__priceScale, e._internal_localY);
    }
    _private__pressedMouseMoveEvent(e) {
        if (this._private__priceScale === null || !this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        const model = this._private__pane._internal_chart()._internal_model();
        const pane = this._private__pane._internal_state();
        const priceScale = this._private__priceScale;
        model.scalePriceTo(pane, priceScale, e._internal_localY);
    }
    _private__mouseDownOutsideEvent() {
        if (this._private__priceScale === null || !this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        const model = this._private__pane._internal_chart()._internal_model();
        const pane = this._private__pane._internal_state();
        const priceScale = this._private__priceScale;
        if (this._private__mousedown) {
            this._private__mousedown = false;
            model.endScalePrice(pane, priceScale);
        }
    }
    _private__mouseUpEvent(e) {
        if (this._private__priceScale === null || !this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
            return;
        }
        const model = this._private__pane._internal_chart()._internal_model();
        const pane = this._private__pane._internal_state();
        this._private__mousedown = false;
        model.endScalePrice(pane, this._private__priceScale);
    }
    _private__mouseDoubleClickEvent(e) {
        if (this._private__pane._internal_chart()._internal_options().handleScale.axisDoubleClickReset) {
            this._internal_reset();
        }
    }
    _private__mouseEnterEvent(e) {
        if (this._private__priceScale === null) {
            return;
        }
        const model = this._private__pane._internal_chart()._internal_model();
        if (model.options().handleScale.axisPressedMouseMove.price && !this._private__priceScale.isPercentage() && !this._private__priceScale.isIndexedTo100()) {
            this._private__setCursor(1 /* NsResize */);
        }
    }
    _private__mouseLeaveEvent(e) {
        this._private__setCursor(0 /* Default */);
    }
    _private__backLabels() {
        const res = [];
        const priceScale = (this._private__priceScale === null) ? undefined : this._private__priceScale;
        const addViewsForSources = (sources) => {
            for (let i = 0; i < sources.length; ++i) {
                const source = sources[i];
                const views = source.priceAxisViews(this._private__pane._internal_state(), priceScale);
                for (let j = 0; j < views.length; j++) {
                    res.push(views[j]);
                }
            }
        };
        // calculate max and min coordinates for views on selection
        // crosshair individually
        addViewsForSources(this._private__pane._internal_state().orderedSources());
        return res;
    }
    _private__drawBackground(ctx, pixelRatio) {
        if (this._private__size === null) {
            return;
        }
        const width = this._private__size._internal_w;
        const height = this._private__size._internal_h;
        drawScaled(ctx, pixelRatio, () => {
            const model = this._private__pane._internal_state().model();
            const topColor = model.backgroundTopColor();
            const bottomColor = model.backgroundBottomColor();
            if (topColor === bottomColor) {
                clearRect(ctx, 0, 0, width, height, topColor);
            }
            else {
                clearRectWithGradient(ctx, 0, 0, width, height, topColor, bottomColor);
            }
        });
    }
    _private__drawBorder(ctx, pixelRatio) {
        if (this._private__size === null || this._private__priceScale === null || !this._private__priceScale.options().borderVisible) {
            return;
        }
        ctx.save();
        ctx.fillStyle = this._internal_lineColor();
        const borderSize = Math.max(1, Math.floor(this._internal_rendererOptions().borderSize * pixelRatio));
        let left;
        if (this._private__isLeft) {
            left = Math.floor(this._private__size._internal_w * pixelRatio) - borderSize;
        }
        else {
            left = 0;
        }
        ctx.fillRect(left, 0, borderSize, Math.ceil(this._private__size._internal_h * pixelRatio));
        ctx.restore();
    }
    _private__drawTickMarks(ctx, pixelRatio) {
        if (this._private__size === null || this._private__priceScale === null) {
            return;
        }
        const tickMarks = this._private__priceScale.marks();
        ctx.save();
        ctx.strokeStyle = this._internal_lineColor();
        ctx.font = this._internal_baseFont();
        ctx.fillStyle = this._internal_lineColor();
        const rendererOptions = this._internal_rendererOptions();
        const tickMarkLeftX = this._private__isLeft ?
            Math.floor((this._private__size._internal_w - rendererOptions.tickLength) * pixelRatio - rendererOptions.borderSize * pixelRatio) :
            Math.floor(rendererOptions.borderSize * pixelRatio);
        const textLeftX = this._private__isLeft ?
            Math.round(tickMarkLeftX - rendererOptions.paddingInner * pixelRatio) :
            Math.round(tickMarkLeftX + rendererOptions.tickLength * pixelRatio + rendererOptions.paddingInner * pixelRatio);
        const textAlign = this._private__isLeft ? 'right' : 'left';
        const tickHeight = Math.max(1, Math.floor(pixelRatio));
        const tickOffset = Math.floor(pixelRatio * 0.5);
        const options = this._private__priceScale.options();
        if (options.borderVisible && options.ticksVisible) {
            const tickLength = Math.round(rendererOptions.tickLength * pixelRatio);
            ctx.beginPath();
            for (const tickMark of tickMarks) {
                ctx.rect(tickMarkLeftX, Math.round(tickMark.coord * pixelRatio) - tickOffset, tickLength, tickHeight);
            }
            ctx.fill();
        }
        ctx.fillStyle = this._internal_textColor();
        for (const tickMark of tickMarks) {
            this._private__tickMarksCache._internal_paintTo(ctx, tickMark.label, textLeftX, Math.round(tickMark.coord * pixelRatio), textAlign);
        }
        ctx.restore();
    }
    _private__alignLabels() {
        if (this._private__size === null || this._private__priceScale === null) {
            return;
        }
        let center = this._private__size._internal_h / 2;
        const views = [];
        const orderedSources = this._private__priceScale.orderedSources().slice(); // Copy of array
        const pane = this._private__pane;
        const paneState = pane._internal_state();
        const rendererOptions = this._internal_rendererOptions();
        // if we are default price scale, append labels from no-scale
        const isDefault = this._private__priceScale === paneState.defaultVisiblePriceScale();
        if (isDefault) {
            this._private__pane._internal_state().orderedSources().forEach((source) => {
                if (paneState.isOverlay(source)) {
                    orderedSources.push(source);
                }
            });
        }
        // we can use any, but let's use the first source as "center" one
        const centerSource = this._private__priceScale.dataSources()[0];
        const priceScale = this._private__priceScale;
        const updateForSources = (sources) => {
            sources.forEach((source) => {
                const sourceViews = source.priceAxisViews(paneState, priceScale);
                // never align selected sources
                sourceViews.forEach((view) => {
                    view.setFixedCoordinate(null);
                    if (view.isVisible()) {
                        views.push(view);
                    }
                });
                if (centerSource === source && sourceViews.length > 0) {
                    center = sourceViews[0].coordinate();
                }
            });
        };
        // crosshair individually
        updateForSources(orderedSources);
        // split into two parts
        const top = views.filter((view) => view.coordinate() <= center);
        const bottom = views.filter((view) => view.coordinate() > center);
        // sort top from center to top
        top.sort((l, r) => r.coordinate() - l.coordinate());
        // share center label
        if (top.length && bottom.length) {
            bottom.push(top[0]);
        }
        bottom.sort((l, r) => l.coordinate() - r.coordinate());
        views.forEach((view) => view.setFixedCoordinate(view.coordinate()));
        const options = this._private__priceScale.options();
        if (!options.alignLabels) {
            return;
        }
        for (let i = 1; i < top.length; i++) {
            const view = top[i];
            const prev = top[i - 1];
            const height = prev.height(rendererOptions, false);
            const coordinate = view.coordinate();
            const prevFixedCoordinate = prev.getFixedCoordinate();
            if (coordinate > prevFixedCoordinate - height) {
                view.setFixedCoordinate(prevFixedCoordinate - height);
            }
        }
        for (let j = 1; j < bottom.length; j++) {
            const view = bottom[j];
            const prev = bottom[j - 1];
            const height = prev.height(rendererOptions, true);
            const coordinate = view.coordinate();
            const prevFixedCoordinate = prev.getFixedCoordinate();
            if (coordinate < prevFixedCoordinate + height) {
                view.setFixedCoordinate(prevFixedCoordinate + height);
            }
        }
    }
    _private__drawBackLabels(ctx, pixelRatio) {
        if (this._private__size === null) {
            return;
        }
        ctx.save();
        const size = this._private__size;
        const views = this._private__backLabels();
        const rendererOptions = this._internal_rendererOptions();
        const align = this._private__isLeft ? 'right' : 'left';
        views.forEach((view) => {
            if (view.isAxisLabelVisible()) {
                const renderer = view.renderer(ensureNotNull(this._private__priceScale));
                ctx.save();
                renderer.draw(ctx, rendererOptions, this._private__widthCache, size._internal_w, align, pixelRatio);
                ctx.restore();
            }
        });
        ctx.restore();
    }
    _private__drawCrosshairLabel(ctx, pixelRatio) {
        if (this._private__size === null || this._private__priceScale === null) {
            return;
        }
        ctx.save();
        const size = this._private__size;
        const model = this._private__pane._internal_chart()._internal_model();
        const views = []; // array of arrays
        const pane = this._private__pane._internal_state();
        const v = model.crosshairSource().priceAxisViews(pane, this._private__priceScale);
        if (v.length) {
            views.push(v);
        }
        const ro = this._internal_rendererOptions();
        const align = this._private__isLeft ? 'right' : 'left';
        views.forEach((arr) => {
            arr.forEach((view) => {
                ctx.save();
                view.renderer(ensureNotNull(this._private__priceScale)).draw(ctx, ro, this._private__widthCache, size._internal_w, align, pixelRatio);
                ctx.restore();
            });
        });
        ctx.restore();
    }
    _private__setCursor(type) {
        this._private__cell.style.cursor = type === 1 /* NsResize */ ? 'ns-resize' : 'default';
    }
    _private__onMarksChanged() {
        const width = this._internal_optimalWidth();
        // avoid price scale is shrunk
        // using < instead !== to avoid infinite changes
        if (this._private__prevOptimalWidth < width) {
            this._private__pane._internal_chart()._internal_model().fullUpdate();
        }
        this._private__prevOptimalWidth = width;
    }
    _private__recreateTickMarksCache(options) {
        this._private__tickMarksCache.destroy();
        this._private__tickMarksCache = new LabelsImageCache(options.fontSize, options.color, options.fontFamily);
    }
}

function drawBackground(renderer, ctx, pixelRatio, isHovered, hitTestData) {
    if (renderer.drawBackground) {
        renderer.drawBackground(ctx, pixelRatio, isHovered, hitTestData);
    }
}
function drawForeground(renderer, ctx, pixelRatio, isHovered, hitTestData) {
    renderer.draw(ctx, pixelRatio, isHovered, hitTestData);
}
function sourcePaneViews(source, pane) {
    return source.paneViews(pane);
}
function sourceLabelPaneViews(source, pane) {
    return source.labelPaneViews(pane);
}
function sourceTopPaneViews(source, pane) {
    return source.topPaneViews !== undefined ? source.topPaneViews(pane) : [];
}
class PaneWidget {
    constructor(chart, state) {
        this._private__size = new Size(0, 0);
        this._private__leftPriceAxisWidget = null;
        this._private__rightPriceAxisWidget = null;
        this._private__startScrollingPos = null;
        this._private__isScrolling = false;
        this._private__clicked = new Delegate();
        this._private__prevPinchScale = 0;
        this._private__longTap = false;
        this._private__startTrackPoint = null;
        this._private__exitTrackingModeOnNextTry = false;
        this._private__initCrosshairPosition = null;
        this._private__scrollXAnimation = null;
        this._private__isSettingSize = false;
        this._private__canvasConfiguredHandler = () => {
            if (this._private__isSettingSize || this._private__state === null) {
                return;
            }
            this._private__model().lightUpdate();
        };
        this._private__topCanvasConfiguredHandler = () => {
            if (this._private__isSettingSize || this._private__state === null) {
                return;
            }
            this._private__model().lightUpdate();
        };
        this._private__chart = chart;
        this._private__state = state;
        this._private__state.onDestroyed().subscribe(this._private__onStateDestroyed.bind(this), this, true);
        this._private__paneCell = document.createElement('td');
        this._private__paneCell.style.padding = '0';
        this._private__paneCell.style.position = 'relative';
        const paneWrapper = document.createElement('div');
        paneWrapper.style.width = '100%';
        paneWrapper.style.height = '100%';
        paneWrapper.style.position = 'relative';
        paneWrapper.style.overflow = 'hidden';
        this._private__leftAxisCell = document.createElement('td');
        this._private__leftAxisCell.style.padding = '0';
        this._private__rightAxisCell = document.createElement('td');
        this._private__rightAxisCell.style.padding = '0';
        this._private__paneCell.appendChild(paneWrapper);
        this._private__canvasBinding = createBoundCanvas(paneWrapper, new Size(16, 16));
        this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        const canvas = this._private__canvasBinding.canvas;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '1';
        canvas.style.left = '0';
        canvas.style.top = '0';
        this._private__topCanvasBinding = createBoundCanvas(paneWrapper, new Size(16, 16));
        this._private__topCanvasBinding.subscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
        const topCanvas = this._private__topCanvasBinding.canvas;
        topCanvas.style.position = 'absolute';
        topCanvas.style.zIndex = '2';
        topCanvas.style.left = '0';
        topCanvas.style.top = '0';
        this._private__rowElement = document.createElement('tr');
        this._private__rowElement.appendChild(this._private__leftAxisCell);
        this._private__rowElement.appendChild(this._private__paneCell);
        this._private__rowElement.appendChild(this._private__rightAxisCell);
        this._internal_updatePriceAxisWidgetsStates();
        this._private__mouseEventHandler = new MouseEventHandler(this._private__topCanvasBinding.canvas, this, {
            _internal_treatVertTouchDragAsPageScroll: () => this._private__startTrackPoint === null && !this._private__chart._internal_options().handleScroll.vertTouchDrag,
            _internal_treatHorzTouchDragAsPageScroll: () => this._private__startTrackPoint === null && !this._private__chart._internal_options().handleScroll.horzTouchDrag,
        });
    }
    destroy() {
        if (this._private__leftPriceAxisWidget !== null) {
            this._private__leftPriceAxisWidget.destroy();
        }
        if (this._private__rightPriceAxisWidget !== null) {
            this._private__rightPriceAxisWidget.destroy();
        }
        this._private__topCanvasBinding.unsubscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
        this._private__topCanvasBinding.destroy();
        this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        this._private__canvasBinding.destroy();
        if (this._private__state !== null) {
            this._private__state.onDestroyed().unsubscribeAll(this);
        }
        this._private__mouseEventHandler.destroy();
    }
    _internal_state() {
        return ensureNotNull(this._private__state);
    }
    _internal_setState(pane) {
        if (this._private__state !== null) {
            this._private__state.onDestroyed().unsubscribeAll(this);
        }
        this._private__state = pane;
        if (this._private__state !== null) {
            this._private__state.onDestroyed().subscribe(PaneWidget.prototype._private__onStateDestroyed.bind(this), this, true);
        }
        this._internal_updatePriceAxisWidgetsStates();
    }
    _internal_chart() {
        return this._private__chart;
    }
    _internal_getElement() {
        return this._private__rowElement;
    }
    _internal_updatePriceAxisWidgetsStates() {
        if (this._private__state === null) {
            return;
        }
        this._private__recreatePriceAxisWidgets();
        if (this._private__model().serieses().length === 0) {
            return;
        }
        if (this._private__leftPriceAxisWidget !== null) {
            const leftPriceScale = this._private__state.leftPriceScale();
            this._private__leftPriceAxisWidget._internal_setPriceScale(ensureNotNull(leftPriceScale));
        }
        if (this._private__rightPriceAxisWidget !== null) {
            const rightPriceScale = this._private__state.rightPriceScale();
            this._private__rightPriceAxisWidget._internal_setPriceScale(ensureNotNull(rightPriceScale));
        }
    }
    _internal_updatePriceAxisWidgets() {
        if (this._private__leftPriceAxisWidget !== null) {
            this._private__leftPriceAxisWidget._internal_update();
        }
        if (this._private__rightPriceAxisWidget !== null) {
            this._private__rightPriceAxisWidget._internal_update();
        }
    }
    _internal_stretchFactor() {
        return this._private__state !== null ? this._private__state.stretchFactor() : 0;
    }
    _internal_setStretchFactor(stretchFactor) {
        if (this._private__state) {
            this._private__state.setStretchFactor(stretchFactor);
        }
    }
    _internal_mouseEnterEvent(event) {
        if (!this._private__state) {
            return;
        }
        this._private__onMouseEvent();
        const x = event._internal_localX;
        const y = event._internal_localY;
        this._private__setCrosshairPosition(x, y);
    }
    _internal_mouseDownEvent(event) {
        this._private__onMouseEvent();
        this._private__mouseTouchDownEvent();
        this._private__setCrosshairPosition(event._internal_localX, event._internal_localY);
    }
    _internal_mouseMoveEvent(event) {
        if (!this._private__state) {
            return;
        }
        this._private__onMouseEvent();
        const x = event._internal_localX;
        const y = event._internal_localY;
        this._private__setCrosshairPosition(x, y);
        const hitTest = this._internal_hitTest(x, y);
        this._private__model().setHoveredSource(hitTest && { source: hitTest._internal_source, object: hitTest._internal_object });
    }
    _internal_mouseClickEvent(event) {
        if (this._private__state === null) {
            return;
        }
        this._private__onMouseEvent();
        this._private__fireClickedDelegate(event);
    }
    _internal_pressedMouseMoveEvent(event) {
        this._private__onMouseEvent();
        this._private__pressedMouseTouchMoveEvent(event);
        this._private__setCrosshairPosition(event._internal_localX, event._internal_localY);
    }
    _internal_mouseUpEvent(event) {
        if (this._private__state === null) {
            return;
        }
        this._private__onMouseEvent();
        this._private__longTap = false;
        this._private__endScroll(event);
    }
    _internal_tapEvent(event) {
        if (this._private__state === null) {
            return;
        }
        this._private__fireClickedDelegate(event);
    }
    _internal_longTapEvent(event) {
        this._private__longTap = true;
        if (this._private__startTrackPoint === null) {
            const point = { x: event._internal_localX, y: event._internal_localY };
            this._private__startTrackingMode(point, point);
        }
    }
    _internal_mouseLeaveEvent(event) {
        if (this._private__state === null) {
            return;
        }
        this._private__onMouseEvent();
        this._private__state.model().setHoveredSource(null);
        this._private__clearCrosshairPosition();
    }
    _internal_clicked() {
        return this._private__clicked;
    }
    _internal_pinchStartEvent() {
        this._private__prevPinchScale = 1;
        this._private__terminateKineticAnimation();
    }
    _internal_pinchEvent(middlePoint, scale) {
        if (!this._private__chart._internal_options().handleScale.pinch) {
            return;
        }
        const zoomScale = (scale - this._private__prevPinchScale) * 5;
        this._private__prevPinchScale = scale;
        this._private__model().zoomTime(middlePoint._internal_x, zoomScale);
    }
    _internal_touchStartEvent(event) {
        this._private__longTap = false;
        this._private__exitTrackingModeOnNextTry = this._private__startTrackPoint !== null;
        this._private__mouseTouchDownEvent();
        if (this._private__startTrackPoint !== null) {
            const crosshair = this._private__model().crosshairSource();
            this._private__initCrosshairPosition = { x: crosshair.appliedX(), y: crosshair.appliedY() };
            this._private__startTrackPoint = { x: event._internal_localX, y: event._internal_localY };
        }
    }
    _internal_touchMoveEvent(event) {
        if (this._private__state === null) {
            return;
        }
        const x = event._internal_localX;
        const y = event._internal_localY;
        if (this._private__startTrackPoint !== null) {
            // tracking mode: move crosshair
            this._private__exitTrackingModeOnNextTry = false;
            const origPoint = ensureNotNull(this._private__initCrosshairPosition);
            const newX = origPoint.x + (x - this._private__startTrackPoint.x);
            const newY = origPoint.y + (y - this._private__startTrackPoint.y);
            this._private__setCrosshairPosition(newX, newY);
            return;
        }
        this._private__pressedMouseTouchMoveEvent(event);
    }
    _internal_touchEndEvent(event) {
        if (this._internal_chart()._internal_options().trackingMode.exitMode === 0 /* OnTouchEnd */) {
            this._private__exitTrackingModeOnNextTry = true;
        }
        this._private__tryExitTrackingMode();
        this._private__endScroll(event);
    }
    _internal_hitTest(x, y) {
        const state = this._private__state;
        if (state === null) {
            return null;
        }
        const sources = state.orderedSources();
        for (const source of sources) {
            const sourceResult = this._private__hitTestPaneView(source.paneViews(state), x, y);
            if (sourceResult !== null) {
                return {
                    _internal_source: source,
                    _internal_view: sourceResult._internal_view,
                    _internal_object: sourceResult._internal_object,
                };
            }
        }
        return null;
    }
    _internal_setPriceAxisSize(width, position) {
        const priceAxisWidget = position === 'left' ? this._private__leftPriceAxisWidget : this._private__rightPriceAxisWidget;
        ensureNotNull(priceAxisWidget)._internal_setSize(new Size(width, this._private__size._internal_h));
    }
    _internal_getSize() {
        return this._private__size;
    }
    _internal_setSize(size) {
        if (size._internal_w < 0 || size._internal_h < 0) {
            throw new Error('Try to set invalid size to PaneWidget ' + JSON.stringify(size));
        }
        if (this._private__size._internal_equals(size)) {
            return;
        }
        this._private__size = size;
        this._private__isSettingSize = true;
        this._private__canvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
        this._private__topCanvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
        this._private__isSettingSize = false;
        this._private__paneCell.style.width = size._internal_w + 'px';
        this._private__paneCell.style.height = size._internal_h + 'px';
    }
    _internal_recalculatePriceScales() {
        const pane = ensureNotNull(this._private__state);
        pane.recalculatePriceScale(pane.leftPriceScale());
        pane.recalculatePriceScale(pane.rightPriceScale());
        for (const source of pane.dataSources()) {
            if (pane.isOverlay(source)) {
                const priceScale = source.priceScale();
                if (priceScale !== null) {
                    pane.recalculatePriceScale(priceScale);
                }
                // for overlay drawings price scale is owner's price scale
                // however owner's price scale could not contain ds
                source.updateAllViews();
            }
        }
    }
    _internal_getImage() {
        return this._private__canvasBinding.canvas;
    }
    _internal_paint(type) {
        if (type === 0 /* None */) {
            return;
        }
        if (this._private__state === null) {
            return;
        }
        if (type > 1 /* Cursor */) {
            this._internal_recalculatePriceScales();
        }
        if (this._private__leftPriceAxisWidget !== null) {
            this._private__leftPriceAxisWidget._internal_paint(type);
        }
        if (this._private__rightPriceAxisWidget !== null) {
            this._private__rightPriceAxisWidget._internal_paint(type);
        }
        if (type !== 1 /* Cursor */) {
            const ctx = getContext2D(this._private__canvasBinding.canvas);
            ctx.save();
            this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
            if (this._private__state) {
                this._private__drawGrid(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawWatermark(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawSources(ctx, this._private__canvasBinding.pixelRatio, sourcePaneViews);
                this._private__drawSources(ctx, this._private__canvasBinding.pixelRatio, sourceLabelPaneViews);
            }
            ctx.restore();
        }
        const topCtx = getContext2D(this._private__topCanvasBinding.canvas);
        topCtx.clearRect(0, 0, Math.ceil(this._private__size._internal_w * this._private__topCanvasBinding.pixelRatio), Math.ceil(this._private__size._internal_h * this._private__topCanvasBinding.pixelRatio));
        this._private__drawSources(topCtx, this._private__canvasBinding.pixelRatio, sourceTopPaneViews);
        this._private__drawCrosshair(topCtx, this._private__topCanvasBinding.pixelRatio);
    }
    _internal_leftPriceAxisWidget() {
        return this._private__leftPriceAxisWidget;
    }
    _internal_rightPriceAxisWidget() {
        return this._private__rightPriceAxisWidget;
    }
    _private__onStateDestroyed() {
        if (this._private__state !== null) {
            this._private__state.onDestroyed().unsubscribeAll(this);
        }
        this._private__state = null;
    }
    _private__fireClickedDelegate(event) {
        const x = event._internal_localX;
        const y = event._internal_localY;
        if (this._private__clicked._internal_hasListeners()) {
            this._private__clicked._internal_fire(this._private__model().timeScale().coordinateToIndex(x), { x, y });
        }
    }
    _private__drawBackground(ctx, pixelRatio) {
        drawScaled(ctx, pixelRatio, () => {
            const model = this._private__model();
            const topColor = model.backgroundTopColor();
            const bottomColor = model.backgroundBottomColor();
            if (topColor === bottomColor) {
                clearRect(ctx, 0, 0, this._private__size._internal_w, this._private__size._internal_h, bottomColor);
            }
            else {
                clearRectWithGradient(ctx, 0, 0, this._private__size._internal_w, this._private__size._internal_h, topColor, bottomColor);
            }
        });
    }
    _private__drawGrid(ctx, pixelRatio) {
        const state = ensureNotNull(this._private__state);
        const paneView = state.grid().paneView();
        const renderer = paneView.renderer(state.height(), state.width());
        if (renderer !== null) {
            ctx.save();
            renderer.draw(ctx, pixelRatio, false);
            ctx.restore();
        }
    }
    _private__drawWatermark(ctx, pixelRatio) {
        const source = this._private__model().watermarkSource();
        this._private__drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawBackground, source);
        this._private__drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawForeground, source);
    }
    _private__drawCrosshair(ctx, pixelRatio) {
        this._private__drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawForeground, this._private__model().crosshairSource());
    }
    _private__drawSources(ctx, pixelRatio, paneViewsGetter) {
        const state = ensureNotNull(this._private__state);
        const sources = state.orderedSources();
        for (const source of sources) {
            this._private__drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawBackground, source);
        }
        for (const source of sources) {
            this._private__drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawForeground, source);
        }
    }
    _private__drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawFn, source) {
        const state = ensureNotNull(this._private__state);
        const paneViews = paneViewsGetter(source, state);
        const height = state.height();
        const width = state.width();
        const hoveredSource = state.model().hoveredSource();
        const isHovered = hoveredSource !== null && hoveredSource.source === source;
        const objecId = hoveredSource !== null && isHovered && hoveredSource.object !== undefined
            ? hoveredSource.object.hitTestData
            : undefined;
        for (const paneView of paneViews) {
            const renderer = paneView.renderer(height, width);
            if (renderer !== null) {
                ctx.save();
                drawFn(renderer, ctx, pixelRatio, isHovered, objecId);
                ctx.restore();
            }
        }
    }
    _private__hitTestPaneView(paneViews, x, y) {
        for (const paneView of paneViews) {
            const renderer = paneView.renderer(this._private__size._internal_h, this._private__size._internal_w);
            if (renderer !== null && renderer.hitTest) {
                const result = renderer.hitTest(x, y);
                if (result !== null) {
                    return {
                        _internal_view: paneView,
                        _internal_object: result,
                    };
                }
            }
        }
        return null;
    }
    _private__recreatePriceAxisWidgets() {
        if (this._private__state === null) {
            return;
        }
        const chart = this._private__chart;
        const leftAxisVisible = this._private__state.leftPriceScale().options().visible;
        const rightAxisVisible = this._private__state.rightPriceScale().options().visible;
        if (!leftAxisVisible && this._private__leftPriceAxisWidget !== null) {
            this._private__leftAxisCell.removeChild(this._private__leftPriceAxisWidget._internal_getElement());
            this._private__leftPriceAxisWidget.destroy();
            this._private__leftPriceAxisWidget = null;
        }
        if (!rightAxisVisible && this._private__rightPriceAxisWidget !== null) {
            this._private__rightAxisCell.removeChild(this._private__rightPriceAxisWidget._internal_getElement());
            this._private__rightPriceAxisWidget.destroy();
            this._private__rightPriceAxisWidget = null;
        }
        const rendererOptionsProvider = chart._internal_model().rendererOptionsProvider();
        if (leftAxisVisible && this._private__leftPriceAxisWidget === null) {
            this._private__leftPriceAxisWidget = new PriceAxisWidget(this, chart._internal_options().layout, rendererOptionsProvider, 'left');
            this._private__leftAxisCell.appendChild(this._private__leftPriceAxisWidget._internal_getElement());
        }
        if (rightAxisVisible && this._private__rightPriceAxisWidget === null) {
            this._private__rightPriceAxisWidget = new PriceAxisWidget(this, chart._internal_options().layout, rendererOptionsProvider, 'right');
            this._private__rightAxisCell.appendChild(this._private__rightPriceAxisWidget._internal_getElement());
        }
    }
    _private__preventScroll(event) {
        return event._internal_isTouch && this._private__longTap || this._private__startTrackPoint !== null;
    }
    _private__correctXCoord(x) {
        return Math.max(0, Math.min(x, this._private__size._internal_w - 1));
    }
    _private__correctYCoord(y) {
        return Math.max(0, Math.min(y, this._private__size._internal_h - 1));
    }
    _private__setCrosshairPosition(x, y) {
        this._private__model().setAndSaveCurrentPosition(this._private__correctXCoord(x), this._private__correctYCoord(y), ensureNotNull(this._private__state));
    }
    _private__clearCrosshairPosition() {
        this._private__model().clearCurrentPosition();
    }
    _private__tryExitTrackingMode() {
        if (this._private__exitTrackingModeOnNextTry) {
            this._private__startTrackPoint = null;
            this._private__clearCrosshairPosition();
        }
    }
    _private__startTrackingMode(startTrackPoint, crossHairPosition) {
        this._private__startTrackPoint = startTrackPoint;
        this._private__exitTrackingModeOnNextTry = false;
        this._private__setCrosshairPosition(crossHairPosition.x, crossHairPosition.y);
        const crosshair = this._private__model().crosshairSource();
        this._private__initCrosshairPosition = { x: crosshair.appliedX(), y: crosshair.appliedY() };
    }
    _private__model() {
        return this._private__chart._internal_model();
    }
    _private__finishScroll() {
        const model = this._private__model();
        const state = this._internal_state();
        const priceScale = state.defaultPriceScale();
        model.endScrollPrice(state, priceScale);
        model.endScrollTime();
        this._private__startScrollingPos = null;
        this._private__isScrolling = false;
    }
    _private__endScroll(event) {
        if (!this._private__isScrolling) {
            return;
        }
        const startAnimationTime = performance.now();
        if (this._private__scrollXAnimation !== null) {
            this._private__scrollXAnimation._internal_start(event._internal_localX, startAnimationTime);
        }
        if ((this._private__scrollXAnimation === null || this._private__scrollXAnimation._internal_finished(startAnimationTime))) {
            // animation is not needed
            this._private__finishScroll();
            return;
        }
        const model = this._private__model();
        const timeScale = model.timeScale();
        const scrollXAnimation = this._private__scrollXAnimation;
        const animationFn = () => {
            if ((scrollXAnimation._internal_terminated())) {
                // animation terminated, see _terminateKineticAnimation
                return;
            }
            const now = performance.now();
            let xAnimationFinished = scrollXAnimation._internal_finished(now);
            if (!scrollXAnimation._internal_terminated()) {
                const prevRightOffset = timeScale.rightOffset();
                model.scrollTimeTo(scrollXAnimation._internal_getPosition(now));
                if (prevRightOffset === timeScale.rightOffset()) {
                    xAnimationFinished = true;
                    this._private__scrollXAnimation = null;
                }
            }
            if (xAnimationFinished) {
                this._private__finishScroll();
                return;
            }
            requestAnimationFrame(animationFn);
        };
        requestAnimationFrame(animationFn);
    }
    _private__onMouseEvent() {
        this._private__startTrackPoint = null;
    }
    _private__mouseTouchDownEvent() {
        if (!this._private__state) {
            return;
        }
        this._private__terminateKineticAnimation();
        if (document.activeElement !== document.body && document.activeElement !== document.documentElement) {
            // If any focusable element except the page itself is focused, remove the focus
            ensureNotNull(document.activeElement).blur();
        }
        else {
            // Clear selection
            const selection = document.getSelection();
            if (selection !== null) {
                selection.removeAllRanges();
            }
        }
        const priceScale = this._private__state.defaultPriceScale();
        if (priceScale.isEmpty() || this._private__model().timeScale().isEmpty()) {
            return;
        }
    }
    // eslint-disable-next-line complexity
    _private__pressedMouseTouchMoveEvent(event) {
        if (this._private__state === null) {
            return;
        }
        const model = this._private__model();
        if (model.timeScale().isEmpty()) {
            return;
        }
        const chartOptions = this._private__chart._internal_options();
        const scrollOptions = chartOptions.handleScroll;
        const kineticScrollOptions = chartOptions.kineticScroll;
        if ((!scrollOptions.pressedMouseMove || event._internal_isTouch) &&
            (!scrollOptions.horzTouchDrag && !scrollOptions.vertTouchDrag || !event._internal_isTouch)) {
            return;
        }
        const priceScale = this._private__state.defaultPriceScale();
        const now = performance.now();
        if (this._private__startScrollingPos === null && !this._private__preventScroll(event)) {
            this._private__startScrollingPos = {
                x: event._internal_clientX,
                y: event._internal_clientY,
                _internal_timestamp: now,
                _internal_localX: event._internal_localX,
                _internal_localY: event._internal_localY,
            };
        }
        if (this._private__scrollXAnimation !== null) {
            this._private__scrollXAnimation._internal_addPosition(event._internal_localX, now);
        }
        if (this._private__startScrollingPos !== null &&
            !this._private__isScrolling &&
            (this._private__startScrollingPos.x !== event._internal_clientX || this._private__startScrollingPos.y !== event._internal_clientY)) {
            if (this._private__scrollXAnimation === null && (event._internal_isTouch && kineticScrollOptions.touch ||
                !event._internal_isTouch && kineticScrollOptions.mouse)) {
                this._private__scrollXAnimation = new KineticAnimation(0.2 /* MinScrollSpeed */, 7 /* MaxScrollSpeed */, 0.997 /* DumpingCoeff */, 15 /* ScrollMinMove */);
                this._private__scrollXAnimation._internal_addPosition(this._private__startScrollingPos._internal_localX, this._private__startScrollingPos._internal_timestamp);
                this._private__scrollXAnimation._internal_addPosition(event._internal_localX, now);
            }
            if (!priceScale.isEmpty()) {
                model.startScrollPrice(this._private__state, priceScale, event._internal_localY);
            }
            model.startScrollTime(event._internal_localX);
            this._private__isScrolling = true;
        }
        if (this._private__isScrolling) {
            // this allows scrolling not default price scales
            if (!priceScale.isEmpty()) {
                model.scrollPriceTo(this._private__state, priceScale, event._internal_localY);
            }
            model.scrollTimeTo(event._internal_localX);
        }
    }
    _private__terminateKineticAnimation() {
        const now = performance.now();
        const xAnimationFinished = this._private__scrollXAnimation === null || this._private__scrollXAnimation._internal_finished(now);
        if (this._private__scrollXAnimation !== null) {
            if (!xAnimationFinished) {
                this._private__finishScroll();
            }
        }
        if (this._private__scrollXAnimation !== null) {
            this._private__scrollXAnimation._internal_terminate();
            this._private__scrollXAnimation = null;
        }
    }
}

class PriceAxisStub {
    constructor(side, options, params, borderVisible, bottomColor) {
        this._private__invalidated = true;
        this._private__size = new Size(0, 0);
        this._private__canvasConfiguredHandler = () => this._internal_paint(3 /* Full */);
        this._private__isLeft = side === 'left';
        this._private__rendererOptionsProvider = params._internal_rendererOptionsProvider;
        this._private__options = options;
        this._private__borderVisible = borderVisible;
        this._private__bottomColor = bottomColor;
        this._private__cell = document.createElement('div');
        this._private__cell.style.width = '25px';
        this._private__cell.style.height = '100%';
        this._private__cell.style.overflow = 'hidden';
        this._private__canvasBinding = createBoundCanvas(this._private__cell, new Size(16, 16));
        this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
    }
    destroy() {
        this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        this._private__canvasBinding.destroy();
    }
    _internal_getElement() {
        return this._private__cell;
    }
    _internal_getSize() {
        return this._private__size;
    }
    _internal_setSize(size) {
        if (size._internal_w < 0 || size._internal_h < 0) {
            throw new Error('Try to set invalid size to PriceAxisStub ' + JSON.stringify(size));
        }
        if (!this._private__size._internal_equals(size)) {
            this._private__size = size;
            this._private__canvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
            this._private__cell.style.width = `${size._internal_w}px`;
            this._private__cell.style.minWidth = `${size._internal_w}px`; // for right calculate position of .pane-legend
            this._private__cell.style.height = `${size._internal_h}px`;
            this._private__invalidated = true;
        }
    }
    _internal_paint(type) {
        if (type < 3 /* Full */ && !this._private__invalidated) {
            return;
        }
        if (this._private__size._internal_w === 0 || this._private__size._internal_h === 0) {
            return;
        }
        this._private__invalidated = false;
        const ctx = getContext2D(this._private__canvasBinding.canvas);
        this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
        this._private__drawBorder(ctx, this._private__canvasBinding.pixelRatio);
    }
    _internal_getImage() {
        return this._private__canvasBinding.canvas;
    }
    _private__drawBorder(ctx, pixelRatio) {
        if (!this._private__borderVisible()) {
            return;
        }
        const width = this._private__size._internal_w;
        ctx.save();
        ctx.fillStyle = this._private__options.timeScale.borderColor;
        const borderSize = Math.floor(this._private__rendererOptionsProvider.options().borderSize * pixelRatio);
        const left = (this._private__isLeft) ? Math.round(width * pixelRatio) - borderSize : 0;
        ctx.fillRect(left, 0, borderSize, borderSize);
        ctx.restore();
    }
    _private__drawBackground(ctx, pixelRatio) {
        drawScaled(ctx, pixelRatio, () => {
            clearRect(ctx, 0, 0, this._private__size._internal_w, this._private__size._internal_h, this._private__bottomColor());
        });
    }
}

function markWithGreaterWeight(a, b) {
    return a.weight > b.weight ? a : b;
}
class TimeAxisWidget {
    constructor(chartWidget) {
        this._private__leftStub = null;
        this._private__rightStub = null;
        this._private__rendererOptions = null;
        this._private__mouseDown = false;
        this._private__size = new Size(0, 0);
        this._private__sizeChanged = new Delegate();
        this._private__widthCache = new TextWidthCache(5);
        this._private__isSettingSize = false;
        this._private__canvasConfiguredHandler = () => {
            if (!this._private__isSettingSize) {
                this._private__chart._internal_model().lightUpdate();
            }
        };
        this._private__topCanvasConfiguredHandler = () => {
            if (!this._private__isSettingSize) {
                this._private__chart._internal_model().lightUpdate();
            }
        };
        this._private__chart = chartWidget;
        this._private__options = chartWidget._internal_options().layout;
        this._private__element = document.createElement('tr');
        this._private__leftStubCell = document.createElement('td');
        this._private__leftStubCell.style.padding = '0';
        this._private__rightStubCell = document.createElement('td');
        this._private__rightStubCell.style.padding = '0';
        this._private__cell = document.createElement('td');
        this._private__cell.style.height = '25px';
        this._private__cell.style.padding = '0';
        this._private__dv = document.createElement('div');
        this._private__dv.style.width = '100%';
        this._private__dv.style.height = '100%';
        this._private__dv.style.position = 'relative';
        this._private__dv.style.overflow = 'hidden';
        this._private__cell.appendChild(this._private__dv);
        this._private__canvasBinding = createBoundCanvas(this._private__dv, new Size(16, 16));
        this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        const canvas = this._private__canvasBinding.canvas;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '1';
        canvas.style.left = '0';
        canvas.style.top = '0';
        this._private__topCanvasBinding = createBoundCanvas(this._private__dv, new Size(16, 16));
        this._private__topCanvasBinding.subscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
        const topCanvas = this._private__topCanvasBinding.canvas;
        topCanvas.style.position = 'absolute';
        topCanvas.style.zIndex = '2';
        topCanvas.style.left = '0';
        topCanvas.style.top = '0';
        this._private__element.appendChild(this._private__leftStubCell);
        this._private__element.appendChild(this._private__cell);
        this._private__element.appendChild(this._private__rightStubCell);
        this._private__recreateStubs();
        this._private__chart._internal_model().priceScalesOptionsChanged().subscribe(this._private__recreateStubs.bind(this), this);
        this._private__mouseEventHandler = new MouseEventHandler(this._private__topCanvasBinding.canvas, this, {
            _internal_treatVertTouchDragAsPageScroll: () => true,
            _internal_treatHorzTouchDragAsPageScroll: () => false,
        });
    }
    destroy() {
        this._private__mouseEventHandler.destroy();
        if (this._private__leftStub !== null) {
            this._private__leftStub.destroy();
        }
        if (this._private__rightStub !== null) {
            this._private__rightStub.destroy();
        }
        this._private__topCanvasBinding.unsubscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
        this._private__topCanvasBinding.destroy();
        this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        this._private__canvasBinding.destroy();
    }
    _internal_getElement() {
        return this._private__element;
    }
    _internal_leftStub() {
        return this._private__leftStub;
    }
    _internal_rightStub() {
        return this._private__rightStub;
    }
    _internal_mouseDownEvent(event) {
        if (this._private__mouseDown) {
            return;
        }
        this._private__mouseDown = true;
        const model = this._private__chart._internal_model();
        if (model.timeScale().isEmpty() || !this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
            return;
        }
        model.startScaleTime(event._internal_localX);
    }
    _internal_touchStartEvent(event) {
        this._internal_mouseDownEvent(event);
    }
    _internal_mouseDownOutsideEvent() {
        const model = this._private__chart._internal_model();
        if (!model.timeScale().isEmpty() && this._private__mouseDown) {
            this._private__mouseDown = false;
            if (this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
                model.endScaleTime();
            }
        }
    }
    _internal_pressedMouseMoveEvent(event) {
        const model = this._private__chart._internal_model();
        if (model.timeScale().isEmpty() || !this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
            return;
        }
        model.scaleTimeTo(event._internal_localX);
    }
    _internal_touchMoveEvent(event) {
        this._internal_pressedMouseMoveEvent(event);
    }
    _internal_mouseUpEvent() {
        this._private__mouseDown = false;
        const model = this._private__chart._internal_model();
        if (model.timeScale().isEmpty() && !this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
            return;
        }
        model.endScaleTime();
    }
    _internal_touchEndEvent() {
        this._internal_mouseUpEvent();
    }
    _internal_mouseDoubleClickEvent() {
        if (this._private__chart._internal_options().handleScale.axisDoubleClickReset) {
            this._private__chart._internal_model().resetTimeScale();
        }
    }
    _internal_doubleTapEvent() {
        this._internal_mouseDoubleClickEvent();
    }
    _internal_mouseEnterEvent() {
        if (this._private__chart._internal_model().options().handleScale.axisPressedMouseMove.time) {
            this._private__setCursor(1 /* EwResize */);
        }
    }
    _internal_mouseLeaveEvent() {
        this._private__setCursor(0 /* Default */);
    }
    _internal_getSize() {
        return this._private__size;
    }
    _internal_sizeChanged() {
        return this._private__sizeChanged;
    }
    _internal_setSizes(timeAxisSize, leftStubWidth, rightStubWidth) {
        if (!this._private__size || !this._private__size._internal_equals(timeAxisSize)) {
            this._private__size = timeAxisSize;
            this._private__isSettingSize = true;
            this._private__canvasBinding.resizeCanvas({ width: timeAxisSize._internal_w, height: timeAxisSize._internal_h });
            this._private__topCanvasBinding.resizeCanvas({ width: timeAxisSize._internal_w, height: timeAxisSize._internal_h });
            this._private__isSettingSize = false;
            this._private__cell.style.width = timeAxisSize._internal_w + 'px';
            this._private__cell.style.height = timeAxisSize._internal_h + 'px';
            this._private__sizeChanged._internal_fire(timeAxisSize);
        }
        if (this._private__leftStub !== null) {
            this._private__leftStub._internal_setSize(new Size(leftStubWidth, timeAxisSize._internal_h));
        }
        if (this._private__rightStub !== null) {
            this._private__rightStub._internal_setSize(new Size(rightStubWidth, timeAxisSize._internal_h));
        }
    }
    _internal_optimalHeight() {
        const rendererOptions = this._private__getRendererOptions();
        return Math.ceil(
        // rendererOptions.offsetSize +
        rendererOptions.borderSize +
            rendererOptions.tickLength +
            rendererOptions.fontSize +
            rendererOptions.paddingTop +
            rendererOptions.paddingBottom);
    }
    _internal_update() {
        // this call has side-effect - it regenerates marks on the time scale
        this._private__chart._internal_model().timeScale().marks();
    }
    _internal_getImage() {
        return this._private__canvasBinding.canvas;
    }
    _internal_paint(type) {
        if (type === 0 /* None */) {
            return;
        }
        if (type !== 1 /* Cursor */) {
            const ctx = getContext2D(this._private__canvasBinding.canvas);
            this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
            this._private__drawBorder(ctx, this._private__canvasBinding.pixelRatio);
            this._private__drawTickMarks(ctx, this._private__canvasBinding.pixelRatio);
            // atm we don't have sources to be drawn on time axis except crosshair which is rendered on top level canvas
            // so let's don't call this code at all for now
            // this._drawLabels(this._chart.model().dataSources(), ctx, pixelRatio);
            if (this._private__leftStub !== null) {
                this._private__leftStub._internal_paint(type);
            }
            if (this._private__rightStub !== null) {
                this._private__rightStub._internal_paint(type);
            }
        }
        const topCtx = getContext2D(this._private__topCanvasBinding.canvas);
        const pixelRatio = this._private__topCanvasBinding.pixelRatio;
        topCtx.clearRect(0, 0, Math.ceil(this._private__size._internal_w * pixelRatio), Math.ceil(this._private__size._internal_h * pixelRatio));
        this._private__drawLabels([this._private__chart._internal_model().crosshairSource()], topCtx, pixelRatio);
    }
    _private__drawBackground(ctx, pixelRatio) {
        drawScaled(ctx, pixelRatio, () => {
            clearRect(ctx, 0, 0, this._private__size._internal_w, this._private__size._internal_h, this._private__chart._internal_model().backgroundBottomColor());
        });
    }
    _private__drawBorder(ctx, pixelRatio) {
        if (this._private__chart._internal_options().timeScale.borderVisible) {
            ctx.save();
            ctx.fillStyle = this._private__lineColor();
            const borderSize = Math.max(1, Math.floor(this._private__getRendererOptions().borderSize * pixelRatio));
            ctx.fillRect(0, 0, Math.ceil(this._private__size._internal_w * pixelRatio), borderSize);
            ctx.restore();
        }
    }
    _private__drawTickMarks(ctx, pixelRatio) {
        const timeScale = this._private__chart._internal_model().timeScale();
        const tickMarks = timeScale.marks();
        if (!tickMarks || tickMarks.length === 0) {
            return;
        }
        let maxWeight = tickMarks.reduce(markWithGreaterWeight, tickMarks[0]).weight;
        // special case: it looks strange if 15:00 is bold but 14:00 is not
        // so if maxWeight > TickMarkWeight.Hour1 and < TickMarkWeight.Day reduce it to TickMarkWeight.Hour1
        if (maxWeight > 30 /* Hour1 */ && maxWeight < 50 /* Day */) {
            maxWeight = 30 /* Hour1 */;
        }
        ctx.save();
        ctx.strokeStyle = this._private__lineColor();
        const rendererOptions = this._private__getRendererOptions();
        const yText = (rendererOptions.borderSize +
            rendererOptions.tickLength +
            rendererOptions.paddingTop +
            rendererOptions.fontSize -
            rendererOptions.baselineOffset);
        ctx.textAlign = 'center';
        ctx.fillStyle = this._private__lineColor();
        const borderSize = Math.floor(this._private__getRendererOptions().borderSize * pixelRatio);
        const tickWidth = Math.max(1, Math.floor(pixelRatio));
        const tickOffset = Math.floor(pixelRatio * 0.5);
        const options = timeScale.options();
        if (options.borderVisible && options.ticksVisible) {
            ctx.beginPath();
            const tickLen = Math.round(rendererOptions.tickLength * pixelRatio);
            for (let index = tickMarks.length; index--;) {
                const x = Math.round(tickMarks[index].coord * pixelRatio);
                ctx.rect(x - tickOffset, borderSize, tickWidth, tickLen);
            }
            ctx.fill();
        }
        ctx.fillStyle = this._private__textColor();
        drawScaled(ctx, pixelRatio, () => {
            // draw base marks
            ctx.font = this._private__baseFont();
            for (const tickMark of tickMarks) {
                if (tickMark.weight < maxWeight) {
                    const coordinate = tickMark.needAlignCoordinate ? this._private__alignTickMarkLabelCoordinate(ctx, tickMark.coord, tickMark.label) : tickMark.coord;
                    ctx.fillText(tickMark.label, coordinate, yText);
                }
            }
            ctx.font = this._private__baseBoldFont();
            for (const tickMark of tickMarks) {
                if (tickMark.weight >= maxWeight) {
                    const coordinate = tickMark.needAlignCoordinate ? this._private__alignTickMarkLabelCoordinate(ctx, tickMark.coord, tickMark.label) : tickMark.coord;
                    ctx.fillText(tickMark.label, coordinate, yText);
                }
            }
        });
        ctx.restore();
    }
    _private__alignTickMarkLabelCoordinate(ctx, coordinate, labelText) {
        const labelWidth = this._private__widthCache.measureText(ctx, labelText);
        const labelWidthHalf = labelWidth / 2;
        const leftTextCoordinate = Math.floor(coordinate - labelWidthHalf) + 0.5;
        if (leftTextCoordinate < 0) {
            coordinate = coordinate + Math.abs(0 - leftTextCoordinate);
        }
        else if (leftTextCoordinate + labelWidth > this._private__size._internal_w) {
            coordinate = coordinate - Math.abs(this._private__size._internal_w - (leftTextCoordinate + labelWidth));
        }
        return coordinate;
    }
    _private__drawLabels(sources, ctx, pixelRatio) {
        const rendererOptions = this._private__getRendererOptions();
        for (const source of sources) {
            for (const view of source.timeAxisViews()) {
                ctx.save();
                view.renderer().draw(ctx, rendererOptions, pixelRatio);
                ctx.restore();
            }
        }
    }
    _private__lineColor() {
        return this._private__chart._internal_options().timeScale.borderColor;
    }
    _private__textColor() {
        return this._private__options.textColor;
    }
    _private__fontSize() {
        return this._private__options.fontSize;
    }
    _private__baseFont() {
        return makeFont(this._private__fontSize(), this._private__options.fontFamily);
    }
    _private__baseBoldFont() {
        return makeFont(this._private__fontSize(), this._private__options.fontFamily, 'bold');
    }
    _private__getRendererOptions() {
        if (this._private__rendererOptions === null) {
            this._private__rendererOptions = {
                borderSize: 1 /* BorderSize */,
                baselineOffset: NaN,
                paddingTop: NaN,
                paddingBottom: NaN,
                paddingHorizontal: NaN,
                tickLength: 3 /* TickLength */,
                fontSize: NaN,
                font: '',
                widthCache: new TextWidthCache(),
            };
        }
        const rendererOptions = this._private__rendererOptions;
        const newFont = this._private__baseFont();
        if (rendererOptions.font !== newFont) {
            const fontSize = this._private__fontSize();
            rendererOptions.fontSize = fontSize;
            rendererOptions.font = newFont;
            rendererOptions.paddingTop = Math.ceil(fontSize / 2.5);
            rendererOptions.paddingBottom = rendererOptions.paddingTop;
            rendererOptions.paddingHorizontal = Math.ceil(fontSize / 2);
            rendererOptions.baselineOffset = Math.round(this._private__fontSize() / 5);
            rendererOptions.widthCache.reset();
        }
        return this._private__rendererOptions;
    }
    _private__setCursor(type) {
        this._private__cell.style.cursor = type === 1 /* EwResize */ ? 'ew-resize' : 'default';
    }
    _private__recreateStubs() {
        const model = this._private__chart._internal_model();
        const options = model.options();
        if (!options.leftPriceScale.visible && this._private__leftStub !== null) {
            this._private__leftStubCell.removeChild(this._private__leftStub._internal_getElement());
            this._private__leftStub.destroy();
            this._private__leftStub = null;
        }
        if (!options.rightPriceScale.visible && this._private__rightStub !== null) {
            this._private__rightStubCell.removeChild(this._private__rightStub._internal_getElement());
            this._private__rightStub.destroy();
            this._private__rightStub = null;
        }
        const rendererOptionsProvider = this._private__chart._internal_model().rendererOptionsProvider();
        const params = {
            _internal_rendererOptionsProvider: rendererOptionsProvider,
        };
        const borderVisibleGetter = () => {
            return options.leftPriceScale.borderVisible && model.timeScale().options().borderVisible;
        };
        const bottomColorGetter = () => model.backgroundBottomColor();
        if (options.leftPriceScale.visible && this._private__leftStub === null) {
            this._private__leftStub = new PriceAxisStub('left', options, params, borderVisibleGetter, bottomColorGetter);
            this._private__leftStubCell.appendChild(this._private__leftStub._internal_getElement());
        }
        if (options.rightPriceScale.visible && this._private__rightStub === null) {
            this._private__rightStub = new PriceAxisStub('right', options, params, borderVisibleGetter, bottomColorGetter);
            this._private__rightStubCell.appendChild(this._private__rightStub._internal_getElement());
        }
    }
}

class ChartWidget {
    constructor(container, options) {
        this._private__paneWidgets = [];
        this._private__drawRafId = 0;
        this._private__height = 0;
        this._private__width = 0;
        this._private__leftPriceAxisWidth = 0;
        this._private__rightPriceAxisWidth = 0;
        this._private__invalidateMask = null;
        this._private__drawPlanned = false;
        this._private__clicked = new Delegate();
        this._private__crosshairMoved = new Delegate();
        this._private__options = options;
        this._private__element = document.createElement('div');
        this._private__element.classList.add('tv-lightweight-charts');
        this._private__element.style.overflow = 'hidden';
        this._private__element.style.width = '100%';
        this._private__element.style.height = '100%';
        disableSelection(this._private__element);
        this._private__tableElement = document.createElement('table');
        this._private__tableElement.setAttribute('cellspacing', '0');
        this._private__element.appendChild(this._private__tableElement);
        this._private__onWheelBound = this._private__onMousewheel.bind(this);
        this._private__element.addEventListener('wheel', this._private__onWheelBound, { passive: false });
        this._private__model = new ChartModel(this._private__invalidateHandler.bind(this), this._private__options);
        this._internal_model().crosshairMoved().subscribe(this._private__onPaneWidgetCrosshairMoved.bind(this), this);
        this._private__timeAxisWidget = new TimeAxisWidget(this);
        this._private__tableElement.appendChild(this._private__timeAxisWidget._internal_getElement());
        let width = this._private__options.width;
        let height = this._private__options.height;
        if (width === 0 || height === 0) {
            const containerRect = container.getBoundingClientRect();
            // TODO: Fix it better
            // on Hi-DPI CSS size * Device Pixel Ratio should be integer to avoid smoothing
            // For chart widget we decreases because we must be inside container.
            // For time axis this is not important, since it just affects space for pane widgets
            if (width === 0) {
                width = Math.floor(containerRect.width);
                width -= width % 2;
            }
            if (height === 0) {
                height = Math.floor(containerRect.height);
                height -= height % 2;
            }
        }
        // BEWARE: resize must be called BEFORE _syncGuiWithModel (in constructor only)
        // or after but with adjustSize to properly update time scale
        this._internal_resize(width, height);
        this._private__syncGuiWithModel();
        container.appendChild(this._private__element);
        this._private__updateTimeAxisVisibility();
        this._private__model.timeScale().optionsApplied().subscribe(this._private__model.fullUpdate.bind(this._private__model), this);
        this._private__model.priceScalesOptionsChanged().subscribe(this._private__model.fullUpdate.bind(this._private__model), this);
    }
    _internal_model() {
        return this._private__model;
    }
    _internal_options() {
        return this._private__options;
    }
    _internal_paneWidgets() {
        return this._private__paneWidgets;
    }
    _internal_timeAxisWidget() {
        return this._private__timeAxisWidget;
    }
    destroy() {
        this._private__element.removeEventListener('wheel', this._private__onWheelBound);
        if (this._private__drawRafId !== 0) {
            window.cancelAnimationFrame(this._private__drawRafId);
        }
        this._private__model.crosshairMoved().unsubscribeAll(this);
        this._private__model.timeScale().optionsApplied().unsubscribeAll(this);
        this._private__model.priceScalesOptionsChanged().unsubscribeAll(this);
        this._private__model.destroy();
        for (const paneWidget of this._private__paneWidgets) {
            this._private__tableElement.removeChild(paneWidget._internal_getElement());
            paneWidget._internal_clicked().unsubscribeAll(this);
            paneWidget.destroy();
        }
        this._private__paneWidgets = [];
        // for (const paneSeparator of this._paneSeparators) {
        // 	this._destroySeparator(paneSeparator);
        // }
        // this._paneSeparators = [];
        ensureNotNull(this._private__timeAxisWidget).destroy();
        if (this._private__element.parentElement !== null) {
            this._private__element.parentElement.removeChild(this._private__element);
        }
        this._private__crosshairMoved._internal_destroy();
        this._private__clicked._internal_destroy();
    }
    _internal_resize(width, height, forceRepaint = false) {
        if (this._private__height === height && this._private__width === width) {
            return;
        }
        this._private__height = height;
        this._private__width = width;
        const heightStr = height + 'px';
        const widthStr = width + 'px';
        ensureNotNull(this._private__element).style.height = heightStr;
        ensureNotNull(this._private__element).style.width = widthStr;
        this._private__tableElement.style.height = heightStr;
        this._private__tableElement.style.width = widthStr;
        if (forceRepaint) {
            this._private__drawImpl(new InvalidateMask(3 /* Full */));
        }
        else {
            this._private__model.fullUpdate();
        }
    }
    _internal_paint(invalidateMask) {
        if (invalidateMask === undefined) {
            invalidateMask = new InvalidateMask(3 /* Full */);
        }
        for (let i = 0; i < this._private__paneWidgets.length; i++) {
            this._private__paneWidgets[i]._internal_paint(invalidateMask.invalidateForPane(i).level);
        }
        if (this._private__options.timeScale.visible) {
            this._private__timeAxisWidget._internal_paint(invalidateMask.fullInvalidation());
        }
    }
    _internal_applyOptions(options) {
        // we don't need to merge options here because it's done in chart model
        // and since both model and widget share the same object it will be done automatically for widget as well
        // not ideal solution for sure, but it work's for now ¯\_(ツ)_/¯
        this._private__model.applyOptions(options);
        this._private__updateTimeAxisVisibility();
        const width = options.width || this._private__width;
        const height = options.height || this._private__height;
        this._internal_resize(width, height);
    }
    _internal_clicked() {
        return this._private__clicked;
    }
    _internal_crosshairMoved() {
        return this._private__crosshairMoved;
    }
    _internal_takeScreenshot() {
        if (this._private__invalidateMask !== null) {
            this._private__drawImpl(this._private__invalidateMask);
            this._private__invalidateMask = null;
        }
        // calculate target size
        const firstPane = this._private__paneWidgets[0];
        const targetCanvas = createPreconfiguredCanvas(document, new Size(this._private__width, this._private__height));
        const ctx = getContext2D(targetCanvas);
        const pixelRatio = getCanvasDevicePixelRatio(targetCanvas);
        drawScaled(ctx, pixelRatio, () => {
            let targetX = 0;
            let targetY = 0;
            const drawPriceAxises = (position) => {
                for (let paneIndex = 0; paneIndex < this._private__paneWidgets.length; paneIndex++) {
                    const paneWidget = this._private__paneWidgets[paneIndex];
                    const paneWidgetHeight = paneWidget._internal_getSize()._internal_h;
                    const priceAxisWidget = ensureNotNull(position === 'left' ? paneWidget._internal_leftPriceAxisWidget() : paneWidget._internal_rightPriceAxisWidget());
                    const image = priceAxisWidget._internal_getImage();
                    ctx.drawImage(image, targetX, targetY, priceAxisWidget._internal_getWidth(), paneWidgetHeight);
                    targetY += paneWidgetHeight;
                    // if (paneIndex < this._paneWidgets.length - 1) {
                    // 	const separator = this._paneSeparators[paneIndex];
                    // 	const separatorSize = separator.getSize();
                    // 	const separatorImage = separator.getImage();
                    // 	ctx.drawImage(separatorImage, targetX, targetY, separatorSize.w, separatorSize.h);
                    // 	targetY += separatorSize.h;
                    // }
                }
            };
            // draw left price scale if exists
            if (this._private__isLeftAxisVisible()) {
                drawPriceAxises('left');
                targetX = ensureNotNull(firstPane._internal_leftPriceAxisWidget())._internal_getWidth();
            }
            targetY = 0;
            for (let paneIndex = 0; paneIndex < this._private__paneWidgets.length; paneIndex++) {
                const paneWidget = this._private__paneWidgets[paneIndex];
                const paneWidgetSize = paneWidget._internal_getSize();
                const image = paneWidget._internal_getImage();
                ctx.drawImage(image, targetX, targetY, paneWidgetSize._internal_w, paneWidgetSize._internal_h);
                targetY += paneWidgetSize._internal_h;
                // if (paneIndex < this._paneWidgets.length - 1) {
                // 	const separator = this._paneSeparators[paneIndex];
                // 	const separatorSize = separator.getSize();
                // 	const separatorImage = separator.getImage();
                // 	ctx.drawImage(separatorImage, targetX, targetY, separatorSize.w, separatorSize.h);
                // 	targetY += separatorSize.h;
                // }
            }
            targetX += firstPane._internal_getSize()._internal_w;
            if (this._private__isRightAxisVisible()) {
                targetY = 0;
                drawPriceAxises('right');
            }
            const drawStub = (position) => {
                const stub = ensureNotNull(position === 'left' ? this._private__timeAxisWidget._internal_leftStub() : this._private__timeAxisWidget._internal_rightStub());
                const size = stub._internal_getSize();
                const image = stub._internal_getImage();
                ctx.drawImage(image, targetX, targetY, size._internal_w, size._internal_h);
            };
            // draw time scale
            if (this._private__options.timeScale.visible) {
                targetX = 0;
                if (this._private__isLeftAxisVisible()) {
                    drawStub('left');
                    targetX = ensureNotNull(firstPane._internal_leftPriceAxisWidget())._internal_getWidth();
                }
                const size = this._private__timeAxisWidget._internal_getSize();
                const image = this._private__timeAxisWidget._internal_getImage();
                ctx.drawImage(image, targetX, targetY, size._internal_w, size._internal_h);
                if (this._private__isRightAxisVisible()) {
                    targetX += firstPane._internal_getSize()._internal_w;
                    drawStub('right');
                    ctx.restore();
                }
            }
        });
        return targetCanvas;
    }
    _internal_getPriceAxisWidth(position) {
        if (position === 'left' && !this._private__isLeftAxisVisible()) {
            return 0;
        }
        if (position === 'right' && !this._private__isRightAxisVisible()) {
            return 0;
        }
        if (this._private__paneWidgets.length === 0) {
            return 0;
        }
        // we don't need to worry about exactly pane widget here
        // because all pane widgets have the same width of price axis widget
        // see _adjustSizeImpl
        const priceAxisWidget = position === 'left'
            ? this._private__paneWidgets[0]._internal_leftPriceAxisWidget()
            : this._private__paneWidgets[0]._internal_rightPriceAxisWidget();
        return ensureNotNull(priceAxisWidget)._internal_getWidth();
    }
    // eslint-disable-next-line complexity
    _private__adjustSizeImpl() {
        let totalStretch = 0;
        let leftPriceAxisWidth = 0;
        let rightPriceAxisWidth = 0;
        for (const paneWidget of this._private__paneWidgets) {
            if (this._private__isLeftAxisVisible()) {
                leftPriceAxisWidth = Math.max(leftPriceAxisWidth, ensureNotNull(paneWidget._internal_leftPriceAxisWidget())._internal_optimalWidth());
            }
            if (this._private__isRightAxisVisible()) {
                rightPriceAxisWidth = Math.max(rightPriceAxisWidth, ensureNotNull(paneWidget._internal_rightPriceAxisWidget())._internal_optimalWidth());
            }
            totalStretch += paneWidget._internal_stretchFactor();
        }
        const width = this._private__width;
        const height = this._private__height;
        const paneWidth = Math.max(width - leftPriceAxisWidth - rightPriceAxisWidth, 0);
        // const separatorCount = this._paneSeparators.length;
        // const separatorHeight = SEPARATOR_HEIGHT;
        const separatorsHeight = 0; // separatorHeight * separatorCount;
        const timeAxisVisible = this._private__options.timeScale.visible;
        let timeAxisHeight = timeAxisVisible ? this._private__timeAxisWidget._internal_optimalHeight() : 0;
        // TODO: Fix it better
        // on Hi-DPI CSS size * Device Pixel Ratio should be integer to avoid smoothing
        if (timeAxisHeight % 2) {
            timeAxisHeight += 1;
        }
        const otherWidgetHeight = separatorsHeight + timeAxisHeight;
        const totalPaneHeight = height < otherWidgetHeight ? 0 : height - otherWidgetHeight;
        const stretchPixels = totalPaneHeight / totalStretch;
        let accumulatedHeight = 0;
        for (let paneIndex = 0; paneIndex < this._private__paneWidgets.length; ++paneIndex) {
            const paneWidget = this._private__paneWidgets[paneIndex];
            paneWidget._internal_setState(this._private__model.panes()[paneIndex]);
            let paneHeight = 0;
            let calculatePaneHeight = 0;
            if (paneIndex === this._private__paneWidgets.length - 1) {
                calculatePaneHeight = totalPaneHeight - accumulatedHeight;
            }
            else {
                calculatePaneHeight = Math.round(paneWidget._internal_stretchFactor() * stretchPixels);
            }
            paneHeight = Math.max(calculatePaneHeight, 2);
            accumulatedHeight += paneHeight;
            paneWidget._internal_setSize(new Size(paneWidth, paneHeight));
            if (this._private__isLeftAxisVisible()) {
                paneWidget._internal_setPriceAxisSize(leftPriceAxisWidth, 'left');
            }
            if (this._private__isRightAxisVisible()) {
                paneWidget._internal_setPriceAxisSize(rightPriceAxisWidth, 'right');
            }
            if (paneWidget._internal_state()) {
                this._private__model.setPaneHeight(paneWidget._internal_state(), paneHeight);
            }
        }
        this._private__timeAxisWidget._internal_setSizes(new Size(timeAxisVisible ? paneWidth : 0, timeAxisHeight), timeAxisVisible ? leftPriceAxisWidth : 0, timeAxisVisible ? rightPriceAxisWidth : 0);
        this._private__model.setWidth(paneWidth);
        if (this._private__leftPriceAxisWidth !== leftPriceAxisWidth) {
            this._private__leftPriceAxisWidth = leftPriceAxisWidth;
        }
        if (this._private__rightPriceAxisWidth !== rightPriceAxisWidth) {
            this._private__rightPriceAxisWidth = rightPriceAxisWidth;
        }
    }
    _private__onMousewheel(event) {
        let deltaX = event.deltaX / 100;
        let deltaY = -(event.deltaY / 100);
        if ((deltaX === 0 || !this._private__options.handleScroll.mouseWheel) &&
            (deltaY === 0 || !this._private__options.handleScale.mouseWheel)) {
            return;
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        switch (event.deltaMode) {
            case event.DOM_DELTA_PAGE:
                // one screen at time scroll mode
                deltaX *= 120;
                deltaY *= 120;
                break;
            case event.DOM_DELTA_LINE:
                // one line at time scroll mode
                deltaX *= 32;
                deltaY *= 32;
                break;
        }
        if (deltaY !== 0 && this._private__options.handleScale.mouseWheel) {
            const zoomScale = Math.sign(deltaY) * Math.min(1, Math.abs(deltaY));
            const scrollPosition = event.clientX - this._private__element.getBoundingClientRect().left;
            this._internal_model().zoomTime(scrollPosition, zoomScale);
        }
        if (deltaX !== 0 && this._private__options.handleScroll.mouseWheel) {
            this._internal_model().scrollChart(deltaX * -80); // 80 is a made up coefficient, and minus is for the "natural" scroll
        }
    }
    _private__drawImpl(invalidateMask) {
        var _a;
        const invalidationType = invalidateMask.fullInvalidation();
        // actions for full invalidation ONLY (not shared with light)
        if (invalidationType === 3 /* Full */) {
            this._private__updateGui();
        }
        // light or full invalidate actions
        if (invalidationType === 3 /* Full */ ||
            invalidationType === 2 /* Light */) {
            this._private__applyMomentaryAutoScale(invalidateMask);
            this._private__applyTimeScaleInvalidations(invalidateMask);
            this._private__timeAxisWidget._internal_update();
            this._private__paneWidgets.forEach((pane) => {
                pane._internal_updatePriceAxisWidgets();
            });
            // In the case a full invalidation has been postponed during the draw, reapply
            // the timescale invalidations. A full invalidation would mean there is a change
            // in the timescale width (caused by price scale changes) that needs to be drawn
            // right away to avoid flickering.
            if (((_a = this._private__invalidateMask) === null || _a === void 0 ? void 0 : _a.fullInvalidation()) === 3 /* Full */) {
                this._private__invalidateMask.merge(invalidateMask);
                this._private__updateGui();
                this._private__applyMomentaryAutoScale(this._private__invalidateMask);
                this._private__applyTimeScaleInvalidations(this._private__invalidateMask);
                invalidateMask = this._private__invalidateMask;
                this._private__invalidateMask = null;
            }
        }
        this._internal_paint(invalidateMask);
    }
    _private__applyTimeScaleInvalidations(invalidateMask) {
        const timeScaleInvalidations = invalidateMask.timeScaleInvalidations();
        for (const tsInvalidation of timeScaleInvalidations) {
            this._private__applyTimeScaleInvalidation(tsInvalidation);
        }
    }
    _private__applyMomentaryAutoScale(invalidateMask) {
        const panes = this._private__model.panes();
        for (let i = 0; i < panes.length; i++) {
            if (invalidateMask.invalidateForPane(i).autoScale) {
                panes[i].momentaryAutoScale();
            }
        }
    }
    _private__applyTimeScaleInvalidation(invalidation) {
        const timeScale = this._private__model.timeScale();
        switch (invalidation.type) {
            case 0 /* FitContent */:
                timeScale.fitContent();
                break;
            case 1 /* ApplyRange */:
                timeScale.setLogicalRange(invalidation.value);
                break;
            case 2 /* ApplyBarSpacing */:
                timeScale.setBarSpacing(invalidation.value);
                break;
            case 3 /* ApplyRightOffset */:
                timeScale.setRightOffset(invalidation.value);
                break;
            case 4 /* Reset */:
                timeScale.restoreDefault();
                break;
        }
    }
    _private__invalidateHandler(invalidateMask) {
        if (this._private__invalidateMask !== null) {
            this._private__invalidateMask.merge(invalidateMask);
        }
        else {
            this._private__invalidateMask = invalidateMask;
        }
        if (!this._private__drawPlanned) {
            this._private__drawPlanned = true;
            this._private__drawRafId = window.requestAnimationFrame(() => {
                this._private__drawPlanned = false;
                this._private__drawRafId = 0;
                if (this._private__invalidateMask !== null) {
                    const mask = this._private__invalidateMask;
                    this._private__invalidateMask = null;
                    this._private__drawImpl(mask);
                }
            });
        }
    }
    _private__updateGui() {
        this._private__syncGuiWithModel();
    }
    // private _destroySeparator(separator: PaneSeparator): void {
    // 	this._tableElement.removeChild(separator.getElement());
    // 	separator.destroy();
    // }
    _private__syncGuiWithModel() {
        const panes = this._private__model.panes();
        const targetPaneWidgetsCount = panes.length;
        const actualPaneWidgetsCount = this._private__paneWidgets.length;
        // Remove (if needed) pane widgets and separators
        for (let i = targetPaneWidgetsCount; i < actualPaneWidgetsCount; i++) {
            const paneWidget = ensureDefined(this._private__paneWidgets.pop());
            this._private__tableElement.removeChild(paneWidget._internal_getElement());
            paneWidget._internal_clicked().unsubscribeAll(this);
            paneWidget.destroy();
            // const paneSeparator = this._paneSeparators.pop();
            // if (paneSeparator !== undefined) {
            // 	this._destroySeparator(paneSeparator);
            // }
        }
        // Create (if needed) new pane widgets and separators
        for (let i = actualPaneWidgetsCount; i < targetPaneWidgetsCount; i++) {
            const paneWidget = new PaneWidget(this, panes[i]);
            paneWidget._internal_clicked().subscribe(this._private__onPaneWidgetClicked.bind(this), this);
            this._private__paneWidgets.push(paneWidget);
            // create and insert separator
            // if (i > 1) {
            // 	const paneSeparator = new PaneSeparator(this, i - 1, i, true);
            // 	this._paneSeparators.push(paneSeparator);
            // 	this._tableElement.insertBefore(paneSeparator.getElement(), this._timeAxisWidget.getElement());
            // }
            // insert paneWidget
            this._private__tableElement.insertBefore(paneWidget._internal_getElement(), this._private__timeAxisWidget._internal_getElement());
        }
        for (let i = 0; i < targetPaneWidgetsCount; i++) {
            const state = panes[i];
            const paneWidget = this._private__paneWidgets[i];
            if (paneWidget._internal_state() !== state) {
                paneWidget._internal_setState(state);
            }
            else {
                paneWidget._internal_updatePriceAxisWidgetsStates();
            }
        }
        this._private__updateTimeAxisVisibility();
        this._private__adjustSizeImpl();
    }
    _private__getMouseEventParamsImpl(index, point) {
        var _a;
        const seriesData = new Map();
        if (index !== null) {
            const serieses = this._private__model.serieses();
            serieses.forEach((s) => {
                // TODO: replace with search left
                const data = s.bars().search(index);
                if (data !== null) {
                    seriesData.set(s, data);
                }
            });
        }
        let clientTime;
        if (index !== null) {
            const timePoint = (_a = this._private__model.timeScale().indexToTimeScalePoint(index)) === null || _a === void 0 ? void 0 : _a.originalTime;
            if (timePoint !== undefined) {
                clientTime = timePoint;
            }
        }
        const hoveredSource = this._internal_model().hoveredSource();
        const hoveredSeries = hoveredSource !== null && hoveredSource.source instanceof Series
            ? hoveredSource.source
            : undefined;
        const hoveredObject = hoveredSource !== null && hoveredSource.object !== undefined
            ? hoveredSource.object.externalId
            : undefined;
        return {
            _internal_time: clientTime,
            _internal_index: index !== null && index !== void 0 ? index : undefined,
            _internal_point: point !== null && point !== void 0 ? point : undefined,
            _internal_hoveredSeries: hoveredSeries,
            _internal_seriesData: seriesData,
            _internal_hoveredObject: hoveredObject,
        };
    }
    _private__onPaneWidgetClicked(time, point) {
        this._private__clicked._internal_fire(() => this._private__getMouseEventParamsImpl(time, point));
    }
    _private__onPaneWidgetCrosshairMoved(time, point) {
        this._private__crosshairMoved._internal_fire(() => this._private__getMouseEventParamsImpl(time, point));
    }
    _private__updateTimeAxisVisibility() {
        const display = this._private__options.timeScale.visible ? '' : 'none';
        this._private__timeAxisWidget._internal_getElement().style.display = display;
    }
    _private__isLeftAxisVisible() {
        return this._private__paneWidgets[0]._internal_state().leftPriceScale().options().visible;
    }
    _private__isRightAxisVisible() {
        return this._private__paneWidgets[0]._internal_state().rightPriceScale().options().visible;
    }
}
function disableSelection(element) {
    element.style.userSelect = 'none';
    // eslint-disable-next-line deprecation/deprecation
    element.style.webkitUserSelect = 'none';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    element.style.msUserSelect = 'none';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    element.style.MozUserSelect = 'none';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    element.style.webkitTapHighlightColor = 'transparent';
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function getLineBasedSeriesPlotRow(time, index, item, originalTime) {
    const val = item.value;
    return { index, time, value: [val, val, val, val], originalTime };
}
function getColoredLineBasedSeriesPlotRow(time, index, item, originalTime) {
    const val = item.value;
    const res = { index, time, value: [val, val, val, val], originalTime };
    // 'color' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('color' in item && item.color !== undefined) {
        res.color = item.color;
    }
    return res;
}
function getBarSeriesPlotRow(time, index, item, originalTime) {
    const res = { index, time, value: [item.open, item.high, item.low, item.close], originalTime };
    // 'color' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('color' in item && item.color !== undefined) {
        res.color = item.color;
    }
    return res;
}
function getCandlestickSeriesPlotRow(time, index, item, originalTime) {
    const res = { index, time, value: [item.open, item.high, item.low, item.close], originalTime };
    // 'color' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('color' in item && item.color !== undefined) {
        res.color = item.color;
    }
    // 'borderColor' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('borderColor' in item && item.borderColor !== undefined) {
        res.borderColor = item.borderColor;
    }
    // 'wickColor' here is public property (from API) so we can use `in` here safely
    // eslint-disable-next-line no-restricted-syntax
    if ('wickColor' in item && item.wickColor !== undefined) {
        res.wickColor = item.wickColor;
    }
    return res;
}
function isSeriesPlotRow(row) {
    return row.value !== undefined;
}
function wrapWhitespaceData(createPlotRowFn) {
    return (time, index, bar, originalTime) => {
        if (isWhitespaceData(bar)) {
            return { time, index, originalTime };
        }
        return createPlotRowFn(time, index, bar, originalTime);
    };
}
const seriesPlotRowFnMap = {
    Candlestick: wrapWhitespaceData(getCandlestickSeriesPlotRow),
    Bar: wrapWhitespaceData(getBarSeriesPlotRow),
    Area: wrapWhitespaceData(getLineBasedSeriesPlotRow),
    Baseline: wrapWhitespaceData(getLineBasedSeriesPlotRow),
    Histogram: wrapWhitespaceData(getColoredLineBasedSeriesPlotRow),
    Line: wrapWhitespaceData(getColoredLineBasedSeriesPlotRow),
};
function getSeriesPlotRowCreator(seriesType) {
    return seriesPlotRowFnMap[seriesType];
}

function hours(count) {
    return count * 60 * 60 * 1000;
}
function minutes(count) {
    return count * 60 * 1000;
}
function seconds(count) {
    return count * 1000;
}
const intradayWeightDivisors = [
    { _internal_divisor: seconds(1), _internal_weight: 10 /* Second */ },
    { _internal_divisor: minutes(1), _internal_weight: 20 /* Minute1 */ },
    { _internal_divisor: minutes(5), _internal_weight: 21 /* Minute5 */ },
    { _internal_divisor: minutes(30), _internal_weight: 22 /* Minute30 */ },
    { _internal_divisor: hours(1), _internal_weight: 30 /* Hour1 */ },
    { _internal_divisor: hours(3), _internal_weight: 31 /* Hour3 */ },
    { _internal_divisor: hours(6), _internal_weight: 32 /* Hour6 */ },
    { _internal_divisor: hours(12), _internal_weight: 33 /* Hour12 */ },
];
function weightByTime(currentDate, prevDate) {
    if (currentDate.getUTCFullYear() !== prevDate.getUTCFullYear()) {
        return 70 /* Year */;
    }
    else if (currentDate.getUTCMonth() !== prevDate.getUTCMonth()) {
        return 60 /* Month */;
    }
    else if (currentDate.getUTCDate() !== prevDate.getUTCDate()) {
        return 50 /* Day */;
    }
    for (let i = intradayWeightDivisors.length - 1; i >= 0; --i) {
        if (Math.floor(prevDate.getTime() / intradayWeightDivisors[i]._internal_divisor) !== Math.floor(currentDate.getTime() / intradayWeightDivisors[i]._internal_divisor)) {
            return intradayWeightDivisors[i]._internal_weight;
        }
    }
    return 0 /* LessThanSecond */;
}
function fillWeightsForPoints(sortedTimePoints, startIndex = 0) {
    if (sortedTimePoints.length === 0) {
        return;
    }
    let prevTime = startIndex === 0 ? null : sortedTimePoints[startIndex - 1].time.timestamp;
    let prevDate = prevTime !== null ? new Date(prevTime * 1000) : null;
    let totalTimeDiff = 0;
    for (let index = startIndex; index < sortedTimePoints.length; ++index) {
        const currentPoint = sortedTimePoints[index];
        const currentDate = new Date(currentPoint.time.timestamp * 1000);
        if (prevDate !== null) {
            currentPoint.timeWeight = weightByTime(currentDate, prevDate);
        }
        totalTimeDiff += currentPoint.time.timestamp - (prevTime || currentPoint.time.timestamp);
        prevTime = currentPoint.time.timestamp;
        prevDate = currentDate;
    }
    if (startIndex === 0 && sortedTimePoints.length > 1) {
        // let's guess a weight for the first point
        // let's say the previous point was average time back in the history
        const averageTimeDiff = Math.ceil(totalTimeDiff / (sortedTimePoints.length - 1));
        const approxPrevDate = new Date((sortedTimePoints[0].time.timestamp - averageTimeDiff) * 1000);
        sortedTimePoints[0].timeWeight = weightByTime(new Date(sortedTimePoints[0].time.timestamp * 1000), approxPrevDate);
    }
}

/// <reference types="_build-time-constants" />
function businessDayConverter(time) {
    if (!isBusinessDay(time)) {
        throw new Error('time must be of type BusinessDay');
    }
    const date = new Date(Date.UTC(time.year, time.month - 1, time.day, 0, 0, 0, 0));
    return {
        timestamp: Math.round(date.getTime() / 1000),
        businessDay: time,
    };
}
function timestampConverter(time) {
    if (!isUTCTimestamp(time)) {
        throw new Error('time must be of type isUTCTimestamp');
    }
    return {
        timestamp: time,
    };
}
function selectTimeConverter(data) {
    if (data.length === 0) {
        return null;
    }
    if (isBusinessDay(data[0].time)) {
        return businessDayConverter;
    }
    return timestampConverter;
}
function convertTime(time) {
    if (isUTCTimestamp(time)) {
        return timestampConverter(time);
    }
    if (!isBusinessDay(time)) {
        return businessDayConverter(stringToBusinessDay(time));
    }
    return businessDayConverter(time);
}
const validDateRegex = /^\d\d\d\d-\d\d-\d\d$/;
function stringToBusinessDay(value) {
    {
        // in some browsers (I look at your Chrome) the Date constructor may accept invalid date string
        // but parses them in "implementation specific" way
        // for example 2019-1-1 isn't the same as 2019-01-01 (for Chrome both are "valid" date strings)
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=968939
        // so, we need to be sure that date has valid format to avoid strange behavior and hours of debugging
        // but let's do this in development build only because of perf
        if (!validDateRegex.test(value)) {
            throw new Error(`Invalid date string=${value}, expected format=yyyy-mm-dd`);
        }
    }
    const d = new Date(value);
    if (isNaN(d.getTime())) {
        throw new Error(`Invalid date string=${value}, expected format=yyyy-mm-dd`);
    }
    return {
        day: d.getUTCDate(),
        month: d.getUTCMonth() + 1,
        year: d.getUTCFullYear(),
    };
}
function convertStringToBusinessDay(value) {
    if (isString(value.time)) {
        value.time = stringToBusinessDay(value.time);
    }
}
function convertStringsToBusinessDays(data) {
    return data.forEach(convertStringToBusinessDay);
}
function createEmptyTimePointData(timePoint) {
    return { _internal_index: 0, _internal_mapping: new Map(), _internal_timePoint: timePoint };
}
function seriesRowsFirsAndLastTime(seriesRows) {
    if (seriesRows === undefined || seriesRows.length === 0) {
        return undefined;
    }
    return {
        _internal_firstTime: seriesRows[0].time.timestamp,
        _internal_lastTime: seriesRows[seriesRows.length - 1].time.timestamp,
    };
}
function seriesUpdateInfo(seriesRows, prevSeriesRows) {
    const firstAndLastTime = seriesRowsFirsAndLastTime(seriesRows);
    const prevFirstAndLastTime = seriesRowsFirsAndLastTime(prevSeriesRows);
    if (firstAndLastTime !== undefined && prevFirstAndLastTime !== undefined) {
        return {
            lastBarUpdatedOrNewBarsAddedToTheRight: firstAndLastTime._internal_lastTime >= prevFirstAndLastTime._internal_lastTime &&
                firstAndLastTime._internal_firstTime >= prevFirstAndLastTime._internal_firstTime,
        };
    }
    return undefined;
}
function timeScalePointTime(mergedPointData) {
    let result;
    mergedPointData.forEach((v) => {
        if (result === undefined) {
            result = v.originalTime;
        }
    });
    return ensureDefined(result);
}
function saveOriginalTime(data) {
    // eslint-disable-next-line @typescript-eslint/tslint/config
    if (data._internal_originalTime === undefined) {
        data._internal_originalTime = data.time;
    }
}
class DataLayer {
    constructor() {
        // note that _pointDataByTimePoint and _seriesRowsBySeries shares THE SAME objects in their values between each other
        // it's just different kind of maps to make usages/perf better
        this._private__pointDataByTimePoint = new Map();
        this._private__seriesRowsBySeries = new Map();
        this._private__seriesLastTimePoint = new Map();
        // this is kind of "dest" values (in opposite to "source" ones) - we don't need to modify it manually, the only by calling _updateTimeScalePoints or updateSeriesData methods
        this._private__sortedTimePoints = [];
    }
    _internal_destroy() {
        this._private__pointDataByTimePoint.clear();
        this._private__seriesRowsBySeries.clear();
        this._private__seriesLastTimePoint.clear();
        this._private__sortedTimePoints = [];
    }
    _internal_setSeriesData(series, data) {
        let needCleanupPoints = this._private__pointDataByTimePoint.size !== 0;
        let isTimeScaleAffected = false;
        // save previous series rows data before it's replaced inside this._setRowsToSeries
        const prevSeriesRows = this._private__seriesRowsBySeries.get(series);
        if (prevSeriesRows !== undefined) {
            if (this._private__seriesRowsBySeries.size === 1) {
                needCleanupPoints = false;
                isTimeScaleAffected = true;
                // perf optimization - if there is only 1 series, then we can just clear and fill everything from scratch
                this._private__pointDataByTimePoint.clear();
            }
            else {
                // perf optimization - actually we have to use this._pointDataByTimePoint for going through here
                // but as soon as this._sortedTimePoints is just a different form of _pointDataByTimePoint we can use it as well
                for (const point of this._private__sortedTimePoints) {
                    if (point.pointData._internal_mapping.delete(series)) {
                        isTimeScaleAffected = true;
                    }
                }
            }
        }
        let seriesRows = [];
        if (data.length !== 0) {
            const extendedData = data;
            extendedData.forEach((i) => saveOriginalTime(i));
            convertStringsToBusinessDays(data);
            const timeConverter = ensureNotNull(selectTimeConverter(data));
            const createPlotRow = getSeriesPlotRowCreator(series.seriesType());
            seriesRows = extendedData.map((item) => {
                const time = timeConverter(item.time);
                let timePointData = this._private__pointDataByTimePoint.get(time.timestamp);
                if (timePointData === undefined) {
                    // the indexes will be sync later
                    timePointData = createEmptyTimePointData(time);
                    this._private__pointDataByTimePoint.set(time.timestamp, timePointData);
                    isTimeScaleAffected = true;
                }
                const row = createPlotRow(time, timePointData._internal_index, item, item._internal_originalTime);
                timePointData._internal_mapping.set(series, row);
                return row;
            });
        }
        if (needCleanupPoints) {
            // we deleted the old data from mapping and added the new ones
            // so there might be empty points now, let's remove them first
            this._private__cleanupPointsData();
        }
        this._private__setRowsToSeries(series, seriesRows);
        let firstChangedPointIndex = -1;
        if (isTimeScaleAffected) {
            // then generate the time scale points
            // timeWeight will be updates in _updateTimeScalePoints later
            const newTimeScalePoints = [];
            this._private__pointDataByTimePoint.forEach((pointData) => {
                newTimeScalePoints.push({
                    timeWeight: 0,
                    time: pointData._internal_timePoint,
                    pointData,
                    originalTime: timeScalePointTime(pointData._internal_mapping),
                });
            });
            newTimeScalePoints.sort((t1, t2) => t1.time.timestamp - t2.time.timestamp);
            firstChangedPointIndex = this._private__replaceTimeScalePoints(newTimeScalePoints);
        }
        return this._private__getUpdateResponse(series, firstChangedPointIndex, seriesUpdateInfo(this._private__seriesRowsBySeries.get(series), prevSeriesRows));
    }
    _internal_removeSeries(series) {
        return this._internal_setSeriesData(series, []);
    }
    _internal_updateSeriesData(series, data) {
        const extendedData = data;
        saveOriginalTime(extendedData);
        convertStringToBusinessDay(data);
        const time = ensureNotNull(selectTimeConverter([data]))(data.time);
        const lastSeriesTime = this._private__seriesLastTimePoint.get(series);
        if (lastSeriesTime !== undefined && time.timestamp < lastSeriesTime.timestamp) {
            throw new Error(`Cannot update oldest data, last time=${lastSeriesTime.timestamp}, new time=${time.timestamp}`);
        }
        let pointDataAtTime = this._private__pointDataByTimePoint.get(time.timestamp);
        // if no point data found for the new data item
        // that means that we need to update scale
        const affectsTimeScale = pointDataAtTime === undefined;
        if (pointDataAtTime === undefined) {
            // the indexes will be sync later
            pointDataAtTime = createEmptyTimePointData(time);
            this._private__pointDataByTimePoint.set(time.timestamp, pointDataAtTime);
        }
        const createPlotRow = getSeriesPlotRowCreator(series.seriesType());
        const plotRow = createPlotRow(time, pointDataAtTime._internal_index, data, extendedData._internal_originalTime);
        pointDataAtTime._internal_mapping.set(series, plotRow);
        this._private__updateLastSeriesRow(series, plotRow);
        const info = { lastBarUpdatedOrNewBarsAddedToTheRight: isSeriesPlotRow(plotRow) };
        // if point already exist on the time scale - we don't need to make a full update and just make an incremental one
        if (!affectsTimeScale) {
            return this._private__getUpdateResponse(series, -1, info);
        }
        const newPoint = {
            timeWeight: 0,
            time: pointDataAtTime._internal_timePoint,
            pointData: pointDataAtTime,
            originalTime: timeScalePointTime(pointDataAtTime._internal_mapping),
        };
        const insertIndex = lowerbound(this._private__sortedTimePoints, newPoint.time.timestamp, (a, b) => a.time.timestamp < b);
        // yes, I know that this array is readonly and this change is intended to make it performative
        // we marked _sortedTimePoints array as readonly to avoid modifying this array anywhere else
        // but this place is exceptional case due performance reasons, sorry
        this._private__sortedTimePoints.splice(insertIndex, 0, newPoint);
        for (let index = insertIndex; index < this._private__sortedTimePoints.length; ++index) {
            assignIndexToPointData(this._private__sortedTimePoints[index].pointData, index);
        }
        fillWeightsForPoints(this._private__sortedTimePoints, insertIndex);
        return this._private__getUpdateResponse(series, insertIndex, info);
    }
    _private__updateLastSeriesRow(series, plotRow) {
        let seriesData = this._private__seriesRowsBySeries.get(series);
        if (seriesData === undefined) {
            seriesData = [];
            this._private__seriesRowsBySeries.set(series, seriesData);
        }
        const lastSeriesRow = seriesData.length !== 0 ? seriesData[seriesData.length - 1] : null;
        if (lastSeriesRow === null || plotRow.time.timestamp > lastSeriesRow.time.timestamp) {
            if (isSeriesPlotRow(plotRow)) {
                seriesData.push(plotRow);
            }
        }
        else {
            if (isSeriesPlotRow(plotRow)) {
                seriesData[seriesData.length - 1] = plotRow;
            }
            else {
                seriesData.splice(-1, 1);
            }
        }
        this._private__seriesLastTimePoint.set(series, plotRow.time);
    }
    _private__setRowsToSeries(series, seriesRows) {
        if (seriesRows.length !== 0) {
            this._private__seriesRowsBySeries.set(series, seriesRows.filter(isSeriesPlotRow));
            this._private__seriesLastTimePoint.set(series, seriesRows[seriesRows.length - 1].time);
        }
        else {
            this._private__seriesRowsBySeries.delete(series);
            this._private__seriesLastTimePoint.delete(series);
        }
    }
    _private__cleanupPointsData() {
        // let's treat all current points as "potentially removed"
        // we could create an array with actually potentially removed points
        // but most likely this array will be similar to _sortedTimePoints so let's avoid using additional memory
        // note that we can use _sortedTimePoints here since a point might be removed only it was here previously
        for (const point of this._private__sortedTimePoints) {
            if (point.pointData._internal_mapping.size === 0) {
                this._private__pointDataByTimePoint.delete(point.time.timestamp);
            }
        }
    }
    /**
     * Sets new time scale and make indexes valid for all series
     *
     * @returns The index of the first changed point or `-1` if there is no change.
     */
    _private__replaceTimeScalePoints(newTimePoints) {
        let firstChangedPointIndex = -1;
        // search the first different point and "syncing" time weight by the way
        for (let index = 0; index < this._private__sortedTimePoints.length && index < newTimePoints.length; ++index) {
            const oldPoint = this._private__sortedTimePoints[index];
            const newPoint = newTimePoints[index];
            if (oldPoint.time.timestamp !== newPoint.time.timestamp) {
                firstChangedPointIndex = index;
                break;
            }
            // re-assign point's time weight for points if time is the same (and all prior times was the same)
            newPoint.timeWeight = oldPoint.timeWeight;
            assignIndexToPointData(newPoint.pointData, index);
        }
        if (firstChangedPointIndex === -1 && this._private__sortedTimePoints.length !== newTimePoints.length) {
            // the common part of the prev and the new points are the same
            // so the first changed point is the next after the common part
            firstChangedPointIndex = Math.min(this._private__sortedTimePoints.length, newTimePoints.length);
        }
        if (firstChangedPointIndex === -1) {
            // if no time scale changed, then do nothing
            return -1;
        }
        // if time scale points are changed that means that we need to make full update to all series (with clearing points)
        // but first we need to synchronize indexes and re-fill time weights
        for (let index = firstChangedPointIndex; index < newTimePoints.length; ++index) {
            assignIndexToPointData(newTimePoints[index].pointData, index);
        }
        // re-fill time weights for point after the first changed one
        fillWeightsForPoints(newTimePoints, firstChangedPointIndex);
        this._private__sortedTimePoints = newTimePoints;
        return firstChangedPointIndex;
    }
    _private__getBaseIndex() {
        if (this._private__seriesRowsBySeries.size === 0) {
            // if we have no data then 'reset' the base index to null
            return null;
        }
        let baseIndex = 0;
        this._private__seriesRowsBySeries.forEach((data) => {
            if (data.length !== 0) {
                baseIndex = Math.max(baseIndex, data[data.length - 1].index);
            }
        });
        return baseIndex;
    }
    _private__getUpdateResponse(updatedSeries, firstChangedPointIndex, info) {
        const dataUpdateResponse = {
            _internal_series: new Map(),
            _internal_timeScale: {
                _internal_baseIndex: this._private__getBaseIndex(),
            },
        };
        if (firstChangedPointIndex !== -1) {
            // TODO: it's possible to make perf improvements by checking what series has data after firstChangedPointIndex
            // but let's skip for now
            this._private__seriesRowsBySeries.forEach((data, s) => {
                dataUpdateResponse._internal_series.set(s, {
                    _internal_data: data,
                    _internal_info: s === updatedSeries ? info : undefined,
                });
            });
            // if the series data was set to [] it will have already been removed from _seriesRowBySeries
            // meaning the forEach above won't add the series to the data update response
            // so we handle that case here
            if (!this._private__seriesRowsBySeries.has(updatedSeries)) {
                dataUpdateResponse._internal_series.set(updatedSeries, { _internal_data: [], _internal_info: info });
            }
            dataUpdateResponse._internal_timeScale._internal_points = this._private__sortedTimePoints;
            dataUpdateResponse._internal_timeScale._internal_firstChangedPointIndex = firstChangedPointIndex;
        }
        else {
            const seriesData = this._private__seriesRowsBySeries.get(updatedSeries);
            // if no seriesData found that means that we just removed the series
            dataUpdateResponse._internal_series.set(updatedSeries, { _internal_data: seriesData || [], _internal_info: info });
        }
        return dataUpdateResponse;
    }
}
function assignIndexToPointData(pointData, index) {
    // first, nevertheless update index of point data ("make it valid")
    pointData._internal_index = index;
    // and then we need to sync indexes for all series
    pointData._internal_mapping.forEach((seriesRow) => {
        seriesRow.index = index;
    });
}

function checkPriceLineOptions(options) {
    // eslint-disable-next-line @typescript-eslint/tslint/config
    assert(typeof options.price === 'number', `the type of 'price' price line's property must be a number, got '${typeof options.price}'`);
}
function checkItemsAreOrdered(data, allowDuplicates = false) {
    if (data.length === 0) {
        return;
    }
    let prevTime = convertTime(data[0].time).timestamp;
    for (let i = 1; i < data.length; ++i) {
        const currentTime = convertTime(data[i].time).timestamp;
        const checkResult = allowDuplicates ? prevTime <= currentTime : prevTime < currentTime;
        assert(checkResult, `data must be asc ordered by time, index=${i}, time=${currentTime}, prev time=${prevTime}`);
        prevTime = currentTime;
    }
}
function checkSeriesValuesType(type, data) {
    data.forEach(getChecker(type));
}
function getChecker(type) {
    switch (type) {
        case 'Bar':
        case 'Candlestick':
            return checkBarItem.bind(null, type);
        case 'Area':
        case 'Baseline':
        case 'Line':
        case 'Histogram':
            return checkLineItem.bind(null, type);
    }
}
function checkBarItem(type, barItem) {
    if (!isFulfilledData(barItem)) {
        return;
    }
    assert(
    // eslint-disable-next-line @typescript-eslint/tslint/config
    typeof barItem.open === 'number', `${type} series item data value of open must be a number, got=${typeof barItem.open}, value=${barItem.open}`);
    assert(
    // eslint-disable-next-line @typescript-eslint/tslint/config
    typeof barItem.high === 'number', `${type} series item data value of high must be a number, got=${typeof barItem.high}, value=${barItem.high}`);
    assert(
    // eslint-disable-next-line @typescript-eslint/tslint/config
    typeof barItem.low === 'number', `${type} series item data value of low must be a number, got=${typeof barItem.low}, value=${barItem.low}`);
    assert(
    // eslint-disable-next-line @typescript-eslint/tslint/config
    typeof barItem.close === 'number', `${type} series item data value of close must be a number, got=${typeof barItem.close}, value=${barItem.close}`);
}
function checkLineItem(type, lineItem) {
    if (!isFulfilledData(lineItem)) {
        return;
    }
    assert(
    // eslint-disable-next-line @typescript-eslint/tslint/config
    typeof lineItem.value === 'number', `${type} series item data value must be a number, got=${typeof lineItem.value}, value=${lineItem.value}`);
}

function singleValueData(plotRow) {
    return {
        value: plotRow.value[3 /* Close */],
        time: plotRow.originalTime,
    };
}
function lineData(plotRow) {
    const result = singleValueData(plotRow);
    if (plotRow.color !== undefined) {
        result.color = plotRow.color;
    }
    return result;
}
function ohlcData(plotRow) {
    return {
        open: plotRow.value[0 /* Open */],
        high: plotRow.value[1 /* High */],
        low: plotRow.value[2 /* Low */],
        close: plotRow.value[3 /* Close */],
        time: plotRow.originalTime,
    };
}
function barData(plotRow) {
    const result = ohlcData(plotRow);
    if (plotRow.color !== undefined) {
        result.color = plotRow.color;
    }
    return result;
}
function candlestickData(plotRow) {
    const result = ohlcData(plotRow);
    const { color, borderColor, wickColor } = plotRow;
    if (color !== undefined) {
        result.color = color;
    }
    if (borderColor !== undefined) {
        result.borderColor = borderColor;
    }
    if (wickColor !== undefined) {
        result.wickColor = wickColor;
    }
    return result;
}
const seriesPlotRowToDataMap = {
    Area: singleValueData,
    Line: lineData,
    Baseline: singleValueData,
    Histogram: lineData,
    Bar: barData,
    Candlestick: candlestickData,
};
function getSeriesDataCreator(seriesType) {
    return seriesPlotRowToDataMap[seriesType];
}

const priceLineOptionsDefaults = {
    color: '#FF0000',
    price: 0,
    lineStyle: 2 /* Dashed */,
    lineWidth: 1,
    lineVisible: true,
    axisLabelVisible: true,
    title: '',
};

class PriceLine {
    constructor(priceLine) {
        this._private__priceLine = priceLine;
    }
    applyOptions(options) {
        this._private__priceLine.applyOptions(options);
    }
    options() {
        return this._private__priceLine.options();
    }
    _internal_priceLine() {
        return this._private__priceLine;
    }
}

class SeriesApi {
    constructor(series, dataUpdatesConsumer, priceScaleApiProvider) {
        this._internal__series = series;
        this._internal__dataUpdatesConsumer = dataUpdatesConsumer;
        this._private__priceScaleApiProvider = priceScaleApiProvider;
    }
    setDrawingPane(pane) {
        this._internal__series.setDrawingPane(pane);
    }
    priceFormatter() {
        return this._internal__series.formatter();
    }
    priceToCoordinate(price) {
        const firstValue = this._internal__series.firstValue();
        if (firstValue === null) {
            return null;
        }
        return this._internal__series.priceScale().priceToCoordinate(price, firstValue.value);
    }
    coordinateToPrice(coordinate) {
        const firstValue = this._internal__series.firstValue();
        if (firstValue === null) {
            return null;
        }
        return this._internal__series.priceScale().coordinateToPrice(coordinate, firstValue.value);
    }
    // eslint-disable-next-line complexity
    barsInLogicalRange(range) {
        if (range === null) {
            return null;
        }
        // we use TimeScaleVisibleRange here to convert LogicalRange to strict range properly
        const correctedRange = new TimeScaleVisibleRange(new RangeImpl(range.from, range.to))._internal_strictRange();
        const bars = this._internal__series.bars();
        if (bars.isEmpty()) {
            return null;
        }
        const dataFirstBarInRange = bars.search(correctedRange.left(), 1 /* NearestRight */);
        const dataLastBarInRange = bars.search(correctedRange.right(), -1 /* NearestLeft */);
        const dataFirstIndex = ensureNotNull(bars.firstIndex());
        const dataLastIndex = ensureNotNull(bars.lastIndex());
        // this means that we request data in the data gap
        // e.g. let's say we have series with data [0..10, 30..60]
        // and we request bars info in range [15, 25]
        // thus, dataFirstBarInRange will be with index 30 and dataLastBarInRange with 10
        if (dataFirstBarInRange !== null && dataLastBarInRange !== null && dataFirstBarInRange.index > dataLastBarInRange.index) {
            return {
                barsBefore: range.from - dataFirstIndex,
                barsAfter: dataLastIndex - range.to,
            };
        }
        const barsBefore = (dataFirstBarInRange === null || dataFirstBarInRange.index === dataFirstIndex)
            ? range.from - dataFirstIndex
            : dataFirstBarInRange.index - dataFirstIndex;
        const barsAfter = (dataLastBarInRange === null || dataLastBarInRange.index === dataLastIndex)
            ? dataLastIndex - range.to
            : dataLastIndex - dataLastBarInRange.index;
        const result = { barsBefore, barsAfter };
        // actually they can't exist separately
        if (dataFirstBarInRange !== null && dataLastBarInRange !== null) {
            result.from = dataFirstBarInRange.time.businessDay || dataFirstBarInRange.time.timestamp;
            result.to = dataLastBarInRange.time.businessDay || dataLastBarInRange.time.timestamp;
        }
        return result;
    }
    setData(data) {
        checkItemsAreOrdered(data);
        checkSeriesValuesType(this._internal__series.seriesType(), data);
        this._internal__dataUpdatesConsumer._internal_applyNewData(this._internal__series, data);
    }
    update(bar) {
        checkSeriesValuesType(this._internal__series.seriesType(), [bar]);
        this._internal__dataUpdatesConsumer._internal_updateData(this._internal__series, bar);
    }
    dataByIndex(logicalIndex, mismatchDirection) {
        const data = this._internal__series.bars().search(logicalIndex, mismatchDirection);
        if (data === null) {
            // actually it can be a whitespace
            return null;
        }
        return getSeriesDataCreator(this.seriesType())(data);
    }
    setMarkers(data) {
        checkItemsAreOrdered(data, true);
        const convertedMarkers = data.map((marker) => (Object.assign(Object.assign({}, marker), { originalTime: marker.time, time: convertTime(marker.time) })));
        this._internal__series.setMarkers(convertedMarkers);
    }
    markers() {
        return this._internal__series.markers().map((internalItem) => {
            const { originalTime, time } = internalItem, item = __rest(internalItem, ["originalTime", "time"]);
            return Object.assign({ time: originalTime }, item);
        });
    }
    applyOptions(options) {
        this._internal__series.applyOptions(options);
    }
    options() {
        return clone(this._internal__series.options());
    }
    priceScale() {
        return this._private__priceScaleApiProvider.priceScale(this._internal__series.priceScale().id());
    }
    createPriceLine(options) {
        checkPriceLineOptions(options);
        const strictOptions = merge(clone(priceLineOptionsDefaults), options);
        const priceLine = this._internal__series.createPriceLine(strictOptions);
        return new PriceLine(priceLine);
    }
    removePriceLine(line) {
        this._internal__series.removePriceLine(line._internal_priceLine());
    }
    seriesType() {
        return this._internal__series.seriesType();
    }
}

class CandlestickSeriesApi extends SeriesApi {
    applyOptions(options) {
        fillUpDownCandlesticksColors(options);
        super.applyOptions(options);
    }
}

const crosshairOptionsDefaults = {
    vertLine: {
        color: '#758696',
        width: 1,
        style: 3 /* LargeDashed */,
        visible: true,
        labelVisible: true,
        labelBackgroundColor: '#4c525e',
    },
    horzLine: {
        color: '#758696',
        width: 1,
        style: 3 /* LargeDashed */,
        visible: true,
        labelVisible: true,
        labelBackgroundColor: '#4c525e',
    },
    mode: 1 /* Magnet */,
};

const gridOptionsDefaults = {
    vertLines: {
        color: '#D6DCDE',
        style: 0 /* Solid */,
        visible: true,
    },
    horzLines: {
        color: '#D6DCDE',
        style: 0 /* Solid */,
        visible: true,
    },
};

const layoutOptionsDefaults = {
    background: {
        type: "solid" /* Solid */,
        color: '#FFFFFF',
    },
    textColor: '#191919',
    fontSize: 11,
    fontFamily: defaultFontFamily,
};

const priceScaleOptionsDefaults = {
    autoScale: true,
    mode: 0 /* Normal */,
    invertScale: false,
    alignLabels: true,
    borderVisible: true,
    borderColor: '#2B2B43',
    entireTextOnly: false,
    visible: false,
    ticksVisible: true,
    scaleMargins: {
        bottom: 0.1,
        top: 0.2,
    },
};

const timeScaleOptionsDefaults = {
    rightOffset: 0,
    barSpacing: 6,
    minBarSpacing: 0.5,
    fixLeftEdge: false,
    fixRightEdge: false,
    lockVisibleTimeRangeOnResize: false,
    rightBarStaysOnScroll: false,
    borderVisible: true,
    borderColor: '#2B2B43',
    visible: true,
    timeVisible: false,
    secondsVisible: true,
    shiftVisibleRangeOnNewBar: true,
    ticksVisible: true,
};

const watermarkOptionsDefaults = {
    color: 'rgba(0, 0, 0, 0)',
    visible: false,
    fontSize: 48,
    fontFamily: defaultFontFamily,
    fontStyle: '',
    text: '',
    horzAlign: 'center',
    vertAlign: 'center',
};

const chartOptionsDefaults = {
    width: 0,
    height: 0,
    layout: layoutOptionsDefaults,
    crosshair: crosshairOptionsDefaults,
    grid: gridOptionsDefaults,
    overlayPriceScales: Object.assign({}, priceScaleOptionsDefaults),
    leftPriceScale: Object.assign(Object.assign({}, priceScaleOptionsDefaults), { visible: false }),
    rightPriceScale: Object.assign(Object.assign({}, priceScaleOptionsDefaults), { visible: true }),
    timeScale: timeScaleOptionsDefaults,
    watermark: watermarkOptionsDefaults,
    localization: {
        locale: isRunningOnClientSide ? navigator.language : '',
        dateFormat: 'dd MMM \'yy',
    },
    handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
        horzTouchDrag: true,
        vertTouchDrag: true,
    },
    handleScale: {
        axisPressedMouseMove: {
            time: true,
            price: true,
        },
        axisDoubleClickReset: true,
        mouseWheel: true,
        pinch: true,
    },
    kineticScroll: {
        mouse: false,
        touch: true,
    },
    trackingMode: {
        exitMode: 1 /* OnNextTap */,
    },
};

const candlestickStyleDefaults = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    wickVisible: true,
    borderVisible: true,
    borderColor: '#378658',
    borderUpColor: '#26a69a',
    borderDownColor: '#ef5350',
    wickColor: '#737375',
    wickUpColor: '#26a69a',
    wickDownColor: '#ef5350',
};
const barStyleDefaults = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    openVisible: true,
    thinBars: true,
};
const lineStyleDefaults = {
    color: '#2196f3',
    lineStyle: 0 /* Solid */,
    lineWidth: 3,
    lineType: 0 /* Simple */,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: '',
    crosshairMarkerBackgroundColor: '',
    lastPriceAnimation: 0 /* Disabled */,
};
const areaStyleDefaults = {
    topColor: 'rgba( 46, 220, 135, 0.4)',
    bottomColor: 'rgba( 40, 221, 100, 0)',
    lineColor: '#33D778',
    lineStyle: 0 /* Solid */,
    lineWidth: 3,
    lineType: 0 /* Simple */,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: '',
    crosshairMarkerBackgroundColor: '',
    lastPriceAnimation: 0 /* Disabled */,
};
const baselineStyleDefaults = {
    baseValue: {
        type: 'price',
        price: 0,
    },
    topFillColor1: 'rgba(38, 166, 154, 0.28)',
    topFillColor2: 'rgba(38, 166, 154, 0.05)',
    topLineColor: 'rgba(38, 166, 154, 1)',
    bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
    bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
    bottomLineColor: 'rgba(239, 83, 80, 1)',
    lineWidth: 3,
    lineStyle: 0 /* Solid */,
    lineType: 0 /* Simple */,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: '',
    crosshairMarkerBackgroundColor: '',
    lastPriceAnimation: 0 /* Disabled */,
};
const histogramStyleDefaults = {
    color: '#26a69a',
    base: 0,
};
const seriesOptionsDefaults = {
    title: '',
    visible: true,
    lastValueVisible: true,
    priceLineVisible: true,
    priceLineSource: 0 /* LastBar */,
    priceLineWidth: 1,
    priceLineColor: '',
    priceLineStyle: 2 /* Dashed */,
    baseLineVisible: true,
    baseLineWidth: 1,
    baseLineColor: '#B2B5BE',
    baseLineStyle: 0 /* Solid */,
    priceFormat: {
        type: 'price',
        precision: 2,
        minMove: 0.01,
    },
};

class PriceScaleApi {
    constructor(chartWidget, priceScaleId) {
        this._private__chartWidget = chartWidget;
        this._private__priceScaleId = priceScaleId;
    }
    applyOptions(options) {
        this._private__chartWidget._internal_model().applyPriceScaleOptions(this._private__priceScaleId, options);
    }
    options() {
        return this._private__priceScale().options();
    }
    width() {
        if (!isDefaultPriceScale(this._private__priceScaleId)) {
            return 0;
        }
        return this._private__chartWidget._internal_getPriceAxisWidth(this._private__priceScaleId);
    }
    _private__priceScale() {
        return ensureNotNull(this._private__chartWidget._internal_model().findPriceScale(this._private__priceScaleId)).priceScale;
    }
}

class TimeScaleApi {
    constructor(model, timeAxisWidget) {
        this._private__timeRangeChanged = new Delegate();
        this._private__logicalRangeChanged = new Delegate();
        this._private__sizeChanged = new Delegate();
        this._private__model = model;
        this._private__timeScale = model.timeScale();
        this._private__timeAxisWidget = timeAxisWidget;
        this._private__timeScale.visibleBarsChanged().subscribe(this._private__onVisibleBarsChanged.bind(this));
        this._private__timeScale.logicalRangeChanged().subscribe(this._private__onVisibleLogicalRangeChanged.bind(this));
        this._private__timeAxisWidget._internal_sizeChanged().subscribe(this._private__onSizeChanged.bind(this));
    }
    destroy() {
        this._private__timeScale.visibleBarsChanged().unsubscribeAll(this);
        this._private__timeScale.logicalRangeChanged().unsubscribeAll(this);
        this._private__timeAxisWidget._internal_sizeChanged().unsubscribeAll(this);
        this._private__timeRangeChanged._internal_destroy();
        this._private__logicalRangeChanged._internal_destroy();
        this._private__sizeChanged._internal_destroy();
    }
    scrollPosition() {
        return this._private__timeScale.rightOffset();
    }
    scrollToPosition(position, animated) {
        if (!animated) {
            this._private__model.setRightOffset(position);
            return;
        }
        this._private__timeScale.scrollToOffsetAnimated(position, 1000 /* AnimationDurationMs */);
    }
    scrollToRealTime() {
        this._private__timeScale.scrollToRealTime();
    }
    getVisibleRange() {
        var _a, _b;
        const timeRange = this._private__timeScale.visibleTimeRange();
        if (timeRange === null) {
            return null;
        }
        return {
            from: (_a = timeRange.from.businessDay) !== null && _a !== void 0 ? _a : timeRange.from.timestamp,
            to: (_b = timeRange.to.businessDay) !== null && _b !== void 0 ? _b : timeRange.to.timestamp,
        };
    }
    setVisibleRange(range) {
        const convertedRange = {
            from: convertTime(range.from),
            to: convertTime(range.to),
        };
        const logicalRange = this._private__timeScale.logicalRangeForTimeRange(convertedRange);
        this._private__model.setTargetLogicalRange(logicalRange);
    }
    getVisibleLogicalRange() {
        const logicalRange = this._private__timeScale.visibleLogicalRange();
        if (logicalRange === null) {
            return null;
        }
        return {
            from: logicalRange.left(),
            to: logicalRange.right(),
        };
    }
    setVisibleLogicalRange(range) {
        assert(range.from <= range.to, 'The from index cannot be after the to index.');
        this._private__model.setTargetLogicalRange(range);
    }
    resetTimeScale() {
        this._private__model.resetTimeScale();
    }
    fitContent() {
        this._private__model.fitContent();
    }
    logicalToCoordinate(logical) {
        const timeScale = this._private__model.timeScale();
        if (timeScale.isEmpty()) {
            return null;
        }
        else {
            return timeScale.indexToCoordinate(logical);
        }
    }
    coordinateToLogical(x) {
        if (this._private__timeScale.isEmpty()) {
            return null;
        }
        else {
            return this._private__timeScale.coordinateToIndex(x);
        }
    }
    timeToCoordinate(time) {
        const timePoint = convertTime(time);
        const timePointIndex = this._private__timeScale.timeToIndex(timePoint, false);
        if (timePointIndex === null) {
            return null;
        }
        return this._private__timeScale.indexToCoordinate(timePointIndex);
    }
    coordinateToTime(x) {
        var _a;
        const timeScale = this._private__model.timeScale();
        const timePointIndex = timeScale.coordinateToIndex(x);
        const timePoint = timeScale.indexToTime(timePointIndex);
        if (timePoint === null) {
            return null;
        }
        return (_a = timePoint.businessDay) !== null && _a !== void 0 ? _a : timePoint.timestamp;
    }
    width() {
        return this._private__timeAxisWidget._internal_getSize()._internal_w;
    }
    height() {
        return this._private__timeAxisWidget._internal_getSize()._internal_h;
    }
    subscribeVisibleTimeRangeChange(handler) {
        this._private__timeRangeChanged.subscribe(handler);
    }
    unsubscribeVisibleTimeRangeChange(handler) {
        this._private__timeRangeChanged.unsubscribe(handler);
    }
    subscribeVisibleLogicalRangeChange(handler) {
        this._private__logicalRangeChanged.subscribe(handler);
    }
    unsubscribeVisibleLogicalRangeChange(handler) {
        this._private__logicalRangeChanged.unsubscribe(handler);
    }
    subscribeSizeChange(handler) {
        this._private__sizeChanged.subscribe(handler);
    }
    unsubscribeSizeChange(handler) {
        this._private__sizeChanged.unsubscribe(handler);
    }
    applyOptions(options) {
        this._private__timeScale.applyOptions(options);
    }
    options() {
        return clone(this._private__timeScale.options());
    }
    _private__onVisibleBarsChanged() {
        if (this._private__timeRangeChanged._internal_hasListeners()) {
            this._private__timeRangeChanged._internal_fire(this.getVisibleRange());
        }
    }
    _private__onVisibleLogicalRangeChanged() {
        if (this._private__logicalRangeChanged._internal_hasListeners()) {
            this._private__logicalRangeChanged._internal_fire(this.getVisibleLogicalRange());
        }
    }
    _private__onSizeChanged(size) {
        this._private__sizeChanged._internal_fire(size._internal_w, size._internal_h);
    }
}

function patchPriceFormat(priceFormat) {
    if (priceFormat === undefined || priceFormat.type === 'custom') {
        return;
    }
    const priceFormatBuiltIn = priceFormat;
    if (priceFormatBuiltIn.minMove !== undefined && priceFormatBuiltIn.precision === undefined) {
        priceFormatBuiltIn.precision = precisionByMinMove(priceFormatBuiltIn.minMove);
    }
}
function migrateHandleScaleScrollOptions(options) {
    if (isBoolean(options.handleScale)) {
        const handleScale = options.handleScale;
        options.handleScale = {
            axisDoubleClickReset: handleScale,
            axisPressedMouseMove: {
                time: handleScale,
                price: handleScale,
            },
            mouseWheel: handleScale,
            pinch: handleScale,
        };
    }
    else if (options.handleScale !== undefined && isBoolean(options.handleScale.axisPressedMouseMove)) {
        const axisPressedMouseMove = options.handleScale.axisPressedMouseMove;
        options.handleScale.axisPressedMouseMove = {
            time: axisPressedMouseMove,
            price: axisPressedMouseMove,
        };
    }
    const handleScroll = options.handleScroll;
    if (isBoolean(handleScroll)) {
        options.handleScroll = {
            horzTouchDrag: handleScroll,
            vertTouchDrag: handleScroll,
            mouseWheel: handleScroll,
            pressedMouseMove: handleScroll,
        };
    }
}
function toInternalOptions(options) {
    migrateHandleScaleScrollOptions(options);
    return options;
}
class ChartApi {
    constructor(container, options) {
        this._private__dataLayer = new DataLayer();
        this._private__seriesMap = new Map();
        this._private__seriesMapReversed = new Map();
        this._private__clickedDelegate = new Delegate();
        this._private__crosshairMovedDelegate = new Delegate();
        const internalOptions = (options === undefined) ?
            clone(chartOptionsDefaults) :
            merge(clone(chartOptionsDefaults), toInternalOptions(options));
        this._private__chartWidget = new ChartWidget(container, internalOptions);
        this._private__chartWidget._internal_clicked().subscribe((paramSupplier) => {
            if (this._private__clickedDelegate._internal_hasListeners()) {
                this._private__clickedDelegate._internal_fire(this._private__convertMouseParams(paramSupplier()));
            }
        }, this);
        this._private__chartWidget._internal_crosshairMoved().subscribe((paramSupplier) => {
            if (this._private__crosshairMovedDelegate._internal_hasListeners()) {
                this._private__crosshairMovedDelegate._internal_fire(this._private__convertMouseParams(paramSupplier()));
            }
        }, this);
        const model = this._private__chartWidget._internal_model();
        this._private__timeScaleApi = new TimeScaleApi(model, this._private__chartWidget._internal_timeAxisWidget());
    }
    remove() {
        this._private__chartWidget._internal_clicked().unsubscribeAll(this);
        this._private__chartWidget._internal_crosshairMoved().unsubscribeAll(this);
        this._private__timeScaleApi.destroy();
        this._private__chartWidget.destroy();
        this._private__seriesMap.clear();
        this._private__seriesMapReversed.clear();
        this._private__clickedDelegate._internal_destroy();
        this._private__crosshairMovedDelegate._internal_destroy();
        this._private__dataLayer._internal_destroy();
    }
    resize(width, height, forceRepaint) {
        this._private__chartWidget._internal_resize(width, height, forceRepaint);
    }
    addAreaSeries(options = {}) {
        patchPriceFormat(options.priceFormat);
        const strictOptions = merge(clone(seriesOptionsDefaults), areaStyleDefaults, options);
        const series = this._private__chartWidget._internal_model().createSeries('Area', strictOptions);
        const res = new SeriesApi(series, this, this);
        this._private__seriesMap.set(res, series);
        this._private__seriesMapReversed.set(series, res);
        return res;
    }
    addBaselineSeries(options = {}) {
        patchPriceFormat(options.priceFormat);
        // to avoid assigning fields to defaults we have to clone them
        const strictOptions = merge(clone(seriesOptionsDefaults), clone(baselineStyleDefaults), options);
        const series = this._private__chartWidget._internal_model().createSeries('Baseline', strictOptions);
        const res = new SeriesApi(series, this, this);
        this._private__seriesMap.set(res, series);
        this._private__seriesMapReversed.set(series, res);
        return res;
    }
    addBarSeries(options = {}) {
        patchPriceFormat(options.priceFormat);
        const strictOptions = merge(clone(seriesOptionsDefaults), barStyleDefaults, options);
        const series = this._private__chartWidget._internal_model().createSeries('Bar', strictOptions);
        const res = new SeriesApi(series, this, this);
        this._private__seriesMap.set(res, series);
        this._private__seriesMapReversed.set(series, res);
        return res;
    }
    addCandlestickSeries(options = {}) {
        fillUpDownCandlesticksColors(options);
        patchPriceFormat(options.priceFormat);
        const strictOptions = merge(clone(seriesOptionsDefaults), candlestickStyleDefaults, options);
        const series = this._private__chartWidget._internal_model().createSeries('Candlestick', strictOptions);
        const res = new CandlestickSeriesApi(series, this, this);
        this._private__seriesMap.set(res, series);
        this._private__seriesMapReversed.set(series, res);
        return res;
    }
    addHistogramSeries(options = {}) {
        patchPriceFormat(options.priceFormat);
        const strictOptions = merge(clone(seriesOptionsDefaults), histogramStyleDefaults, options);
        const series = this._private__chartWidget._internal_model().createSeries('Histogram', strictOptions);
        const res = new SeriesApi(series, this, this);
        this._private__seriesMap.set(res, series);
        this._private__seriesMapReversed.set(series, res);
        return res;
    }
    addLineSeries(options = {}) {
        patchPriceFormat(options.priceFormat);
        const strictOptions = merge(clone(seriesOptionsDefaults), lineStyleDefaults, options);
        const series = this._private__chartWidget._internal_model().createSeries('Line', strictOptions);
        const res = new SeriesApi(series, this, this);
        this._private__seriesMap.set(res, series);
        this._private__seriesMapReversed.set(series, res);
        return res;
    }
    removeSeries(seriesApi) {
        const series = ensureDefined(this._private__seriesMap.get(seriesApi));
        const update = this._private__dataLayer._internal_removeSeries(series);
        const model = this._private__chartWidget._internal_model();
        model.removeSeries(series);
        this._private__sendUpdateToChart(update);
        this._private__seriesMap.delete(seriesApi);
        this._private__seriesMapReversed.delete(series);
    }
    _internal_applyNewData(series, data) {
        this._private__sendUpdateToChart(this._private__dataLayer._internal_setSeriesData(series, data));
    }
    _internal_updateData(series, data) {
        this._private__sendUpdateToChart(this._private__dataLayer._internal_updateSeriesData(series, data));
    }
    subscribeClick(handler) {
        this._private__clickedDelegate.subscribe(handler);
    }
    unsubscribeClick(handler) {
        this._private__clickedDelegate.unsubscribe(handler);
    }
    subscribeCrosshairMove(handler) {
        this._private__crosshairMovedDelegate.subscribe(handler);
    }
    unsubscribeCrosshairMove(handler) {
        this._private__crosshairMovedDelegate.unsubscribe(handler);
    }
    priceScale(priceScaleId) {
        return new PriceScaleApi(this._private__chartWidget, priceScaleId);
    }
    timeScale() {
        return this._private__timeScaleApi;
    }
    applyOptions(options) {
        this._private__chartWidget._internal_applyOptions(toInternalOptions(options));
    }
    options() {
        return this._private__chartWidget._internal_options();
    }
    takeScreenshot() {
        return this._private__chartWidget._internal_takeScreenshot();
    }
    _private__sendUpdateToChart(update) {
        const model = this._private__chartWidget._internal_model();
        model.updateTimeScale(update._internal_timeScale._internal_baseIndex, update._internal_timeScale._internal_points, update._internal_timeScale._internal_firstChangedPointIndex);
        update._internal_series.forEach((value, series) => series.setData(value._internal_data, value._internal_info));
        model.recalculateAllPanes();
    }
    _private__mapSeriesToApi(series) {
        return ensureDefined(this._private__seriesMapReversed.get(series));
    }
    _private__convertMouseParams(param) {
        const seriesData = new Map();
        param._internal_seriesData.forEach((plotRow, series) => {
            const data = getSeriesDataCreator(series.seriesType())(plotRow);
            assert(isFulfilledData(data));
            seriesData.set(this._private__mapSeriesToApi(series), data);
        });
        const hoveredSeries = param._internal_hoveredSeries === undefined ? undefined : this._private__mapSeriesToApi(param._internal_hoveredSeries);
        return {
            time: param._internal_time,
            logical: param._internal_index,
            point: param._internal_point,
            hoveredSeries,
            hoveredMarkerId: param._internal_hoveredObject,
            seriesData,
        };
    }
}

/**
 * This function is the main entry point of the Lightweight Charting Library.
 *
 * @param container - ID of HTML element or element itself
 * @param options - Any subset of options to be applied at start.
 * @returns An interface to the created chart
 */
function createChart(container, options) {
    let htmlElement;
    if (isString(container)) {
        const element = document.getElementById(container);
        assert(element !== null, `Cannot find element in DOM with id=${container}`);
        htmlElement = element;
    }
    else {
        htmlElement = container;
    }
    return new ChartApi(htmlElement, options);
}

class DrawingPane {
    constructor() {
        this._private_children = [];
    }
    init(series, model) {
        this.series = series;
        this.model = model;
        for (const child of this._private_children) {
            child.init(series, model);
        }
    }
    addChild(child) {
        child.init(this.series, this.model);
        this._private_children.push(child);
    }
    removeChild(child) {
        const index = this._private_children.indexOf(child);
        if (index < 0) {
            return false;
        }
        this._private_children.splice(index, 1);
        return true;
    }
    render(ctx) {
        for (const child of this._private_children) {
            child.render(ctx);
        }
        this.draw(ctx);
    }
    refresh() {
        this.model.fullUpdate();
    }
    timeScale() {
        return this.model.timeScale();
    }
    x(x) {
        return this.timeToCoordinate(x);
    }
    y(y) {
        return this.priceToCoordinate(y);
    }
    priceScale() {
        return this.series.priceScale();
    }
    timeToIndex(timestamp) {
        //@ts-ignore
        return this.timeScale().timeToIndex({ timestamp }, true);
    }
    indexToCoordinate(index) {
        return this.timeScale().indexToCoordinate(index);
    }
    timeToCoordinate(timestamp) {
        return this.indexToCoordinate(this.timeToIndex(timestamp));
    }
    priceToCoordinate(price) {
        return this.priceScale().priceToCoordinate(price, this.priceScale().firstValue());
    }
}

/// <reference types="_build-time-constants" />
/**
 * Returns the current version as a string. For example `'3.3.0'`.
 */
function version() {
    return "4.0.0-dev+202206071405";
}

export { ColorType, CrosshairMode, DrawingPane, LastPriceAnimationMode, LineStyle, LineType, MismatchDirection, PriceLineSource, PriceScaleMode, TickMarkType, TrackingModeExitMode, createChart, isBusinessDay, isUTCTimestamp, version };
