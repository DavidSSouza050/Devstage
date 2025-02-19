'use client'
// Informando para o nextJs que está pagina irá utiliza Javascript, pois ele apenas traduz o JS para html e envia para o navegador, sem essa informação, a pagina não ativa a interação com o usuário
// é necessário tomar cuidado com essa informação, pois ele envia todo o JS escrito na pagina, ou seja, ele não traduz para o html, e envia diretamente toda a pagina para o navegador como JS com isso deixa a aplicação mais lenta, o ideal é sempre criar uma componente que terá a interação com o usuário

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
