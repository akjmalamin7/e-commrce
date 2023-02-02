import styled from "styled-components";

// new text style
export const Text = styled.span`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    color: ${props =>  ((props.textPrimary && 'var(--primaryColor)') || (props.textSecondary && 'var(--secondaryColor)') || (props.textTertiary && 'var(--tertiaryColor)')|| (props.textCustom))};
    line-height: ${props => props.lineHeight? props.lineHeight : "12px"};
    margin:${props => props.margin? props.margin : "0px"};
    alignMent:${props => props.alignMent};



`;
const Content = styled.p`
    margin: 0;
    padding: 0;
`;
export const H3 = styled(Content)`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    color:var(--tertiaryColor);
    text-align: ${props => props.alignMent};
    margin:${props => props.margin};
   
`;
export const H4 = styled(Content)`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    color:var(--tertiaryColor);
    text-align: ${props => props.alignMent};
    margin:${props => props.margin};
   
`;
export const P = styled(Content)`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    color: ${props =>  ((props.textPrimary && 'var(--primaryColor)') || (props.textSecondary && 'var(--secondaryColor)') || (props.textTertiary && 'var(--tertiaryColor)')|| (props.textCustom))};
    text-align: ${props => props.alignMent};
    margin:${props => props.margin};
    line-height: ${props => ((props.xsl && 'var(--xsL)') || (props.sml && 'var(--smL)') || (props.mdL && 'var(--mdL)') || (props.lgl && 'var(--lgL)') || (props.xll && 'var(--xlL)'))};
   
`;
export const Label = styled.label`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    color:var(--tertiaryColor);
    margin-bottom:8px;
    display:block;
`;
