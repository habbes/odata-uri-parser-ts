// Generated from src/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { ODataUriQueryListener } from "./ODataUriQueryListener";
import { ODataUriQueryVisitor } from "./ODataUriQueryVisitor";


export class ODataUriQueryParser extends Parser {
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
	public static readonly RULE_queryOptions = 0;
	public static readonly RULE_queryOptionsList = 1;
	public static readonly RULE_queryOption = 2;
	public static readonly RULE_filterOption = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_orExpression = 5;
	public static readonly RULE_andExpression = 6;
	public static readonly RULE_compExpression = 7;
	public static readonly RULE_basicExpression = 8;
	public static readonly RULE_parenExpression = 9;
	public static readonly RULE_compOperator = 10;
	public static readonly RULE_identifier = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"queryOptions", "queryOptionsList", "queryOption", "filterOption", "expression", 
		"orExpression", "andExpression", "compExpression", "basicExpression", 
		"parenExpression", "compOperator", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$filter'", "'or'", "'and'", "'eq'", "'neq'", "'gt'", "'gte'", 
		"'lt'", "'lte'", "'&'", "'='", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FILTER", "OR", "AND", "EQ", "NEQ", "GT", "GTE", "LT", "LTE", 
		"AMP", "ASSIGN", "LPAREN", "RPAREN", "ID", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ODataUriQueryParser._LITERAL_NAMES, ODataUriQueryParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ODataUriQueryParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ODataUriQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return ODataUriQueryParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ODataUriQueryParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ODataUriQueryParser._ATN, this);
	}
	// @RuleVersion(0)
	public queryOptions(): QueryOptionsContext {
		let _localctx: QueryOptionsContext = new QueryOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ODataUriQueryParser.RULE_queryOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.queryOption();
			this.state = 25;
			this.queryOptionsList();
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
	public queryOptionsList(): QueryOptionsListContext {
		let _localctx: QueryOptionsListContext = new QueryOptionsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ODataUriQueryParser.RULE_queryOptionsList);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.AMP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 27;
				this.match(ODataUriQueryParser.AMP);
				this.state = 28;
				this.queryOptionsList();
				}
				break;
			case ODataUriQueryParser.EOF:
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
	public queryOption(): QueryOptionContext {
		let _localctx: QueryOptionContext = new QueryOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ODataUriQueryParser.RULE_queryOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.filterOption();
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
	public filterOption(): FilterOptionContext {
		let _localctx: FilterOptionContext = new FilterOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ODataUriQueryParser.RULE_filterOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(ODataUriQueryParser.FILTER);
			this.state = 35;
			this.match(ODataUriQueryParser.ASSIGN);
			this.state = 36;
			this.expression();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ODataUriQueryParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.orExpression(0);
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

	public orExpression(): OrExpressionContext;
	public orExpression(_p: number): OrExpressionContext;
	// @RuleVersion(0)
	public orExpression(_p?: number): OrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: OrExpressionContext = new OrExpressionContext(this._ctx, _parentState);
		let _prevctx: OrExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, ODataUriQueryParser.RULE_orExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 41;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 48;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new OrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ODataUriQueryParser.RULE_orExpression);
					this.state = 43;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 44;
					this.match(ODataUriQueryParser.OR);
					this.state = 45;
					this.andExpression(0);
					}
					}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, ODataUriQueryParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 52;
			this.compExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 59;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ODataUriQueryParser.RULE_andExpression);
					this.state = 54;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 55;
					this.match(ODataUriQueryParser.AND);
					this.state = 56;
					this.compExpression(0);
					}
					}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public compExpression(): CompExpressionContext;
	public compExpression(_p: number): CompExpressionContext;
	// @RuleVersion(0)
	public compExpression(_p?: number): CompExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CompExpressionContext = new CompExpressionContext(this._ctx, _parentState);
		let _prevctx: CompExpressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, ODataUriQueryParser.RULE_compExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 63;
			this.basicExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 71;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CompExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ODataUriQueryParser.RULE_compExpression);
					this.state = 65;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 66;
					this.compOperator();
					this.state = 67;
					this.basicExpression();
					}
					}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicExpression(): BasicExpressionContext {
		let _localctx: BasicExpressionContext = new BasicExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ODataUriQueryParser.RULE_basicExpression);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ODataUriQueryParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 74;
				this.match(ODataUriQueryParser.NUMBER);
				}
				break;
			case ODataUriQueryParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.identifier();
				}
				break;
			case ODataUriQueryParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 76;
				this.parenExpression();
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
	public parenExpression(): ParenExpressionContext {
		let _localctx: ParenExpressionContext = new ParenExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ODataUriQueryParser.RULE_parenExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(ODataUriQueryParser.LPAREN);
			this.state = 80;
			this.expression();
			this.state = 81;
			this.match(ODataUriQueryParser.RPAREN);
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
	public compOperator(): CompOperatorContext {
		let _localctx: CompOperatorContext = new CompOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ODataUriQueryParser.RULE_compOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ODataUriQueryParser.EQ) | (1 << ODataUriQueryParser.NEQ) | (1 << ODataUriQueryParser.GT) | (1 << ODataUriQueryParser.GTE) | (1 << ODataUriQueryParser.LT) | (1 << ODataUriQueryParser.LTE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		this.enterRule(_localctx, 22, ODataUriQueryParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(ODataUriQueryParser.ID);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.orExpression_sempred(_localctx as OrExpressionContext, predIndex);

		case 6:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 7:
			return this.compExpression_sempred(_localctx as CompExpressionContext, predIndex);
		}
		return true;
	}
	private orExpression_sempred(_localctx: OrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private compExpression_sempred(_localctx: CompExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12Z\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03!\n\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x071\n\x07\f\x07\x0E\x074\v\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b<\n\b\f\b\x0E\b?\v\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x07\tH\n\t\f\t\x0E\tK\v\t\x03\n\x03\n\x03\n" +
		"\x05\nP\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02" +
		"\x02\x05\f\x0E\x10\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x03\x03\x02\x06\v\x02S\x02" +
		"\x1A\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b$\x03" +
		"\x02\x02\x02\n(\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E5\x03\x02\x02\x02" +
		"\x10@\x03\x02\x02\x02\x12O\x03\x02\x02\x02\x14Q\x03\x02\x02\x02\x16U\x03" +
		"\x02\x02\x02\x18W\x03\x02\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x05" +
		"\x04\x03\x02\x1C\x03\x03\x02\x02\x02\x1D\x1E\x07\f\x02\x02\x1E!\x05\x04" +
		"\x03\x02\x1F!\x03\x02\x02\x02 \x1D\x03\x02\x02\x02 \x1F\x03\x02\x02\x02" +
		"!\x05\x03\x02\x02\x02\"#\x05\b\x05\x02#\x07\x03\x02\x02\x02$%\x07\x03" +
		"\x02\x02%&\x07\r\x02\x02&\'\x05\n\x06\x02\'\t\x03\x02\x02\x02()\x05\f" +
		"\x07\x02)\v\x03\x02\x02\x02*+\b\x07\x01\x02+,\x05\x0E\b\x02,2\x03\x02" +
		"\x02\x02-.\f\x03\x02\x02./\x07\x04\x02\x02/1\x05\x0E\b\x020-\x03\x02\x02" +
		"\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x023\r\x03\x02" +
		"\x02\x0242\x03\x02\x02\x0256\b\b\x01\x0267\x05\x10\t\x027=\x03\x02\x02" +
		"\x0289\f\x03\x02\x029:\x07\x05\x02\x02:<\x05\x10\t\x02;8\x03\x02\x02\x02" +
		"<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>\x0F\x03\x02\x02" +
		"\x02?=\x03\x02\x02\x02@A\b\t\x01\x02AB\x05\x12\n\x02BI\x03\x02\x02\x02" +
		"CD\f\x03\x02\x02DE\x05\x16\f\x02EF\x05\x12\n\x02FH\x03\x02\x02\x02GC\x03" +
		"\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02J\x11" +
		"\x03\x02\x02\x02KI\x03\x02\x02\x02LP\x07\x11\x02\x02MP\x05\x18\r\x02N" +
		"P\x05\x14\v\x02OL\x03\x02\x02\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02" +
		"P\x13\x03\x02\x02\x02QR\x07\x0E\x02\x02RS\x05\n\x06\x02ST\x07\x0F\x02" +
		"\x02T\x15\x03\x02\x02\x02UV\t\x02\x02\x02V\x17\x03\x02\x02\x02WX\x07\x10" +
		"\x02\x02X\x19\x03\x02\x02\x02\x07 2=IO";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ODataUriQueryParser.__ATN) {
			ODataUriQueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ODataUriQueryParser._serializedATN));
		}

		return ODataUriQueryParser.__ATN;
	}

}

