export class Moeda {

	constructor(
		private _sigla?: string,
		private _descricao?: string) {}

	public get sigla(): string {
		return this._sigla;
	}

	public get descricao(): string {
		return this._descricao;
	}

}