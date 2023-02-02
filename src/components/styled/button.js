import styled from "styled-components";

const generateBgColor = (bgColor, alpha = 1) => {
    if (bgColor === 'primary') {
      return `rgba(0,144,255,${Number(alpha)})`
    }
    else if (bgColor === 'secondary') {
      return `rgba(255,255,255,${Number(alpha)})`
    }
    else if (bgColor === 'tertiary') {
      return `rgba(13,13,13,${Number(alpha)})`
    }
    else if (bgColor === 'canceled') {
      return `rgba(238,27,36,${Number(alpha)})`
    } else if (bgColor === 'pending') {
      return `rgba(255,195,18,${Number(alpha)})`
    }else if (bgColor === 'delivered') {
        return `rgba(0,154,52,${Number(alpha)})`
      }
  }
const ButtonStyle = styled.button`
    outline:none;
    border:none;
    background-color: transparent;
`
// new text style
export const TextButton = styled(ButtonStyle)`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props => props.weight? props.weight : "400"};
    color: ${props =>  ((props.textPrimary && 'var(--primaryColor)') || (props.textSecondary && 'var(--secondaryColor)') || (props.textTertiary && 'var(--tertiaryColor)')|| (props.textCanceled && 'var(--canceled)') || (props.textPending && 'var(--pending)') || (props.textDelivered && 'var(--delivered)'))};
    line-height: ${props => props.lineHeight? props.lineHeight : "12px"};
    margin:${props => props.margin? props.margin : "0px"};
    display:${props => ((props.flex && 'flex') || (props.block && 'block') || (props.inlineBlock && 'inline-block'))};
    flex-direction:${props => ((props.row && 'row') || (props.column && 'column') || (props.rowReverse && 'row-reverse') || (props.columnReverse && 'column-reverse'))};
    justify-content:${props => ((props.justifyCenter && 'center') || (props.justifyEnd && 'flex-end') || (props.justifyStart && 'flex-start'))};
    align-items:${props => ((props.itemsCenter && 'center') || (props.ItemsEnd && 'flex-end') || (props.ItemsStart && 'flex-start'))};
    gap:${props => props.gap ? props.gap : ""};
    border:none;
    outline:none;
    background:transparent;
    padding:${props => props.padding ? props.padding : ""};
    width:${props =>  ((props.width && '100%') || (props.width))};
    @media(min-width:768px){
        cursor:pointer;
    }
`;
export const PBTN = styled(ButtonStyle)`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    background:${props =>  ((props.primary && 'var(--primaryColor)') || (props.secondary && 'var(--secondaryColor)') || (props.tertiary && 'var(--tertiaryColor)'))};
    color:${props =>  ((props.textPrimary && 'var(--primaryColor)') || (props.textSecondary && 'var(--secondaryColor)') || (props.textTertiary && 'var(--tertiaryColor)') || (props.textCustom))};
    padding:${props => props.padding? props.padding : "0px"};
    width:${props => props.width? props.width : ""};
    display:${props => ((props.block && 'block') || (props.inlineBlock && 'inline-block'))};
    height:${props => props.height? props.height : "32px"};
    border-radius:${props => props.radius? props.radius : "3px"};

    @media(min-width:768px){
        height:${props => props.height? props.height : "36px"};
        cursor:pointer;
    }
`;

export const StatusButton = styled(ButtonStyle)`
    font-size:${props => ((props.xs && 'var(--xs)') || (props.sm && 'var(--sm)') || (props.md && 'var(--md)') || (props.lg && 'var(--lg)') || (props.xl && 'var(--xl)'))};
    font-weight:${props =>  ((props.regular && 'var(--regular)') || (props.medium && 'var(--medium)') || (props.semibold && 'var(--semibold)') || (props.bold && 'var(--bold)'))};
    background:${props => generateBgColor(props.bgColor, props.alpha)};
    color:${props =>  ((props.textPrimary && 'var(--primaryColor)') || (props.textSecondary && 'var(--secondaryColor)') || (props.textTertiary && 'var(--tertiaryColor)') || (props.textCustom))};
    padding:${props => props.padding? props.padding : "0px"};
    width:${props => props.width? props.width : ""};
    display:${props => ((props.block && 'block') || (props.inlineBlock && 'inline-block'))};
    height:21px;
    border-radius:${props => props.radius? props.radius : "2px"};

    @media(min-width:768px){
        cursor:pointer;
    }
`;