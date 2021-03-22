// Generated from src/parsers/ODataUriPath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PathContext } from "./ODataUriPathParser";
import { SegmentListContext } from "./ODataUriPathParser";
import { SegmentContext } from "./ODataUriPathParser";
import { IdentifierContext } from "./ODataUriPathParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ODataUriPathParser`.
 */
export interface ODataUriPathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ODataUriPathParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriPathParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriPathParser.segmentList`.
	 * @param ctx the parse tree
	 */
	enterSegmentList?: (ctx: SegmentListContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriPathParser.segmentList`.
	 * @param ctx the parse tree
	 */
	exitSegmentList?: (ctx: SegmentListContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriPathParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriPathParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `ODataUriPathParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ODataUriPathParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

