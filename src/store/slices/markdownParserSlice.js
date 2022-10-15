import { createSlice } from '@reduxjs/toolkit';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', js);

const syntaxStyle = atomDark;
const highlightLang = 'javascript';

const initialState = {
    code: '# Welcome to my Markdown Previewer :)\n\n## Please use the editor to write and edit Markdown code\n\n## Link Example\n[links](https://www.freecodecamp.org)\n\n## Inline Code Example\n`<div>Hello World</div>`\n\n## Code Block Example\n```\nfunction square(n) {\n  return (n*n)\n}\n```\n\n## List Example\n\n- Item1\n- Item2\n- Item3\n\n## Block Quote Example\n\n> Block Quote\n\n## Image Example\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n## Bold Text Example\n\n**bold** TEXT',
    codeOutput: (
        <ReactMarkdown
            children={`# Welcome to my Markdown Previewer :)\n\n## Please use the editor to write and edit Markdown code\n\n## Link Example\n[links](https://www.freecodecamp.org)\n\n## Inline Code Example\n\`<div>Hello World</div>\`\n\n## Code Block Example\n\`\`\`\nfunction square(n) {\n  return (n*n)\n}\n\`\`\`\n\n## List Example\n\n- Item1\n- Item2\n- Item3\n\n## Block Quote Example\n\n\>Block Quote\n\n## Image Example\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n## Bold Text Example\n\n**bold** TEXT`}
            components={{
                code: ({ children }) => (
                    <SyntaxHighlighter
                        language={highlightLang}
                        style={syntaxStyle}
                    >
                        {children}
                    </SyntaxHighlighter>
                ),
            }}
        />
    ),
};

const markdownSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers: {
        updateCode(state, action) {
            state.code = action.payload;
            state.codeOutput = (
                <ReactMarkdown
                    children={state.code}
                    components={{
                        code: ({ children }) => (
                            <SyntaxHighlighter
                                language={highlightLang}
                                style={syntaxStyle}
                            >
                                {children}
                            </SyntaxHighlighter>
                        ),
                    }}
                />
            );
        },
    },
});

export const { updateCode } = markdownSlice.actions;

export default markdownSlice.reducer;
