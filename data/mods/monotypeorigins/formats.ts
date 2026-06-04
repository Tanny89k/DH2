import { FormatData } from '../../../sim/dex-formats';

export const Formats: FormatData[] = [
	{
		name: "[Gen 9] Monotype: Origins", // Currently only the free form format is implemented
		mod: 'monotypeorigins',
		desc: `A micrometa featuring a single monotype mon for each type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/page-8#post-10202864">Monotype: Origins on Smogon Forums</a>`,
		],
		ruleset: ['Standard'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['MO'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Placeholder Mod.'];
				}
			}
		},
	}
];