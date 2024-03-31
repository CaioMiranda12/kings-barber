import { FormatCurrency } from '../../utils/format-currency';
import { Container } from './styles';

type TitleProps = {
  title: string;
  subtitle: string;
  price: number;
};

export function Card({ title, subtitle, price }: TitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{subtitle}</span>

      <h3>{FormatCurrency(price)}</h3>
    </Container>
  );
}
