import { ODataUriQueryLexer } from './parsers/ODataUriQueryLexer';
import { AndExpressionContext, BasicExpressionContext, CompExpressionContext, CompOperatorContext, ExpressionContext, FilterOptionContext, IdentifierContext, ODataUriQueryParser, OrExpressionContext, ParenExpressionContext, QueryOptionContext, QueryOptionsContext, QueryOptionsListContext} from './parsers/ODataUriQueryParser';
import { ODataUriQueryVisitor } from './parsers/ODataUriQueryVisitor';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { CodeCompletionCore } from 'antlr4-c3';
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree';
import { model } from 'odata-ts';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', () => process.exit());

function loop() {
    rl.question('query: ', (query) => {
        if (query === '$exit') {
            rl.close();
            return;
        }
        const suggestions = getCompletion(query, query.length - 1);
        suggestions.forEach(s => console.log(s));
        loop();
    });
}


// const uri = "/People?$filter=age gt 3";
// const [path, query] = uri.split('?');



export function getCompletion(query: string, index: number) {
    // const pathLexer = new ODataUriPathLexer(CharStreams.fromString(path));
    console.log('Q', query);
    const inputStream = CharStreams.fromString(query);
    const queryLexer = new ODataUriQueryLexer(inputStream);
    const tokens = new CommonTokenStream(queryLexer);
    const queryParser = new ODataUriQueryParser(tokens);
    const tree = queryParser.queryOptions();
    const completion = new CodeCompletionCore(queryParser);
    const candidates = completion.collectCandidates(index);

    const suggestions: string[] = [];

    candidates.tokens.forEach((_, k) => {
        const name = queryParser.vocabulary.getDisplayName(k);
        console.log('candidate', k, name);
        suggestions.push(name);
    });

    const visitor = new ToStringVisitor();
    const s = visitor.visit(tree);

    console.log('Parsed:', s);

    return suggestions;
}

export class ToStringVisitor extends AbstractParseTreeVisitor<string> implements ODataUriQueryVisitor<string> {
    protected defaultResult(): string {
        return '';
    }

    visitQueryOptions(ctx: QueryOptionsContext) {
        const children = ctx.children.map(ch => this.visit(ch)).join('');
        return children;
    }

    visitFilterOption(ctx: FilterOptionContext) {
        let s = "$filter=";
        const expression = ctx.expression();
        if (expression) {
            s += this.visit(expression);
        }
        return s;
    }

    visitOrExpression(ctx: OrExpressionContext) {
        return this.visitBinaryExpression(ctx);
    }
    
    visitAndExpression(ctx: AndExpressionContext) {
        return this.visitBinaryExpression(ctx);
    }

    visitCompExpression(ctx: CompExpressionContext) {
        return this.visitBinaryExpression(ctx)
    }

    visitTerminal(node: TerminalNode) {
        return node.symbol?.text || '';
    }
    

    private visitBinaryExpression(ctx: ParserRuleContext): string {
        const children = ctx.children.map(ch => this.visit(ch));
        if (children?.length > 1) {
            const [left, op, right, ..._] = children;
            const expr = `(${left} ${op} ${right})`;
            return expr;
        }
        else if (children?.length == 1) {
            return children[0];
        }

        return '';
    }
}

// const tree = queryParser.filterOption();
const suggestions = getCompletion("$filter=name eq 2 or age gte 15", 6);
console.log('suggestions', suggestions);

loop();
