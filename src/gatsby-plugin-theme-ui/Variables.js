export class Variables {
	constructor()
	{
		this.vars = new Map();
	}

	add(
		name,
		value)
	{
		const varName = `--${name}`;
		const varCall = `var(${varName})`;

		this.vars.set(varName, value);

		return varCall;
	}

	object()
	{
		return Object.fromEntries(this.vars);
	}
}
