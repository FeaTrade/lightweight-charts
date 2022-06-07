import { ChartModel } from '../../model/chart-model';
import { Series } from '../../model/series';
import { IPaneRenderer } from '../../renderers/ipane-renderer';
import { SeriesDrawingRenderer } from '../../renderers/series-drawing-renderer';
import { DrawingPane } from '../../renderers/drawing-pane';

import { IUpdatablePaneView, UpdateType } from './iupdatable-pane-view';

// eslint-disable-next-line max-params
export class SeriesDrawingPaneView implements IUpdatablePaneView {
	private readonly _series: Series;
	private readonly _model: ChartModel;

	private _renderer: SeriesDrawingRenderer = new SeriesDrawingRenderer();

	public constructor(series: Series, model: ChartModel) {
		this._series = series;
		this._model = model;
	}

	public update(updateType?: UpdateType): void {

	}

	public renderer(height: number, width: number, addAnchors?: boolean): IPaneRenderer | null {
		if (!this._series.visible()) {
			return null;
		}

		const layout = this._model.options().layout;
		this._renderer.setParams(layout.fontSize, layout.fontFamily);

		return this._renderer;
	}

	public setDrawingPane(drawingPane: DrawingPane) {
		drawingPane.init(this._series, this._model);
		this._renderer.renderFunction = ctx => drawingPane.render(ctx);
	}
}
