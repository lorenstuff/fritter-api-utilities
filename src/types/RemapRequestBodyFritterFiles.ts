//
// Imports
//

import { FritterFile } from "@lorenstuff/fritter/build/classes/FritterFile.js";

//
// Types
//

export type RemapRequestBodyFritterFiles<T> =
{
	[K in keyof T]: T[K] extends FritterFile ? File : T[K];
};