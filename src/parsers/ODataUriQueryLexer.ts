// Generated from src/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class ODataUriQueryLexer extends Lexer {
	public static readonly FILTER = 1;
	public static readonly OR = 2;
	public static readonly AND = 3;
	public static readonly EQ = 4;
	public static readonly NEQ = 5;
	public static readonly GT = 6;
	public static readonly GTE = 7;
	public static readonly LT = 8;
	public static readonly LTE = 9;
	public static readonly AMP = 10;
	public static readonly ASSIGN = 11;
	public static readonly LPAREN = 12;
	public static readonly RPAREN = 13;
	public static readonly ID = 14;
	public static readonly NUMBER = 15;
	public static readonly WS = 16;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"FILTER", "OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "AMP", "ASSIGN", 
		"LPAREN", "RPAREN", "ID", "NUMBER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$filter'", "'or'", "'and'", "'eq'", "'neq'", "'gt'", "'gte'", 
		"'lt'", "'lte'", "'&'", "'='", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FILTER", "OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", 
		"AMP", "ASSIGN", "LPAREN", "RPAREN", "ID", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ODataUriQueryLexer._LITERAL_NAMES, ODataUriQueryLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ODataUriQueryLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ODataUriQueryLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ODataUriQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return ODataUriQueryLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ODataUriQueryLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ODataUriQueryLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ODataUriQueryLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12]\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0F\x06\x0FQ\n\x0F\r\x0F\x0E\x0FR\x03\x10\x06\x10" +
		"V\n\x10\r\x10\x0E\x10W\x03\x11\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11!\x02\x12\x03\x02\x05\x04\x02C\\c|\x03\x022;\x03\x02" +
		"\"\"\x02^\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02\x02\x02\x05+\x03\x02\x02\x02" +
		"\x07.\x03\x02\x02\x02\t2\x03\x02\x02\x02\v5\x03\x02\x02\x02\r9\x03\x02" +
		"\x02\x02\x0F<\x03\x02\x02\x02\x11@\x03\x02\x02\x02\x13C\x03\x02\x02\x02" +
		"\x15G\x03\x02\x02\x02\x17I\x03\x02\x02\x02\x19K\x03\x02\x02\x02\x1BM\x03" +
		"\x02\x02\x02\x1DP\x03\x02\x02\x02\x1FU\x03\x02\x02\x02!Y\x03\x02\x02\x02" +
		"#$\x07&\x02\x02$%\x07h\x02\x02%&\x07k\x02\x02&\'\x07n\x02\x02\'(\x07v" +
		"\x02\x02()\x07g\x02\x02)*\x07t\x02\x02*\x04\x03\x02\x02\x02+,\x07q\x02" +
		"\x02,-\x07t\x02\x02-\x06\x03\x02\x02\x02./\x07c\x02\x02/0\x07p\x02\x02" +
		"01\x07f\x02\x021\b\x03\x02\x02\x0223\x07g\x02\x0234\x07s\x02\x024\n\x03" +
		"\x02\x02\x0256\x07p\x02\x0267\x07g\x02\x0278\x07s\x02\x028\f\x03\x02\x02" +
		"\x029:\x07i\x02\x02:;\x07v\x02\x02;\x0E\x03\x02\x02\x02<=\x07i\x02\x02" +
		"=>\x07v\x02\x02>?\x07g\x02\x02?\x10\x03\x02\x02\x02@A\x07n\x02\x02AB\x07" +
		"v\x02\x02B\x12\x03\x02\x02\x02CD\x07n\x02\x02DE\x07v\x02\x02EF\x07g\x02" +
		"\x02F\x14\x03\x02\x02\x02GH\x07(\x02\x02H\x16\x03\x02\x02\x02IJ\x07?\x02" +
		"\x02J\x18\x03\x02\x02\x02KL\x07*\x02\x02L\x1A\x03\x02\x02\x02MN\x07+\x02" +
		"\x02N\x1C\x03\x02\x02\x02OQ\t\x02\x02\x02PO\x03\x02\x02\x02QR\x03\x02" +
		"\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x1E\x03\x02\x02\x02TV\t" +
		"\x03\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03" +
		"\x02\x02\x02X \x03\x02\x02\x02YZ\t\x04\x02\x02Z[\x03\x02\x02\x02[\\\b" +
		"\x11\x02\x02\\\"\x03\x02\x02\x02\x05\x02RW\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriQueryLexer.__ATN) {
			ODataUriQueryLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriQueryLexer._serializedATN));
		}

		return ODataUriQueryLexer.__ATN;
	}

}

