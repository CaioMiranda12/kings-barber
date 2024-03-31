import { useCallback, useState } from 'react';

import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import { Container } from './styles';

export function ScheduleDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Agendar</Button>}
    >
      <Container>
        <Title title="Agendamento" subtitle="Faça o seu agendamento aqui" />

        <form>
          <div>
            <Input label="Nome" placeholder="Nome..." />
            {/* <Input label="Categoria" placeholder="Escolha a..." /> */}
            <select>
              <option value="cabelo">Cabelo</option>
              <option value="barba">Barba</option>
              <option value="cabelo+barba">Cabelo + Barba</option>
            </select>
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancelar
            </Button>
            <Button onClick={onSubmit} type="button">
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
