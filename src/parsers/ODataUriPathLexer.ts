// Generated from src/parsers/ODataUriPath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ODataUriPathLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly ID = 2;
	public static readonly NUMBER = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "ID", "NUMBER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "ID", "NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ODataUriPathLexer._LITERAL_NAMES, ODataUriPathLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ODataUriPathLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ODataUriPathLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ODataUriPath.g4"; }

	// @Override
	public get ruleNames(): string[] { return ODataUriPathLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ODataUriPathLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ODataUriPathLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ODataUriPathLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x15\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x03\x06" +
		"\x03\r\n\x03\r\x03\x0E\x03\x0E\x03\x04\x06\x04\x12\n\x04\r\x04\x0E\x04" +
		"\x13\x02\x02\x02\x05\x03\x02\x03\x05\x02\x04\x07\x02\x05\x03\x02\x04\x04" +
		"\x02C\\c|\x03\x022;\x02\x16\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x03\t\x03\x02\x02\x02\x05\f\x03\x02\x02\x02" +
		"\x07\x11\x03\x02\x02\x02\t\n\x071\x02\x02\n\x04\x03\x02\x02\x02\v\r\t" +
		"\x02\x02\x02\f\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\f\x03\x02\x02" +
		"\x02\x0E\x0F\x03\x02\x02\x02\x0F\x06\x03\x02\x02\x02\x10\x12\t\x03\x02" +
		"\x02\x11\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02" +
		"\x02\x13\x14\x03\x02\x02\x02\x14\b\x03\x02\x02\x02\x05\x02\x0E\x13\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriPathLexer.__ATN) {
			ODataUriPathLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriPathLexer._serializedATN));
		}

		return ODataUriPathLexer.__ATN;
	}

}

