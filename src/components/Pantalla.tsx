import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../themes/GlobalStyles';

interface Props extends TextProps {
  tamanyo: 'p1' | 'p2'
};

export const Pantalla = ({children, tamanyo, ...rest}:Props) => {
  return (
    <Text {...rest} style = {[
      tamanyo === 'p1' ? GlobalStyles.pantallaPrincipal :null,
      tamanyo === 'p2' ? GlobalStyles.pantalla2 :null,
      ]

    }
    numberOfLines = {1}
    adjustsFontSizeToFit>
      {children}
    </Text>
  )
}
