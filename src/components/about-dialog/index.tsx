import { useState } from 'react';

import { Button } from '../button';
import { Dialog } from '../dialog';
import { Container } from './styles';

export function AboutDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nos conheça</Button>}
    >
      <Container>
        <h2>Quem Somos</h2>
        <span>
          Desde sua fundação em 2010, a Kings Barber tem sido a referência
          máxima em serviços de barbearia de alta qualidade, combinando a
          tradição artesanal com a modernidade. Com uma visão clara de oferecer
          mais do que apenas um corte de cabelo ou barba, a Kings Barber se
          estabeleceu como um espaço onde os homens podem não apenas aprimorar
          sua aparência, mas também se reconectar com uma tradição perdida de
          cuidado pessoal e comunidade.
        </span>

        <span>
          Com raízes profundas na tradição dos barbeiros clássicos, a Kings
          Barber surgiu do sonho de seu fundador, Steve Johnson, um mestre
          barbeiro com décadas de experiência. Inspirado pela rica história das
          barbearias vintage, Steve visualizou um espaço que combinasse o charme
          nostálgico do passado com o luxo e a comodidade dos tempos modernos.
        </span>

        <span>
          Desde então, a Kings Barber tem se destacado não apenas pela
          excelência técnica, mas também pelo ambiente acolhedor e camaradagem
          que oferece aos seus clientes. Cada barbeiro da equipe é
          cuidadosamente selecionado e treinado para garantir que os padrões de
          qualidade e atendimento ao cliente sejam mantidos consistentemente em
          cada visita.
        </span>

        <span>
          Ao longo dos anos, a Kings Barber se tornou mais do que apenas uma
          barbearia; tornou-se uma comunidade, um refúgio para homens que buscam
          mais do que um simples corte de cabelo. Com sua abordagem única de
          tradição e inovação, a Kings Barber continua a ser a escolha número um
          para aqueles que valorizam a arte do cuidado pessoal masculino.
          Junte-se a nós e experimente o legado da Kings Barber - onde a
          tradição encontra a modernidade em cada corte.
        </span>
      </Container>
    </Dialog>
  );
}
