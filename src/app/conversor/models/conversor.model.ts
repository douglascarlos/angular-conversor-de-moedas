export class Conversor {

	constructor(
		private _moedaDe?: string,
		private _moedaPara?: string,
		private _valor?: number) {}

	public get moedaDe(): string {
		return this._moedaDe;
	}

	public get moedaPara(): string {
		return this._moedaPara;
	}

	public get valor(): number {
		return this._valor;
	}

}