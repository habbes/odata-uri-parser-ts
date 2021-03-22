// Generated from src/parsers/ODataUriPath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ODataUriPathListener } from "./ODataUriPathListener";
import { ODataUriPathVisitor } from "./ODataUriPathVisitor";


export class ODataUriPathParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly ID = 2;
	public static readonly NUMBER = 3;
	public static readonly RULE_path = 0;
	public static readonly RULE_segmentList = 1;
	public static readonly RULE_segment = 2;
	public static readonly RULE_identifier = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"path", "segmentList", "segment", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "ID", "NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ODataUriPathParser._LITERAL_NAMES, ODataUriPathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ODataUriPathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ODataUriPath.g4"; }

	// @Override
	public get ruleNames(): string[] { return ODataUriPathParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ODataUriPathParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ODataUriPathParser._ATN, this);
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ODataUriPathParser.RULE_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.match(ODataUriPathParser.T__0);
			this.state = 9;
			this.segment();
			this.state = 10;
			this.segmentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segmentList(): SegmentListContext {
		let _localctx: SegmentListContext = new SegmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ODataUriPathParser.RULE_segmentList);
		try {
			this.state = 17;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriPathParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 12;
				this.match(ODataUriPathParser.T__0);
				this.state = 13;
				this.segment();
				this.state = 14;
				this.segmentList();
				}
				break;
			case ODataUriPathParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ODataUriPathParser.RULE_segment);
		try {
			this.state = 21;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriPathParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 19;
				this.identifier();
				}
				break;
			case ODataUriPathParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 20;
				this.match(ODataUriPathParser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ODataUriPathParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.match(ODataUriPathParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\x1C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x14\n\x03\x03" +
		"\x04\x03\x04\x05\x04\x18\n\x04\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06" +
		"\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x02\x19\x02\n\x03\x02\x02\x02\x04" +
		"\x13\x03\x02\x02\x02\x06\x17\x03\x02\x02\x02\b\x19\x03\x02\x02\x02\n\v" +
		"\x07\x03\x02\x02\v\f\x05\x06\x04\x02\f\r\x05\x04\x03\x02\r\x03\x03\x02" +
		"\x02\x02\x0E\x0F\x07\x03\x02\x02\x0F\x10\x05\x06\x04\x02\x10\x11\x05\x04" +
		"\x03\x02\x11\x14\x03\x02\x02\x02\x12\x14\x03\x02\x02\x02\x13\x0E\x03\x02" +
		"\x02\x02\x13\x12\x03\x02\x02\x02\x14\x05\x03\x02\x02\x02\x15\x18\x05\b" +
		"\x05\x02\x16\x18\x07\x05\x02\x02\x17\x15\x03\x02\x02\x02\x17\x16\x03\x02" +
		"\x02\x02\x18\x07\x03\x02\x02\x02\x19\x1A\x07\x04\x02\x02\x1A\t\x03\x02" +
		"\x02\x02\x04\x13\x17";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriPathParser.__ATN) {
			ODataUriPathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriPathParser._serializedATN));
		}

		return ODataUriPathParser.__ATN;
	}

}

export class PathContext extends ParserRuleContext {
	public segment(): SegmentContext {
		return this.getRuleContext(0, SegmentContext);
	}
	public segmentList(): SegmentListContext {
		return this.getRuleContext(0, SegmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriPathParser.RULE_path; }
	// @Override
	public enterRule(listener: ODataUriPathListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriPathListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriPathVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentListContext extends ParserRuleContext {
	public segment(): SegmentContext | undefined {
		return this.tryGetRuleContext(0, SegmentContext);
	}
	public segmentList(): SegmentListContext | undefined {
		return this.tryGetRuleContext(0, SegmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriPathParser.RULE_segmentList; }
	// @Override
	public enterRule(listener: ODataUriPathListener): void {
		if (listener.enterSegmentList) {
			listener.enterSegmentList(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriPathListener): void {
		if (listener.exitSegmentList) {
			listener.exitSegmentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriPathVisitor<Result>): Result {
		if (visitor.visitSegmentList) {
			return visitor.visitSegmentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ODataUriPathParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriPathParser.RULE_segment; }
	// @Override
	public enterRule(listener: ODataUriPathListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriPathListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriPathVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ODataUriPathParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriPathParser.RULE_identifier; }
	// @Override
	public enterRule(listener: ODataUriPathListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriPathListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriPathVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


