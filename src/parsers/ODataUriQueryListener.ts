// Generated from src/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { QueryOptionsContext } from "./ODataUriQueryParser";
import { QueryOptionsListContext } from "./ODataUriQueryParser";
import { QueryOptionContext } from "./ODataUriQueryParser";
import { FilterOptionContext } from "./ODataUriQueryParser";
import { ExpressionContext } from "./ODataUriQueryParser";
import { OrExpressionContext } from "./ODataUriQueryParser";
import { AndExpressionContext } from "./ODataUriQueryParser";
import { CompExpressionContext } from "./ODataUriQueryParser";
import { BasicExpressionContext } from "./ODataUriQueryParser";
import { ParenExpressionContext } from "./ODataUriQueryParser";
import { CompOperatorContext } from "./ODataUriQueryParser";
import { IdentifierContext } from "./ODataUriQueryParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ODataUriQueryParser`.
 */
export interface ODataUriQueryListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.queryOptions`.
	 * @param ctx the parse tree
	 */
	enterQueryOptions?: (ctx: QueryOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.queryOptions`.
	 * @param ctx the parse tree
	 */
	exitQueryOptions?: (ctx: QueryOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.queryOptionsList`.
	 * @param ctx the parse tree
	 */
	enterQueryOptionsList?: (ctx: QueryOptionsListContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.queryOptionsList`.
	 * @param ctx the parse tree
	 */
	exitQueryOptionsList?: (ctx: QueryOptionsListContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.queryOption`.
	 * @param ctx the parse tree
	 */
	enterQueryOption?: (ctx: QueryOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.queryOption`.
	 * @param ctx the parse tree
	 */
	exitQueryOption?: (ctx: QueryOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.filterOption`.
	 * @param ctx the parse tree
	 */
	enterFilterOption?: (ctx: FilterOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.filterOption`.
	 * @param ctx the parse tree
	 */
	exitFilterOption?: (ctx: FilterOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.orExpression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.orExpression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.compExpression`.
	 * @param ctx the parse tree
	 */
	enterCompExpression?: (ctx: CompExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.compExpression`.
	 * @param ctx the parse tree
	 */
	exitCompExpression?: (ctx: CompExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.basicExpression`.
	 * @param ctx the parse tree
	 */
	enterBasicExpression?: (ctx: BasicExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.basicExpression`.
	 * @param ctx the parse tree
	 */
	exitBasicExpression?: (ctx: BasicExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.parenExpression`.
	 * @param ctx the parse tree
	 */
	enterParenExpression?: (ctx: ParenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.parenExpression`.
	 * @param ctx the parse tree
	 */
	exitParenExpression?: (ctx: ParenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.compOperator`.
	 * @param ctx the parse tree
	 */
	enterCompOperator?: (ctx: CompOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.compOperator`.
	 * @param ctx the parse tree
	 */
	exitCompOperator?: (ctx: CompOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriQueryParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriQueryParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

