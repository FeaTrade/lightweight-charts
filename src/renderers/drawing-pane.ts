import { ChartModel } from "../model/chart-model";
import { Series } from "../model/series";
import { TimePointIndex } from "../model/time-data";

export abstract class DrawingPane {
	//@ts-ignore
	protected series: Series;
	//@ts-ignore
	protected model: ChartModel;

	private children: DrawingPane[] = [];

	public init(series: Series, model: ChartModel) {
		this.series = series;
		this.model = model;
		for(const child of this.children) {
			child.init(series, model);
		}
	}

	public addChild(child: DrawingPane) {
		child.init(this.series, this.model);
		this.children.push(child);
	}

	public removeChild(child: DrawingPane) {
		const index = this.children.indexOf(child);
		if(index < 0) {
			return false;
		}
		this.children.splice(index, 1);
		return true;
	}
	
	public render(ctx: CanvasRenderingContext2D) {
		for(const child of this.children) {
			child.render(ctx);
		}
		this.draw(ctx);
	}

	public refresh() {
		this.model.fullUpdate();
	}
	
	protected abstract draw(ctx: CanvasRenderingContext2D): void;

	protected timeScale() {
		return this.model.timeScale();
	}

	protected x(x: number) {
		return this.timeToCoordinate(x);
	}

	protected y(y: number) {
        return this.priceToCoordinate(y);
	}

	protected priceScale() {
		return this.series.priceScale();
	}

	protected timeToIndex(timestamp: number) {
		//@ts-ignore
		return this.timeScale().timeToIndex({ timestamp }, true);
	}

	protected indexToCoordinate(index: TimePointIndex) {
		return this.timeScale().indexToCoordinate(index);
	}

	protected timeToCoordinate(timestamp: number) {
		return this.indexToCoordinate(this.timeToIndex(timestamp)!);
	}

	protected priceToCoordinate(price: number) {
		return this.priceScale().priceToCoordinate(price, this.priceScale().firstValue()!);
	}
}