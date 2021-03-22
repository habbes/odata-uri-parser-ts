// Generated from src/parsers/ODataUriQuery.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ODataUriQueryParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ODataUriQueryVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.queryOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOptions?: (ctx: QueryOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.queryOptionsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOptionsList?: (ctx: QueryOptionsListContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.queryOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOption?: (ctx: QueryOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.filterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterOption?: (ctx: FilterOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.orExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.compExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpression?: (ctx: CompExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.basicExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicExpression?: (ctx: BasicExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.parenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpression?: (ctx: ParenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.compOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompOperator?: (ctx: CompOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriQueryParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

