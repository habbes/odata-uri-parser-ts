// Generated from src/parsers/ODataUriPath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PathContext } from "./ODataUriPathParser";
import { SegmentListContext } from "./ODataUriPathParser";
import { SegmentContext } from "./ODataUriPathParser";
import { IdentifierContext } from "./ODataUriPathParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ODataUriPathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ODataUriPathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ODataUriPathParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriPathParser.segmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegmentList?: (ctx: SegmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriPathParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ODataUriPathParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

