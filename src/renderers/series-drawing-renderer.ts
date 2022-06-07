import { makeFont } from '../helpers/make-font';

import { HoveredObject } from '../model/chart-model';
import { Coordinate } from '../model/coordinate';
import { TextWidthCache } from '../model/text-width-cache';

import { ScaledRenderer } from './scaled-renderer';

export class SeriesDrawingRenderer extends ScaledRenderer {
	private _textWidthCache: TextWidthCache = new TextWidthCache();
	private _fontSize: number = -1;
	private _fontFamily: string = '';
	private _font: string = '';

	public renderFunction?: (ctx: CanvasRenderingContext2D) => void;

	public setParams(fontSize: number, fontFamily: string): void {
		if (this._fontSize !== fontSize || this._fontFamily !== fontFamily) {
			this._fontSize = fontSize;
			this._fontFamily = fontFamily;
			this._font = makeFont(fontSize, fontFamily);
			this._textWidthCache.reset();
		}
	}

	public hitTest(x: Coordinate, y: Coordinate): HoveredObject | null {
		return null;
	}

	protected _drawImpl(ctx: CanvasRenderingContext2D, isHovered: boolean, hitTestData?: unknown): void {
		ctx.textBaseline = 'middle';
		ctx.font = this._font;
		this.renderFunction && this.renderFunction(ctx);
	}
}