export class QueryOptionsContext extends ParserRuleContext {
	public queryOption(): QueryOptionContext {
		return this.getRuleContext(0, QueryOptionContext);
	}
	public queryOptionsList(): QueryOptionsListContext {
		return this.getRuleContext(0, QueryOptionsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_queryOptions; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterQueryOptions) {
			listener.enterQueryOptions(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitQueryOptions) {
			listener.exitQueryOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitQueryOptions) {
			return visitor.visitQueryOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOptionsListContext extends ParserRuleContext {
	public AMP(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.AMP, 0); }
	public queryOptionsList(): QueryOptionsListContext | undefined {
		return this.tryGetRuleContext(0, QueryOptionsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_queryOptionsList; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterQueryOptionsList) {
			listener.enterQueryOptionsList(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitQueryOptionsList) {
			listener.exitQueryOptionsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitQueryOptionsList) {
			return visitor.visitQueryOptionsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOptionContext extends ParserRuleContext {
	public filterOption(): FilterOptionContext {
		return this.getRuleContext(0, FilterOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_queryOption; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterQueryOption) {
			listener.enterQueryOption(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitQueryOption) {
			listener.exitQueryOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitQueryOption) {
			return visitor.visitQueryOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterOptionContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(ODataUriQueryParser.FILTER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ODataUriQueryParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_filterOption; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterFilterOption) {
			listener.enterFilterOption(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitFilterOption) {
			listener.exitFilterOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitFilterOption) {
			return visitor.visitFilterOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public orExpression(): OrExpressionContext {
		return this.getRuleContext(0, OrExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_expression; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public orExpression(): OrExpressionContext | undefined {
		return this.tryGetRuleContext(0, OrExpressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_orExpression; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public compExpression(): CompExpressionContext {
		return this.getRuleContext(0, CompExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompExpressionContext extends ParserRuleContext {
	public basicExpression(): BasicExpressionContext {
		return this.getRuleContext(0, BasicExpressionContext);
	}
	public compExpression(): CompExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompExpressionContext);
	}
	public compOperator(): CompOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_compExpression; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterCompExpression) {
			listener.enterCompExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitCompExpression) {
			listener.exitCompExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCompExpression) {
			return visitor.visitCompExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicExpressionContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.NUMBER, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public parenExpression(): ParenExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_basicExpression; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterBasicExpression) {
			listener.enterBasicExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitBasicExpression) {
			listener.exitBasicExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitBasicExpression) {
			return visitor.visitBasicExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ODataUriQueryParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ODataUriQueryParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_parenExpression; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterParenExpression) {
			listener.enterParenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitParenExpression) {
			listener.exitParenExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitParenExpression) {
			return visitor.visitParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.NEQ, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.GTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.LTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ODataUriQueryParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_compOperator; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterCompOperator) {
			listener.enterCompOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitCompOperator) {
			listener.exitCompOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitCompOperator) {
			return visitor.visitCompOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ODataUriQueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ODataUriQueryParser.RULE_identifier; }
	// @Override
	public enterRule(listener: ODataUriQueryListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ODataUriQueryListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ODataUriQueryVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


